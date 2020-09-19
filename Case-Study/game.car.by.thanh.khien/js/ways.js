function Way(x, y) {
    this.x = x;
    this.y = y;
    this.dy = 5;
    this.img = new Image();
    this.img.src = "image/ways.png";

    this.draw = function () {
        ctx.drawImage(this.img, this.x, this.y, 100, 100);
        if (this.y === 700) {
            this.y = -100;
        }
    }
    this.move = function () {
        this.y += this.dy;
    }
}
let way = [];
way[0] = new Way(0, -100)
way[1] = new Way(0, 0)
way[2] = new Way(0, 100)
way[3] = new Way(0, 200)
way[8] = new Way(0, 300)
way[4] = new Way(0, 400)
way[5] = new Way(0, 500)
way[6] = new Way(0, 600)
way[7] = new Way(0, 700)
way[9] = new Way(0, 800)
//----------------------------------//
way[10] = new Way(100, -100)
way[11] = new Way(100, 0)
way[12] = new Way(100, 100)
way[13] = new Way(100, 200)
way[18] = new Way(100, 300)
way[14] = new Way(100, 400)
way[15] = new Way(100, 500)
way[16] = new Way(100, 600)
way[17] = new Way(100, 700)
way[19] = new Way(100, 800)
//---------------------------------//
way[20] = new Way(200, -100)
way[21] = new Way(200, 0)
way[22] = new Way(200, 100)
way[23] = new Way(200, 200)
way[28] = new Way(200, 300)
way[24] = new Way(200, 400)
way[25] = new Way(200, 500)
way[26] = new Way(200, 600)
way[27] = new Way(200, 700)
way[29] = new Way(200, 800)