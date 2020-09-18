let c = document.getElementById("myCanvas");
let cxt = c.getContext("2d");

let hinhtron = new Circle(10,10,100,"color");

function Circle(x, y, radius, color){
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;

    this.render = function(){
        cxt.beginPath();
        ctx.arc(this.x, this.y, this.radius,0,2*Math.PI);
        cxt.strokeStyle = "#00000";
        cxt.fill();
        cxt.stroke();
    }
}
hinhtron.render();