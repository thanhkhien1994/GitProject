function Brick(x,y,d,r){
    this.x = x;
    this.y = y;
    this.d = d;
    this.r = r;
    this.speed = 5;

    this.drawBrick = function (){
        ctx.fillRect(this.x, this.y, this.d, this.r );
        this.movieBrick();
    }
    this.movieBrick = function (){
        this.x += this.speed;
        this.restartHere();
    }
    this.restartHere = function (){
        if(this.x >= 500 - this.d) this.speed = -5;
        if(this.x <=0) this.speed = 5;
    }
}
let brick = new Brick(0,10,30,10);
let brick2 = new Brick(-400,100,30,10);
let brick3 = new Brick(-100,200,30,10);
let brick4 = new Brick(-200,300,30,10);




