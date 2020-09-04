function BatDau() {
    moto = new Moto(250, 550);
    oto = new Oto(0, 0);
    oto1 = new Oto(50, 0);
    oto2 = new Oto(150, 0);
    oto3 = new Oto(250, 0);
    oto4 = new Oto(350, 0);
    oto5 = new Oto(450, 0);
    //---------------------------// 
    var gameOver = true;
    if (gameOver) {
        setInterval(update, 20);
    }
    window.addEventListener("keydown", moto.keyEvent);
}
