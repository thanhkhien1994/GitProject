
function Oto(x, y) {
    this.x = x;
    this.y = y;
    this.speed = 5;
    this.img = new Image();
    this.img.src = "img/oto.png";

    this.drawOto = function () { // vẽ xe
        ctx.drawImage(this.img, this.x, this.y, 50, 50);
        if (this.y === 600) {
            this.y = 0;
            //this.x = Math.floor(Math.random() * 450);
        }
    }

    this.updateHere = function () {// vị trí xe
        this.y = this.y + this.speed;
    }

}




