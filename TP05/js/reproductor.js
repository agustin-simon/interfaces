function cargaPagina() {
    let estado = "play";
    let barraProgreso = document.querySelector(".cancion-reproductor");
    let tiempoTotal = 180;
    barraProgreso.max = tiempoTotal;
    barraProgreso.value = 0;
    document.querySelector("#cancion-end").innerHTML = secondsToString(tiempoTotal);

    function changeImage() {
        if (estado == "pause") {
            document.querySelector(".playAndPause").classList.remove("fa-pause");
            document.querySelector(".playAndPause").classList.add("fa-play");
            estado = "play";
        } else {
            document.querySelector(".playAndPause").classList.add("fa-pause");
            document.querySelector(".playAndPause").classList.remove("fa-play");
            estado = "pause";
            play();
        }
    }

    function play() {
        let stepTime = 1000;
        let current = barraProgreso.value;
        let timer = setInterval(function () {
            barraProgreso.value = current;
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

    document.querySelector(".playAndPause").addEventListener("click", changeImage);
}

document.addEventListener("DOMContentLoaded", cargaPagina);