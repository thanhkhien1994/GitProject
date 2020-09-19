let score = 0;
let level = 1;

function Circle(x, y, r) {
    this.x = x;
    this.y = y;
    this.radius = r;
    this.dx = 0;
    this.dy = 0;
    this.color = "red"

    this.drawCircle = function () {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
        this.move();
    }

    this.move = function () {
        this.x += this.dx;
        this.dx = 0;
        this.y += this.dy;
        this.dy = 0;
        this.edgeCollisions();
    }

    this.edgeCollisions = function () {
        if (this.x + this.radius >= 500) this.x = 500 - this.radius;
        if (this.y + this.radius >= 630) this.y = 630 - this.radius;
        if (this.x - this.radius <= 0) this.x = this.radius;
        if (this.y - this.radius < 0) {
            this.y = 650 + this.radius;
            score++;
            switch (score){
                case 2:
                case 4:
                case 6:
                case 8:
                case 10:
                    level++;
                    this.color = randomColor();
                    break;
            }
        }
    }
}

let circle = new Circle(250, 620, 15);

