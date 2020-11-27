function cargaPagina() {
    let estado = "play";
    let barraProgreso = document.querySelector(".cancion-reproductor-desktop");
    let barraProgresoDesktop = document.querySelector(".cancion-reproductor-mobile-grande");
    let barraProgresoMobile = document.querySelector(".cancion-reproductor-mobile");
    let tiempoTotal = 180;

    barraProgreso.max = tiempoTotal;
    barraProgreso.value = 0;
    barraProgresoDesktop.max = tiempoTotal;
    barraProgresoDesktop.value = 0;
    barraProgresoMobile.max = tiempoTotal;
    barraProgresoMobile.value = 0;
    document.querySelector("#cancion-end").innerHTML = secondsToString(tiempoTotal);

    function changeImage() {
        if (estado == "pause") {
            document.querySelector(".playAndPause").classList.remove("fa-pause");
            document.querySelector(".playAndPause").classList.add("fa-play");
            document.querySelector(".playAndPauseMobile").classList.remove("fa-pause");
            document.querySelector(".playAndPauseMobile").classList.add("fa-play");
            estado = "play";
        } else {
            document.querySelector(".playAndPause").classList.add("fa-pause");
            document.querySelector(".playAndPause").classList.remove("fa-play");
            document.querySelector(".playAndPauseMobile").classList.add("fa-pause");
            document.querySelector(".playAndPauseMobile").classList.remove("fa-play");
            estado = "pause";
            play();
        }
    }

    function play() {
        let stepTime = 1000;
        let current = barraProgreso.value;
        let timer = setInterval(function () {
            barraProgreso.value = current;
            barraProgresoDesktop.value = current;
            barraProgresoMobile.value = current;
            document.querySelector("#cancion-start").innerHTML = secondsToString(current);
            current++;
            if ((estado == "play") || (current == barraProgreso.max)) {
                clearInterval(timer);
            }
        }, stepTime);
    }

    function secondsToString(seconds) {
        let hour = Math.floor(seconds / 3600);
        let minute = Math.floor((seconds / 60) % 60);
        minute = (minute < 10) ? '0' + minute : minute;
        let second = seconds % 60;
        second = (second < 10) ? '0' + second : second;
        if (hour != 0) {
            hour = (hour < 10) ? '0' + hour : hour;
            return hour + ':' + minute + ':' + second;
        }
        return minute + ':' + second;
    }

    function abrirReproductor(){
        document.querySelector(".container-footer").style = "display:none";
        document.querySelector(".container-reproductor-desktop").style = "display:block";
        document.querySelector(".container-reproductor-mobile").style = "display:block";
        changeImage();
    }
        
    botonPlayDesktop = document.querySelectorAll(".play-tabla");
    for (let index = 0; index < botonPlayDesktop.length; index++) {
        botonPlayDesktop[index].addEventListener("click", abrirReproductor);  
    }
    document.querySelector(".playAndPause").addEventListener("click", changeImage);
    document.querySelector(".playAndPauseMobile").addEventListener("click", changeImage);

    let icono_vol = document.querySelector("#icono-volumen");
    let div_vol = document.querySelector("#div-volumen");
    let rango_vol = document.querySelector("#range-volumen");
    let icono_vol_desplegable = document.querySelector("#icono-volumen-desplegable");
    let contador_vol = 0;

    icono_vol.addEventListener("click", function(){
        
        if(contador_vol % 2 == 0) {
            div_vol.style.width = 40+"px";
            rango_vol.style.display = "block";
            icono_vol_desplegable.style.display = "block";
            contador_vol++;        
        } 
        else{
            div_vol.style.width = 0+"px";
            rango_vol.style.display = "none";
            icono_vol_desplegable.style.display = "none";
            contador_vol++;
        }
    })

    icono_vol_desplegable.addEventListener("click", function(){
        div_vol.style.width = 0+"px";
        rango_vol.style.display = "none";
        icono_vol_desplegable.style.display = "none";
        contador_vol++;
    });
}

document.addEventListener("DOMContentLoaded", cargaPagina);