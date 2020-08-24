var oto;
function XeDich(x,y){
    this.x          = x;
    this.y          = y;

    this.tocdo = 5;
    this.img        = new Image();
    this.img.src    = "image/oto.png";

    this.Ve_XeDich  = function () {
        ctx.drawImage(this.img,this.x,this.y,50,50);
        if (this.y === 600){
            this.y = 0;
        }
    }
    this.ViTriXe=function () {
        this.y = this.y + this.tocdo;
    }
}