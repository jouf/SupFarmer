/**
 * Class Player extends Tile
 */ 
var Player = function ( $type, $content, $walkable, $offsetX, $offsetY ){
    this.construct ( $type, $content, $walkable, $offsetX, $offsetY );
};
 
var p = Player.prototype = new Tile ();
 
/**
 * Array waintingList
 * Liste d'attente pour les déplacements
 */
p.waitingList = [];
 
/**
 * int decalX, int decalY : décalage (en pixels) entre la position réelle et la position actuelle.
 */
p.decalX = 0;
p.decalY = 0;
 
/**
 * bool needUpdate.
 * Indique la nécessité de mettre à jour les profondeurs.
 */
p.needUpdate = false;
 
/**
 * void smoothMove
 * @purpose : Déplace le joueur
 * $x, $y : déplacement à effectuer en x et en y.
 */
p.smoothMove = function ( $x, $y ){
    this.waitingList.push ( [ $x, $y ] );
};
 
/**
 * Execution à chaque image.
 */
p.tick = function ( $e )
{
    if ( this.decalX !== 0 || this.decalY !== 0 )
    {
        window[clientid+"Name"].x = this.content.x+5;
        window[clientid+"Name"].y = this.content.y-70;

        //le joueur va vers le haut
        if ( this.decalX > 0 ){
            courentAnimation = "down";
            this.content.x += 4;
            if(oldAnimation !== courentAnimation){
                turnDown();
                oldAnimation = courentAnimation;
            }
            this.decalX -= 4;
        }
        //le joueur va vers le bas
        else if ( this.decalX < 0 )
        {
            courentAnimation = "up";
            this.content.x -= 4;
            if(oldAnimation !== courentAnimation){
                //alert("up");
                turnUp();
                oldAnimation = courentAnimation;
            }
            this.decalX += 4;
        }

        //Le joueur va a droite
        if ( this.decalY > 0 ){
            this.decalY -= 2;
            this.content.y += 2;   
        }
        //le joueur va a gauche
        else if ( this.decalY < 0 ){
            this.decalY += 2;
            this.content.y -= 2;
        }
    }
    else if ( this.needUpdate ){
            this.map.updateDepth();
            this.needUpdate = false;
    }
    else if (this.waitingList.length === 0){
        courentAnimation = "stay";
            if(oldAnimation !== courentAnimation){
            stay();
            oldAnimation = courentAnimation;
            }
    }
    else if ( this.waitingList.length !== 0 ){
        var position = this.waitingList.shift();

        if ( this.posX - position[0] > 0 || this.posY - position[1] > 0 ){
            this.needUpdate = true;
        }

        this.posX = position[0];
        this.posY = position[1];
        if ( !this.needUpdate ){
            this.map.updateDepth ();
        }

        var toTile = this.map.getTileAt ( this.posX, this.posY, 0 );
        this.decalX = toTile.content.x - this.content.x;
        this.decalY = toTile.content.y - this.content.y;
    }
};
 
