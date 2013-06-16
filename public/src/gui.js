var stylesheetbouttongreen = new createjs.SpriteSheet({
        images: ['pics/stylesheetbouttongreen.png'],
        frames: {width: 60, height: 60}
    });

function loadActionButton(){
	//4 bouttons actions
    var shape2 = new createjs.Shape();
    shape2.graphics.beginFill("#000000").drawRect(0, 455, 140, 400);
    shape2.alpha = 0.7;
    stage.addChild(shape2);

    var engImg = new createjs.Bitmap(createjs.SpriteSheetUtils.extractFrame(stylesheetbouttongreen, 6));
    engImg.y = 465;
    engImg.x = 5; 
    stage.addChild(engImg);

    var eng2Img = new createjs.Bitmap(createjs.SpriteSheetUtils.extractFrame(stylesheetbouttongreen, 7));
    eng2Img.y = 465;
    eng2Img.x = 5;

    var semImg = new createjs.Bitmap(createjs.SpriteSheetUtils.extractFrame(stylesheetbouttongreen, 8));
    semImg.y = 465;
    semImg.x = 70; 
    stage.addChild(semImg);

    var sem2Img = new createjs.Bitmap(createjs.SpriteSheetUtils.extractFrame(stylesheetbouttongreen, 9));
    sem2Img.y = 465;
    sem2Img.x = 70;

    var recImg = new createjs.Bitmap(createjs.SpriteSheetUtils.extractFrame(stylesheetbouttongreen, 10));
    recImg.y = 530;
    recImg.x = 70; 
    stage.addChild(recImg);

    var rec2Img = new createjs.Bitmap(createjs.SpriteSheetUtils.extractFrame(stylesheetbouttongreen, 11));
    rec2Img.y = 530;
    rec2Img.x = 70;

    window["attImg"] = new createjs.Bitmap(createjs.SpriteSheetUtils.extractFrame(stylesheetbouttongreen, 12));
    window["attImg"].y = 530;
    window["attImg"].x = 5; 
    stage.addChild(window["attImg"]);

    var att2Img = new createjs.Bitmap(createjs.SpriteSheetUtils.extractFrame(stylesheetbouttongreen, 13));
    att2Img.y = 530;
    att2Img.x = 5;
	
	
	window["clickSound"] = createjs.Sound.play("sound/click.mp3", "click");
	
	// Fertilizer Action
	engImg.onMouseOver = function (){
		window["clickSound"].play("click");
		stage.removeChild(engImg);
		stage.addChild(eng2Img);
		stage.update();
		
		eng2Img.onMouseOut = function (){
			stage.removeChild(eng2Img);
			stage.addChild(engImg);
			stage.update();
		};
		
		eng2Img.onClick = function (){
			if ( recolt === true ){
				recolt = false;
			}
			if ( attackAction === true ){
				attackAction = false;
				document.documentElement.style.cursor = 'url("pics/cursor-fertilizan.png"), auto';
				removeWeaponButton();
			}
			if ( plantAction === true ){
				removeButtonWood();
				document.documentElement.style.cursor = 'url("pics/cursor.png"), auto';
				plantAction = false;
			}
			if ( seedAction === false ){
				seedAction = true;
			} else {
				seedAction = false;
			}
		};
	};
	
	
	//attack Button
	window["attImg"].onMouseOver = function (){
		window["clickSound"].play("click");
		stage.removeChild(window["attImg"]);
		stage.addChild(att2Img);
		stage.update();
		
		att2Img.onMouseOut = function (){
			stage.removeChild(att2Img);
			stage.addChild(window["attImg"]);
			stage.update();
		};
		
		att2Img.onClick = function (){
			if ( recolt === true ){
				recolt = false;
			}
			if ( attackAction === false ){
				attackAction = true;
				loadWeaponButton();
				document.documentElement.style.cursor = 'url("pics/cursor-sword.png"), auto';
			} else {
				attackAction = false;
				removeWeaponButton();
				document.documentElement.style.cursor = 'url("pics/cursor.png"), auto';
			}
			if ( seedAction === true ){
				seedAction = false;
			}
			if ( plantAction === true ){
				plantAction = true;
				removeButtonWood();
			}
		};
	};
	
	//seeds Button
	semImg.onMouseOver = function (){
		window["clickSound"].play("click");
		stage.removeChild(semImg);
		stage.addChild(sem2Img);
		stage.update();
		
		sem2Img.onMouseOut = function (){
			stage.removeChild(sem2Img);
			stage.addChild(semImg);
			stage.update();
		};
		
		sem2Img.onClick = function (){
			if ( recolt === true ){
				recolt = false;
			}
			if ( attackAction === true ){
				attackAction = false;
				removeWeaponButton();
			}
			if ( seedAction === true ){
				seedAction = false;
			}
			if ( plantAction === false ){
				plantAction = true;
				loadButtonWood();
				document.documentElement.style.cursor = 'url("pics/cursor-semis.png"), auto';
			} else {
				plantAction = false;
				removeButtonWood();
				document.documentElement.style.cursor = 'url("pics/cursor.png"), auto';
			}
		};
	};
	
	recImg.onMouseOver = function (){
		window["clickSound"].play("click");
		stage.removeChild(recImg);
		stage.addChild(rec2Img);
		stage.update();
		
		rec2Img.onMouseOut = function (){
			stage.removeChild(rec2Img);
			stage.addChild(recImg);
			stage.update();
		};
		
		rec2Img.onClick = function (){
			recolt = true;
			document.documentElement.style.cursor = 'url("pics/cursor-faux.png"), auto';
			stage.update();
		};
	};
}

