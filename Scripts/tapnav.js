function seleccionarElemento(a, b, n,m) {
    const x = document.getElementById(a);
    const y = document.getElementById(b);
    if (x.className === "noActivo") {
        x.className = "activo";
        y.className = "noActivo";
    } else {
        x.className = "noActivo";
        y.className = "activo"
    }
    cambiarSombreado(n,m);
}

function cambiarSombreado(x,y) {
    const z = document.getElementById(x);
    const w = document.getElementById(y);

    if (z.className === "enlaces") {
        z.className += " Ac";
        w.className = "enlaces";
    } else {
        z.className = "enlaces";
        w.className += " Ac";
    }
}