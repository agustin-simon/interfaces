"use strict";

let canvas = document.querySelector("#canvas");
let ctx = canvas.getContext("2d");
let canvasWidth = canvas.width;
let canvasHeight = canvas.height;
let ret, mouseX , mouseY;
let seArrastra = false;
let tamaño, suma;
let turno = 0;

document.querySelector("#btn_empezar").addEventListener("click", function () {    
    tamaño = document.querySelector("#val_tamaño").value;
    if(tamaño>4 && tamaño<10) {
        iniciar_juego();        
    } else if(tamaño == ""){
        error_01();
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
    ctx.fillStyle = "#4db592";
    ctx.font = "30px Verdana";
    ctx.fillStyle = "white";
    ctx.fillText("Click para comenzar", 250, 250);
    

    let jugadorUno = new Jugador(document.querySelector("#nombre_jugador_uno").value);
    let jugadorDos = new Jugador(document.querySelector("#nombre_jugador_dos").value);

    let tablero = new Tablero(longitud,longitud,canvasHeight, canvas.width ,ctx, tamaño);
    let juego = new Juego(jugadorUno,jugadorDos, tablero);

    cambiarEstilos();  

    document.querySelector("#btn_reiniciar").addEventListener("click", function() {
        cambiarEstilos();
        tablero.reiniciar();
        cambiarEstilos2() 
    });    

    juego.comenzarJuego(longitud*longitud);   

    canvas.onmousedown = function(e) {
        ret = tablero.getUltimaFicha(e.layerX, e.layerY);  
        
        if(ret != null && ret.getTurno() == juego.chequearJugador(turno)) {
            console.log("turnos " + turno);
            seArrastra = true;
            console.log("entra")                       
        } 
        else {
            console.log("No hay objeto");
        }
    }
    
    function posicion_mouse(e) {
        mouseX = e.layerX;
        mouseY = e.layerY;           
        
        if(seArrastra) {        
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = "#4db592";
            ctx.fillRect(0, 0, canvas.width, canvas.height);            
            tablero.drawFichas();                
            ret.setPosition(mouseX,mouseY);
        }        
    }
    
    function soltar_click(e) {    
        seArrastra = false;   
        ctx.clearRect(0, 0, canvas.width, canvas.height);     
        ctx.fillStyle = "#4db592";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        tablero.drawFichas();
        if(ret) {
             
            let cuadrosA = tablero.getCuadrosAncho();
            //let cuadrosL = tablero.getCuadrosLargo();
            let pos_colum = 0;

            for (let i = 0; i < cuadrosA.length; i++) {
                if(e.layerX > cuadrosA[i] && e.layerX < cuadrosA[i+1]) {
                    pos_colum = i;
                    break;
                } 
            }          

            ctx.clearRect(0, 0, canvas.width, canvas.height);    
            ctx.fillStyle = "#4db592";
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            let val_rest = tablero.getValor()/2;
            let valor = 1;
            let valor_final = pos_colum + valor;

            let x = (tablero.getInicioTablero()+(tablero.getValor()*valor_final)) -val_rest ;

            let pos_vacia = calcularFila(pos_colum);
            let y = (tablero.getInicioTablero() + (tablero.getValor()*pos_vacia)) - val_rest ; 

          if(e.layerX > cuadrosA[0] && e.layerX < cuadrosA[cuadrosA.length-1] && e.layerY < tablero.getValor()) {

                if(ret.getTurno() == juego.chequearJugador(turno)) {
                    
                    if(ret.getTipo() == "r") {
                        juego.playJugadorUno(pos_colum); 
                        ret.setTurno(0);
                        turno++;
                        aplicar_texto_jugador("Turno de "+jugadorUno.getNombre(), "white");
                    } 
                    else {
                        juego.playJugadorDos(pos_colum);
                        ret.setTurno(0);
                        turno++;
                        ctx.clearRect(0, 0, canvas.width, canvas.height);
                        aplicar_texto_jugador("Turno de "+jugadorDos.getNombre(), "white");
                    }               
                    ret.setPosition(x-1,y+2);
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

    function calcularFila(colum) {
        let matrix = tablero.getMatriz();
    
        for (let i = tablero.getColumnas()-1; i >=0 ; i--) {
            if(matrix[i][colum] == 0) {
                return i;            
            } 
        }
    }

    function aplicar_texto_jugador(texto, color) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "#4db592";
        ctx.font = "30px Verdana";
        ctx.fillStyle = color;
        ctx.fillText(texto, 380, 50);
    }

    function cambiarEstilos() {
        document.querySelector("#val_tamaño").classList.remove('valor_tam');
        document.querySelector("#val_tamaño").classList.add('valor_tam_off');
    
        document.querySelector("#btn_empezar").classList.remove('btn_on');
        document.querySelector("#btn_empezar").classList.add('btn_off');
    
        document.querySelector("#canvas").classList.remove('canvas_off');
        document.querySelector("#canvas").classList.add('canvas_on');
    
        document.querySelector("#btn_reiniciar").classList.remove('btn_off');
        document.querySelector("#btn_reiniciar").classList.add('btn_on'); 

        document.querySelector("#img_logo").classList.remove('btn_on');
        document.querySelector("#img_logo").classList.add('btn_off'); 

        document.querySelector("#titulo_jugador_uno").classList.remove('btn_on');
        document.querySelector("#titulo_jugador_uno").classList.add('btn_off'); 

        document.querySelector("#titulo_jugador_dos").classList.remove('btn_on');
        document.querySelector("#titulo_jugador_dos").classList.add('btn_off'); 
    }

    function cambiarEstilos2() {
        document.querySelector("#val_tamaño").classList.remove('valor_tam_off');
        document.querySelector("#val_tamaño").classList.add('valor_tam');
    
        document.querySelector("#btn_empezar").classList.remove('btn_off');
        document.querySelector("#btn_empezar").classList.add('btn_on');
    
        document.querySelector("#canvas").classList.remove('canvas_on');
        document.querySelector("#canvas").classList.add('canvas_off');
    
        document.querySelector("#btn_reiniciar").classList.remove('btn_on');
        document.querySelector("#btn_reiniciar").classList.add('btn_off'); 

        document.querySelector("#img_logo").classList.remove('btn_off');
        document.querySelector("#img_logo").classList.add('btn_on'); 


    }    
    
}



