let btn_votacion_negativo = document.querySelector("#a-negativo");
let btn_votacion_positivo = document.querySelector("#a-positivo");
let votacion_negativo = false;
let votacion_positivo = false;
let total_voto_positivo = 1;
let total_voto_negativo = 1;
let porcentaje_inicial = Math.trunc((total_voto_positivo/(total_voto_positivo + total_voto_negativo)) * 100);

btn_votacion_negativo.addEventListener("click" , function() {
    if(votacion_positivo){
        total_voto_positivo --;
    }
    votacion_positivo = false;
    btn_votacion_negativo.classList.add("btn-negativo-activo");
    btn_votacion_negativo.classList.remove("btn-desactivado");
    if (votacion_negativo == false){
        votacion_negativo = true;
        btn_votacion_positivo.classList.remove("btn-positivo-activo");
        btn_votacion_positivo.classList.add("btn-desactivado");
        total_voto_negativo ++;
    }else{
        votacion_negativo = false;
        btn_votacion_positivo.classList.remove("btn-desactivado");
        btn_votacion_positivo.classList.add("btn-positivo-activo");
        total_voto_negativo --;
    }
    calcularPorcentaje();
});

btn_votacion_positivo.addEventListener("click" , function() {
    if(votacion_negativo){
        total_voto_negativo --;
    }
    votacion_negativo = false;
    btn_votacion_positivo.classList.add("btn-positivo-activo");
    btn_votacion_positivo.classList.remove("btn-desactivado");
    if (!votacion_positivo){
        votacion_positivo = true;
        btn_votacion_negativo.classList.add("btn-desactivado");
        btn_votacion_negativo.classList.remove("btn-negativo-activo");
        total_voto_positivo ++;
    }else{
        votacion_positivo = false;
        btn_votacion_negativo.classList.add("btn-negativo-activo");
        btn_votacion_negativo.classList.remove("btn-desactivado");
        total_voto_positivo --;
    }
    calcularPorcentaje();
});

let calcularPorcentaje = () =>{
    let total_votos = total_voto_positivo + total_voto_negativo;
    valor = Math.trunc((total_voto_positivo/total_votos) * 100);
    animatedValue(porcentaje_inicial, valor); 
}

let aplicarColor = (valor) =>{
    if(valor >= 60){
        document.querySelector(".txt-porcentaje").style.color = "#00B21C";
    }
    if (valor > 40 && valor < 60){
        document.querySelector(".txt-porcentaje").style.color = "#5F5F5F";
    }
    if(valor <= 40){
        document.querySelector(".txt-porcentaje").style.color = "#BF0000";
    }
}

let animatedValue = (inicio, fin) =>{
    if(inicio == fin){
        aplicarColor(inicio);
        document.querySelector(".txt-porcentaje").innerHTML = inicio+"%";
    }
    if (inicio < fin){
        var current = inicio;
        var stepTime = Math.abs(Math.floor(3000 / current-fin));
        var timer = setInterval(function() {
            current ++;
            aplicarColor(current);
            document.querySelector(".txt-porcentaje").innerHTML = current+"%";
            if (current == fin) {
                clearInterval(timer);
            }
        }, stepTime);
    }
    if (inicio > fin){
        var current = inicio;
        var stepTime = Math.abs(Math.floor(3000 / current-fin));
        var timer = setInterval(function() {
            current --;
            aplicarColor(current);
            document.querySelector(".txt-porcentaje").innerHTML = current+"%";
            if (current == fin) {
                clearInterval(timer);
            }
        }, stepTime);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    calcularPorcentaje();
});