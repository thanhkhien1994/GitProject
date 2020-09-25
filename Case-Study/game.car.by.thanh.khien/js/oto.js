let score = 0;
let level = 1;
function Car(x, y) {
    this.x = x;
    this.y = y;
    this.speed = 1;
    this.img = new Image();
    this.img.src = "image/oto.png";

    this.draw = function () {
        ctx.drawImage(this.img, this.x, this.y, 50, 50);
        if (this.y >= 700) {
            this.y = this.getY();
            this.x = this.getX();
            score++;
            if (score%10===0){
                level++;
            }
        }
        this.move();
    }
    this.move = function () {
        this.y += (this.speed+level);
    }
    this.getX = function () {
        let myArrayX = [0, 50, 100, 150, 200, 250];
        return myArrayX[Math.floor(Math.random() * myArrayX.length)];
    }
    this.getY = function (){
        let myArrayY = [-500, -700, -800, -300, -400];
        return  myArrayY[Math.floor(Math.random() * myArrayY.length)];
    }
}

let oto = [];
loadOto();
function loadOto() {
    oto[0] = new Car(0, -300);
    oto[1] = new Car(50, -100);
    oto[2] = new Car(100, -800);
    oto[3] = new Car(150, -300);
    oto[4] = new Car(200, -400);
    oto[5] = new Car(250, -500);
    oto[6] = new Car(200, -100);
    oto[7] = new Car(150, -350);
    oto[8] = new Car(100, -300);
}