let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");

function updateScreen(){
    ctx.clearRect(0, 0, 500, 650);
    circle.drawCircle();
    circle.edgeCollisions();
    for (let i = 0; i <bricks.length ; i++) {
        bricks[i].drawBrick();
        brickS2Circle(circle, bricks[i]);
    }
    drawScore();
}
setInterval(updateScreen, 1000/60);
function pause(){
   alert("Pause");
}
function keyStartGame(evt){
    switch (evt.keyCode){
        case 13:
        case 32: pause();
        break;
    }
}
window.addEventListener("keydown", keyStartGame);

function brickS2Circle(circle, brick){
    let ngang = Math.abs(brick.x + brick.d/2 - circle.x+5) < (brick.d+ circle.radius)/2;
    let doc = Math.abs(brick.y + brick.r/2 - circle.y+5) < (brick.r+ circle.radius)/2;
    if (ngang && doc) {
        window.location.reload();
        alert("End game ball with score: " + score);
    }
}

function randomColor() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    return "rgb(" + red + "," + blue + "," + green +")";
}

function moveKey(e) {
    switch (e.keyCode) {
        case 68:
            circle.dx = 30;
            circle.dy = 0;
            break;
        case 65:
            circle.dx = -30;
            circle.dy = 0;
            break;
        case 87:
            circle.dx = 0;
            circle.dy = -30;
            break;

        case 83:
            circle.dx = 0;
            circle.dy = 30;
            break;
    }
}
window.addEventListener("keydown", moveKey);
