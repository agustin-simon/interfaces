"use strict";

let translate = document.querySelectorAll(".translate");
let translate_2 = document.querySelectorAll(".translate_2");
let translate_3 = document.querySelectorAll(".translate_3");
let translate_4 = document.querySelectorAll(".translate_4");
let translate_5 = document.querySelectorAll(".translate_5");
let translate_6 = document.querySelectorAll(".translate_6");
let translate_7 = document.querySelectorAll(".translate_7");
let translate_8 = document.querySelectorAll(".translate_8");

let txt_a = document.querySelectorAll(".txt-a");
 
let valor_gral = 0;

//PANTALLA  CARGA

let container = document.querySelector(".container-fluid");
let cargador = document.querySelector(".cargador");
let imagen_cargador = document.querySelector(".img-anillo")
document.addEventListener("DOMContentLoaded", iniciar_pagina);


txt_a.forEach(elemento => { 
    elemento.addEventListener("click", function() {
        cargador.classList.remove("cargador-escondido");
        cargador.classList.add("cargador");   
        setTimeout(function(){ 
    
            cargador.classList.remove("cargador");
            cargador.classList.add("cargador-escondido");    
          
          }, 3000);
    });
})

function iniciar_pagina() {
  setTimeout(function(){ 
    
    cargador.classList.remove("cargador");
    cargador.classList.add("cargador-escondido");    
  
  }, 3000);
}

//FORM
let btn = document.querySelector("#btn-sub");
let dot = document.querySelector("#dot");
let img_flecha = document.querySelector("#img-flecha");


btn.addEventListener("click", function() {

   btn.style.display = "none";
   dot.style.display = "block";

   setTimeout(function(){ 
      dot.style.display= "none"
      img_flecha.style.display = "block";

      setTimeout(function(){ 
         dot.style.display= "none"
         img_flecha.style.display = "none"; 
         btn.style.display = "block";      
   
      }, 3000);

   }, 3000);

});

//Menu Hamburguesa


let menu_hamburguesa = document.querySelector("#menu-hamburguesa");
let btn_hamburguesa = document.querySelector("#btn-hamburguesa");
let menu_colum = document.querySelector("#menu-colum");
let menu_lista = document.querySelector("#menu-lista");
let contador = 1;

btn_hamburguesa.addEventListener("click", function() {
    contador++;
    if(contador % 2 == 0) {
        menu_colum.style.height = 215+"px";
        setTimeout(function(){ 
            menu_colum.style.width = 130+"px";
            menu_lista.style.display = "block";
        }, 100);
       

    }
    else {
        menu_colum.style.height = 1+"px";  
        menu_colum.style.width = 1+"px";  
        menu_lista.style.display = "none";   
    }
    
});

//Acordeon

let btn_acordeon = document.querySelectorAll(".btn-acordeon");

btn_acordeon.forEach(element => {
   
    element.addEventListener("click", function() {
 
       let panel = element.nextElementSibling;
       if (panel.style.display === "block") {
         panel.style.display = "none";
         valor_gral -= 300;
       } 
       else {
         panel.style.display = "block";    
         valor_gral += 300;     
       }
 
    }) 
 
 });


window.addEventListener('scroll', () => {
    let scroll = window.pageYOffset;


   if(scroll > 0 && scroll <268) {
        translate.forEach(element => {
            let speed = element.dataset.speed;
            element.style.transform = "translateY("+(scroll * speed)+"px)";
            
        }) 
   } 
    
    
    if(scroll >0) {
        translate_2.forEach(element => {
            let speed = element.dataset.speed;
            element.style.transform = "translateY("+(scroll * speed)+"px)";            
        }) 
    }

    if(scroll >0 && scroll < 1712) {
        translate_3.forEach(element => {
            let speed = element.dataset.speed;
            element.style.transform = "translateY("+(scroll * speed)+"px)";            
        })          
    }

    if(scroll > 1185 && scroll <1930) {
        translate_4.forEach(element => {
            let speed = element.dataset.speed;

            if(outerWidth > 1900){
                speed = -0.26;
            }

            element.style.transform = "translateX("+(scroll * speed)+"px)";            
        })          
    }

    if(scroll > 1185 && scroll <1930) {
        translate_5.forEach(element => {
            let speed = element.dataset.speed;

            if(outerWidth > 1800){                
                speed = 0.36;
            }
            element.style.transform = "translateX("+(scroll * speed)+"px)";            
        })          
    }  

    if(scroll > 3200) {
        translate_2.forEach(element => {                
            let speed = element.dataset.speed;    
            element.style.transform = "translateY("+(scroll * speed)+"px)";            
        })  
    }

    translate_7.forEach(element => {
        let speed = element.dataset.speed;
        element.style.transform = "translateX("+(-scroll * speed)+"px)";
    }) 
    
    if(scroll > 5000 && scroll <6840) {
        translate_8.forEach(element => {
            let speed = element.dataset.speed;
            element.style.transform = "translateX("+(scroll * speed)+"px)";
        }) 
    }

    if(scroll<1559+valor_gral) {
        document.querySelector(".img-lord-center").style.display = "none";
    }

    if(scroll>1559+valor_gral) {
        document.querySelector(".img-lord-center").style.display = "unset";
    }

    if(scroll<1559+valor_gral) {
        document.querySelector(".img-anillo").style.display = "unset";
    }

    if(scroll>1559+valor_gral) {
        document.querySelector(".img-anillo").style.display = "none";
    }
    
    if(scroll>3128+valor_gral) {
        document.querySelector(".img-anillo").style.display = "unset";
    }

    if(scroll>4024+valor_gral) {
        document.querySelector(".img-anillo").style.display = "none";
    }

    if(scroll>5293+valor_gral) {
        document.querySelector(".img-anillo").style.display = "unset";
    }

    if(scroll>6241+valor_gral) {
        document.querySelector(".img-anillo").style.display = "none";
    }

    if(scroll>7167+valor_gral) {
        document.querySelector(".img-anillo").style.display = "unset";
    }  

});


let cuentaRegresiva = new Date("Dec 18, 2020 15:37:25").getTime();

let x = setInterval(function() {

  let now = new Date().getTime();

  let distancia = cuentaRegresiva - now;

  let dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
  let horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
  let segundos = Math.floor((distancia % (1000 * 60)) / 1000);

  document.querySelector("#demo").innerHTML = dias + "d " + horas + "h " + minutos + "m " + segundos + "s ";

  if (distancia < 0) {
    clearInterval(x);
  }
}, 1000);