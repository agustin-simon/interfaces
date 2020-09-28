
class Juego {
    constructor(jugadorUno, jugadorDos, tablero) {
        this.jugadorUno = jugadorUno;
        this.jugadorDos = jugadorDos;    
        this.tablero = tablero;
        this.ultimoJugador;
        this.turno;
    }

    comenzarJuego(cantidad) {
        this.tablero.crear();
        this.tablero.crearFichas(cantidad);
        this.tablero.crearFichas(cantidad);
        this.tablero.drawFichas();
        this.tablero.draw();
    }

    terminarJuego() {

    }

    resetearJuego() {
        this.tablero.reiniciar();
    }

    chequearGanador() {        
        let val_fil = this.tablero.getFil();
        let val_col = this.tablero.getCol();        

        let ganador = this.tablero.chequearGanador(val_fil,val_col);

        if(ganador == 1) {
            alert("Gano " + this.chequearJugador(this.turno));
        } 
    }

    playJugadorUno(columna) {
       if(columna < this.tablero.getColumnas()) {
        this.tablero.addFichaJugador(1, columna);
        this.turno++;
       }
       this.chequearGanador();
    }

    playJugadorDos(columna) {
        if(columna < this.tablero.getColumnas()) {
            this.tablero.addFichaJugador(2, columna);
            this.turno++;
        }
        this.chequearGanador();
    }

    getJugadorUno() {
        return this.jugadorUno;
    }
    
    getJugadorDos() {
        return this.jugadorDos;
    }

    chequearJugador(turno) {
        if(turno%2 == 0) {
            return "Jugador Dos";
        } else {
            return "Jugador Uno"
        }
    }

    
}