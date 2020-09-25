var cars = [];


let Car = function (y) {
    this.y = y;
    this.img = new Image();
    this.directionX = 0;
    this.directionY = 0;
    this.way = Math.floor(Math.random()*2);

    this.drawCar = function () {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    this.show = function () {
        this.width = 90;
        this.height = 50;
        let num = Math.floor(Math.random()*(8)+1);
        if (this.way <= 0){
            this.img.src = "images/left" + num + ".png";
            this.x = -Math.floor(Math.random()*300) + 91;
        }else {
            this.img.src = "images/right" + num + ".png";
            this.x = Math.floor(Math.random()*800)+ 501;
        }
    }

    this.carPosition = function () {
        this.x += this.directionX;
        this.y += this.directionY;
    }

    this.movingCar = function () {
        let num = Math.floor(Math.random()*(8)+1);
        if (this.way <= 0){
            this.directionX = 3 * level;
            this.directionY = 0;
            if (this.x > canvas.width + this.width){
                this.x = - this.width*2;
                this.img.src = "images/left" + num + ".png";
            }
        }else {
            this.directionX = -3 * level;
            this.directionY = 0;
            if (this.x < 0 - this.width){
                this.x = canvas.width + this.width;
                this.img.src = "images/right" + num + ".png";
            }
        }

    }
}