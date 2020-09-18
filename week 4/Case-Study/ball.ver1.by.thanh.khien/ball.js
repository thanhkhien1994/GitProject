let score = 0;
let level = 1;

function Circle(x, y, r){
    this.x = x;
    this.y = y;
    this.radius = r;
    this.dx = 0;
    this.dy = 0;

    this.drawCircle = function (){
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2*Math.PI);
        ctx.fillStyle = "red";
        ctx.fill();
        ctx.closePath();
        this.move();
    }

    this.move = function (){
        this.x += this.dx;
        this.dx = 0;
        this.y += this.dy;
        this.dy = 0;
        this.edgeCollisions();
    }

    this.edgeCollisions = function (){
        if(this.x + this.radius >= 500) this.x = 500 - this.radius;
        if(this.y + this.radius >= 630) this.y = 630 - this.radius;
        if(this.x - this.radius <= 0) this.x = this.radius;
        if(this.y - this.radius <= -1){
            this.y = 650 + this.radius;
            score ++;
            switch(score){
                case 2:
                    level++;
                    ctx.fillStyle = "blue";
                    break;
                case 4:
                    level++;
                    ctx.fillStyle = "yellow";
                    break;
                case 6:
                    level++;
                    ctx.fillStyle = "black";
                    break;
                case 8:
                    level++;
                    ctx.fillStyle = "while";
                    break;
                case 10:
                    level++;
                    ctx.fillStyle = randomColor();
                    break;
            }
        }
    }
}
let circle = new Circle(250,620, 15);

function moveKey(e){
    switch (e.keyCode){
        case 68:
            circle.dx = 30;
            circle.dy = 0;
            break;
        case 65:
            circle.dx = -30;
            circle.dy = 0;
            break;
        case 87:
            circle.dx = 0;
            circle.dy = -30;
            break;

        case 83:
            circle.dx = 0;
            circle.dy = 30;
            break;
    }
}
window.addEventListener("keydown", moveKey);
