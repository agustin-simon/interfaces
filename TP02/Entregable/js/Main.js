"use strict";

let canvas = document.querySelector("#canvas");
let ctx = canvas.getContext("2d");
let canvasWidth = canvas.width;
let canvasHeight = canvas.height;
let ret, mouseX , mouseY;
let seArrastra = false;
let tamaño, suma;

document.querySelector("#btn_empezar").addEventListener("click", iniciar_juego);

function iniciar_juego() {

    tamaño = document.querySelector("#val_tamaño").value;
    let longitud = tamaño;
    console.log(longitud);
    suma = Number(tamaño)+Number(4);
    tamaño = suma;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    document.querySelector("#val_tamaño").classList.remove('valor_tam');
    document.querySelector("#val_tamaño").classList.add('valor_tam_off');

    document.querySelector("#btn_empezar").classList.remove('btn_on');
    document.querySelector("#btn_empezar").classList.add('btn_off');

    document.querySelector("#canvas").classList.remove('canvas_off');
    document.querySelector("#canvas").classList.add('canvas_on');
    
    let tablero = new Tablero(longitud,longitud,canvasHeight, canvas.width ,ctx, tamaño);
    tablero.crear();
   
    crearFichas(longitud*longitud);

    let newMatriz = tablero.getMatriz();

    
    tablero.addFichaJugador(2,1);
    tablero.addFichaJugador(2,2);
    tablero.addFichaJugador(2,3);

    
    tablero.addFichaJugador(2,2);
    tablero.addFichaJugador(2,3);

    tablero.addFichaJugador(2,3);

    tablero.addFichaJugador(1,0);
    tablero.addFichaJugador(1,1);
    tablero.addFichaJugador(1,2);
    tablero.addFichaJugador(1,3);
 

    tablero.chequearGanador(0,3);

    console.log(newMatriz);

    tablero.drawFichas();
    tablero.draw();



    function crearFichas(cant) {
        for (let i = 0; i < cant; i++) {
            tablero.addFicha(crearFicha());  
        }
    }

    function crearFicha() {     
        let posX = Math.round(Math.random() * canvas.width);
        let posY = Math.round(Math.random() * canvas.height);
        let color = "#FFF";
        let ficha = new Ficha(posX, posY, 40, color, ctx, getImg('img/ficha.png'));
        return ficha;
    }

    function getImg(src) {
        let img = new Image();
        img.src = src;
        return img;
    }

    canvas.onmousedown = function(e) {
        ret = tablero.getUltimaFicha(e.layerX, e.layerY);  
        if(ret != null) {
            seArrastra = true;
            console.log("entra")
        } else {
            console.log("No hay objeto");
        }
    }

    function posicion_mouse(e) {
        mouseX = e.layerX;
        mouseY = e.layerY;    
        
        document.querySelector("#a").innerHTML = mouseX;
        document.querySelector("#b").innerHTML = mouseY;
        document.querySelector("#c").innerHTML = mouseX-mouseY;

        if(seArrastra) {        
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            tablero.drawFichas();        
            ret.setPosition(mouseX,mouseY);
            //tablero.drawCuadricula();
        }
    
    }

    function soltar_click(e) {
        seArrastra = false;   
        //tablero.drawCuadricula();
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        tablero.draw();
        tablero.drawFichas();
        if(ret) {
                //calcular_cuadro(e,2); 
        }
    }

    canvas.onmousemove = function(e){ 
        posicion_mouse(e); 
    };
    canvas.onmouseup= function(e){ 
        soltar_click(e);
    };

}


