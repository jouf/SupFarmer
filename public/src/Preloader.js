Preloder = (function(){
  this.stage = null;
  this.preloader = null;
  function Preloder(stage){
    this.stage = stage;
    this.preloader = new createjs.Container();
    this.preloader.x = canvas.width/2 - 85;
    this.preloader.y = canvas.height/2 - 20;
    console.log(stage);
    for(var i=0;i<3;i++){
      var rect = new createjs.Shape();
      rect.graphics.beginFill("#DDD").drawRect(0,0,10,10);
      rect.x = 10+i*25;
      rect.y = i===1 ? 3 : 4;
      createjs.Tween.get(rect).wait(i*350);
      createjs.Tween.get(rect, {loop:true})
        .wait(i*350)
        .to({scaleY:i===1 ? 1.8 : 1.3,
          scaleX:i===1 ? 1.8 : 1.3,
          y: i===1 ? 0 : 2,
          x: i===1 ? 7+i*25 : 9+i*25
        },700)
        .to({scaleY:1, scaleX:1, y: i===1 ? 3 : 4, x: 10+i*25},700);

      var preloaderText = new createjs.Text("Loading the data...", "bold 20px Arial", "#AAA");
      preloaderText.textAlign = "center";
      preloaderText.x = 42.5;
      preloaderText.y = 22;
      this.preloader.addChild(preloaderText, rect);
    }
  }

  Preloder.prototype.addToStage = function(){
    this.stage.addChild(this.preloader);
  };

  Preloder.prototype.removeFromStage = function(){
    createjs.Tween.get(this.preloader).to({alpha:0}, 300).call(this.stage.removeChild,this.preloader);
  };

  return Preloder;
})();
