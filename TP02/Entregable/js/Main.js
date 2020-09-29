"use strict";


//Creamos el canvas y asignamos el contexto a una variable.
let canvas = document.querySelector("#canvas");
let ctx = canvas.getContext("2d");

//Obtenemos las medidas de nuestro canvas;
let canvasWidth = canvas.width;
let canvasHeight = canvas.height;

let ret, mouseX , mouseY;
let seArrastra = false;
let tamaño, suma;
let turno = 0;

document.querySelector("#btn_empezar").addEventListener("click", function () {   
    //Obtenemos el valor ingresado por el usuario. 
    tamaño = document.querySelector("#val_tamaño").value;
    iniciar_juego();    
});


function iniciar_juego() {

    let longitud = tamaño;

    //Sumamos un valor al tamaño dado para agregar espacio en los lados del canvas.
    suma = Number(tamaño)+Number(4);
    tamaño = suma;

    //
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#4db592";
    ctx.font = "30px Verdana";
    ctx.fillStyle = "white";
    ctx.fillText("Click para comenzar", 250, 35);
    
    //Creamos los jugadores con sus respectivos nombres.
    let jugadorUno = new Jugador(document.querySelector("#nombre_jugador_uno").value);
    let jugadorDos = new Jugador(document.querySelector("#nombre_jugador_dos").value);

    //Creamos el tablero de nuestro juego.
    let tablero = new Tablero(longitud,longitud,canvasHeight, canvas.width ,ctx, tamaño);

    //Creamos nuestro juego, insetando el tablero creado.
    let juego = new Juego(jugadorUno,jugadorDos, tablero);

    mostrar_estilos();  

    //Reinicia la partida del juego.
    document.querySelector("#btn_reiniciar").addEventListener("click", function() {
        mostrar_estilos();
        tablero.reiniciar();
        ocultar_estilos() 
    });    


    //Iniciamos el juego con las medidas correspondientes.
    juego.comenzarJuego(longitud*longitud);    

    
    canvas.onmousedown = function(e) {
        //Obtenemos la ultima ficha clickeada.
        ret = tablero.getUltimaFicha(e.layerX, e.layerY);  
        
        if(ret != null && ret.getTurno() == juego.chequearJugador(turno)) {
            console.log("turnos " + turno);
            seArrastra = true;                      
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

        //Comprueba si la ficha existe
        if(ret) {
             
            let cuadrosA = tablero.getCuadrosAncho();
            let pos_colum = 0;

            for (let i = 0; i < cuadrosA.length; i++) {
                if(e.layerX > cuadrosA[i] && e.layerX < cuadrosA[i+1]) {
                    pos_colum = i;
                    break;
                } 
            }          

            let val_rest = tablero.getValor()/2;
            let valor = 1;
            let valor_final = pos_colum + valor;
            let ganador;

            let x = (tablero.getInicioTablero()+(tablero.getValor()*valor_final)) - val_rest ;

            let pos_vacia = calcularFila(pos_colum);

            let y = (tablero.getInicioTablero() + (tablero.getValor()*pos_vacia)) - val_rest ; 



          if(e.layerX > cuadrosA[0] && e.layerX < cuadrosA[cuadrosA.length-1] && e.layerY < tablero.getValor()) {

                if(ret.getTurno() == juego.chequearJugador(turno)) {
                    
                    if(ret.getTipo() == "r") { 
                        juego.playJugadorUno(pos_colum); 
                        ret.setTurno(0);
                        turno++;
                        aplicar_texto_jugador("Turno de "+jugadorUno.getNombre(), "white");
                        ganador = true;
                        
                    } 
                    else {
                        juego.playJugadorDos(pos_colum);
                        ret.setTurno(0);
                        turno++;
                        ctx.clearRect(0, 0, canvas.width, canvas.height);
                        aplicar_texto_jugador("Turno de "+jugadorDos.getNombre(), "white");
                        ganador = false;
                    }               
                    ret.setPosition(x-1,y+2);
                }   
          }
            tablero.drawFichas(); 
            
            if(juego.chequearGanador() == 1) {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.fillStyle = "#4db592";
                ctx.font = "30px Verdana";
                ctx.fillStyle = "white";
                if(ganador) {
                    ctx.fillText("¡Ganador "+jugadorDos.getNombre()+"!", 250, 250);
                } else {
                    ctx.fillText("¡Ganador "+jugadorUno.getNombre()+"!", 250, 250);                    
                }
                tablero.vaciarFichas();
            }
            
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

    //Calcula la posicion de la fila que esta vacia en la columna dada.
    function calcularFila(colum) {
        let matrix = tablero.getMatriz();
    
        for (let i = tablero.getColumnas()-1; i >=0 ; i--) {
            if(matrix[i][colum] == 0) {
                return i;            
            } 
        }
    }

    //Aplica un texto dentro del canvas.
    function aplicar_texto_jugador(texto, color) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "#4db592";
        ctx.font = "30px Verdana";
        ctx.fillStyle = color;
        ctx.fillText(texto, 380, 50);
    }

    //Activa los estilos del menu principal.
    function mostrar_estilos() {
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

        document.querySelector("#nombre_jugador_dos").classList.remove('btn_on');
        document.querySelector("#nombre_jugador_dos").classList.add('btn_off'); 

        document.querySelector("#nombre_jugador_uno").classList.remove('btn_on');
        document.querySelector("#nombre_jugador_uno").classList.add('btn_off'); 
    }

    //Desactiva los estilos del menu principal.
    function ocultar_estilos() {
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
        
        document.querySelector("#titulo_jugador_uno").classList.remove('btn_off');
        document.querySelector("#titulo_jugador_uno").classList.add('btn_on'); 

        document.querySelector("#titulo_jugador_dos").classList.remove('btn_off');
        document.querySelector("#titulo_jugador_dos").classList.add('btn_on'); 

        document.querySelector("#nombre_jugador_dos").classList.remove('btn_off');
        document.querySelector("#nombre_jugador_dos").classList.add('btn_on'); 

        document.querySelector("#nombre_jugador_uno").classList.remove('btn_off');
        document.querySelector("#nombre_jugador_uno").classList.add('btn_on'); 


    }    
    
}



