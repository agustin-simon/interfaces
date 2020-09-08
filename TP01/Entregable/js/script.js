"use strict";

document.addEventListener("DOMContentLoaded", iniciar_pagina);

function iniciar_pagina() {
    let btn_lapiz = document.querySelector("#btn_lapiz");
    let btn_borrar = document.querySelector("#btn_borrar");	 
    let pintar = Boolean(false);
    let herramienta;
    let tamano;

    let c = document.querySelector("#canvas");
		let ctx = c.getContext("2d");


		colocar_tamano(600,800);

		btn_lapiz.addEventListener("click", seleccionar_lapiz);
		btn_borrar.addEventListener("click", seleccionar_borrador);
		

		c.onmousedown = function (e){
			pintar = true;
			if( herramienta == "Lapiz" ){
				ctx.moveTo(e.pageX - c.offsetLeft, e.pageY - c.offsetTop);
			}
		}
		c.onmouseup = function(){
			pintar = false;
			ctx.beginPath();
			tamano = document.querySelector("#tamano").value;
		}
		c.onmousemove = function(e){
			if (pintar) {
				if (herramienta == "Lapiz") {
					ctx.lineTo(e.pageX - c.offsetLeft, e.pageY - c.offsetTop);
					ctx.lineWidth = document.querySelector("#tamano").value;
					ctx.strokeStyle = document.querySelector("#muestrario").value;
					ctx.stroke();
				}
				else if(herramienta == "Borrar"){
					ctx.beginPath();
					ctx.clearRect(e.pageX - c.offsetLeft, e.pageY - c.offsetTop,tamano,tamano);
				}
			}
		}
		c.onmouseout = function(){
			pintar = false;		
        };
        
        function seleccionar_lapiz() {
			herramienta = btn_lapiz.value;
		}

		function seleccionar_borrador() {
			herramienta = btn_borrar.value;			
		}

		function colocar_tamano(altura,ancho) {
			c.setAttribute("width", ancho);
			c.setAttribute("height", altura);
		}

}







