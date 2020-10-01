let status = [];
for (let i = 0; i < 4; i++) {
    status[i] = true;
}

let updateScreen = setInterval(() => {
    ctx.clearRect(0, 0, c.width, c.height);
    textGame(`Score: ${score}`);
    for (let i = 0; i < bullet.length; i++) {
        bullet[i].draw();
    }

    for (let i = 0; i <= 28; i++) {
        for (let j = DX; j <= CANVAS_HEIGHT; j += DX) {
            caroY[i] = new BorderDot(0, j, CANVAS_WIDTH, j);
            caroY[i].draw();
            caroX[i] = new BorderDot(j, 0, j, CANVAS_HEIGHT);
            caroX[i].draw();
        }
    }
    updateBulletS2Tank();
    updateTankS2Tank();
    isBulletBom();
    for (let i = 0; i < myDot.length; i++) {
        if (!status[i]) continue;
        for (let j = 0; j < myDot[i].length; j++) {
            myDot[i][j].draw();
        }
    }
}, 1000 / 60);