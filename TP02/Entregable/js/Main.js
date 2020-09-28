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
    
    let jugadorUno = new Jugador("Roberto");
    let jugadorDos = new Jugador("Agustin");

    let tablero = new Tablero(longitud,longitud,canvasHeight, canvas.width ,ctx, tamaño);
    
    let juego = new Juego(jugadorUno,jugadorDos, tablero);

    juego.comenzarJuego(1*1);
   
   /* juego.playJugadorUno(0);
    juego.playJugadorDos(1);

    juego.playJugadorUno(1);
    juego.playJugadorDos(2);
    juego.playJugadorDos(2);

    juego.playJugadorDos(3);
    juego.playJugadorDos(3);
    juego.playJugadorDos(3);

    juego.playJugadorUno(2);

    juego.playJugadorUno(3);*/
    

    /*let newMatriz = tablero.getMatriz();

    console.log(newMatriz);*/



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
        ctx.clearRect(0, 0, canvas.width, canvas.height);        
        tablero.draw();
        tablero.drawFichas();
        if(ret) {
             
            let cuadrosA = tablero.getCuadrosAncho();
            let cuadrosL = tablero.getCuadrosLargo();
            let fin_pos = cuadrosA.length-1;
            let pos_colum = 0;

            for (let i = 0; i < cuadrosA.length; i++) {
                if(e.layerX > cuadrosA[i] && e.layerX < cuadrosA[i+1]) {
                    pos_colum = i;
                    break;
                } 
            }          

            ctx.clearRect(0, 0, canvas.width, canvas.height);     

            let y = tablero.getFinTablero() - (tablero.getValor()/2);

            ret.setPosition(20,y)
            
            console.log(cuadrosL[cuadrosL.length-1]);


            //console.log("Posicion:" + pos_colum)
            console.log(cuadrosL[0])
          if(e.layerX < cuadrosA[cuadrosA.length-1]) {

                if(ret.getTipo() == "r") {
                    console.log("rojo")
                juego.playJugadorUno(pos_colum); 
                } 
                else {
                    console.log("azul")
                juego.playJugadorDos(pos_colum);
                }

          }
            tablero.drawFichas();        
            
        }
        let newMatriz = tablero.getMatriz();

        console.log(newMatriz);
    }
    
    canvas.onmousemove = function(e){ 
        posicion_mouse(e); 
    };
    canvas.onmouseup= function(e){ 
        soltar_click(e);
    };
    
}



    /*function crearFichas(cant) {
        for (let i = 0; i < cant; i++) {
            tablero.addFicha(crearFicha());  
        }
    }*/

    /*function crearFicha() {     
        let posX = Math.round(Math.random() * canvas.width);
        let posY = Math.round(Math.random() * canvas.height);
        let color = "#FFF";
        let ficha = new Ficha(posX, posY, 40, color, ctx, getImg('img/ficha.png'));
        return ficha;
    }*/

    /*function getImg(src) {
        let img = new Image();
        img.src = src;
        return img;
    }*/

