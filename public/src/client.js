var socket = io.connect('http://10.10.18.35');
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
    
    var shape = new createjs.Shape();
    shape.graphics.beginFill("#000000").drawRect(0,0,1200,40);
    shape.alpha = 0.5;
    
    var lvlImg = new createjs.Bitmap("pics/sword.png");
    lvlImg.x = 100;
    lvlImg.y = 4;
    
    var lvlTxt = new createjs.Text(data.player.level, "16px Arial", "#ffffff");
    lvlTxt.x = 140;
    lvlTxt.y = 12;
    
    var proImg = new createjs.Bitmap("pics/produit.png");
    proImg.x = 500;
    proImg.y = 4;
    
    var ferTxt = new createjs.Text(""+data.player.stock_fertilizer, "16px Arial", "#ffffff");
    ferTxt.x = 580;
    ferTxt.y = 12;
    
    var buiImg = new createjs.Bitmap("pics/house.png");
    buiImg.x = 700;
    buiImg.y = 4;
    
    var buiTxt = new createjs.Text(""+data.player.buildings, "16px Arial", "#ffffff");
    buiTxt.x = 780;
    buiTxt.y = 12;
    
    var tilImg = new createjs.Bitmap("pics/tile.png");
    tilImg.x = 900;
    tilImg.y = 14;
    
    var typTxt = new createjs.Text(""+data.player.tiles_player, "16px Arial", "#ffffff");
    typTxt.x = 980;
    typTxt.y = 12;
    
    var fig2Img = new createjs.Bitmap("pics/sword2.png");
    fig2Img.x = 280;
    fig2Img.y = 4;
    
    var firTxt = new createjs.Text(""+data.player.fight_result, "16px Arial", "#ffffff");
    firTxt.x = 330;
    firTxt.y = 12;
    
    var sanImg = new createjs.Bitmap("pics/sang.png");
    sanImg.x = 360;
    sanImg.y = 4;
    
    var dmgTxt = new createjs.Text(""+data.player.damage, "16px Arial", "#ffffff");
    dmgTxt.x = 410;
    dmgTxt.y = 12;
    
    var heaImg = new createjs.Bitmap("pics/heart.png");
    heaImg.x = 180;
    heaImg.y = 4;
    
    var hpTxt = new createjs.Text(""+data.player.hp, "16px Arial", "#ffffff");
    hpTxt.x = 220;
    hpTxt.y = 12;
    
    var coiImg = new createjs.Bitmap("pics/coin.png");
    coiImg.x = 1100;
    coiImg.y = 4;
    
    var sarTxt = new createjs.Text(""+data.player.sales_ressources, "16px Arial", "#ffffff");
    sarTxt.x = 1180;
    sarTxt.y = 12;
    
    var shishi = new createjs.Shape();
    shishi.graphics.beginFill("#000000").drawRect(800, 450, 600, 400);
    shishi.alpha = 0.5;
    
    var torImg = new createjs.Bitmap("pics/tournesol-button.png");
    torImg.x = 2;
    torImg.y = 220;
    
    var bleImg = new createjs.Bitmap("pics/ble-button.png");
    bleImg.x = 2;
    bleImg.y = 280;
    
    var maiImg = new createjs.Bitmap("pics/mais-button.png");
    maiImg.x = 2;
    maiImg.y = 340;
    
    var sheshe = new createjs.Shape();
    sheshe.graphics.beginFill("#000000").drawRoundRect(0, 205, 64, 210, 1000);
    sheshe.alpha = 0.3;
    
    createjs.Ticker.addListener ( window[clientid], true );
    myMap = new Map ();
    
    JSONMapLoader.load ( myMap, data.stringMap.layers[0].data, data.stringMap.layers[0].data1, tiles );
    
    stage.addChild ( myMap );
    myMap.addTile ( window[clientid], data.player.x, data.player.y, 31 );
    myMap.player = window[clientid];
    stage.addChild(window[clientid+"Name"]);
    stage.enableMouseOver();
    
    
    stage.addChild(shape);
   
    stage.addChild(lvlTxt);  
    stage.addChild(lvlImg);
    stage.addChild(ferTxt);
    stage.addChild(proImg);
    stage.addChild(buiTxt);
    stage.addChild(buiImg);
    stage.addChild(typTxt);   
    stage.addChild(tilImg); 
    stage.addChild(fig2Img);   
    stage.addChild(firTxt); 
    stage.addChild(sanImg); 
    stage.addChild(dmgTxt); 
    stage.addChild(hpTxt); 
    stage.addChild(heaImg);
    stage.addChild(sarTxt);
    stage.addChild(coiImg);
    
    stage.addChild(shishi);
    
    stage.addChild(torImg);
    stage.addChild(bleImg);
    stage.addChild(maiImg);
    
    stage.addChild(sheshe);
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
    //update = true;
    //window[data.name].smoothMove(data.posx, data.posY);
    window[data.name].posX = data.posx;
    window[data.name].posY = data.posy;
    
    //myMap.update();
});

socket.on('playerDisconnected', function(data) {
    if(myClientId !== data.clientid) {
        myMap.removeTile ( window[data.clientid] );
        stage.removeChild( window[ data.clientid+"Name" ] );
        console.log('Player id: ' + data.clientid + ' has left game from room: ');
    }
});