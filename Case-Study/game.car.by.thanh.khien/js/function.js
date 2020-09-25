let c = document.getElementById("_canvas");
let ctx = c.getContext("2d");
let isName = prompt("Nhập vào tên bạn").toUpperCase();
function update() {
    ctx.clearRect(0, 0, c.width, c.height);
    for (let i = 0; i < way.length; i++) {
        way[i].draw();
        way[i].move();
    }
    moto.draw();
    for (let j = 0; j < oto.length; j++) {
        oto[j].draw();
        oto[j].getX();
        oto[j].getY();
        CarsS2Bike(oto[j], moto);
    }
    drawText();
}
let id1 = setInterval(update, 100/6);

function drawText(){
    ctx.font = "20px Arial";
    ctx.fillText(`Score: ${score} Level ${level}`, 300, 50);
    ctx.fillText(`CHÀO ${isName}`, 300, 100);
    ctx.fillStyle = randomColor();
}

function CarsS2Bike(car, biker) {
    let ngang = Math.abs((biker.x + 25) - (car.x+25)) < 50;
    let doc = Math.abs((biker.y + 25) - (car.y+25)) < 50;
    if (ngang && doc) {
        alert(`${isName}, score: ${score}, level: ${level}`);
        clearInterval(id1);
        vuiChoiCoThuong();
        loadOto();
        level = 1;
        score = 0;
    }
}
function vuiChoiCoThuong(){
    let second = 3;
    let view = second+"";
    let id = setInterval(()=>{
        ctx.clearRect(400,100,200,200);
        ctx.font="50px Arial";
        ctx.fillText(view,400,300,200);
        second--;
        view = second+"";
        if (second<0) {
            clearInterval(id);
            if(confirm("Bạn có muốn tiếp tục không")){
                isName = prompt("Nhập vào tên bạn").toUpperCase();
                id1 = setInterval(update, 100/6);
            }else {
                clearInterval(id1);
                ctx.clearRect(0, 0, c.width, c.height);
            }
        }
    },1000);
}
function randomColor() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    return "rgb(" + red + "," + blue + "," + green + ")";
}