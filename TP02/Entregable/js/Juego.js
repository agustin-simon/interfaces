
class Juego {
    constructor(jugadorUno, jugadorDos, tablero) {
        this.jugadorUno = jugadorUno;
        this.jugadorDos = jugadorDos;    
        this.tablero = tablero;
    }

    comenzarJuego() {
        this.tablero.crear();
    }

    terminarJuego() {

    }

    resetearJuego() {
        
    }

    getJugadorUno() {
        return this.jugadorUno;
    }
    
    getJugadorDos() {
        return this.jugadorDos;
    }

    
}