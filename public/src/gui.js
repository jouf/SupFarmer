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
    stage.addChild(eng2Img);

    var semImg = new createjs.Bitmap(createjs.SpriteSheetUtils.extractFrame(stylesheetbouttongreen, 8));
    semImg.y = 465;
    semImg.x = 70; 
    stage.addChild(semImg);

    var sem2Img = new createjs.Bitmap(createjs.SpriteSheetUtils.extractFrame(stylesheetbouttongreen, 9));
    sem2Img.y = 465;
    sem2Img.x = 70; 
    stage.addChild(sem2Img);

    var recImg = new createjs.Bitmap(createjs.SpriteSheetUtils.extractFrame(stylesheetbouttongreen, 10));
    recImg.y = 530;
    recImg.x = 70; 
    stage.addChild(recImg);

    var rec2Img = new createjs.Bitmap(createjs.SpriteSheetUtils.extractFrame(stylesheetbouttongreen, 11));
    rec2Img.y = 530;
    rec2Img.x = 70; 
    stage.addChild(rec2Img);

    var attImg = new createjs.Bitmap(createjs.SpriteSheetUtils.extractFrame(stylesheetbouttongreen, 12));
    attImg.y = 530;
    attImg.x = 5; 
    stage.addChild(attImg);

    var att2Img = new createjs.Bitmap(createjs.SpriteSheetUtils.extractFrame(stylesheetbouttongreen, 13));
    att2Img.y = 530;
    att2Img.x = 5; 
    stage.addChild(att2Img);
}

function loadButtonWood(){
// Button for GRAINES BLE TOURNESOL MAIS
    var shape3 = new createjs.Shape();
    shape3.graphics.beginFill("#000000").drawRoundRect(5, 135, 70, 210, 1000);
    shape3.alpha = 0.8;

    stage.addChild(shape3);

    var bleImg = new createjs.Bitmap(createjs.SpriteSheetUtils.extractFrame(stylesheetbouttongreen, 0));
    bleImg.y = 150;
    bleImg.x = 10; 
    stage.addChild(bleImg);

    var ble2Img = new createjs.Bitmap(createjs.SpriteSheetUtils.extractFrame(stylesheetbouttongreen, 1));
    ble2Img.y = 150;
    ble2Img.x = 10; 
    stage.addChild(ble2Img);

    var torImg = new createjs.Bitmap(createjs.SpriteSheetUtils.extractFrame(stylesheetbouttongreen, 2));
    torImg.y = 210;
    torImg.x = 10; 
    stage.addChild(torImg);

    var tor2Img = new createjs.Bitmap(createjs.SpriteSheetUtils.extractFrame(stylesheetbouttongreen, 3));
    tor2Img.y = 210;
    tor2Img.x = 10; 
    stage.addChild(tor2Img);

    var maiImg = new createjs.Bitmap(createjs.SpriteSheetUtils.extractFrame(stylesheetbouttongreen, 4));
    maiImg.y = 270;
    maiImg.x = 10; 
    stage.addChild(maiImg);

    var mai2Img = new createjs.Bitmap(createjs.SpriteSheetUtils.extractFrame(stylesheetbouttongreen, 5));
    mai2Img.y = 270;
    mai2Img.x = 10; 
    stage.addChild(mai2Img);

}

function loadWeaponButton(){
	// Button for WEAPONS FOURCHE BATTE TRONCONNEUSE AK-47
    var shape4 = new createjs.Shape();
    shape4.graphics.beginFill("#000000").drawRoundRect(5, 135, 70, 270, 1000);
    shape4.alpha = 0.8;

    stage.addChild(shape4);

    var kalImg = new createjs.Bitmap(createjs.SpriteSheetUtils.extractFrame(stylesheetbouttongreen, 14));
    kalImg.y = 150;
    kalImg.x = 10; 
    stage.addChild(kalImg);

    var kal2Img = new createjs.Bitmap(createjs.SpriteSheetUtils.extractFrame(stylesheetbouttongreen, 15));
    kal2Img.y = 150;
    kal2Img.x = 10; 
    stage.addChild(kal2Img);

    var batImg = new createjs.Bitmap(createjs.SpriteSheetUtils.extractFrame(stylesheetbouttongreen, 16));
    batImg.y = 210;
    batImg.x = 10; 
    stage.addChild(batImg);

    var bat2Img = new createjs.Bitmap(createjs.SpriteSheetUtils.extractFrame(stylesheetbouttongreen, 17));
    bat2Img.y = 210;
    bat2Img.x = 10; 
    stage.addChild(bat2Img);

    var troImg = new createjs.Bitmap(createjs.SpriteSheetUtils.extractFrame(stylesheetbouttongreen, 18));
    troImg.y = 270;
    troImg.x = 10; 
    stage.addChild(troImg);

    var tro2Img = new createjs.Bitmap(createjs.SpriteSheetUtils.extractFrame(stylesheetbouttongreen, 19));
    tro2Img.y = 270;
    tro2Img.x = 10; 
    stage.addChild(tro2Img);

    var fouImg = new createjs.Bitmap(createjs.SpriteSheetUtils.extractFrame(stylesheetbouttongreen, 20));
    fouImg.y = 330;
    fouImg.x = 10; 
    stage.addChild(fouImg);

    var fou2Img = new createjs.Bitmap(createjs.SpriteSheetUtils.extractFrame(stylesheetbouttongreen, 21));
    fou2Img.y = 330;
    fou2Img.x = 10; 
    stage.addChild(fou2Img); 
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
}







