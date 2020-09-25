function textGame(text){
    ctx.beginPath();
    ctx.font = "20px Arial";
    ctx.fillStyle = "blue";
    ctx.fillText(text, 20,20,200);
    ctx.closePath();
}

function textEndGame(){
    ctx.beginPath();
    ctx.font = "50px Arial";
    ctx.fillStyle = "blue";
    ctx.fillText(`Game Over!`, 100,350);
    ctx.closePath();
}


