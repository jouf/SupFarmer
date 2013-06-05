// Enums
			var Keys = {
				UP: 38,
				DOWN: 40,
				LEFT: 37,
				RIGHT: 39,
				W: 87,
				A: 65,
				S: 83,
				D: 68,
				Z: 90,
				X: 88,
				R: 82
			}

			var Tools = {
				current: 4, // Default tool
				/* - */
				MOVE: 0,
				ZOOM_IN: 1,
				ZOOM_OUT: 2,
				DEMOLISH: 3,
				SELECT: 4,
				BUILD: 5
			}
			
			document.handleMouseDown = function(e) {
	var x, y;

	e.preventDefault();
alert('ok');
		switch (Tools.current) {
		case Tools.BUILD:
            
			break;
		case Tools.MOVE:
			this.dragHelper.active = true;
			this.dragHelper.x = x;
			this.dragHelper.y = y;
			break;
		case Tools.ZOOM_IN:
			this.zoomIn();
			break;
		case Tools.ZOOM_OUT:
			this.zoomOut();
			break;
		case Tools.DEMOLISH:
			
			var pos = this.translatePixelsToMatrix(x, y);

			if (this.tileMap[pos.row] != undefined && this.tileMap[pos.row][pos.col] != undefined) {
				this.tileMap[pos.row][pos.col] = null;
			}

			break;
	}
    
    //this.draw();
}


function loadGUI () {

				// Initialize the game object

				var pointer = {
					DOWN: 'mousedown',
					UP: 'mouseup',
					MOVE: 'mousemove'
				};
				
// Listen for GUI events
				var ui = document.getElementById('ui');
				ui.addEventListener(pointer.UP, function(e) {
					switch(e.target.getAttribute('id')) {
						case 'panel-toggle':
							var panelContainer = document.getElementById('panel-container');
							var classes = panelContainer.getAttribute('class');
							var alphaTarget;
 	
							if (classes != null && classes.length > 0) {
								panelContainer.setAttribute('class', '');
								document.getElementById('panel-toggle').innerHTML = 'Cancel';
								alphaTarget=.4;
								createjs.Tween.get(myMap).to({alpha:alphaTarget},1000,createjs.Ease.bounceIn);
							} else {
								panelContainer.setAttribute('class', 'hidden');
								document.getElementById('panel-toggle').innerHTML = 'Panel';
								alphaTarget=1;
								createjs.Tween.get(myMap).to({alpha:alphaTarget},1000,createjs.Ease.bounceIn);
							}
							break;
						case 'select':
							selectTool(Tools.SELECT, document.getElementById('select'));
							isDrag = false;
							createjs.Ticker.addListener ( window[clientid] );
							canvas.onmousemove = null;
                                                        myMap.onPress = null;
                                                        
							break;
						case 'move':
							selectTool(Tools.MOVE, document.getElementById('move'));
							ui.addEventListener(pointer.DOWN, function(e) {
								createjs.Ticker.removeListener ( player );
    							canvas.onmousemove = mouseCheck;
							});
							break;
						case 'zoomIn':
							selectTool(Tools.ZOOM_IN, document.getElementById('zoomIn'));
							isDrag = false;
							break;
						case 'zoomOut':
							selectTool(Tools.ZOOM_OUT, document.getElementById('zoomOut'));
							isDrag = false;
							break;
						case 'demolish':
							selectTool(Tools.DEMOLISH, document.getElementById('demolish'));
							isDrag = false;
							break;
						default:
							// He didn't click on any option and actually click on an empty section of the UI, fallback to the canvas.
							e.srcElement = canvas;
							e.target = canvas;
							e.toElement = canvas;
							isDrag = false;
							switch (Tools.current) {
		case Tools.BUILD:
			break;
		case Tools.MOVE:
			this.dragHelper.active = true;
			this.dragHelper.x = x;
			this.dragHelper.y = y;
			break;
		case Tools.ZOOM_IN:
			break;
		case Tools.ZOOM_OUT:
			break;
		case Tools.DEMOLISH:
			
			var pos = this.translatePixelsToMatrix(x, y);

			if (this.tileMap[pos.row] != undefined && this.tileMap[pos.row][pos.col] != undefined) {
				this.tileMap[pos.row][pos.col] = null;
			}

			break;
	}

							break;
					}
				}, false);
			}

			function selectTool(tool, elem) {

				// Remove the "active" class from any element inside the div#tools ul
				for (var i = 0, x = elem.parentNode.childNodes.length; i < x; i++) {
					if (elem.parentNode.childNodes[i].tagName == "LI") {
						elem.parentNode.childNodes[i].className = null;
					}
				}

				elem.className += "active";

				switch(tool) {
					case Tools.SELECT:
						Tools.current = Tools.SELECT;
						break;
					case Tools.MOVE:
						Tools.current = Tools.MOVE;
						break;
					case Tools.ZOOM_IN:
						Tools.current = Tools.ZOOM_IN;
						break;
					case Tools.ZOOM_OUT:
						Tools.current = Tools.ZOOM_OUT;
						break;
					case Tools.DEMOLISH:
						Tools.current = Tools.DEMOLISH;
						break;
				}

			}