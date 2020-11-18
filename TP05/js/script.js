"use strict";


let btn_hamburguesa = document.querySelector("#img-hambur");
let menu_hamburguesa = document.querySelector("#menu-hamburguesa");
let menu_lista = document.querySelector("#menu-lista");
let contador_hamburguesa = 1;

btn_hamburguesa.addEventListener("click", function() {
    contador_hamburguesa++;
    if(contador_hamburguesa % 2 == 0) {
        menu_hamburguesa.style.height = 150+"px";
        setTimeout(function(){ 
            menu_hamburguesa.style.display = "block";
            menu_hamburguesa.style.width = 227+"px";
            menu_lista.style.display = "block";
        }, 100);
       

    }
    else {
        menu_hamburguesa.style.height = 1+"px";  
        menu_hamburguesa.style.width = 1+"px";  
        menu_lista.style.display = "none";   

        menu_modo.style.height = 1+"px";  
        menu_modo.style.width = 1+"px";  
        menu_lista_modo.style.display = "none";  
    }
});



let a_modo = document.querySelector("#a-modo");
let menu_modo = document.querySelector("#menu-modo")
let menu_lista_modo = document.querySelector("#menu-lista-modo");
let contador_modo = 1;

a_modo.addEventListener("click", function(){
    contador_modo++;
    if(contador_modo % 2 == 0) {
        menu_modo.style.height = 130+"px";
        menu_hamburguesa.style.height = 270+"px";
        setTimeout(function(){ 
            menu_modo.style.display = "block";
            menu_modo.style.width = 227+"px";
            menu_lista_modo.style.display = "block";
        }, 100);
       

    }
    else {
        menu_hamburguesa.style.height = 150+"px";
        menu_modo.style.height = 1+"px";  
        menu_modo.style.width = 1+"px";  
        menu_lista_modo.style.display = "none";   
    }
});

let btn_lupa = document.querySelector("#img-lupa");
let buscador = document.querySelector("#input-buscador");
let contador_buscador = 1;


btn_lupa.addEventListener("click", function() {
    contador_buscador++;
    if(contador_buscador % 2 == 0) {
        setTimeout(function(){ 
            buscador.style.height = 50+"%";
            buscador.style.width = 90+"%";
        }, 100);
       

    }
    else { 
        buscador.style.height = 0+"%";
        buscador.style.width = 0+"%";
    }    
});


/*let col_buscador = document.querySelector("#col-buscador");
let box_buscador = document.querySelector("#box-buscador-historial");
let contador_nav_buscador = 1;


buscador.addEventListener("click", function() {
    contador_nav_buscador++;
    if(contador_nav_buscador % 2 == 0) {
        setTimeout(function(){ 
            col_buscador.style.height = 30+"px";
            box_buscador.style.display = "block";
        }, 100);
    }
    else { 
        col_buscador.style.height = 0+"%";
        box_buscador.style.display = "none";
    }    
});
*/

