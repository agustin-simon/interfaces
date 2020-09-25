
class Tablero {
    constructor(filas,columnas, canvasHeight, canvasWidth, ctx, tam) {
        this.matrix = []; 
        this.filas = filas;
        this.columnas = columnas;
        this.fichas = [];
        this.cuadricula;
        this.canvasHeight = canvasHeight;
        this.canvasWidth = canvasWidth;
        this.ctx = ctx;
        this.lastElement;
        this.tam = tam;

        this.fil;
        this.col;

    }

    crear() {
        for(let i = 0; i<this.columnas; i++){
            this.matrix[i] = [];
            for(let j = 0; j<this.filas; j++){
            this.matrix[i][j] = 0;
            }
        }
    }

    //////////////
    addFichaJugador(jugador, columna) {
        for (let i = this.filas-1; i >= 0; i--) {
            if(columna < this.columnas) {
                
                if(jugador == 1) {

                    if(this.matrix[i][columna] == 0) {
                        this.matrix[i][columna] = 1;	
                        this.fil = i;
                        this.col = columna;
                        break;
                    }	
                }	
                else {

                    if(this.matrix[i][columna] == 0) {
                        this.matrix[i][columna] = 2;	
                        this.fil = i;
                        this.col = columna;
                        break;
                    }
                }	
            }             	
		}
    }

    chequearGanador(fil, col) {
        let cuenta_izq_der = 0;

        //Recorre a la derecha
        for(let j = col; j < this.columnas; j++){ 
			
			if(this.matrix[fil][j] == 1) {
				cuenta_izq_der++;
			} 
			
			if(this.matrix[fil][j] == 0) {
				break;
			}
        }
        
        //Recorre a la izquierda
		for(let j = col; j >= 0; j--){ 
			
			
			if(this.matrix[fil][j] == 1) {
				cuenta_izq_der++;
			}				
			if(this.matrix[fil][j] == 0) {
				break;
			}					
        }
        
        if(cuenta_izq_der-1 == 4) {
			console.log("Ganaste! Recorre a la izquierda");
        }
        else {

            let cuenta_abajo = 0;
			
			//Recorre hacia abajo
			for(let j = fil; j < this.filas; j++){ 
				
				if(this.matrix[j][col] == 1) {
					cuenta_abajo++;
				}				
				if(this.matrix[j][col] == 0) {
					break;
				}					
			}
			
			if(cuenta_abajo == 4) {
				console.log("Ganaste! Recorre hacia abajo");
			}


            //Recorre diagonal Izquierda Superior	
			
			let cuenta_izq_sup = 1;
			
			if(colum > 0 && colum<MAXC) {
				let aux_fil = fila;
				let aux_col = colum;
									
				while(aux_fil>0 && aux_col<this.columnas) {
						
					aux_fil--;
					aux_col--;
					
					if(this.matrix[aux_fil][aux_col] == 1) {
						cuenta_izq_sup++;
					} else {
						break;
					}
				}
				
				if(cuenta_izq_sup == 4) {
					System.out.println("Ganaste! Recorre diagonal Izquierda Superior");
				}
				
			}


        }
        
    }

    reiniciar() {
        for(let i = 0; i<this.columnas; i++){
            matrix[i] = [];
            for(let j = 0; j<this.filas; j++){
            matrix[i][j] = 0;
            }
        } 
    }

    addFicha(ficha) {
        this.fichas.push(ficha);
    }

    getUltimaFicha(x, y) {
        for (let i = 0; i < this.fichas.length; i++) {
            const element = this.fichas[i];
            if (element.isPointInside(x, y)) {
                this.lastElement = element;
                return element;
            }        
        }        
    }

    drawFichas() {        
        for (let i = 0; i < this.fichas.length; i++) {
            if(this.fichas[i] != this.lastElement) {
                this.fichas[i].draw();
            }                       
        }   
        if(this.lastElement != null) {
            this.lastElement.draw();
        } 
    }

    drawCuadricula() {
        val = (this.canvasHeight/this.filas);
        for (var x=0; x<=this.canvasHeight; x=x+val){
            ctx.moveTo(x,0);
            ctx.lineTo(x,this.canvasHeight);
        }
        for (var y=0; y<=this.canvasWidth; y=y+val){
            ctx.moveTo(0,y);
            ctx.lineTo(this.canvasWidth,y);
        }
        ctx.strokeStyle = "black";
        ctx.stroke();
    }

    draw() {
        let tam_final = this.tam.toString();

        let valor = this.canvasWidth/tam_final; // valor = 150;
        
        for (let i = 2; i < (tam_final-2); i++) {        
            for (let j = 1; j < (tam_final-3); j++) {
                this.cargar_imagen(valor*i,valor*j, valor);       
            }            
        }
    }

    cargar_imagen(x,y,val) {	
        let imagen = new Image();
        imagen.src = "img/tablero150.png";
    
        imagen.onload=function() { 
            ctx.drawImage(imagen,x,y,val,val); 
        }
    }

    getMatriz() {
        return this.matrix;
    }
    
}