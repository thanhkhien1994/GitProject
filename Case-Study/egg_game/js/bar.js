var bar = function(game){
	this.game = game;

	var self = this;

	this.draw = function(){
		self.game.context.drawImage(
			self.game.resource.bar.img, // hình ảnh, đã load ở đây rồi này
			0, // tọa độ x
			100 // tọa độ y
		);
	}
}