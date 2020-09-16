"use strict";

let canvas = document.querySelector("#canvas");
let ctx = canvas.getContext('2d');
let canvasWidth = canvas.width;
let canvasHeight = canvas.height;
let circle;

añadirCirculo();

canvas.onmousemove = function(e) {
    let val1 = circle.getPosY();
    let val2 = circle.getPosX();
    let d1 =  Math.sqrt(Math.pow(e.layerX-val2, 2)+Math.pow(e.layerY-val1, 2));
    console.log(d1);
    if(circle.getRadius()<=d1) {
        document.querySelector("#a").innerHTML = "True";
    } else {
        document.querySelector("#a").innerHTML = "False";
    }
}


function añadirCirculo() {
    let posX = Math.round(Math.random() * canvasWidth);
    let posY = Math.round(Math.random() * canvasHeight);
    let color = "red";
    circle = new Circulo(posX, posY, 50, color, ctx);
    circle.draw();
}

circle.onmousedown = function(e) {
    let a = e.layerX;
    let b = e.layerY;
    document.querySelector("#a").innerHTML = a;
    document.querySelector("#b").innerHTML = b;
}
