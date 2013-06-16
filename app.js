var io = require("socket.io")
    , express = require('express')
    , routes = require('routes')
    , http = require('http')
    , cookie  = require('cookie')
    , connect = require('connect')
    , path = require('path');

var app = express();

app.configure(function(){
    app.set('port', process.env.PORT || 9000);
    app.set('views', __dirname + '/views');
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
    app.use(express.static(path.join(__dirname, 'public')));
	app.use(express.cookieParser());
    app.use(express.session({secret: 'secret', key: 'express.sid'}));
});

app.get('/', function (req, res) {
    res.sendfile(__dirname + '/public/index.html');
});


var server = http.createServer(app);
io = io.listen(server);
io.set('log level', 1);
var stringMap;

server.listen(app.get('port'), function(){
    console.log("Express server listening on port " + app.get('port'));
});

var mongoose = require('mongoose');

var layersSchema = new mongoose.Schema({
	data:[String],
	name:String,
	width:Number
});

var layersModel = mongoose.model('layers', layersSchema);

var playerSchema = new mongoose.Schema({
	name:String,
	password:String,
	gold:Number,
	email:String,
	position_x:Number,
	position_y:Number,
	level:Number,
	stock_fertilizer:Number,
	info_ressources_global:Number,
	value_sales_ressources:Number,
	buildings:Number,
	tiles_player:Number,
	fight_result:Number,
	actions:Number,
	damage:Number,
	hp:Number,
	sales_ressources:Number
});

// Création du schéma pour la map Mongo
var mapSchema = new mongoose.Schema({
	height:Number,
	layers:[layersSchema]
});

//creation du model de la map
var playerModel = mongoose.model('playerMod', playerSchema);

var contextSchema = new mongoose.Schema({
	player:[playerSchema],
	map:[mapSchema]
});
var clients = new Array();
var player;
// usernames which are currently connected to the chat
var usernames = {};
var gsocket;
var contextModel = mongoose.model('context', contextSchema, 'player');
console.log('Waiting for connection...');

io.sockets.on('connection', function (socket) {

    // when the client emits 'sendchat', this listens and executes
	socket.on('sendchat', function (data) {
		// we tell the client to execute 'updatechat' with 2 parameters
		io.sockets.emit('updatechat', socket.username, data);
	});
	gsocket = socket;
	// when the client emits 'adduser', this listens and executes
	socket.on('adduser', function(username){
		
		// we store the username in the socket session for this client
		socket.username = username;
		// add the client's username to the global list
		usernames[username] = username;
		// echo to client they've connected
		socket.emit('updatechat', 'SERVER', 'you have connected');
		// echo globally (all clients) that a person has connected
		socket.broadcast.emit('updatechat', 'SERVER', username + ' has connected');
		// update the list of users in chat, client-side
		io.sockets.emit('updateusers', usernames);
		
		
		io.sockets.emit('playerConnected', { clientid: socket.id });
	});
	
    socket.on('playerOnMap', function(data){
        io.sockets.emit('playerOnMap', data);
    });
	
	
	// send data to the newly connected connected client so it can correctly construct the level
    setTimeout(sendInitialData, 1000);
	
    socket.on('newGame', function(data){
		clients.push(socket.id);
		console.log('New client connected: '+ socket.username +' : ' + socket.id + ' total clients connected: ' + clients.length);
	
		mongoose.connect('mongodb://127.0.0.1/html5game', function(err) {
			if (err) { throw err; }
		});
		
		contextModel.find({ 'player.name':data.playerName }, function (err, data) {
			if (err) { throw err; }
			var map;
			var height;
			var name;
			player = {
				x : data[0].player[0].position_x,
				y : data[0].player[0].position_y, 
				name: data[0].player[0].name,
				//name: socket.username,
				level: data[0].player[0].level,
				stock_fertilizer: data[0].player[0].stock_fertilizer,
				info_ressources_global: data[0].player[0].info_ressources_global,
				value_sales_ressources: data[0].player[0].value_sales_ressources,
				buildings: data[0].player[0].buildings,
				tiles_player: data[0].player[0].tiles_player,
				fight_result: data[0].player[0].fight_result,
				damage: data[0].player[0].damage,
				hp: data[0].player[0].hp,
				sales_ressources: data[0].player[0].sales_ressources
			};
			
			for (var i = 0, l = 1; i < l; i++) {
				map = data[0].map[0];
				var layers = new Array();
				var layersMap = new Array();
				for (k = 0, m = map.layers.length; k < m; k++) {
					var data = new Array();
					layers = map.layers[k];
					//console.log (layers);
					height = map.height;
					name = layers.name;

					for (var j = 0; j < layers.data.length; j++){
						//console.log (layers.data[j]);
						var array = JSON.parse( "[" +layers.data[j]+ "]" );
						data[j] = array;
					}
					layersMap[k] = data;
				}
			}
			var layers = {
				data : layersMap[0],
				data1 : layersMap[1],
				name : name
			};
			stringMap = {
				height : height,
				layers : [layers]
			};
			mongoose.connection.close();
		});
        gsocket.emit('newGame', { clients: clients, player: player, stringMap: stringMap} );
    });
	
    socket.on('playerMove', function(data){
		var name = socket.id;
		
		console.log(name);
		
		var posX = data.posx;
		var posY = data.posy;
        io.sockets.emit('movePlayer', { name: name, posx: posX, posy: posY });
    });
	
	//update the player Sales Resources by querying mongodb
	socket.on('updateSalesRessources', function(data){
		mongoose.connect('mongodb://127.0.0.1/html5game', function(err) {
			if (err) { throw err; }
		});
		contextModel.find({ 'player.name': data.playerName }, function (err, data1) {
			if (err) { throw err; }
			var sales_ressource = data1[0].player[0].sales_ressources;
			
			contextModel.update({"player.name" : data.playerName },
			{ $set: { "player.0.sales_ressources" : sales_ressource+1 }}, 
			function (err) {
				if (err){ throw err; }
				console.log('Modif OK !');
			});
			sales_ressource = sales_ressource+1;
			gsocket.emit('updateSalesRessources', { sales_ressource: sales_ressource } );
			mongoose.connection.close();
		});
	});
	
    socket.on('disconnect', function () {
        // send a disconnected client message to notify all connected clients of a player disconnecting from the game
        io.sockets.emit('playerDisconnected', { clientid: socket.id});
        // remove the disconnected client from our clients array
        for(var i = 0; i < clients.length; i++) {
			if(clients[i] === socket.id) {
				clients.splice(i, 1);
			}
        }
		// remove the username from global usernames list
		delete usernames[socket.username];
		// update list of users in chat, client-side
		io.sockets.emit('updateusers', usernames);
		// echo globally that this client has left
		socket.broadcast.emit('updatechat', 'SERVER', socket.username + ' has disconnected');
        console.log('Client disconnected: ' + socket.username +" : "+ socket.id + ' total clients connected: ' + clients.length);
    });
});

function sendInitialData() {
    gsocket.emit('selectPlayer', { } );
}

function createNewGame() {
    gsocket.emit('newGame', { clients: clients, player: player, stringMap: stringMap} );
}