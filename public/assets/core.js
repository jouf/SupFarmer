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

var seedAction = false;
var plantAction = false;
var attackAction = false;
var recolt = false;



function stay (){
    oldPlayerX = window[myClientId].posX;
    oldPlayerY = window[myClientId].posY;
    createjs.Ticker.removeListener ( window[myClientId] );
    myMap.removeTile(window[myClientId]);
    window[myClientId] = new Player ( TileType.DRAW, gfx.player ("pics/farmer.png","stay"));

    myMap.player = window[myClientId];
    myMap.addTile ( window[myClientId], oldPlayerX, oldPlayerY, 31 );
    createjs.Ticker.addListener ( window[myClientId], true );
}

function turnUp (){
    oldPlayerX = window[myClientId].posX;
    oldPlayerY = window[myClientId].posY;
    createjs.Ticker.removeListener ( window[myClientId] );
    myMap.removeTile(window[myClientId]);
    window[myClientId] = new Player ( TileType.DRAW, gfx.player ("pics/farmer.png","walk"));
	myMap.addTile ( window[myClientId], oldPlayerX, oldPlayerY, 31 );
    myMap.player = window[myClientId];
    
    createjs.Ticker.addListener ( window[myClientId], true );
} 


function turnDown (){
    oldPlayerX = window[myClientId].posX;
    oldPlayerY = window[myClientId].posY;
    createjs.Ticker.removeListener ( window[myClientId] );
    myMap.removeTile(window[myClientId]);
    window[myClientId] = new Player ( TileType.DRAW, gfx.player ("pics/farmer.png","back"));
	myMap.addTile ( window[myClientId], oldPlayerX, oldPlayerY, 31 );
    myMap.player = window[myClientId];
    
    createjs.Ticker.addListener ( window[myClientId], true );
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
