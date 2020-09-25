function updateScreen() {
    ctx.clearRect(0, 0, 500, 650);
    circle[0].draw();
    circle[0].edgeCollisions();
    for (let i = 0; i < bricks.length; i++) {
        bricks[i].draw();
        brickS2Circle(circle[0], bricks[i]);
    }
    drawScore();
}
let id = setInterval(updateScreen, 1000 / 60);