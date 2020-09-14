function supperMan(img, x, y, width, height){
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.img = new Image();
    this.img.src = "img/ironman.png";

    this.drawImage = function (){
        cxt.drawImage(this.img, this.x, this.y, 50, 50);
    }
    this.hereMan = function (){

    }
}

let a = new supperMan();
