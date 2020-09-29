"use strict";

//Cuando el DOM carga se ejecuta la pagina
document.addEventListener("DOMContentLoaded", iniciar_pagina);

function iniciar_pagina() {

<<<<<<< HEAD
	    /* Obtenemos todos los elementos del DOM HTML mediante el ID con 'QuerySelector'*/

	    //Obtenemos todos los elementos del DOM HTML mediante el ID con 'QuerySelector'		
>>>>>>> master
		let img_original; 
		let pintar = Boolean(false);
		let herramienta;
		let tamano;	
		let c = document.querySelector("#canvas");
		let ctx = c.getContext("2d");

		/*Funcion que setea el tamaño del canvas*/
		colocar_tamano(600,800);

		/*Agregamos un determinado evento a los elementos previamente seleccionados*/
		let ctx = c.getContext("2d");	

		//Funcion que setea el tamaño del canvas
		colocar_tamano(600,800);		

		//Agregamos un determinado evento a los elementos previamente seleccionados
		document.querySelector("#btn_lapiz").addEventListener("click", seleccionar_lapiz);
		document.querySelector("#btn_borrar").addEventListener("click", seleccionar_borrador);
		document.querySelector("#btn_reiniciar").addEventListener("click", reiniciar);
		document.querySelector("#btn_descargar").addEventListener("click", descargar_imagen);
		document.querySelector('#btn_brillo').addEventListener("click", aplicar_brillo);
		document.querySelector('#btn_cargar_imagen').addEventListener("click", function(e){
			document.querySelector(".inp_cargar").click();
			cargar_imagen();});
		document.querySelector("#btn_sepia").addEventListener("click", function(){aplicar_filtro(btn_sepia.value)});
		document.querySelector("#btn_negativo").addEventListener("click", function(){aplicar_filtro(btn_negativo.value)});
		document.querySelector("#btn_binarizacion").addEventListener("click", function(){aplicar_filtro(btn_binarizacion.value)});
		document.querySelector("#btn_saturacion").addEventListener("click", function(){aplicar_filtro(btn_saturacion.value)});
		document.querySelector("#btn_blur").addEventListener("click", function(){aplicar_filtro(btn_blur.value)})


		//Cuando hacemos click la variable 'pintar' se va a poner 'true' 
		c.onmousedown = function (e){
			pintar = true;			
		}
		//Cuando soltamos el click la variable 'pintar' se va a poner 'false' 
		c.onmouseup = function(){
			pintar = false;
			ctx.beginPath();
			tamano = document.querySelector("#tamano").value;	
			img_original = ctx.getImageData(0, 0, c.width, c.height);			
		}
		//Cuando arrastramos el click la variable, verifica que herramienta esta activa y ejecuta su respectiva accion (pintar/borrar) 
		c.onmousemove = function(e){
			let x = e.pageX - c.offsetLeft;
			let y = e.pageY - c.offsetTop;
			
			
			if (pintar) {
				//Lapiz
				if (herramienta == "Lapiz") {
					ctx.lineTo(e.pageX - c.offsetLeft, e.pageY - c.offsetTop);
					ctx.lineWidth = document.querySelector("#tamano").value;
					ctx.strokeStyle = document.querySelector("#muestrario").value;
					ctx.stroke();
				}
				//Borrador
				else if(herramienta == "Borrar"){
					ctx.lineTo(e.pageX - c.offsetLeft, e.pageY - c.offsetTop);
					ctx.lineWidth = document.querySelector("#tamano").value;
					ctx.strokeStyle = "#FFFFFF";
					ctx.stroke();
				}
			}
		}
		//Cuando soltamos click la variable 'pintar' se va a poner 'false' 	
		c.onmouseout = function(){
			pintar = false;		
		};

<<<<<<< HEAD
=======

>>>>>>> master
		//Filtros
		function aplicar_filtro(filtro) {

			let imagen_original = img_original;
			if(imagen_original != null) {
				ctx.putImageData(imagen_original,0,0);				
			}
			let imageData = ctx.getImageData(0,0,canvas.width,canvas.height);
<<<<<<< HEAD
			
=======

>>>>>>> master
			//Filtro Negativo
			if(filtro == "Negativo") {			
					let index;		
					for(let y = 0; y < canvas.height; y++){
						for(let x = 0; x < canvas.width; x++){
							index = (x + y * imageData.width) * 4;
							imageData.data[index+0] = 255 - imageData.data[index+0];
							imageData.data[index+1] = 255 - imageData.data[index+1];
							imageData.data[index+2] = 255 - imageData.data[index+2];      
						}
					}			
					ctx.putImageData(imageData, 0, 0);					
			}

			//Filtro Sepia
			if(filtro == "Sepia") {				
				let index, r,g,b;				
	
				for(let y = 0; y < canvas.height; y++){
					for(let x = 0; x < canvas.width; x++){
						index = (x + y * imageData.width) * 4;
						r = (getRed(imageData,x,y) * .393) + (getGreen(imageData,x,y) *.769) + (getBlue(imageData,x,y) * .189);						
						g = (getRed(imageData,x,y) * .349) + (getGreen(imageData,x,y) *.686) + (getBlue(imageData,x,y) * .168);
						b = (getRed(imageData,x,y) * .272) + (getGreen(imageData,x,y) *.534) + (getBlue(imageData,x,y) * .131);

						if(r>255) {
							r = 255;
						}
						if(g>255) {
							g = 255;
						}
						if(b>255) {
							b = 255;
						}

						imageData.data[index+0] = r;
                    	imageData.data[index+1] = g;
                   		imageData.data[index+2] = b;   
					}
				}				
				ctx.putImageData(imageData, 0, 0);				
			}

			//Filtro Binarizacion
			if(filtro == "Binarizacion") {			
				let index,r,g,b;				
	
				for(let y = 0; y < canvas.height; y++){
					for(let x = 0; x < canvas.width; x++){
						index = (x + y * imageData.width) * 4;

						r = getRed(imageData,x,y);
						g = getGreen(imageData,x,y);
						b = getBlue(imageData,x,y);
						
						let prom = (r+g+b)/3;
	
						imageData.data[index+0] = prom;
						imageData.data[index+1] = prom;
						imageData.data[index+2] = prom;   
					}
				}			
				ctx.putImageData(imageData, 0, 0);
			}

			//Filtro Saturacion
			if(filtro == "Aplicar Saturacion") {	
				let rango_saturacion = document.querySelector('#rango_saturacion').value;			
				let index;
				let contrast = rango_saturacion*2;
				contrast = (contrast/100) + 1;  
				var intercept = 152 * (1 - contrast);

				for(let y = 0; y < canvas.height; y++){
					for(let x = 0; x < canvas.width; x++){
						index = (x + y * imageData.width) * 4;

						imageData.data[index] = imageData.data[index]*contrast + intercept;
						imageData.data[index+1] = imageData.data[index+1]*contrast + intercept;
						imageData.data[index+2] = imageData.data[index+2]*contrast + intercept;
					}
				}	
				ctx.putImageData(imageData, 0, 0);
			}	
<<<<<<< HEAD
			
=======

>>>>>>> master
			//Filtro Blur
			if(filtro == "blur"){
				
				for (let x = 1; x < imageData.width-1; x++) {
					for (let y = 1; y < imageData.height-1; y++) {
						promedioMatriz(x, y, imageData);
					}
				}
	
				function promedioMatriz(x, y, imageData){
					let r = 0;
					let b = 0;
					let g = 0;
					
					r = (getRed(imageData, x-1, y-1) + getRed(imageData, x, y-1) + getRed(imageData, x+1, y-1)
					+ getRed(imageData, x-1, y) + getRed(imageData, x, y) + getRed(imageData, x+1, y)
					+ getRed(imageData, x-1, y+1) + getRed(imageData, x, y+1) + getRed(imageData, x+1, y+1))/9;
		
					g = (getGreen(imageData, x-1, y-1) + getGreen(imageData, x, y-1)+ getGreen(imageData, x+1, y-1) 
					+   getGreen(imageData, x-1, y) + getGreen(imageData, x, y) + getGreen(imageData, x+1, y)
					+   getGreen(imageData, x-1, y+1) + getGreen(imageData, x, y+1) + getGreen(imageData, x+1, y+1))/9;
			
					b = (getBlue(imageData, x-1, y-1) + getBlue(imageData, x, y-1) + getBlue(imageData, x+1, y-1)  
					+   getBlue(imageData, x-1, y) + getBlue(imageData, x, y) + getBlue(imageData, x+1, y+1)  
					+   getBlue(imageData, x-1, y+1) + getBlue(imageData, x, y+1) + getBlue(imageData, x+1, y+1))/9;
			
					let index = (x + y * imageData.width) * 4;
					imageData.data[index + 0] = r;
					imageData.data[index + 1] = g;
					imageData.data[index + 2] = b;
				}
		
				ctx.putImageData(imageData, 0, 0);
			}
			
			function getRed(imageData, x, y){
				let index = (x + y * imageData.width) * 4;
				return imageData.data[index+0];
			}
	
			function getGreen(imageData, x, y){
				let index = (x + y * imageData.width) * 4;
				return imageData.data[index+1];
			}
	
			function getBlue(imageData, x, y){
				let index = (x + y * imageData.width) * 4;
				return imageData.data[index+2];
			}			

		}		

<<<<<<< HEAD
		//Selecciona la herramienta lapiz
=======
		//Seleccionar la herramienta lapiz
>>>>>>> master
		function seleccionar_lapiz() {
			herramienta = btn_lapiz.value;
		}

		//Selecciona la herramienta de borrador
		function seleccionar_borrador() {
			herramienta = btn_borrar.value;			
		}

<<<<<<< HEAD
		//Coloca tamaño al canvas(altura,ancho)
=======
		//Colocar tamaño al canvas(altura,ancho)
>>>>>>> master
		function colocar_tamano(altura,ancho) {
			c.setAttribute("width", ancho);
			c.setAttribute("height", altura);
		}

<<<<<<< HEAD
		//Pone el lienzo en blanco
=======
		//Poner el lienzo en blanco
>>>>>>> master
		function reiniciar() {
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			ctx.restore();
			img_original = null;
		}

<<<<<<< HEAD
        //Descarga imagen 
=======
		//Descargar imagen 
>>>>>>> master
		function descargar_imagen() {	
			let link = document.querySelector('#link');
			link.setAttribute('download', 'dibujo.png');
			link.setAttribute('href', document.querySelector("#canvas").toDataURL("image/jpg"));
			link.click();
		}	

		//Aplica el filtro de brillo a la imagen del canvas
		function aplicar_brillo() {
			if(img_original != null) {
				ctx.putImageData(img_original,0,0);
			}
			let imageData = ctx.getImageData(0,0,canvas.width,canvas.height);			
			let valor = document.querySelector("#rango_brillo").value/1.5+20;			
			let index;

			for(let y = 0; y < canvas.height; y++){
                for(let x = 0; x < canvas.width; x++){
                    index = (x + y * imageData.width) * 4;
                    imageData.data[index+0] = obtener_brillo(imageData.data[index+0]+valor);
                    imageData.data[index+1] = obtener_brillo(imageData.data[index+1]+valor);
                    imageData.data[index+2] = obtener_brillo(imageData.data[index+2]+valor);      
                }
			}			
			ctx.putImageData(imageData, 0, 0);

			function obtener_brillo(valor){
				if(valor<0)  {
					return 0;
				}					
				if(valor>255) {
					return 255;
				}
				else {
					return valor;
				}					
			}
		}	
		
<<<<<<< HEAD

		//Carga una imagen del disco hacia el canvas
=======
		//Carga imagen desde el disco al canvas.
>>>>>>> master
		function cargar_imagen() {
			
			let input = document.querySelector('.inp_cargar');

			input.onchange = e => {
				let canvas = document.querySelector("#canvas");
				let context = canvas.getContext("2d");

				let file = e.target.files[0];
				let reader = new FileReader();
				reader.readAsDataURL(file); 
	
				reader.onload = readerEvent => {
					let content = readerEvent.target.result; 
					let image = new Image();
					image.src = content;
	
					image.onload = function () {
						let imageAspectRatio = (1.0 * this.height) / this.width;
						let imageScaledWidth = canvas.width;
						let imageScaledHeight = canvas.width * imageAspectRatio;
						let startWidth = 0;
						let startHeigh = 0;
						if (this.width < this.height) {
							imageAspectRatio = (1.0 * this.width) / this.height;
							imageScaledWidth = canvas.height * imageAspectRatio;
							imageScaledHeight = canvas.height;
							startWidth = (canvas.width / 2) - (imageScaledWidth / 2);
						} else {
							startHeigh = (canvas.height / 2) - (imageScaledHeight / 2);
						}	
						context.drawImage(this, startWidth, startHeigh, imageScaledWidth, imageScaledHeight);						
						let imageData = context.getImageData(0, 0, c.width, c.height);					
						ctx.putImageData(imageData, 0, 0);
						img_original = ctx.getImageData(0, 0, c.width, c.height);	
					}
				}
			}			
		}

		
}







