let c = document.getElementById("_canvas");
let ctx = c.getContext("2d");

function update() {
    ctx.clearRect(0, 0, c.width, c.height);
    for (let i = 0; i < way.length; i++) {
        way[i].draw();
        way[i].move();
    }
    moto.draw();
    for (let j = 0; j < oto.length; j++) {
        oto[j].draw();
        oto[j].move();
        oto[j].getX();
        oto[j].getY();
        CarsS2Bike(oto[j], moto)
    }
    drawText();
}
setInterval(update, 100/6);

function drawText(){
    ctx.font = "20px Arial";
    ctx.fillText(`Score: ${score} Level ${level}`, 300, 50);
}

function CarsS2Bike(car, biker) {
    let ngang = Math.abs((biker.x + 25) - (car.x+25)) < 50;
    let doc = Math.abs((biker.y + 25) - (car.y+25)) < 50;
    if (ngang && doc) {
        window.location.reload();
        alert("game over!")
    }
}
