function BorderDot(x,y,z,r){
    this.x = x;
    this.y = y;
    this.z = z;
    this.r = r;
    this.draw = function (){
        ctx.beginPath();
        ctx.moveTo(x,y);
        ctx.lineTo(z,r);
        ctx.strokeStyle = "pink";
        ctx.stroke();
        ctx.closePath();
    }
}
let caroY = [];
let caroX = [];