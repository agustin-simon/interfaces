"use strict";

let ctx = document.getElementById("canvas").getContext("2d");
ctx.fillStyle = "rgba(0, 128, 0)";
ctx.beginPath();
ctx.rect(0, 0, canvas.width,canvas.height);
ctx.shadowColor(0, 0, canvas.width,canvas.height);
ctx.fill();
ctx.closePath();

