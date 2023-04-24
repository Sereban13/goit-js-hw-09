const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const body = document.body;

let colorId;

startBtn.addEventListener('click', colorizer);
stopBtn.addEventListener('click', colorizerStop);

function colorizer () {
    colorId = setInterval(getRandomHexColor, 1000);
    startBtn.disabled = true;
}

function colorizerStop () {
    clearInterval(colorId);
    startBtn.disabled = false;
}

function getRandomHexColor() {
    body.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
    return body.style.backgroundColor;
    
}
