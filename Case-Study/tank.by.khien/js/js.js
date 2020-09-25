function updateBulletS2Tank() {
    for (let i = 0; i < bullet.length; i++) {
        for (let j = 1; j < myDot.length; j++) {
            if (!status[j]) continue;
            for (let k = 0; k < myDot[j].length; k++) {
                let Oy = Math.abs(bullet[i].y - myDot[j][k].y) < (bullet[i].r + myDot[j][k].r) / 2;
                let Ox = Math.abs(bullet[i].x - myDot[j][k].x) < (bullet[i].d + myDot[j][k].d) / 2;
                if (Ox && Oy) {
                    status[j] = false;
                    ++score;
                    setTimeout(() => {
                        status[j] = true;
                    }, 10000);
                    bulletBom = true;
                    indexBullet = i;
                }
            }
        }
    }
}

function updateTankS2Tank() {
    for (let i = 0; i < myDot[0].length; i++) {
        for (let j = 1; j < myDot.length; j++) {
            if (!status[j]) continue;
            for (let k = 0; k < myDot[j].length; k++) {
                let Ox = Math.abs(myDot[0][i].x - myDot[j][k].x) <= (myDot[0][i].d + myDot[j][k].d) / 2;
                let Oy = Math.abs(myDot[0][i].y - myDot[j][k].y) <= (myDot[0][i].r + myDot[j][k].r) / 2;
                if (Ox && Oy) {
                    gameOver();
                }
            }
        }
    }
}

function gameOver() {
    clearInterval(updateScreen);
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    textEndGame();
}

function isBulletBom(){
    if(bulletBom){
        if(direction === "up"){
            bullet[indexBullet].dy = 0;
            setTimeout(()=>{
                bullet[indexBullet].dy = -SPEED;
                bullet[indexBullet].color  = "red";
                bulletBom = false;
            },50);
        }
        if(direction === "down"){
            bullet[indexBullet].dy = 0;
            setTimeout(()=>{
                bullet[indexBullet].dy = SPEED;
                bullet[indexBullet].color  = "red";
                bulletBom = false;
            },50);
        }
        if(direction === "right"){
            bullet[indexBullet].dx = 0;
            setTimeout(()=>{
                bullet[indexBullet].dx = SPEED;
                bullet[indexBullet].color  = "red";
                bulletBom = false;
            },50);
        }
        if(direction === "left"){
            bullet[indexBullet].dx = 0;
            setTimeout(()=>{
                bullet[indexBullet].dx = -SPEED;
                bullet[indexBullet].color  = "red";
                bulletBom = false;
            },50);
        }
        bullet[indexBullet].color  = "black";

    }
}