function loadButtonWood(){
// Button for GRAINES BLE TOURNESOL MAIS
    window["shape3"] = new createjs.Shape();
    window["shape3"].graphics.beginFill("#000000").drawRoundRect(5, 135, 70, 210, 1000);
    window["shape3"].alpha = 0.8;
    stage.addChild(window["shape3"]);

    window["bleImg"] = new createjs.Bitmap(createjs.SpriteSheetUtils.extractFrame(stylesheetbouttongreen, 0));
    window["bleImg"].y = 150;
    window["bleImg"].x = 10; 
    stage.addChild(window["bleImg"]);

	window["ble2Img"] = new createjs.Bitmap(createjs.SpriteSheetUtils.extractFrame(stylesheetbouttongreen, 1));
    window["ble2Img"].y = 150;
    window["ble2Img"].x = 10;
	
    window["torImg"] = new createjs.Bitmap(createjs.SpriteSheetUtils.extractFrame(stylesheetbouttongreen, 2));
    window["torImg"].y = 210;
    window["torImg"].x = 10; 
    stage.addChild(window["torImg"]);
	
	window["tor2Img"] = new createjs.Bitmap(createjs.SpriteSheetUtils.extractFrame(stylesheetbouttongreen, 3));
    window["tor2Img"].y = 210;
    window["tor2Img"].x = 10;
	
    window["maiImg"] = new createjs.Bitmap(createjs.SpriteSheetUtils.extractFrame(stylesheetbouttongreen, 4));
    window["maiImg"].y = 270;
    window["maiImg"].x = 10; 
    stage.addChild(window["maiImg"]);
	
	window["mai2Img"] = new createjs.Bitmap(createjs.SpriteSheetUtils.extractFrame(stylesheetbouttongreen, 5));
    window["mai2Img"].y = 270;
    window["mai2Img"].x = 10; 
	
	window["bleImg"].onMouseOver = function (){
		window["clickSound"].play("click");
		stage.removeChild(window["bleImg"]);
		stage.addChild(window["ble2Img"]);
		stage.update();
		
		window["ble2Img"].onMouseOut = function (){
			stage.removeChild(window["ble2Img"]);
			stage.addChild(window["bleImg"]);
			stage.update();
		};
	};
	
	window["torImg"].onMouseOver = function (){
		window["clickSound"].play("click");
		stage.removeChild(window["torImg"]);
		stage.addChild(window["tor2Img"]);
		stage.update();
		
		window["tor2Img"].onMouseOut = function (){
			stage.removeChild(window["tor2Img"]);
			stage.addChild(window["torImg"]);
			stage.update();
		};
	};
	
	window["maiImg"].onMouseOver = function (){
		window["clickSound"].play("click");
		stage.removeChild(window["maiImg"]);
		stage.addChild(window["mai2Img"]);
		stage.update();
		
		window["mai2Img"].onMouseOut = function (){
			stage.removeChild(window["mai2Img"]);
			stage.addChild(window["maiImg"]);
			stage.update();
		};
	};
}

function removeButtonWood(){
    stage.removeChild(window["shape3"]);
    stage.removeChild(window["torImg"]);
    stage.removeChild(window["maiImg"]);
	stage.removeChild(window["bleImg"]);
	stage.removeChild(window["tor2Img"]);
    stage.removeChild(window["mai2Img"]);
	stage.removeChild(window["ble2Img"]);
}


