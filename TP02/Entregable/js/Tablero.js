
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
        this.fin_tablero_largo;
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
        let cuenta_izq_der_uno = 0;
        let cuenta_izq_der_dos = 0;

        //Recorre a la derecha
        for(let j = col; j < this.columnas; j++){ 
			
			if(this.matrix[fil][j] == 1) {
				cuenta_izq_der_uno++;
            } else {
                break;
            }
        }

        for(let j = col; j < this.columnas; j++){ 
			            
            if(this.matrix[fil][j] == 2) {
				cuenta_izq_der_dos++;
			} else {
                break;
            }
        }
        
        //Recorre a la izquierda
		for(let j = col; j >= 0; j--){ 
			
			
			if(this.matrix[fil][j] == 1) {
				cuenta_izq_der_uno++;
            } else {
                break;
            }					
        }

        for(let j = col; j >= 0; j--){ 
			            
            if(this.matrix[fil][j] == 2) {
				cuenta_izq_der_dos++;
			} else {
                break;
            }				
        }
        
        if(cuenta_izq_der_uno-1 == 4 || cuenta_izq_der_dos-1 == 4 ) {
            return 1;
        }
        else {

            let cuenta_abajo_uno = 0;
            let cuenta_abajo_dos = 0;
			
            //Recorre hacia abajo            

			for(let j = fil; j < this.filas; j++){ 
				
				if(this.matrix[j][col] == 1) {
					cuenta_abajo_uno++;
                } else {
                    break;
                }				
            }
            
            for(let j = fil; j < this.filas; j++){ 
				                
                if(this.matrix[j][col] == 2) {
					cuenta_abajo_dos++;
                } else {
                    break;
                }					
			}
			
			if(cuenta_abajo_uno == 4 || cuenta_abajo_dos == 4) {
                return 1;
			}


            //Recorre diagonal Izquierda Superior	
            

            let cuenta_izq_sup_der_inf_uno = 0;
            let cuenta_izq_sup_der_inf_dos = 0;
            
			if(col >= 0 && col<this.columnas-1) {
				let aux_fil = fil;
                let aux_col = col;               

				while(aux_fil>0 && aux_col<this.columnas) {                    			
					
					if(this.matrix[aux_fil][aux_col] == 1) {
						cuenta_izq_sup_der_inf_uno++;
                    } else {
						break;
                    }
                    aux_fil--;
					aux_col--;
                }

                while(aux_fil>0 && aux_col<this.columnas) {                    			
					
                    if(this.matrix[aux_fil][aux_col] == 2) {
                        cuenta_izq_sup_der_inf_dos++;
                    }
                    else {
						break;
                    }
                    aux_fil--;
					aux_col--;
                }

				if(cuenta_izq_sup_der_inf_uno-1 == 4 || cuenta_izq_sup_der_inf_dos-1 == 4) {
                    return 1;
				}
				
            }            

            //Recorre diagonal Derecha Inferior
            

			if(col<this.columnas-1) {
				let aux_fil = fil;
                let aux_col = col;	

				while(aux_fil<this.filas) {

					if(this.matrix[aux_fil][aux_col] == 1) {
						cuenta_izq_sup_der_inf_uno++;
                    } else {
                        break;
                    }
					aux_fil++;
					aux_col++;
                }	

                while(aux_fil<this.filas) {

					if(this.matrix[aux_fil][aux_col] == 2) {
                        cuenta_izq_sup_der_inf_dos++;
                    } else {
                        break;
                    }
					aux_fil++;
					aux_col++;
                }

				if(cuenta_izq_sup_der_inf_uno-1 == 4 || cuenta_izq_sup_der_inf_dos-1 == 4) {
                    return 1;
				}
            }	
            
            //Recorre diagonal Derecha Superior				
            
            let cuenta_der_sup_uno = 0;
            let cuenta_der_sup_dos = 0;
			
			if(col < this.columnas) {
				let aux_fil = fil;
				let aux_col = col;

				while(aux_fil>=0 && aux_col<this.columnas) { // 3-0, 2-1 , 1-2 , 0 -3 			
					
					if(this.matrix[aux_fil][aux_col] == 1) {
						cuenta_der_sup_uno++;
                    } 
                    else {
						break;
					}
					
					aux_fil--;
					aux_col++;									
                }

                while(aux_fil>=0 && aux_col<this.columnas) { // 3-0, 2-1 , 1-2 , 0 -3 			
					
                    if(this.matrix[aux_fil][aux_col] == 2) {
                        cuenta_der_sup_dos++;
                    }
                    else {
						break;
					}					
					aux_fil--;
					aux_col++;									
                }

				if(cuenta_der_sup_uno-1 == 4 || cuenta_der_sup_dos-1 == 4) {
                    return 1;
                }
            }       

            

            //Recorre diagonal Izquierda Inferior
            
			if(fil < this.filas && col>0 && col<this.columnas && col>0) {
				let aux_fil = fil;
                let aux_col = col;	
                

				while(aux_col>= 0 && aux_fil<this.filas) { //1-5 , 2-4, 3-3 , 4-2;
											
					if(this.matrix[aux_fil][aux_col] == 1) {
						cuenta_der_sup_uno++;
                    } 
                    else {
						break;
					}						
					aux_fil++;
					aux_col--;						
                }	
                
                while(aux_col>= 0 && aux_fil<this.filas) { //1-5 , 2-4, 3-3 , 4-2;
											
					if(this.matrix[aux_fil][aux_col] == 2) {
                        cuenta_der_sup_dos++;
                    }
                    else {
						break;
					}						
					aux_fil++;
					aux_col--;						
                }	

               
				if(cuenta_der_sup_uno-1 == 4 || cuenta_der_sup_dos-1 == 4) {
                    return 1;
				}
			}

        }
        
    }

    reiniciar() {
        for(let i = 0; i<this.columnas; i++){
            this.matrix[i] = [];
            for(let j = 0; j<this.filas; j++){
            this.matrix[i][j] = 0;
            }
        } 
        this.ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

    crearFichas(cantidad) {        
        let tam_final = this.tam.toString();        
        let tamaño_ficha = (this.canvasWidth/tam_final);
        let val = 45;
        let espacio;
        console.log("tamaño "+tam_final)
        if(tam_final>10) {
            espacio = 32;
        } else {
            espacio = 44;
        }

        for (let i = 0; i < cantidad/2; i++) {
            val+=espacio;
            this.fichas.push(this.crearFichaR(tamaño_ficha, this.getImg('img/fichaRed.png'),val));  
            this.fichas.push(this.crearFichaB(tamaño_ficha, this.getImg('img/fichaBlue.png'),val));  
        }
    }

    crearFichaR(tamaño_ficha, imagen, val) {         
        let posX = 65;
        let posY = val;
        let color = "#FFF";
        let ficha = new Ficha(posX, posY, tamaño_ficha, color, ctx, imagen, tamaño_ficha,"r",1);
        return ficha;
    }

    crearFichaB(tamaño_ficha, imagen, val) { 
        let posX = 835;
        let posY = val;
        let color = "#FFF";
        let ficha = new Ficha(posX, posY, tamaño_ficha, color, ctx, imagen, tamaño_ficha,"a",2);
        return ficha;
    }


    getUltimaFicha(x, y) {
        for (let i = 0; i < this.fichas.length; i++) {
            let element = this.fichas[i];
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
        this.draw();
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
        ctx.drawImage(imagen,x,y,val,val); 
    }

    getCuadrosAncho() {
        let tam_final = this.tam.toString();
        let valor = this.canvasWidth/tam_final; // valor = 150;        
        let inicio_tablero_ancho = valor*2;
        let cuadro = valor;
        let indice = 0;
        let cuadros = [];

        while(indice<this.tam-1) {            
            let aux = cuadro*indice;
            if(aux >= inicio_tablero_ancho) {
                cuadros.push(aux);
            }
            indice++;
        } 

        return cuadros;        
    }

    getCuadrosLargo() {
        let tam_final = this.tam.toString();
        let valor = this.canvasWidth/tam_final; // valor = 150;        
        let inicio_tablero_largo = valor*2;
        let cuadro = valor;
        let indice = 0;
        let cuadros = [];

        while(indice<this.tam-2) {            
            let aux = cuadro*indice;
            if(aux >= inicio_tablero_largo) {
                cuadros.push(aux);
            }
            indice++;
        } 

        return cuadros;        
    }

    getMatriz() {
        return this.matrix;
    }

    getFil() {
        return this.fil;
    }
    
    getCol() {
        return this.col;
    }

    getImg(src) {
        let img = new Image();
        img.src = src;
        return img;
    }

    getColumnas() {
        return this.columnas;
    }

    getFinTablero() {
        let tam_final = this.tam.toString();
        let valor = this.canvasHeight/tam_final; // valor = 150;        
        let inicio_tablero_largo = valor;
        let fin_tablero_largo = this.canvasHeight - inicio_tablero_largo*3;
        return fin_tablero_largo;
    }

    getInicioTablero() {
        let tam_final = this.tam.toString();
        let valor = this.canvasWidth/tam_final; // valor = 150;
        let inicio_tablero_ancho = valor;
        let fin_tablero_largo = inicio_tablero_ancho*2;
        return fin_tablero_largo;
    }

    getValor() {
        let tam_final = this.tam.toString();
        let valor = this.canvasHeight/tam_final; 
        return valor;
    }  

    
}