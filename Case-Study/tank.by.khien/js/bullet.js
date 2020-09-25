function Bullet(x, y, dx, dy) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.d = WIDTH_DOT;
    this.r = HEIGHT_DOT;
    this.color = "black";
    this.draw = function () {
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.d, this.r);
        ctx.fillStyle = this.color;
        ctx.fill()
        ctx.closePath();
        this.move();
    }
    this.move = function () {
        this.x += this.dx;
        this.y += this.dy;
    }
}

let bullet = [];

