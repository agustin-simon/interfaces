"use strict";

let canvas = document.querySelector("#canvas");
let ctx = canvas.getContext("2d");
let canvasWidth = canvas.width;
let canvasHeight = canvas.height;
let ret, mouseX , mouseY;
let seArrastra = false;
let tamaño, suma;

document.querySelector("#btn_empezar").addEventListener("click", function () {    
    tamaño = document.querySelector("#val_tamaño").value;
    if(tamaño>3) {
        iniciar_juego();        
    } else if(tamaño == ""){
        alert("Debe ingresar un valor mayor o igual a 4");
    } else {
        alert("El valor ingresado debe ser mayor a 3");
    }
});

function iniciar_juego() {

    let longitud = tamaño;
    console.log(longitud);
    suma = Number(tamaño)+Number(4);
    tamaño = suma;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    let jugadorUno = new Jugador("Roberto");
    let jugadorDos = new Jugador("Agustin");

    let tablero = new Tablero(longitud,longitud,canvasHeight, canvas.width ,ctx, tamaño);
    
    let juego = new Juego(jugadorUno,jugadorDos, tablero);

    document.querySelector("#val_tamaño").classList.remove('valor_tam');
    document.querySelector("#val_tamaño").classList.add('valor_tam_off');

    document.querySelector("#btn_empezar").classList.remove('btn_on');
    document.querySelector("#btn_empezar").classList.add('btn_off');

    document.querySelector("#canvas").classList.remove('canvas_off');
    document.querySelector("#canvas").classList.add('canvas_on');

    document.querySelector("#btn_reiniciar").classList.remove('btn_off');
    document.querySelector("#btn_reiniciar").classList.add('btn_on');

    document.querySelector("#btn_reiniciar").addEventListener("click", function() {
        tablero.reiniciar();

        document.querySelector("#btn_reiniciar").classList.remove('btn_on');
        document.querySelector("#btn_reiniciar").classList.add('btn_off');

        document.querySelector("#btn_empezar").classList.remove('btn_off');
        document.querySelector("#btn_empezar").classList.add('btn_on');

        document.querySelector("#val_tamaño").classList.remove('valor_tam_off');
        document.querySelector("#val_tamaño").classList.add('valor_tam');
    });    

    juego.comenzarJuego(longitud*longitud);
   
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

            let val_rest = tablero.getValor()/2;
            let valor = 1;
            let valor_final = pos_colum + valor;

            let x = (tablero.getInicioTablero()+(tablero.getValor()*valor_final)) -val_rest ;

            let pos_vacia = calcularFila(pos_colum);
            console.log(pos_vacia)
            let y = (tablero.getInicioTablero() + (tablero.getValor()*pos_vacia)) - val_rest ;               

          if(e.layerX > cuadrosA[0] && e.layerX < cuadrosA[cuadrosA.length-1] && e.layerY < cuadrosL[0]) {

                if(ret.getTipo() == "r") {
                    console.log("rojo")
                juego.playJugadorUno(pos_colum); 
                } 
                else {
                    console.log("azul")
                juego.playJugadorDos(pos_colum);
                }

                ret.setPosition(x,y);

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

    function calcularFila(colum) {
        let matrix = tablero.getMatriz();
    
        for (let i = tablero.getColumnas()-1; i >=0 ; i--) {
            if(matrix[i][colum] == 0) {
                return i;            
            } 
        }
    }
    
}

