function Oto(x,y){
    this.x          = x;
    this.y          = y;
    this.speed = 5;
    this.img        = new Image();
    this.img.src    = "image/oto.png";

    this.draw  = function () {
        ctx.drawImage(this.img,this.x,this.y,50,50);
        if (this.y === 600){
            this.y = 0;
        }
    }
    this.move = function () {
        this.y = this.y + this.tocdo;
    }
}