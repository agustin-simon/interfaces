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
let btn_up = document.querySelector("#img-icono-up");
let buscador = document.querySelector("#input-buscador");
let contador_buscador = 1;


btn_up.addEventListener("click", function() {    
    contador_buscador++;
    if(contador_buscador % 2 == 0) {
        setTimeout(function(){ 
            buscador.style.height = 100+"%";
            buscador.style.width = 100+"%";
            buscador.style.display = "block";
            col_buscador.style.height = 230+"px";            
            box_buscador.style.display = "block";
            btn_lupa.style.display = "none";
            btn_lupa.style.position = "absolute";
        }, 100);
       

    }
    else { 
        buscador.style.height = 0+"%";
        buscador.style.width = 0+"%";
        buscador.style.display = "none";
        col_buscador.style.height = 0+"%";
        box_buscador.style.display = "none";
        btn_lupa.style.display = "block";
    }    
});


buscador.addEventListener("click", function() {
    contador_buscador++;
    if(contador_buscador % 2 == 0) {
        setTimeout(function(){ 
            col_buscador.style.height = 230+"px";
            col_buscador.style.width = 50+"%";
            col_buscador.style.top = 130+"px";
            col_buscador.style.left = 25+"%";
            box_buscador.style.display = "block";
        }, 100);
       

    }
    else { 
        col_buscador.style.height = 0+"%";
        box_buscador.style.display = "none";
    }    
});

btn_lupa.addEventListener("click", function() {
    contador_buscador++;
    if(contador_buscador % 2 == 0) {
        setTimeout(function(){ 
            buscador.style.height = 50+"%";
            buscador.style.width = 90+"%";
            buscador.style.display = "block";
            col_buscador.style.height = 230+"px";
            box_buscador.style.display = "block";
            btn_lupa.style.display = "none";
        }, 100);
       

    }
    else { 
        buscador.style.height = 0+"%";
        buscador.style.width = 0+"%";
        buscador.style.display = "none";
        col_buscador.style.height = 0+"%";
        box_buscador.style.display = "none";
        btn_lupa.style.display = "block";
    }    
});


let col_buscador = document.querySelector("#col-buscador");
let box_buscador = document.querySelector("#box-buscador-historial");


let btn_filtros_principal = document.querySelectorAll(".btn-filtro-principal");
let btn_filtros_secundarios = document.querySelectorAll(".btn-filtro-secundario");
let btn_contador_p = true;
let btn_contador_s = 0;

btn_filtros_principal.forEach( boton => {
    boton.addEventListener("click", function() {            
        if(btn_contador_p) {
            boton.classList.remove("btn-filtro-principal");
            boton.classList.add("btn-filtro-principal-presionado");    
            btn_contador_p = false;    
            console.log(false)  
        } else {
            boton.classList.remove("btn-filtro-principal-presionado");
            boton.classList.add("btn-filtro-principal");
            btn_contador_p = true;  
            console.log(true)
        }       
    });
});

btn_filtros_secundarios.forEach( boton => {
    boton.addEventListener("click",function() {
        if(btn_contador_s % 2 == 0) {
            boton.classList.remove("btn-filtro-secundario");
            boton.classList.add("btn-filtro-secundario-presionado");
            btn_contador_s++;
        } else {
            boton.classList.remove("btn-filtro-secundario-presionado");
            boton.classList.add("btn-filtro-secundario");
            btn_contador_s++;
        } 
        
    });
});


