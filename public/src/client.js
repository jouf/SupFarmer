//var socket = io.connect('http://10.10.18.35');
//var socket = io.connect('http://192.168.0.19');
var socket = io.connect('http://192.168.1.44');
var myClientId = null;

// on server connected 
socket.on('connect', function () {
if(myClientId !== null) {
    console.log('Another connection to server has been made!');
} else {
        init();
        myClientId = socket.socket.sessionid;
        console.log('Connected to NodeJS with client id: ' + myClientId);
        $('#clientid').html(myClientId);
    }
});
 
socket.on('selectPlayer', function(){
    var selectTxt = new createjs.Text("Qui es-tu ?", "25px Arial", "#ffffff");
    selectTxt.x = 50;
    selectTxt.y = 100;
    stage.addChild(selectTxt);
    
    var shape = new createjs.Shape();
    shape.graphics.beginFill("#000000").drawRect(0,0,1200,300);
    shape.y = 150;
    shape.alpha = 0.5;
    stage.addChild(shape);
    var preloader = new Preloder(stage);
    var player1 = new createjs.Bitmap("pics/chris.jpg");
    player1.y = 225;
    player1.x = 400;
    stage.addChild(player1);
    var player2 = new createjs.Bitmap("pics/justin.jpg");
    player2.y = 225;
    player2.x = 700;
    stage.addChild(player2);
    
    
    player1.onClick = function(e) { 
        stage.removeChild(selectTxt);
        stage.removeChild(shape);
        stage.removeChild(player1);
        stage.removeChild(player2);
        preloader.addToStage();
        setTimeout(function(){socket.emit('newGame', {})},1000);
    };
    
    
    player2.onClick = function(e) { alert("Justin"); };
}); 
 
 
socket.on('newGame', function(data){
    canvas.onmousemove = mouseCheck;
    canvas.onmousedown = pressHandler;
    window[clientid+"Name"] = new createjs.Text(data.player.name, "20px Arial", "#ff7700");
    window[clientid] = new Player ( TileType.DRAW, gfx.player ("pics/farmer.png","stay"));
    
    window["lvlTxt"] = new createjs.Text(data.player.level, "16px Arial", "#ffffff");
    window["lvlTxt"].x = 140;
    window["lvlTxt"].y = 12;
    
    window["ferTxt"] = new createjs.Text(data.player.stock_fertilizer, "16px Arial", "#ffffff");
    window["ferTxt"].x = 580;
    window["ferTxt"].y = 12;
    
    window["buiTxt"] = new createjs.Text(data.player.buildings, "16px Arial", "#ffffff");
    window["buiTxt"].x = 780;
    window["buiTxt"].y = 12;
    
	window["typTxt"] = new createjs.Text(data.player.tiles_player, "16px Arial", "#ffffff");
    window["typTxt"].x = 980;
    window["typTxt"].y = 12;
    
    window["firTxt"] = new createjs.Text(data.player.fight_result, "16px Arial", "#ffffff");
    window["firTxt"].x = 330;
    window["firTxt"].y = 12;
    
    window["dmgTxt"] = new createjs.Text(data.player.damage, "16px Arial", "#ffffff");
    window["dmgTxt"].x = 410;
    window["dmgTxt"].y = 12;
    
    window["hpTxt"] = new createjs.Text(data.player.hp, "16px Arial", "#ffffff");
    window["hpTxt"].x = 220;
    window["hpTxt"].y = 12;
    
    window["sarTxt"] = new createjs.Text(data.player.sales_ressources, "16px Arial", "#ffffff");
    window["sarTxt"].x = 1180;
    window["sarTxt"].y = 12;
    
    var shishi = new createjs.Shape();
    shishi.graphics.beginFill("#000000").drawRect(800, 450, 600, 400);
    shishi.alpha = 0.7;
    
    createjs.Ticker.addListener ( window[clientid], true );
    myMap = new Map ();
    
    JSONMapLoader.load ( myMap, data.stringMap.layers[0].data, data.stringMap.layers[0].data1, tiles );
    
    stage.addChild ( myMap );
    myMap.addTile ( window[clientid], data.player.x, data.player.y, 31 );
    myMap.player = window[clientid];
    stage.addChild(window[clientid+"Name"]);
    stage.enableMouseOver();
	
	loadTopBar();
	loadActionButton();
	
    stage.addChild(window["lvlTxt"]);
    stage.addChild(window["ferTxt"]);
    stage.addChild(window["buiTxt"]);
    stage.addChild(window["typTxt"]);  
    stage.addChild(window["firTxt"]); 
    stage.addChild(window["dmgTxt"]); 
    stage.addChild(window["hpTxt"]); 
    stage.addChild(window["sarTxt"]);
    stage.addChild(shishi);
});

// on connection to server, ask for user's name with an anonymous callback
	socket.on('connect', function(){
		// call the server-side function 'adduser' and send one parameter (value of prompt)
		socket.emit('adduser', prompt("What's your name?"));
	});

	// listener, whenever the server emits 'updatechat', this updates the chat body
	socket.on('updatechat', function (username, data) {
		$('#conversation').append('<b>'+username + ':</b> ' + data + '<br>');
	});

	// listener, whenever the server emits 'updateusers', this updates the username list
	socket.on('updateusers', function(data) {
		$('#users').empty();
		$.each(data, function(key, value) {
			$('#users').append('<div>' + key + '</div>');
		});
	});

	// on load of page
	$(function(){
		// when the client clicks SEND
		$('#datasend').click( function() {
			var message = $('#data').val();
			$('#data').val('');
			// tell server to execute 'sendchat' and send along one parameter
			socket.emit('sendchat', message);
		});

		// when the client hits ENTER on their keyboard
		$('#data').keypress(function(e) {
			if(e.which === 13) {
				$(this).blur();
				$('#datasend').focus().click();
			}
		});
	});

socket.on('playerOnMap', function(data){
    var clientid = data.clientid;
});

socket.on('playerConnected', function(data) {
    var clientid = data.clientid;
    window[clientid+"Name"] = new createjs.Text(clientid, "20px Arial", "#ff7700");
    window[clientid+"Name"].y = 30;
    
    window[clientid] = new Player(TileType.DRAW, gfx.player ("pics/farmer.png","stay"));
    
    myMap.addTile ( window[clientid], 12, 15, 31 );
    stage.addChild( window[clientid+"Name"] );
    console.log('Player id: ' + clientid + ' has joined the game in room: ');
});

socket.on('playerMove', function(data) {
    window[data.name].posX = data.posx;
    window[data.name].posY = data.posy;
});

socket.on('playerDisconnected', function(data) {
    if(myClientId !== data.clientid) {
        myMap.removeTile ( window[data.clientid] );
        stage.removeChild( window[ data.clientid+"Name" ] );
        console.log('Player id: ' + data.clientid + ' has left game from room: ');
    }
});