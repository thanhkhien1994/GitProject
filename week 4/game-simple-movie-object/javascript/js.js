function Pikachu(img, top, left, size) {
    this.img = img;
    this.top = top;
    this.left = left;
    this.size = size;
    this.speed = 50 ;

    this.getElement = function () {
        return '<img width="'+ this.size + '"' +
            ' height="'+ this.size + '"' +
            ' src="' + this.img +'"' +
            ' style="top: '+this.top+'px; left:'+this.left+'px;position:absolute;" />';
    }
    this.moveRight = function (){
        this.left +=this.speed;
    }
    this.moveDown = function (){
        this.top +=this.speed;
    }
    this.moveLeft = function (){
        this.left += -this.speed;
    }
    this.moveUp = function (){
        this.left += -this.speed;
    }
}
var pikachu = new Pikachu("image/pikachu.png", 0,0,200);

function start(){
    let move = true;
    if(move){
        if(pikachu.left < window.innerWidth - pikachu.size){
            pikachu.moveRight();
        } else  if(pikachu.top < window.innerHeight - pikachu.size){
            pikachu.moveDown();
        }else move = false;
    }
    if(move == false){
        if(pikachu.left < window.innerWidth - pikachu.size){
            pikachu.moveLeft();
        } else  if(pikachu.top > window.innerHeight - pikachu.size){
            pikachu.moveUp();
        }else move = true;
    }
    document.getElementById('game').innerHTML = pikachu.getElement();
    setTimeout(start, 100);
}
start();