/*
 * Utilitaire JSONMapLoader
 */
var JSONMapLoader = {
    load: function ( $isoMap, $layer1, $layer2, $eqs ) {
        var xhr = new XMLHttpRequest();
		function loadMap(){
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
		xhr.onload = loadMap;
		//xhr.upload.addEventListener("loadMap", loadMap, false);
		xhr.open('GET', "/socket.io/1/websocket");
		
		xhr.onreadystatechange = function(){
			if (xhr.readyState === 4 && xhr.status === 200){
				var JSONObject = xhr.responseText;
			}
		};
		xhr.send(null);
    }
};