var moto;
function XeTa(x,y) {
    this.x       = x;
    this.y       = y;
    this.tocdo   = 0;

    this.img     = new Image();
    this.img.src ="image/xemay.png";



    this.veXeTa = function () {
        ctx.drawImage(this.img,this.x,this.y,50,50);
    }
    this.Vitrixe = function () {     //------xét vị trí mới của xe khi di chuyển
        this.x=this.x+this.tocdo;
    }

    this.DieuKhienXe = function(evt) {
        switch (evt.keyCode) {
            case 37:
                moto.tocdo = -50;
                break;
            case 39:
                moto.tocdo = 50;
                break;
        }

        moto.Vitrixe();

    }
    this.vachamkhung = function () {
        if (this.x === -50){
            this.x += 50;
        } else if( this.x === 500){
            this.x += -50;
        }
    }

}