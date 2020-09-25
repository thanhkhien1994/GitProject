function drawScore(){
    ctx.beginPath();
    ctx.font = "30px Arial";
    ctx.fillStyle = "yellow";
    ctx.fillText(`Score: ${score} Level: ${level}`,20,30,150);
    ctx.closePath();
}

function drawTextEndGame(){
    ctx.beginPath();
    ctx.font = "30px Arial";
    ctx.fillStyle = "red";
    ctx.fillText(`Score: ${score} Level: ${level}`,0,300,150);
    ctx.closePath();
}
