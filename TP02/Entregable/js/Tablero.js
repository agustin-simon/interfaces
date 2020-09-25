
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
			
            let cuenta_izq_sup_der_inf = 1;
            
			if(col > 0 && col<this.columnas) {
				let aux_fil = fil;
                let aux_col = col;

				while(aux_fil>=0 && aux_col<this.columnas) {                    			
					
					if(this.matrix[aux_fil][aux_col] == 1) {
						cuenta_izq_sup_der_inf++;
					} else {
						break;
                    }
                    aux_fil--;
					aux_col--;
				}
				if(cuenta_izq_sup_der_inf == 4) {
					console.log("Ganaste! Recorre diagonal Izquierda Superior");
				}
				
            }
            

            //Recorre diagonal Derecha Inferior
			
			if(col<this.columnas-1) {
				let aux_fil = fil;
                let aux_col = col;		
                			
				while(aux_fil<this.filas-2) {
					if(this.matrix[aux_fil][aux_col] == 1) {
						cuenta_izq_sup_der_inf++;
					} else {
						break;
					}
					aux_fil++;
					aux_col++;
				}	
				if(cuenta_izq_sup_der_inf == 4) {
					console.log("Ganaste! Recorre diagonal Derecha Inferior");
				}
            }	
            
            //Recorre diagonal Derecha Superior				
			
			let cuenta_der_sup = 0;
			
			if(col < this.columnas) {
				let aux_fil = fil;
				let aux_col = col;
				
				while(aux_fil>=0 && aux_col<this.columnas) { // 3-0, 2-1 , 1-2 , 0 -3 			
					
					if(this.matrix[aux_fil][aux_col] == 1) {
						cuenta_der_sup++;
					} else {
						break;
					}
					
					aux_fil--;
					aux_col++;
									
				}
				console.log("das"+cuenta_der_sup)
				if(cuenta_der_sup == 4) {
					console.log("Ganaste! Recorre diagonal Derecha Superior	");
				}
            }
            
            //Recorre diagonal Izquierda Inferior
			
			if(fil < this.filas-3 && col<this.columnas && col>2) {
				let aux_fil = fil;
				let aux_col = col;	
                
				while(aux_col>0 && aux_fil<this.filas) { //1-5 , 2-4, 3-3 , 4-2;
											
					if(this.matrix[aux_fil][aux_col] == 1) {
						cuenta_der_sup++;
					} else {
						break;
					}						
					aux_fil++;
					aux_col--;						
                }				
                console.log(cuenta_der_sup)	
				if(cuenta_der_sup == 4) {
					console.log("Ganaste! Recorre diagonal Izquierda Inferior");
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