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
 