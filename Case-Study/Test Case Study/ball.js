let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");

function Circle(x, y, r){
    this.x = x;
    this.y = y;
    this.radius = r;
    this.dx = 0;
    this.dy = 0;

    this.drawCircle = function (){
        this.move();
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2*Math.PI);
        ctx.fill();
        ctx.closePath();
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
        if(this.y + this.radius >= 650) this.y = 650 - this.radius;
        if(this.x - this.radius <= 0) this.x = this.radius;
        if(this.y - this.radius <= 0) this.y = this.radius;
    }

    this.rgbBall = function (){

    }
}
let circle = new Circle(250,650, 10);

function moveKey(evt){
    switch (evt.keyCode){
        case 39:
            circle.dx = 10;
            circle.dy = 0;
            break;
        case 37:
            circle.dx = -10;
            circle.dy = 0;
            break;
        case 38:
            circle.dx = 0;
            circle.dy = -10;
            break;
        case 40:
            circle.dx = 0;
            circle.dy = 10;
            break;
    }
}
window.addEventListener("keydown", moveKey);

function updateScreen(){
    ctx.clearRect(0, 0, 500, 650);
    circle.drawCircle();
    circle.edgeCollisions();

    brick.drawBrick();
    brick4.drawBrick();
    brick2.drawBrick();
    brick3.drawBrick();


}
setInterval(updateScreen, 33);

