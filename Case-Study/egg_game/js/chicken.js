var chicken = function(game, x, y){
	this.game = game;
	this.x    = x;
	this.y    = y;
	var self  = this;

	this.draw = function(){
		// vẽ cái ảnh con gà lên
		this.game.context.drawImage(
			this.game.resource.chicken.img,
			x,
			y
		);
	}

}