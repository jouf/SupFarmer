//var socket = io.connect('http://10.10.19.103');
var socket = io.connect('http://127.0.0.1');
//var socket = io.connect('http://192.168.1.44');
var myClientId = null;
var players = new Array();


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
        setTimeout(function(){socket.emit('newGame', {playerName:"Maurel"})},1000);
    };
    
    
    player2.onClick = function(e) { 
		stage.removeChild(selectTxt);
        stage.removeChild(shape);
        stage.removeChild(player1);
        stage.removeChild(player2);
        preloader.addToStage();
        setTimeout(function(){socket.emit('newGame', {playerName:"Justin"})},1000);
	};
}); 
 
 
socket.on('newGame', function(data){
	players.push(myClientId)
	socket.emit('adduser', prompt("What's your name?"));
    canvas.onmousemove = mouseCheck;
    canvas.onmousedown = pressHandler;
	
	createjs.Ticker.addEventListener("tick", tick);
	
    window[myClientId+"Name"] = new createjs.Text(data.player.name, "20px Arial", "#ff7700");
    window[myClientId] = new Player ( TileType.DRAW, gfx.player ("pics/farmer.png","stay"));
    
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
    
    createjs.Ticker.addListener ( window[myClientId], true );
    myMap = new Map ();
    
    JSONMapLoader.load ( myMap, data.stringMap.layers[0].data, data.stringMap.layers[0].data1, tiles );
    
    stage.addChild ( myMap );
    myMap.addTile ( window[myClientId], data.player.x, data.player.y, 31 );
    myMap.player = window[myClientId];
	
    stage.addChild(window[myClientId+"Name"]);
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
	
	if(myClientId !== clientid) {
		players.push(clientid);
		
		window[clientid+"Name"] = new createjs.Text( data.clientid, "20px Arial", "#ff7700");
		window[clientid+"Name"].y = 30;
		
		window[clientid] = new Player(TileType.DRAW, gfx.player ("pics/farmer.png","stay"));
		
		myMap.addTile ( window[clientid], 10, 15, 31 );
		stage.addChild( window[clientid+"Name"] );
		
		
		console.log('Player id: ' + clientid + ' has joined the game in room: ');
		console.log('////======> '+ window[clientid]);
	}
});

socket.on('movePlayer', function(data) {
	window["movedPlayer"] = data.name;
	//if(myClientId !== data.name) {
		console.log("------- > "+window[data.name]);
		console.log("------- > Player to move : "+ data.name);
		console.log("------- > Position X : "+ window[data.name].posX + " - Position Y : " + window[data.name].posY);
		//window[data.name] = myMap.getTileAt(data.posx, data.posy, 31);
		myMap.movePlayer ( window[data.name], data.posx, data.posy, data.name );
		
		//window[data.name].posX = data.posx;
		//window[data.name].posY = data.posy;
		//myMap.update();
	//}
});

socket.on('playerDisconnected', function(data) {
	for(var i = 0; i < players.length; i++) {
		console.log(players[i]);
		if(players[i] === data.clientid) {
			players.splice(i, 1);
		}
    }

    if(myClientId !== data.clientid) {
        myMap.removeTile ( window[data.clientid] );
        stage.removeChild( window[ data.clientid+"Name" ] );
        console.log('Player id: ' + data.clientid + ' has left game from room: ');
    }
});

var waitingList = [];
var decalX = 0;
var decalY = 0;
function tick(){ 
	for(var i = 0; i < players.length; i++) {
		if (players[i] === window["movedPlayer"]){
			if ( decalX !== 0 || decalY !== 0 ){
				console.log("X : "+decalX);
				console.log("Y : "+decalY);
				window[window["movedPlayer"]+"Name"].x = window[players[i]].content.x+5;
				window[window["movedPlayer"]+"Name"].y = window[players[i]].content.y-70;

				//le joueur va vers le haut
				if ( decalX > 0 ){
					window[players[i]].content.x += 4;
					decalX -= 4;
				}
				//le joueur va vers le bas
				else if ( decalX < 0 ){
					window[players[i]].content.x -= 4;
					decalX += 4;
				}

				//Le joueur va a droite
				if ( decalY > 0 ){
					window[players[i]].content.y += 2;
					decalY -= 2;
				}
				//le joueur va a gauche
				else if ( decalY < 0 ){
					window[players[i]].content.y -= 2;
					decalY += 2;
				}
				
				window[players[i]].needUpdate = true;
			}
			else if ( window[players[i]].needUpdate ){
				console.log("MAJ");
			   myMap.updateDepth();
			   window[players[i]].needUpdate = false;
			}
			else if ( window[players[i]].waitingList.length !== 0 ){
				var position = window[players[i]].waitingList.shift();
				var destinationX = position[0];
				var destinationY = position[1];
				
				console.log("Player PosX : "+ window[players[i]].posX);
				console.log("Player DestX : "+destinationX);
				
				
				if ( window[players[i]].posX - destinationX > 0 || window[players[i]].posY - destinationY > 0 ){
					window[players[i]].needUpdate = true;
					console.log(window[players[i]].needUpdate);
				}
				
				var toTile = myMap.getTileAt (destinationX, destinationY, 0 );
				decalX = toTile.content.x - window[players[i]].content.x;
				decalY = toTile.content.y - window[players[i]].content.y;
				
				console.log("decal X : "+decalX);
				console.log("decal Y : "+decalY);
				
				window[players[i]].posX=destinationX;
				window[players[i]].posY=destinationY;
			}
		}
	}
}