function loadWeaponButton(){
	// Button for WEAPONS FOURCHE BATTE TRONCONNEUSE AK-47
    window["shape4"] = new createjs.Shape();
    window["shape4"].graphics.beginFill("#000000").drawRoundRect(5, 135, 70, 270, 1000);
    window["shape4"].alpha = 0.8;

    stage.addChild(window["shape4"]);

    window["kalImg"] = new createjs.Bitmap(createjs.SpriteSheetUtils.extractFrame(stylesheetbouttongreen, 14));
    window["kalImg"].y = 150;
    window["kalImg"].x = 10; 
    stage.addChild(window["kalImg"]);

    window["kal2Img"] = new createjs.Bitmap(createjs.SpriteSheetUtils.extractFrame(stylesheetbouttongreen, 15));
    window["kal2Img"].y = 150;
    window["kal2Img"].x = 10;

    window["batImg"] = new createjs.Bitmap(createjs.SpriteSheetUtils.extractFrame(stylesheetbouttongreen, 16));
    window["batImg"].y = 210;
    window["batImg"].x = 10; 
    stage.addChild(window["batImg"]);

    window["bat2Img"] = new createjs.Bitmap(createjs.SpriteSheetUtils.extractFrame(stylesheetbouttongreen, 17));
    window["bat2Img"].y = 210;
    window["bat2Img"].x = 10;

    window["troImg"] = new createjs.Bitmap(createjs.SpriteSheetUtils.extractFrame(stylesheetbouttongreen, 18));
    window["troImg"].y = 270;
    window["troImg"].x = 10; 
    stage.addChild(window["troImg"]);

    window["tro2Img"] = new createjs.Bitmap(createjs.SpriteSheetUtils.extractFrame(stylesheetbouttongreen, 19));
    window["tro2Img"].y = 270;
    window["tro2Img"].x = 10;

    window["fouImg"] = new createjs.Bitmap(createjs.SpriteSheetUtils.extractFrame(stylesheetbouttongreen, 20));
    window["fouImg"].y = 330;
    window["fouImg"].x = 10; 
    stage.addChild(window["fouImg"]);

    window["fou2Img"] = new createjs.Bitmap(createjs.SpriteSheetUtils.extractFrame(stylesheetbouttongreen, 21));
    window["fou2Img"].y = 330;
    window["fou2Img"].x = 10; 

	window["kalImg"].onMouseOver = function (){
		window["clickSound"].play("click");
		stage.removeChild(window["kalImg"]);
		stage.addChild(window["kal2Img"]);
		stage.update();
		
		window["kal2Img"].onMouseOut = function (){
			stage.removeChild(window["kal2Img"]);
			stage.addChild(window["kalImg"]);
			stage.update();
		};
	};
	
	window["batImg"].onMouseOver = function (){
		window["clickSound"].play("click");
		stage.removeChild(window["batImg"]);
		stage.addChild(window["bat2Img"]);
		stage.update();
		
		window["bat2Img"].onMouseOut = function (){
			stage.removeChild(window["bat2Img"]);
			stage.addChild(window["batImg"]);
			stage.update();
		};
	};	
	
	window["troImg"].onMouseOver = function (){
		window["clickSound"].play("click");
		stage.removeChild(window["troImg"]);
		stage.addChild(window["tro2Img"]);
		stage.update();
		
		window["tro2Img"].onMouseOut = function (){
			stage.removeChild(window["tro2Img"]);
			stage.addChild(window["troImg"]);
			stage.update();
		};
	};	
	
	window["fouImg"].onMouseOver = function (){
		window["clickSound"].play("click");
		stage.removeChild(window["fouImg"]);
		stage.addChild(window["fou2Img"]);
		stage.update();
		
		window["fou2Img"].onMouseOut = function (){
			stage.removeChild(window["fou2Img"]);
			stage.addChild(window["fouImg"]);
			stage.update();
		};
	};
}

function removeWeaponButton(){
    stage.removeChild(window["shape4"]);
    stage.removeChild(window["kalImg"]);
    stage.removeChild(window["batImg"]);
    stage.removeChild(window["troImg"]);
	stage.removeChild(window["fouImg"]);
	stage.removeChild(window["kal2Img"]);
    stage.removeChild(window["bat2Img"]);
    stage.removeChild(window["tro2Img"]);
	stage.removeChild(window["fou2Img"]);
}

function loadTopBar(){
	// function shape top bar
	var shape = new createjs.Shape();
    shape.graphics.beginFill("#000000").drawRect(0,0,1200,40);
    shape.alpha = 0.7;
    
    var lvlImg = new createjs.Bitmap("pics/sword.png");
    lvlImg.x = 100;
    lvlImg.y = 4;
    
    var proImg = new createjs.Bitmap("pics/produit.png");
    proImg.x = 500;
    proImg.y = 4;
    
    var buiImg = new createjs.Bitmap("pics/house.png");
    buiImg.x = 700;
    buiImg.y = 4;

    var tilImg = new createjs.Bitmap("pics/tile.png");
    tilImg.x = 900;
    tilImg.y = 14;
    
    var fig2Img = new createjs.Bitmap("pics/sword2.png");
    fig2Img.x = 280;
    fig2Img.y = 4;
    
    var sanImg = new createjs.Bitmap("pics/sang.png");
    sanImg.x = 360;
    sanImg.y = 4;

    var heaImg = new createjs.Bitmap("pics/heart.png");
    heaImg.x = 180;
    heaImg.y = 4;
    
    var coiImg = new createjs.Bitmap("pics/coin.png");
    coiImg.x = 1100;
    coiImg.y = 4;
    
	
    stage.addChild(shape);

    stage.addChild(lvlImg);
    stage.addChild(proImg); 
    stage.addChild(buiImg);  
    stage.addChild(tilImg); 
    stage.addChild(fig2Img);     
    stage.addChild(sanImg); 
    stage.addChild(heaImg);
    stage.addChild(coiImg);
	
	var battery1 = new Battery('stage', { x: 130, y: 5 });
	var total = 50;
	var ressources = 39;
	var percentUsed = ressources*100/total;
	battery1.set_data( { bar : percentUsed, line : 80, total: total , ressources : ressources } );
}







