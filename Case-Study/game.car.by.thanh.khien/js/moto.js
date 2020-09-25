function Moto(x, y) {
    this.x = x;
    this.y = y;
    this.dx = 0;

    this.img = new Image();
    this.img.src = "image/bike.png";

    this.draw = function () {
        ctx.drawImage(this.img, this.x, this.y, 50, 50);
        this.move();
    }

    this.move = function () {
        this.x += this.dx;
        this.dx = 0;
        this.borderMove();

    }

    this.borderMove = function () {
        if (this.x <= 0) this.x = 0;
        if (this.x >= 250) this.x = 250;
    }
}

let moto = new Moto(200, 550);

function keyMove(evt) {
    switch (evt.keyCode) {
        case 37:
            moto.dx = -50;
            break;
        case 39:
            moto.dx = 50;
            break;
    }
}

window.addEventListener("keydown", keyMove);

