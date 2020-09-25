function keyGame(e) {
    switch (e.keyCode) {
        case 38:
            direction = "up";
            if (myDot[0][5].y > 2) {
                for (let i = 0; i < myDot[0].length; i++) {
                    myDot[0][i].dy = -DY;
                    myDot[0][i].dx = 0;
                }
                tankGoUp(myDot[0][3].x, myDot[0][3].y, 0);
            }
            break;
        case 40:
            direction = "down";
            if (myDot[0][1].y + DY < CANVAS_HEIGHT - 2) {
                for (let i = 0; i < myDot[0].length; i++) {
                    myDot[0][i].dy = DY;
                    myDot[0][i].dx = 0;
                }
                tankGoDown(myDot[0][3].x, myDot[0][3].y, 0);

            }
            break;
        case 39:
            direction = "right";
            if (myDot[0][2].x + DX < CANVAS_WIDTH - 2) {
                for (let i = 0; i < myDot[0].length; i++) {
                    myDot[0][i].dx = DX;
                    myDot[0][i].dy = 0;
                }
                tankGoRight(myDot[0][3].x, myDot[0][3].y, 0);
            }
            break;
        case 37:
            direction = "left";
            if (myDot[0][0].x + 1 > 2) {
                for (let i = 0; i < myDot[0].length; i++) {
                    myDot[0][i].dx = -DX;
                    myDot[0][i].dy = 0;
                }
                tankGoLeft(myDot[0][3].x, myDot[0][3].y,0);
            }
            break;
        case 32:
            if (direction === "up") bullet[count] = new Bullet(myDot[0][3].x, myDot[0][3].y, 0, -SPEED);
            if (direction === "down") bullet[count] = new Bullet(myDot[0][3].x, myDot[0][3].y, 0, SPEED);
            if (direction === "left") bullet[count] = new Bullet(myDot[0][3].x, myDot[0][3].y, -SPEED, 0);
            if (direction === "right") bullet[count] = new Bullet(myDot[0][3].x, myDot[0][3].y, SPEED, 0);
            count++;
            break;
    }
}

window.addEventListener("keydown", keyGame);