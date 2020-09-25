"use strict";

let div = document.querySelector("#container");

document.onclick = function() {
    div.style.backgroundColor = getRandomColor();
}

div.onmouseover = function() {
    div.style.backgroundColor = getRandomColor();
}

document.onkeypress = function() {
    div.style.backgroundColor = getRandomColor();
}


function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }