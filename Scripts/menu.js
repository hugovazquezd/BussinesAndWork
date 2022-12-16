function menuResponsivo() {
    const x = document.getElementById("myTopnav");
    if (x.className === "menu cabecera") {
        x.className += " responsiva";
    } else {
        x.className = "menu cabecera";
    }
    ocultarLogo();
    ocultarTitulo();
}

function ocultarLogo(){
    const y = document.getElementById("ocultar");
    if (y.className === "fa fa-camera-retro") {
        y.className = "hide";
    } else if (y.className === "hide") {
        y.className = "fa fa-camera-retro";
    }
}

function ocultarTitulo(){
    const z = document.getElementById("titulo");
    if (z.className === "tittle") {
        z.className = "hide";
    } else if (z.className === "hide") {
        z.className = "tittle";
    }
}