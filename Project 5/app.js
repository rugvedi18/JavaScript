const red = document.querySelector('#red')
const green = document.querySelector('#green')
const blue = document.querySelector('#blue')
const yellow = document.querySelector('#yellow')

document.getElementById('red').onclick = changeRed;

function changeRed() {
    document.body.style.color = "red";
    return false;
}

document.getElementById('blue').onclick = changeBlue;

function changeBlue() {
    document.body.style.color = "blue";
    return false;
}

document.getElementById('green').onclick = changeGreen;

function changeGreen() {
    document.body.style.color = "green";
    return false;
}

document.getElementById('yellow').onclick = changeYellow;

function changeYellow() {
    document.body.style.color = "yellow";
    return false;
}