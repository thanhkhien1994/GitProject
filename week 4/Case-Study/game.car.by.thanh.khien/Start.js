function BatDau(){
    moto     = new XeTa(250,540);
    oto   = new XeDich(250,20);
    oto1 = new XeDich(330,-50);
    setInterval(update,20);
    window.addEventListener("keydown",moto.DieuKhienXe);
}