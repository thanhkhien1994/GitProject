function update() {
    ctx.clearRect(0, 0, 500, 600);
    //--------------------------------------//
    oto.updateHere();
    oto.drawOto();
    // --------------------------------------//
    oto1.updateHere();
    oto1.drawOto();
    //-------------------------------------//
    oto2.updateHere();
    oto2.drawOto();
    //-------------------------------------//
    oto3.updateHere();
    oto3.drawOto();
    //-------------------------------------//
    oto4.updateHere();
    oto4.drawOto();
    //-------------------------------------//
    oto5.updateHere();
    oto5.drawOto();
    // -------------------------------------//
    moto.drawMoto();
    moto.collisionMoto();

    let count = 0;
    if ( oto.y == 500 && oto.x == moto.x ||
         oto1.y == 500 && oto1.x == moto.x ||
         oto2.y == 500 && oto2.x == moto.x||
         oto3.y == 500 && oto3.x == moto.x||
         oto4.y == 500 && oto4.x == moto.x||
         oto5.y == 500 && oto5.x == moto.x) {
        //console.log("Game Over!");
        let thongbao = confirm("Game over");
        if(thongbao){
            window.location.reload();
        }   
        
    }else count = count + 1;

    document.getElementById("score").innerHTML = count;

    // console.log("Moto x: ", moto.x);
    // console.log("Moto y: ", moto.y);
    console.log("Oto x: ", oto.x);
    // console.log("Oto y: ", oto.y);

}