function Brick(x,y){
    this.x = x;
    this.y = y;
    this.d = 80;
    this.r = 29;
    this.speed = 5;
    this.drawBrick = function (){
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.d, this.r );
        ctx.strokeStyle = "red";
        ctx.stroke();
        ctx.closePath();
        this.movieBrick();
    }
    this.movieBrick = function (){
        this.x += this.speed;
        this.restartHere();
    }
    this.restartHere = function (){
        if(this.x >= 1000 - this.d){
            this.speed = -(Math.random() * 5 + level*2);
            this.x = 900;
        }
        if(this.x <=-1000){
            this.speed = Math.random() * 5 + level*2;
            this.x = -900;
        }
    }
}
let bricks = [];
bricks[0] = new Brick(-666,0);
bricks[1] = new Brick(777,30);
bricks[2] = new Brick(-888,60);
bricks[3] = new Brick(999,90);
bricks[4] = new Brick(-111,120);
bricks[5] = new Brick(222,150);
bricks[6] = new Brick(-333,180);
bricks[7] = new Brick(444,210);
bricks[8] = new Brick(-555,240);
bricks[9] = new Brick(666,270);
bricks[10] = new Brick(-777,300);
bricks[11] = new Brick(888,330);
bricks[12] = new Brick(-999,360);
bricks[13] = new Brick(-123,390);
bricks[14] = new Brick(456,420);
bricks[15]= new Brick(-789,450);
