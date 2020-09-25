function Way(x, y) {
    this.x = x;
    this.y = y;
    this.dy = 2;
    this.img = new Image();
    this.img.src = "image/ways.png";

    this.draw = function () {
        for (let i = 0; i <8 ; i++) {
            ctx.drawImage(this.img, this.x, this.y -100 + i*100, 100, 100);
            ctx.drawImage(this.img, this.x+100, this.y -100 + i*100, 100, 100);
            ctx.drawImage(this.img, this.x+200, this.y -100 + i*100, 100, 100);
        }

        if (this.y >= 100) {
            this.y = -100;
        }
    }
    this.move = function () {
        this.y += (this.dy+level);
    }
}
let way = [];
way[0] = new Way(0, -100)
// way[1] = new Way(0, -800)
// way[2] = new Way(0, -700)
// way[3] = new Way(0, -600)
// way[4] = new Way(0, -500)
// way[5] = new Way(0, -400)
// way[6] = new Way(0, -300)
// way[7] = new Way(0, -200)
// way[8] = new Way(0, -100)
// way[9] = new Way(0, 0)
// way[10] = new Way(0, 100)
// way[11] = new Way(0, 200)
// way[12] = new Way(0, 300)
// way[13] = new Way(0, 400)
// way[14] = new Way(0, 500)
// way[15] = new Way(0, 600)
// way[16] = new Way(0, 700)
// way[17] = new Way(0, 800)
//----------------------------------//
// way[18] = new Way(100, -800)
// way[19] = new Way(100, -700)
// way[20] = new Way(100, -600)
// way[21] = new Way(100, -500)
// way[22] = new Way(100, -400)
// way[23] = new Way(100, -300)
// way[24] = new Way(100, -200)
// way[25] = new Way(100, -100)
// way[26] = new Way(100, 0)
// way[27] = new Way(100, 100)
// way[28] = new Way(100, 200)
// way[29] = new Way(100, 300)
// way[30] = new Way(100, 400)
// way[31] = new Way(100, 500)
// way[32] = new Way(100, 600)
// way[33] = new Way(100, 700)
// way[34] = new Way(100, 800)
// //---------------------------------//
// way[35] = new Way(200, -800)
// way[36] = new Way(200, -700)
// way[37] = new Way(200, -600)
// way[38] = new Way(200, -500)
// way[39] = new Way(200, -400)
// way[40] = new Way(200, -300)
// way[41] = new Way(200, -200)
// way[42] = new Way(200, -100)
// way[43] = new Way(200, 0)
// way[44] = new Way(200, 100)
// way[45] = new Way(200, 200)
// way[46] = new Way(200, 300)
// way[47] = new Way(200, 400)
// way[48] = new Way(200, 500)
// way[49] = new Way(200, 600)
// way[50] = new Way(200, 700)
// way[51] = new Way(200, 800)