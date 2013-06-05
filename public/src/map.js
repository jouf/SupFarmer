/**
 * Class Map extends Container
 */
var Map = function (){};
 
var p = Map.prototype = new createjs.Container();
p.tiles = [];
p.tilesWidth = 64;
p.tilesHeight = 32;
p.offsetX = 700;
p.offsetY = 0;
p.player = null;

p.addTile = function ( $tile, $x, $y, $z ){
    $tile.posX = $x;
    $tile.posY = $y;
    $tile.posZ = $z;
    $tile.map = this;

    this.tiles.push ( $tile );
    this.addChild ( $tile.content );
    this.update ();

    $tile.content.onClick = function (){
        if (this.tile.posZ !== 32){
            this.tile.map.movePlayer ( this.tile.posX, this.tile.posY );
            socket.emit('playerMove', { name : myClientId, posx: this.tile.posX, posy: this.tile.posY } );
        }
        if (this.tile.id === 106){
            this.tile.map.movePlayer ( this.tile.posX-1, this.tile.posY );
            this.tile.map.removeTile(this.tile);
        }
        if (this.tile.id === 116){
            this.tile.map.movePlayer ( this.tile.posX-1, this.tile.posY );
            this.tile.map.removeTile(this.tile);
        }
        if (this.tile.id === 126){
            this.tile.map.movePlayer ( this.tile.posX-1, this.tile.posY );
            this.tile.map.removeTile(this.tile);
        }
    };
    
    $tile.content.onMouseOver = function (){
        if (this.tile.id === 107){
            this.tile.map.addTile ( new Tile ( TileType.PNG, gfx.tile("106"), true, 0, -58, 106, false ), this.tile.posX, this.tile.posY, 32 );
            this.tile.map.removeTile(this.tile);
        }
        if (this.tile.id === 117){
            this.tile.map.addTile ( new Tile ( TileType.PNG, gfx.tile("116"), true, 0, -58, 116, false ), this.tile.posX, this.tile.posY, 32 );
            this.tile.map.removeTile(this.tile);
        }
        if (this.tile.id === 127){
            this.tile.map.addTile ( new Tile ( TileType.PNG, gfx.tile("126"), true, 0, -58, 126, false ), this.tile.posX, this.tile.posY, 32 );
            this.tile.map.removeTile(this.tile);
        }
    };
    $tile.content.onMouseOut = function (){
        if (this.tile.id === 106){
            this.tile.map.addTile ( new Tile ( TileType.PNG, gfx.tile("107"), true, 0, -58, 107, false ), this.tile.posX, this.tile.posY, 32 );
            this.tile.map.removeTile(this.tile);
        }
        if (this.tile.id === 116){
            this.tile.map.addTile ( new Tile ( TileType.PNG, gfx.tile("117"), true, 0, -58, 117, false ), this.tile.posX, this.tile.posY, 32 );
            this.tile.map.removeTile(this.tile);
        }
        if (this.tile.id === 126){
            this.tile.map.addTile ( new Tile ( TileType.PNG, gfx.tile("127"), true, 0, -58, 127, false ), this.tile.posX, this.tile.posY, 32 );
            this.tile.map.removeTile(this.tile);
        }
    };   
};

p.removeTile = function ( $tile ){        
    var index = this.tiles.indexOf ( $tile );

    if ( index === -1 ){
            throw new Error ( 'Map.removeTile : la tuile à supprimer ne fait pas partie de la carte !' );
    }

    this.removeChild ( $tile.content );
    this.tiles.splice ( index, 1 );

    $tile.dispose();
};

p.getTileAt = function ( $x, $y, $z ){ 
    var r_tile = null;
    this.tiles.forEach ( function($tile){
        if ( $tile.posX === $x && $tile.posY === $y && $tile.posZ === $z ){
            r_tile = $tile;
        }
    });
    
    return r_tile;
};

p.update = function (){
    this.updatePos();
    this.updateDepth();
};
 
p.updatePos = function (){
    /**
     * Mise à jour des tuiles.
     */
    this.tiles.forEach ( function($tile){
        $tile.content.x = ( $tile.posY - $tile.posX ) * ($tile.map.tilesWidth/2) + ($tile.offsetX + $tile.map.offsetX);
        $tile.content.y = ( $tile.posY + $tile.posX ) * ($tile.map.tilesHeight/2) + ($tile.offsetY + $tile.map.offsetY);              
        $tile.content.tile = $tile;
    });
};
 
p.updateDepth = function (){
    /**
     * Tri des tuiles pour gérer les profondeurs.
     */
    this.sortChildren (function($a,$b){
        $n_a = 5 * ($a.tile.posX + $a.tile.posY) + $a.tile.posZ;
        $n_b = 5 * ($b.tile.posX + $b.tile.posY) + $b.tile.posZ;

        if ( $n_a > $n_b ){
            return 1;
        }
        else if ( $n_a < $n_b ){
            return -1;
        }
        else{return 0;}
    });
};

p.getGraph = function (){
    var graph = [];

    for ( var i = 0, max = this.tiles.length; i < max; i++ ){
        var tile = this.tiles[i];
        if ( graph[tile.posX] === undefined ){
                graph[tile.posX] = [];
        }
        graph[tile.posX][tile.posY] = new Node ( tile.posX, tile.posY, tile.walkable );
    }
    return graph;
};
 
p.movePlayer = function ( $x, $y ){
    if ( this.player === null ){return;}
    var playerX, playerY;
    if ( this.player.waitingList.length === 0 ){
        /**
         * La liste d'attente est vide, on utilise les coordonnées réélles.
         */
        playerX = this.player.posX;
        playerY = this.player.posY;
    }
    else{
        /**
         * La liste d'attente n'est pas vide, on utilise les coordonnées finales.
         */
        playerX = this.player.waitingList[this.player.waitingList.length-1][0];
        playerY = this.player.waitingList[this.player.waitingList.length-1][1];
    }
    var graph = this.getGraph();
    var start = graph[playerX][playerY];
    var end = graph[$x][$y];

    var path = Pathfinder.findPath ( graph, start, end );
    while ( path.length !== 0 ){
        var toTile = path.shift ();
        this.player.smoothMove ( toTile.line, toTile.col );
    }
};

p.dispose = function (){
    while ( this.tiles.length > 0 ){
        this.removeTile ( this.tiles[0] );
    }

    this.tiles = null;
    this.tilesWidth = null;
    this.tilesHeight = null;
    this.offsetX = null;
    this.offsetY = null;
};
