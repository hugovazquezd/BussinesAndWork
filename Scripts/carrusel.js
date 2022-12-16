let indiceActual = [0, 0]; //se va a cargar en un momento inicial la primera imagen de cada carrusel
let claseCarrusel = ["carrusel", "carrusel1"]; //los carruseles utilizados son estos
let claseCirculo = ["circulo", "circulo1"]; //y los círculos estos otros

mostrar(0, 0);

function siguiente(Ncarrusel) {
    //como solo hay tres imágenes el nuevo valor será:
    indiceActual[Ncarrusel] = (indiceActual[Ncarrusel] += 1) % 3;
    mostrar(Ncarrusel, indiceActual[Ncarrusel]);
}

function anterior(Ncarrusel) {
    //como solo hay tres imágenes el nuevo valor será:
    indiceActual[Ncarrusel] = (indiceActual[Ncarrusel] -= 1);
    if (indiceActual[Ncarrusel] === -1) {
        indiceActual[Ncarrusel] = 2;
    }
    mostrar(Ncarrusel, indiceActual[Ncarrusel]);
}


function mostrar(Ncarrusel, n) {
    let i;
    //cogemos los elementos deseados:
    const ventana = document.getElementsByClassName(claseCarrusel[Ncarrusel]);
    const puntos = document.getElementsByClassName(claseCirculo[Ncarrusel]);

    // para los puntos y las ventanas:
    for (i = 0; i < ventana.length; i++) {
        ventana[i].style.display = "none";
        puntos[i].className = puntos[i].className.replace(" actual", "");
    }
    ventana[n].style="";
    puntos[n].className += " actual";
}