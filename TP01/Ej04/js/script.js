"use strict";

let ctx = document.querySelector("#canvas").getContext("2d");
let imageData = ctx.createImageData(canvas.width,canvas.height);
for(let x = 0; x < imageData.width; x++){
  for(let y = 0; y < imageData.height; y++){
      setPixel(imageData, x, y, 1504, 15, 0, 255);
  }
}

ctx.putImageData(imageData, 0, 0);

function setPixel(imageData,x , y, r, g, b, a){
  let index = (x + y * imageData.width) * 4;
  imageData.data[index+0] = r;
  imageData.data[index+1] = g;
  imageData.data[index+2] = b;
  imageData.data[index+3] = a;
}