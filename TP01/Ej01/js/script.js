"use strict";

let cols = 10;
let rows = 10;

/* LLENO EL ARREGLO DE NUMEROS RANDOM EN LA MATRIZ */

let matrix = [];
for(let i = 0; i<cols; i++){
    matrix[i] = [];
    for(let j = 0; j<rows; j++){
    matrix[i][j] = Math.random() * 100;
    }
}

//EJERCICIO 01

let resultado = obtener_mayor();

function obtener_mayor() {
    let mayor = 0;
    for(let i = 0; i<cols; i++){
        for(let j = 0; j<rows; j++){
            if(matrix[i][j]>mayor) {
                mayor = matrix[i][j];
            } 
        }    
    }
    return mayor;
}

//EJERCICIO 02 a)

let resultado_fila_mayor = obtener_mayor_fila_par() ;

function obtener_mayor_fila_par() {
    let mayor = 0;
    let mayor_final = 0;
    let cuenta = 0;
    for(let i = 0; i<cols; i++){
        for(let j = 0; j<rows; j++){
            cuenta+= matrix[i][j];
            if(matrix[i][j]>mayor) {
                mayor = matrix[i][j];
            } 
        }
        if(cuenta %2 == 0) {
            if(mayor>mayor_final) {
                mayor_final = mayor;
            }
        }   
    }
    return mayor;
}

let resultado_fila_menor = obtener_menor_fila_par();

function obtener_menor_fila_par() {
    let menor = matrix[0][0];
    let menor_final = 0;
    let cuenta = 0;
    for(let i = 0; i<cols; i++){
        for(let j = 0; j<rows; j++){
            cuenta+= matrix[i][j];
            if(matrix[i][j]<menor) {
                menor = matrix[i][j];
            } 
        }
        if(cuenta %2 != 0) {
            if(menor<menor_final) {
                menor_final = menor;
            }
        } 
    }
    return menor;
}

//EJERCICIO 02 c)

let arreglo = obtener_valor_promedio();

function obtener_valor_promedio() {
    let array = [];
    let cuenta = 0; 

    let resultado = 0;
    for(let i = 0; i<cols; i++){
        for(let j = 0; j<rows; j++){
            cuenta+= matrix[i][j];            
        } 
        resultado = cuenta/cols;
        array.push(resultado);
    }
    return array;
}



//RESULTADOS EN CONSOLA

console.log("El valor minimo contenido en las filas pares: "+resultado_fila_menor);
console.log("El valor máximo contenido en las filas pares: "+resultado_fila_mayor);
console.log("El valor máximo de la matriz es: "+resultado);
console.table(matrix);
console.table(arreglo);


