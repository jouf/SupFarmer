/**
 * Class Tile
 */
var tiles = {	
    1: function(){return new Tile ( TileType.PNG, gfx.tile("1"), true, 0, 0, 1, false);},
    2: function(){return new Tile ( TileType.PNG, gfx.tile("2"), false, 0, 0, 2, false );},
    3: function(){return new Tile ( TileType.PNG, gfx.tile("3"), false, 0, 0, 3, false );},
    4: function(){return new Tile ( TileType.PNG, gfx.tile("4"), false, 0, 0, 4, false );},
    5: function(){return new Tile ( TileType.PNG, gfx.tile("5"), false, 0, 0, 5, false );},
    6: function(){return new Tile ( TileType.PNG, gfx.tile("6"), false, 0, 0, 6, false );},
    7: function(){return new Tile ( TileType.PNG, gfx.tile("7"), false, 0, 0, 7, false );},
    8: function(){return new Tile ( TileType.PNG, gfx.tile("8"), false, 0, 0, 8, false );},
    9: function(){return new Tile ( TileType.PNG, gfx.tile("9"), false, 0, 0, 9, false );},
    10: function(){return new Tile ( TileType.PNG, gfx.tile("10"), true, 0, 0, 10, false );},
    11: function(){return new Tile ( TileType.PNG, gfx.tile("11"), true, 0, 0, 11, false );},
    12: function(){return new Tile ( TileType.PNG, gfx.tile("12"), false, 0, 0, 12, false );},
    13: function(){return new Tile ( TileType.PNG, gfx.tile("13"), false, 0, 0, 13, false );},
    20: function(){return new Tile ( TileType.PNG, gfx.tile("20"), false, 0, 0, 20, false );},

    101:  function(){return new Tile ( TileType.PNG, gfx.tile("101"), true, 0, -58, 101, false );},
    102:  function(){return new Tile ( TileType.PNG, gfx.tile("102"), true, 0, -58, 102, false );},
    103:  function(){return new Tile ( TileType.PNG, gfx.tile("103"), true, 0, -58, 103, false );},
    104:  function(){return new Tile ( TileType.PNG, gfx.tile("104"), true, 0, -58, 104, false );},
    105:  function(){return new Tile ( TileType.PNG, gfx.tile("105"), true, 0, -58, 105, false );},
    106:   function(){return new Tile ( TileType.PNG, gfx.tile("106"), true, 0, -58, 106, false );},
    107:   function(){return new Tile ( TileType.PNG, gfx.tile("107"), true, 0, -58, 107, true );},


    111:  function(){return new Tile ( TileType.PNG, gfx.tile("111"), true, 0, -58, 111, false );},
    112:  function(){return new Tile ( TileType.PNG, gfx.tile("112"), true, 0, -58, 112, false );},
    113:  function(){return new Tile ( TileType.PNG, gfx.tile("113"), true, 0, -58, 113, false );},
    114:  function(){return new Tile ( TileType.PNG, gfx.tile("114"), true, 0, -58, 114, false );},
    115:  function(){return new Tile ( TileType.PNG, gfx.tile("115"), true, 0, -58, 115, false );},
    116:  function(){return new Tile ( TileType.PNG, gfx.tile("116"), true, 0, -58, 116, false );},
    117:  function(){return new Tile ( TileType.PNG, gfx.tile("117"), true, 0, -58, 117, true );},

    121:  function(){return new Tile ( TileType.PNG, gfx.tile("121"), true, 0, -58, 121, false );},
    122:  function(){return new Tile ( TileType.PNG, gfx.tile("122"), true, 0, -58, 122, false );},
    123:  function(){return new Tile ( TileType.PNG, gfx.tile("123"), true, 0, -58, 123, false );},
    124:  function(){return new Tile ( TileType.PNG, gfx.tile("124"), true, 0, -58, 124, false );},
    125:  function(){return new Tile ( TileType.PNG, gfx.tile("125"), true, 0, -58, 125, false );},
    126:  function(){return new Tile ( TileType.PNG, gfx.tile("126"), true, 0, -58, 126, false );},
    127:  function(){return new Tile ( TileType.PNG, gfx.tile("127"), true, 0, -58, 127, true );},

    //SILO
    128:  function(){return new Tile ( TileType.PNG, gfx.tile("128"), true, 0, -100, 128, false );},

    //GRANGE
    129:  function(){return new Tile ( TileType.PNG, gfx.tile("129"), true, 0, -100, 129, false );},

    //FRIGO
    130:  function(){return new Tile ( TileType.PNG, gfx.tile("130"), true, 0, -100, 130, false );}
};




var Tile = function ( $type, $content, $walkable, $offsetX, $offsetY, $id, $harvestable ){
    this.construct ( $type, $content, $walkable, $offsetX, $offsetY, $id, $harvestable );
};

var p = Tile.prototype;

/**
 * string TileType
 * Type de tuile. Egal à TileType.PNG où TileType.DRAW.
 */
p.type = TileType.PNG;

/**
 * object content
 * Contenu graphique (shape).
 */
p.content = null;

/**
 * bool walkable
 * Indique si les joueurs peuvent marcher sur la tuile.
 */
p.walkable = true;

/**
 * bool harverestable
 * Indique si les joueurs peut récolter ou non la tuile.
 */
p.harvestable = false;

/**
 * int id
 * Identifiant de la plante sur la feuille de TileSet.
 */
p.id = 0;

/**
 * int offsetX
 * Décalage de l'image en X.
 */
p.offsetX = 0;

/**
 * int offsetY
 * Décalage de l'image en Y.
 */
p.offsetY = 0;

/**
 * Map Map
 * Carte à laquelle la tuile à été ajoutée.
 */
p.map = null;

/**
 * int posX
 * Position de la tuile sur la carte en X (nb de tuiles).
 */
p.posX = 0;

/**
 * int posY
 * Position de la tuile sur la carte en Y.
 */
p.posY = 0;

/**
 * int posZ
 * Position de la tuile sur la carte en Z.
 */
p.posZ = 0;
 
/**
 * Constructeur.
 */
p.construct = function ( $type, $content, $walkable, $offsetX, $offsetY, $id, $harvestable ){
    if ( $type === TileType.PNG ){
            this.type = $type;
    }

    if ( $walkable === false ){
            this.walkable = false;
    }

    if ( typeof $offsetX === typeof 0 ){
            this.offsetX = $offsetX;
    }

    if ( typeof $offsetY === typeof 0 ){
            this.offsetY = $offsetY;
    }

    if ( $harvestable === false ){
        this.harvestable = false;
    }

    if ( typeof $id === typeof 0 ){
        this.id = $id;
    }

    if ( $content && $content.visible ){
        this.content = $content;
    }
};

/**
 * void dispose
 * @purpose : Détruit la tuile.
 */
p.dispose = function (){
    this.map = null;
    this.type = null;
    this.content = null;
    this.walkable = null;
    this.offsetX = null;
    this.offsetY = null;      
    this.harvestable = null;
    this.id = null;
};
