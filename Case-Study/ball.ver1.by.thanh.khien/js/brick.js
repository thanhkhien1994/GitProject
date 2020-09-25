function Brick(x,y){
    this.x = x;
    this.y = y;
    this.d = 80;
    this.r = 29;
    this.speed = 5;
    this.draw = function (){
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
