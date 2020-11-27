
let btns_corazon = document.querySelectorAll(".btn-corazon");
let pop_up_like = document.querySelector("#pop-up-like");
let btn_pop_up_comentar = document.querySelector("#btn-pop-up");
let btn_corazon_contador = 0;


btns_corazon.forEach(boton => {
    boton.addEventListener("click", function () {
        if (btn_corazon_contador % 2 == 0) {
            boton.classList.remove("btn-corazon");
            boton.classList.add("btn-corazon-activado");
            pop_up_like.style.display = "block";
            btn_corazon_contador++;

        } else {
            boton.classList.remove("btn-corazon-activado");
            boton.classList.add("btn-corazon");
            pop_up_like.style.display = "none"
            btn_corazon_contador++;
        }
    });
});

btn_pop_up_comentar.addEventListener("click" , function() {
    pop_up_like.style.display = "none"
});

let btn_filtros_desktop = document.querySelectorAll(".btn-filtro-secundario-desktop");
let btn_pop_up = document.querySelector("#btn-pop-up");
let input_txt_up = document.querySelector("#input-txt-pop-up");
let txt_pop_up = document.querySelector(".txt-pop-up "); 
let btn_filtros_cuenta = 0;

btn_filtros_desktop.forEach(boton => {
    boton.addEventListener("click", function(){
        
        if(btn_filtros_cuenta % 2 == 0) {
            boton.style.backgroundColor = "#66FE90";
            btn_pop_up.style.display = "block";
            input_txt_up.style.display = "block"
            txt_pop_up.style.display = "block";
            btn_filtros_cuenta++;
        }

        else {
            boton.style.backgroundColor = "#F3F0F0";
            btn_pop_up.style.display = "none";
            input_txt_up.style.display = "none";
            txt_pop_up.style.display = "none";
            btn_filtros_cuenta++;
        }
    })
});