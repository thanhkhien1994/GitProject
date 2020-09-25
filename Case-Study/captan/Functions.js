let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
let setinterVal;
let count = 0;
let level = 1;
let backGroundMusic = new Audio("sound/trafficsound.mp3");
let carHitSound = new Audio("sound/NFF-car-hit.wav");
let levelUpSound = new Audio("sound/NFF-coin-04.wav");
let countSpace = 0;

const keyLeft =37;
const keyUp = 38;
const keyRight = 39;
const keyDown = 40;
const enterBtn = 13;
const spaceBtn = 32;
const pixel = 25;



window.addEventListener("keydown",movingHuman);
window.addEventListener("keyup",stopMoving);
window.addEventListener("keypress",confirmStartGame);


function showStartScreen(){
    ctx.font = "45px SuperLegendBoy";
    ctx.fillText("Cpt.AMERICA",50 ,80);
    ctx.font = "45px SuperLegendBoy";
    ctx.fillText("Helper",150 ,130);
    ctx.font = pixel + "px SuperLegendBoy";
    ctx.fillText("Press SPACE",125  ,300);
    ctx.font = pixel + "px SuperLegendBoy";
    ctx.fillText("to play",185,327);
    confirmStartGame();
}

function confirmStartGame(evt) {
    if (evt.keyCode === spaceBtn){
        countSpace++;
        if (countSpace === 1){
            startGame();
        }

    }

}

function startGame() {
        backGroundMusic.play();
        setTimeout(backGroundMusic.play,10);
        human = new Human(image,250,602,32,48);
        cars[0] = new Car(37);
        cars[1] = new Car(160);
        cars[2] = new Car(280);
        cars[3] = new Car(400);
        cars[4] = new Car(497);
        cars[5] = new Car(540);
        for (let i = 0; i < cars.length; i++){
            cars[i].show();
        }
        setinterVal = setInterval(updateGameScreen,20);


}


function updateGameScreen() {
    ctx.clearRect(0,0,canvas.width,canvas.height);

    for (let i = 0; i < cars.length; i++){
        if (!human.inTerSect(cars[i])){
            cars[i].carPosition();
            cars[i].drawCar();
            cars[i].movingCar();

        }else {
            carHitSound.play();
            stopGame();
            backGroundMusic.pause();

        }
    }
    human.huManPosition();
    human.drawImage();
    handleHumanFrame();
    changeLevel();
    currentScore();
}


function stopGame() {
    clearInterval(setinterVal);
    alertGameOver();
}


function resetGame(evt) {
    if (evt.keyCode === enterBtn){
        location.reload();
    }
}


function changeLevel() {
    if (human.y < 0 - human.height){
        human.y = canvas.height - human.height;
        alertLevelUp();
        level += 0.5;
        count+=10;
    }
}

function alertLevelUp() {
    ctx.font = pixel + "px SuperLegendBoy";
    ctx.fillText("Level up",200,50);
    levelUpSound.play();
}

function currentScore() {
    ctx.font = "15px SuperLegendBoy";
    ctx.fillText("Score",430,20);
    ctx.font = "22px SuperLegendBoy";
    ctx.fillText(count,445,50);
}

function alertGameOver() {
    ctx.font = pixel + "px SuperLegendBoy";
    ctx.fillText("GAME",215,300);
    ctx.font = pixel + "px SuperLegendBoy";
    ctx.fillText("OVER",215,326);
    ctx.font = "16px SuperLegendBoy";
    ctx.fillText("Press ",185,360);
    ctx.font = "20px SuperLegendBoy";
    ctx.fillText("ENTER ",255,360);
    ctx.font = "16px SuperLegendBoy";
    ctx.fillText("to retry ",220,380);
    window.addEventListener("keypress",resetGame);
}




