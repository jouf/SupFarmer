var gfx = {};
            
var tileSet = new createjs.SpriteSheet({
    images: ['pics/TileSheet.png'],
    frames: {width: 64, height: 40}
});

var tileSetPlante = new createjs.SpriteSheet({
        images: ['pics/TileSheetPlante.png'],
        frames: {width: 64, height: 100},
        animations: {
            tounesolAnim: [6, 9, "tounesolAnim", 4],
            maisAnim: [16, 19, "maisAnim", 4],
            bleAnim: [26, 29, "bleAnim", 4]
        }
});

var silo = new createjs.SpriteSheet({
        images: ['pics/silo-1.png'],
        frames: {width: 64, height: 163}
});

var grange = new createjs.SpriteSheet({
        images: ['pics/silo-grange-1.png'],
        frames: {width: 175, height: 205}
});

var frigo = new createjs.SpriteSheet({
        images: ['pics/frigo-sprite.png'],
        frames: {width: 175, height: 205},
        animations: { 
                smoke: [1, 4, "smoke", 6]
        }
});

gfx.tile = function (path){	
    var images = {
        '1': this.gfx = new createjs.Bitmap(createjs.SpriteSheetUtils.extractFrame(tileSet, 0)),
        '2' : this.gfx = new createjs.Bitmap(createjs.SpriteSheetUtils.extractFrame(tileSet, 1)),
        '3' : this.gfx = new createjs.Bitmap(createjs.SpriteSheetUtils.extractFrame(tileSet, 2)),
        '4' : this.gfx = new createjs.Bitmap(createjs.SpriteSheetUtils.extractFrame(tileSet, 3)),
        '5' : this.gfx = new createjs.Bitmap(createjs.SpriteSheetUtils.extractFrame(tileSet, 4)),
        '6' : this.gfx = new createjs.Bitmap(createjs.SpriteSheetUtils.extractFrame(tileSet, 5)),
        '7' : this.gfx = new createjs.Bitmap(createjs.SpriteSheetUtils.extractFrame(tileSet, 6)),
        '8' : this.gfx = new createjs.Bitmap(createjs.SpriteSheetUtils.extractFrame(tileSet, 7)),
        '9' : this.gfx = new createjs.Bitmap(createjs.SpriteSheetUtils.extractFrame(tileSet, 8)),
        '10' : this.gfx = new createjs.Bitmap(createjs.SpriteSheetUtils.extractFrame(tileSet, 9)),
        '11' : this.gfx = new createjs.Bitmap(createjs.SpriteSheetUtils.extractFrame(tileSet, 10)),
        '12' : this.gfx = new createjs.Bitmap(createjs.SpriteSheetUtils.extractFrame(tileSet, 11)),
        '13' : this.gfx = new createjs.Bitmap(createjs.SpriteSheetUtils.extractFrame(tileSet, 12)),
        '20' : this.gfx = new createjs.Bitmap(createjs.SpriteSheetUtils.extractFrame(tileSet, 19)),

        // tournesol pousse
        '101' : this.gfx = new createjs.Bitmap(createjs.SpriteSheetUtils.extractFrame(tileSetPlante, 0)),
        '102' : this.gfx = new createjs.Bitmap(createjs.SpriteSheetUtils.extractFrame(tileSetPlante, 1)),
        '103' : this.gfx = new createjs.Bitmap(createjs.SpriteSheetUtils.extractFrame(tileSetPlante, 2)),
        '104' : this.gfx = new createjs.Bitmap(createjs.SpriteSheetUtils.extractFrame(tileSetPlante, 3)),
        '105' : this.gfx = new createjs.Bitmap(createjs.SpriteSheetUtils.extractFrame(tileSetPlante, 4)),

        // tournesol bleu recoltable
        '106' : this.gfx = new createjs.Bitmap(createjs.SpriteSheetUtils.extractFrame(tileSetPlante, 5)),

        // mais pousse
        '111' : this.gfx = new createjs.Bitmap(createjs.SpriteSheetUtils.extractFrame(tileSetPlante, 10)),
        '112' : this.gfx = new createjs.Bitmap(createjs.SpriteSheetUtils.extractFrame(tileSetPlante, 11)),
        '113' : this.gfx = new createjs.Bitmap(createjs.SpriteSheetUtils.extractFrame(tileSetPlante, 12)),
        '114' : this.gfx = new createjs.Bitmap(createjs.SpriteSheetUtils.extractFrame(tileSetPlante, 13)),
        '115' : this.gfx = new createjs.Bitmap(createjs.SpriteSheetUtils.extractFrame(tileSetPlante, 14)),

        // mais bleu recoltable
        '116' : this.gfx = new createjs.Bitmap(createjs.SpriteSheetUtils.extractFrame(tileSetPlante, 15)),

        // ble pousse
        '121' : this.gfx = new createjs.Bitmap(createjs.SpriteSheetUtils.extractFrame(tileSetPlante, 20)),
        '122' : this.gfx = new createjs.Bitmap(createjs.SpriteSheetUtils.extractFrame(tileSetPlante, 21)),
        '123' : this.gfx = new createjs.Bitmap(createjs.SpriteSheetUtils.extractFrame(tileSetPlante, 22)),
        '124' : this.gfx = new createjs.Bitmap(createjs.SpriteSheetUtils.extractFrame(tileSetPlante, 23)),
        '125' : this.gfx = new createjs.Bitmap(createjs.SpriteSheetUtils.extractFrame(tileSetPlante, 24)),

        // ble bleu recoltable
        '126' : this.gfx = new createjs.Bitmap(createjs.SpriteSheetUtils.extractFrame(tileSetPlante, 25)),

        //SILO
        '128' : this.gfx = new createjs.Bitmap(createjs.SpriteSheetUtils.extractFrame(silo, 0)),

        //GRANGE
        '129' : this.gfx = new createjs.Bitmap(createjs.SpriteSheetUtils.extractFrame(grange, 0))
    };

    if (path === "1"){ this.gfx = images['1']; }
    if (path === "2"){ this.gfx = images['2']; }
    if (path === "3"){ this.gfx = images['3']; }
    if (path === "4"){ this.gfx = images['4']; }
    if (path === "5"){ this.gfx = images['5']; }
    if (path === "6"){ this.gfx = images['6']; }
    if (path === "7"){ this.gfx = images['7']; }
    if (path === "8"){ this.gfx = images['8']; }
    if (path === "9"){ this.gfx = images['9']; }
    if (path === "10"){ this.gfx = images['10']; }
    if (path === "11"){ this.gfx = images['11']; }
    if (path === "12"){ this.gfx = images['12']; }
    if (path === "13"){ this.gfx = images['13']; }
    if (path === "20"){ this.gfx = images['20']; }
    if (path === "101"){ this.gfx = images['101']; }
    if (path === "102"){ this.gfx = images['102']; }
    if (path === "103"){ this.gfx = images['103']; }
    if (path === "104"){ this.gfx = images['104']; }
    if (path === "105"){ this.gfx = images['105']; }
    if (path === "106"){ this.gfx = images['106']; }
    if (path === "107"){ 
		this.gfx = new createjs.BitmapAnimation(tileSetPlante);
		this.gfx.gotoAndPlay("tounesolAnim"); 
	}
    if (path === "111"){ this.gfx = images['111']; }
    if (path === "112"){ this.gfx = images['112']; }
    if (path === "113"){ this.gfx = images['113']; }
    if (path === "114"){ this.gfx = images['114']; }
    if (path === "115"){ this.gfx = images['115']; }
    if (path === "116"){ this.gfx = images['116']; }
    if (path === "117"){ 
		this.gfx = new createjs.BitmapAnimation(tileSetPlante);
		this.gfx.gotoAndPlay("maisAnim"); 
	}
    if (path === "121"){ this.gfx = images['121']; }
    if (path === "122"){ this.gfx = images['122']; }
    if (path === "123"){ this.gfx = images['123']; }
    if (path === "124"){ this.gfx = images['124']; }
    if (path === "125"){ this.gfx = images['125']; }
    if (path === "126"){ this.gfx = images['126']; }
    if (path === "127"){ 
		this.gfx = new createjs.BitmapAnimation(tileSetPlante);
		this.gfx.gotoAndPlay("bleAnim"); 
	}

    // SILO
    if (path === "128"){ this.gfx = images['128']; }

    // GRANGE
    if (path === "129"){ this.gfx = images['129']; }

    
    // FRIGO
    if (path === "130"){ 
		this.gfx = new createjs.BitmapAnimation(frigo);
		this.gfx.gotoAndPlay("smoke");
	}

    return this.gfx;
};
/**
 * Function player
 * @purpose : Génère un joueur.
 */
gfx.player = function (sprite,action){	
    playerImg.src = sprite;
    var spriteSheet = new createjs.SpriteSheet({
        // image à utiliser et à découper
        images: [playerImg], 
        // largeur, hauteur & point central de chacun des sprites
        frames: {width: 47, height: 70, regX: -15, regY: 40}, 
        animations: { 
                stay: [6, 6, "stay", 5],   
                walk: [6, 8, "walk", 5],
                back: [9, 11, "back", 5],
                arose: [6, 8, "arose", 5]
        }
    });
    // crée une instance de BitmapSequence pour afficher et animer une instance de SpriteSheet:
    this.gfx = new createjs.BitmapAnimation(spriteSheet);

    // On lance la séquence d’animation
    this.gfx.gotoAndPlay(action);
    this.gfx.name = "player";

    return this.gfx;
};