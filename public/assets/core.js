var loadTimer;
var update = true;
var tileH = 32;
var tileW = 64;

var playerImg = new Image();
var bmpAnimation;
var oldAnimation;
var curentAnimation;
var oldPlayerX = 0;
var oldPlayerY = 0;

function stay (){
    oldPlayerX = window[clientid].posX;
    oldPlayerY = window[clientid].posY;
    createjs.Ticker.removeListener ( window[clientid] );
    myMap.removeTile(window[clientid]);
    window[clientid] = new Player ( TileType.DRAW, gfx.player ("pics/farmer.png","stay"));

    myMap.player = window[clientid];
    myMap.addTile ( window[clientid], oldPlayerX, oldPlayerY, 31 );
    createjs.Ticker.addListener ( window[clientid], true );
}

function turnUp (){
    oldPlayerX = window[clientid].posX;
    oldPlayerY = window[clientid].posY;
    createjs.Ticker.removeListener ( window[clientid] );
    myMap.removeTile(window[clientid]);
    window[clientid] = new Player ( TileType.DRAW, gfx.player ("pics/farmer.png","walk"));

    myMap.player = window[clientid];
    myMap.addTile ( window[clientid], oldPlayerX, oldPlayerY, 31 );
    createjs.Ticker.addListener ( window[clientid], true );
} 


function turnDown (){
    oldPlayerX = window[clientid].posX;
    oldPlayerY = window[clientid].posY;
    createjs.Ticker.removeListener ( window[clientid] );
    myMap.removeTile(window[clientid]);
    window[clientid] = new Player ( TileType.DRAW, gfx.player ("pics/farmer.png","back"));

    myMap.player = window[clientid];
    myMap.addTile ( window[clientid], oldPlayerX, oldPlayerY, 31 );
    createjs.Ticker.addListener ( window[clientid], true );
}

function init(){
    canvas = document.getElementById('gameview');
    stage = new createjs.Stage(canvas);
    stage.enableMouseOver();
    createjs.Ticker.setFPS(35);
    createjs.Ticker.addListener(stage);
    document.documentElement.style.cursor = 'url("pics/cursor.png"), auto';
}


function mouseCheck(e){
    var x = e.pageX;
    var y = e.pageY;

    var mapX = myMap.offsetX;
    var mapY = myMap.offsetY;

    xmouse = (2*(y-canvas.offsetTop-mapY)-x+canvas.offsetLeft+mapX)/2;
    ymouse = x+xmouse-mapX-32-canvas.offsetLeft;
    ymouse = Math.round(ymouse/32)+1;
    xmouse = Math.round(xmouse/32);

    to_tile = myMap.getTileAt ( xmouse, ymouse-1, 32 );
}

function pressHandler(){}

function tick(){ 
    if(update){
        update = false;
        stage.update(); 
    }
}