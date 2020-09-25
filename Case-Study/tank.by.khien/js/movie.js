function tankGoLeft(x, y, index) {
    myDot[index][0] = new Dot(x - DX * 2, y);
    myDot[index][1] = new Dot(x - DX, y + DY);
    myDot[index][2] = new Dot(x, y + DY);
    myDot[index][4] = new Dot(x - DX, y - DY);
    myDot[index][5] = new Dot(x, y - DY);
}

function tankGoRight(x, y, index) {
    myDot[index][1] = new Dot(x + DX, y + DY);
    myDot[index][2] = new Dot(x + DX * 2, y);
    myDot[index][4] = new Dot(x, y - DY);
    myDot[index][0] = new Dot(x, y + DY);
    myDot[index][5] = new Dot(x + DX, y - DY);
}

function tankGoUp(x, y, index) {
    myDot[index][0] = new Dot(x - DX, y - DY);
    myDot[index][2] = new Dot(x + DX, y - DY);
    myDot[index][4] = new Dot(x - DX, y);
    myDot[index][5] = new Dot(x, y - DY * 2);
    myDot[index][1] = new Dot(x + DX, y);
}

function tankGoDown(x, y, index) {
    myDot[index][0] = new Dot(x - DX, y);
    myDot[index][1] = new Dot(x, y + DY * 2);
    myDot[index][2] = new Dot(x + DX, y + DY);
    myDot[index][4] = new Dot(x - DX, y + DY);
    myDot[index][5] = new Dot(x + DX, y);
}

function radarTank(){

}