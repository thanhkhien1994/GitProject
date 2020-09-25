function moveKey(e) {
    switch (e.keyCode) {
        case 68:
            circle[0].dx = 30;
            circle[0].dy = 0;
            break;
        case 65:
            circle[0].dx = -30;
            circle[0].dy = 0;
            break;
        case 87:
            circle[0].dx = 0;
            circle[0].dy = -30;
            break;

        case 83:
            circle[0].dx = 0;
            circle[0].dy = 30;
            break;
    }
}
window.addEventListener("keydown", moveKey);

function keyStartGame(evt){
    switch (evt.keyCode){
        case 13:
        case 32:
            alert("Pause");
            break;
    }
}
window.addEventListener("keydown", keyStartGame);