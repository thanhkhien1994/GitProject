function Brick(x,y,d,r){
    this.x = x;
    this.y = y;
    this.d = d;
    this.r = r;
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
let d = 80;
let r = 29;
bricks[0] = new Brick(-666,0,d,r);
bricks[1] = new Brick(777,30,d,r);
bricks[2] = new Brick(-888,60,d,r);
bricks[3] = new Brick(999,90,d,r);
bricks[4] = new Brick(-111,120,d,r);
bricks[5] = new Brick(222,150,d,r);
bricks[6] = new Brick(-333,180,d,r);
bricks[7] = new Brick(444,210,d,r);
bricks[8] = new Brick(-555,240,d,r);
bricks[9] = new Brick(666,270,d,r);
bricks[10] = new Brick(-777,300,d,r);
bricks[11] = new Brick(888,330,d,r);
bricks[12] = new Brick(-999,360,d,r);
bricks[13] = new Brick(-123,390,d,r);
bricks[14] = new Brick(456,420,d,r);
bricks[15]= new Brick(-789,450,d,r);
