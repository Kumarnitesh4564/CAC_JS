const randomColor = function() {
    let hex = '0123456ABCDEF';
    let color = '#';
    for(let i=0; i<6; i++) {
        color+=hex[Math.floor((Math.random()*16))];
    }
    return color;
}
const body = document.body;
let intervalId = null;

document.querySelector('#start').addEventListener('click', function () {
    if (intervalId === null) {
        intervalId = setInterval(function () {
            body.style.backgroundColor = randomColor();
        }, 1000);
    }
});

document.querySelector('#stop').addEventListener('click', function () {
    clearInterval(intervalId);
    intervalId = null;
});