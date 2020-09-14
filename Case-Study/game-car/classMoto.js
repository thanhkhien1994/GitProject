
function Moto(x, y) {
    this.x = x;
    this.y = y;
    this.speed = 0;

    this.img = new Image();
    this.img.src = "image/xemay.png";

    this.drawMoto = function () {
        ctx.drawImage(this.img, this.x, this.y, 50, 50);
    }

    this.hereMoto = function () { // Vị trí xe
        this.x = this.x + this.speed;
    }

    this.keyEvent = function (evt) { // Bàn phím
        switch (evt.keyCode) {
            case 37:
                moto.speed = -50;
                break;
            case 39:
                moto.speed = 50;
                break;
        }
        moto.hereMoto();
    }

    this.collisionMoto = function () { // va chạm khung
        if (this.x === -50) {
            this.x += 50;
        } else if (this.x === 500) {
            this.x += -50;
        }
    }
    
    
}