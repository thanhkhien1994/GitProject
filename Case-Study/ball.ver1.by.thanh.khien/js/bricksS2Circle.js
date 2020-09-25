function brickS2Circle(circle, brick) {
    let Ox = Math.abs(brick.x + brick.d / 2 - circle.x + circle.radius/2) < (brick.d + circle.radius) / 2;
    let Oy = Math.abs(brick.y + brick.r / 2 - circle.y + circle.radius/2) < (brick.r + circle.radius) / 2;
    if (Ox && Oy) {
        clearInterval(id);
        setTimeout(()=>{
            let reddy = confirm("bạn có muốn tiếp tục không");
            if (reddy) {
                score = 0;
                level = 1;
                isBricks();
                isCircle();
                id = setInterval(updateScreen, 1000 / 60);
            } else  {
                ctx.clearRect(0, 0, 1000, 1000);
                drawTextEndGame();
            }
        },500);
    }
}