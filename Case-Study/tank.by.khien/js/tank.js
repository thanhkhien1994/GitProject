function Dot(x, y) {
    this.x = x;
    this.y = y;
    this.d = WIDTH_DOT;
    this.r = HEIGHT_DOT;
    this.dx = 0;
    this.dy = 0;
    this.draw = function () {
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.d, this.r);
        ctx.fillStyle = "black";
        ctx.fill()
        ctx.closePath();
        this.move();
    }
    this.move = function () {
        this.x += this.dx;
        this.dx = 0;
        this.y += this.dy;
        this.dy = 0;
    }
}

let myDot = [
    [new Dot(225, 675),new Dot(275, 675),new Dot(275, 650), new Dot(250, 650),new Dot(225, 650),new Dot(250, 625)],
    [new Dot(225, 75),new Dot(275, 75),new Dot(275, 50),new Dot(250, 50),new Dot(225, 50),new Dot(250, 25)],
    [new Dot(0, 0),new Dot(50, 0),new Dot(50, 25),new Dot(25, 25),new Dot(0, 25),new Dot(25, 50)],
    [new Dot(475, 0),new Dot(425, 0),new Dot(425, 25),new Dot(450, 25),new Dot(475, 25),new Dot(450, 50)]
];