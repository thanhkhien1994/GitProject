
let image = new Image();
image.src = "images/captainamerica.png";
let human;




let Human = function (img,x,y,width,height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.directionX = 0;
    this.directionY = 0;
    this.frameX = 0;
    this.frameY = 3;
    this.isMoving = false;
    this.width_one_third = this.width/3;
    this.width_two_third = this.width * 2/3;
    this.height_three_fourth = this.height * 3/4;

    this.drawImage = function () {
        ctx.drawImage(img, this.width * this.frameX, this.height * this.frameY,
            this.width, this.height, this.x, this.y, this.width, this.height);

    }

0
    this.huManPosition = function () {
        if (this.x + this.directionX >= 0 &&
            this.x + this.directionX <= canvas.width - this.width){
            this.x += this.directionX;
        }
        if (this.y + this.directionY <= canvas.height - this.height){
            this.y += this.directionY;
        }

    }



    this.inTerSect = function(cars) {
        let humanLeft = human.x + human.width_one_third;
        let humanRight = human.x + human.width_two_third;
        let humanTop = human.y + human.height_three_fourth;
        let humanBottom = human.y + (human.height);
        let carLeft = cars.x;
        let carRight = cars.x + (cars.width);
        let carTop = cars.y;
        let carBottom = cars.y + (cars.height);
        let intersect = true;
        if (humanLeft > carRight || humanRight < carLeft ||
            humanTop > carBottom || humanBottom < carTop){
            intersect = false;
        }

        return intersect;
    }
}

function movingHuman(evt) {
    switch (evt.keyCode) {
        case keyLeft:
            human.frameY = 1;
            human.directionX = -6;
            human.directionY = 0;
            human.isMoving = true;

            break;
        case keyUp:
            human.frameY = 3;
            human.directionX = 0;
            human.directionY = -6;
            human.isMoving = true;
            break;
        case keyRight:
            human.frameY = 2;
            human.directionX = 6;
            human.directionY = 0;
            human.isMoving = true;
            break;
        case keyDown:
            human.frameY = 0;
            human.directionX = 0;
            human.directionY = 6;
            human.isMoving = true;
            break;
    }

}

function stopMoving() {
    human.directionX = 0;
    human.directionY = 0;
    human.isMoving = false;

}

function handleHumanFrame() {
    if (human.frameX < 3 && human.isMoving) human.frameX++;
    else human.frameX = 0;

}









