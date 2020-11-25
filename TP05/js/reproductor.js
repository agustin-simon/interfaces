function cargaPagina(){

    
    let estado = "pause";
    let barraProgreso = document.querySelector(".cancion-reproductor");
    let tiempoTotal = 180;
    barraProgreso.max = tiempoTotal;
    barraProgreso.value = 0;
    
    function changeImage() {
        if(estado == "play"){
            document.querySelector(".iconoPause").classList.remove("oculto");
            document.querySelector(".iconoPlay").classList.add("oculto");
            play();
            estado = "pause";
        } else {
        document.querySelector(".iconoPause").classList.add("oculto");
        document.querySelector(".iconoPlay").classList.remove("oculto");
        estado = "play";
        }
    }

    function play(){
        let stepTime = 1000;
        let current = barraProgreso.value;
        let timer = setInterval(function() {
            current ++;
            barraProgreso.value = current;
            if ((estado == "play") || (current == barraProgreso.max)) {
                clearInterval(timer);
            }
        }, stepTime);
    }

let boton = document.querySelectorAll(".pp");
for(let i = 0; i < boton.length; i++)
    boton[i].addEventListener("click", changeImage);

}

document.addEventListener("DOMContentLoaded", cargaPagina);