let canvas = document.querySelector('#canvas');
let context = canvas.getContext('2d');
let canvasWidth = canvas.width;
let canvasHeight = canvas.height;

let figures = [];

function addFigure() {
    if (Math.random() > 0.3) {
        addRectangle();
    } else {
        addCircle();
    } 

    drawFigures();
}

function drawFigures() {
    clearCanvas();
    for (let i = 0; i < figures.length; i++) {
        figures[i].draw(context);
    }
}

function addRectangle() {
    let posX = Math.round(Math.random() * canvasWidth);
    let posY = Math.round(Math.random() * canvasHeight);
    let color = randomGradiente();
    let random = Math.random()*30;
    let rect = new Rectangulo(posX, posY, random, random, color, context);
    figures.push(rect);
}

function addCircle() {
    let posX = Math.round(Math.random() * canvasWidth);
    let posY = Math.round(Math.random() * canvasHeight);
    let color = randomGradiente();
    let random = Math.random()*50;
    let circle = new Circulo(posX, posY, random, color, context);
    figures.push(circle);
}

// Evento temporal para agregar figuras
function addFigures() {
    addFigure();
    if (figures.length < 30) {
        setTimeout(addFigures, 333);
    }
}

setTimeout(() => {
    addFigures();
}, 333)
// Fin Evento temporal para agregar figuras

function randomRGBA() {
    let r = Math.round(Math.random() * 255);
    let g = Math.round(Math.random() * 255);
    let b = Math.round(Math.random() * 255);
    let a = 255;
    return `rgba(${r}, ${g}, ${b}, ${a})`;
}

function randomImage() {   
    let img = new Image();
    img.src = "img/img.jpg";
    let pat = context.createPattern(img, "repeat");
    return pat;
}

function randomGradiente() {
    let gradiente = context.createLinearGradient(0, 0, 170, 0);
    let color1 = randomRGBA();
    let color2 = randomRGBA();
    gradiente.addColorStop(0, color1);
    gradiente.addColorStop(1, color2); 
    console.log(color1);
    console.log(color2);
    return gradiente;
}

function clearCanvas() {
    context.fillStyle = '#F8F8FF';
    context.fillRect(0, 0, canvasWidth, canvasHeight);
}