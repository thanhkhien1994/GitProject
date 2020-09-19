let score = 0;
let level = 1;
function Car(x, y) {
    this.x = x;
    this.y = y;
    this.speed = 2;
    this.img = new Image();
    this.img.src = "image/oto.png";

    this.draw = function () {
        ctx.drawImage(this.img, this.x, this.y, 50, 50);
        if (this.y === 700) {
            this.y = this.getY();
            this.x = this.getX();
            score++;
            switch (score){
                case 10:
                    level++;
                    break;
                case 20:
                    level++;
                    break;
                case 30:
                    level++;
                    break;
                case 40:
                    level++;
                    break;
                case 50:
                    level++;
                    break;
                case 60:
                    level++;
                    break;
                case 70:
                    level++;
                    break;
                case 80:
                    level++;
                    break;
                case 90:
                    level++;
                    break;
                case 100:
                    level++;
                    break;
            }
        }
    }
    this.move = function () {
        this.y += this.speed;
    }
    this.getX = function () {
        let myArrayX = [0, 50, 100, 150, 200, 250];
        return myArrayX[Math.floor(Math.random() * myArrayX.length)];
    }
    this.getY = function (){
        let myArrayY = [-500, -700, -800, -300, -400];
        return  myArrayY[Math.floor(Math.random() * myArrayY.length)];
    }
    this.randomSpeed = function (){
        Math.floor(Math.random() * 10);
    }
}

let oto = [];
oto[0] = new Car(0, -300);
oto[1] = new Car(50, -100);
oto[2] = new Car(100, -800);
oto[3] = new Car(150, -300);
oto[4] = new Car(200, -400);
oto[5] = new Car(250, -500);
oto[6] = new Car(200, -100);
oto[7] = new Car(150, -350);
oto[8] = new Car(100, -300);