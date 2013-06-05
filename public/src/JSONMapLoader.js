/*
 * Utilitaire JSONMapLoader
 */
var JSONMapLoader = {
    load: function ( $isoMap, $layer1, $layer2, $eqs ) {
        var layer1 = $layer1;
        var layer2 = $layer2;

        for ( var i = 0; i < layer1.length; i++ ) {
            for ( var j = 0; j < layer1[0].length; j++ ){
                var tile = $eqs[layer1[i][j]];
                if ( layer1[i][j] !== 0 ){
                    $isoMap.addTile ( tile(), i, j, 0 );
                }
            }
        }
        for ( var i = 0; i < layer2.length; i++ ) {
            for ( var j = 0; j < layer2[0].length; j++ ){
                var tile = $eqs[layer2[i][j]];
                if ( layer2[i][j] !== 0 ){
                    $isoMap.addTile ( tile(), i, j, 32 );
                }
            }
        }
    }
};