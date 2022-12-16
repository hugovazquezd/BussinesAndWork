$(document).ready(function () {

    let estrellitas = $(".E");
    console.log(estrellitas);

    estrellitas.click(function () {
        let numClickada = numEstrellita($(this));

        $(this).children(":first").removeClass("estrella-vacia");
        $(this).children(":first").addClass("estrella-rellena amarilla");
        $(this).children(":first").removeClass("verde");

        let coleccionEstrellas = $(this).siblings();

        coleccionEstrellas.each(function () {
            let numEstrellActual = numEstrellita($(this));
            if (numEstrellActual < numClickada) {
                $(this).children(":first").removeClass("estrella-vacia verde");
                $(this).children(":first").addClass("estrella-rellena amarilla");
            } else {
                $(this).children(":first").removeClass("estrella-rellena amarilla verde");
                $(this).children(":first").addClass("estrella-vacia");
            }
        })
    });

    estrellitas.mouseover(function () {
        let numClickada = numEstrellita($(this));

        //$(this).children(":first").removeClass("estrella-vacia");
        $(this).children(":first").addClass("estrella-rellena-hover verde");

        let coleccionEstrellas = $(this).siblings();

        coleccionEstrellas.each(function () {
            let numEstrellActual = numEstrellita($(this));
            if (numEstrellActual < numClickada) {
                //$(this).children(":first").removeClass("estrella-vacia");
                $(this).children(":first").addClass("estrella-rellena-hover verde");
            } else {
                //$(this).children(":first").removeClass("estrella-rellena amarilla");
                $(this).children(":first").addClass("estrella-vacia-hover verde");
            }
        })
    });

    estrellitas.mouseout(function () {

        $(this).children(":first").removeClass("estrella-rellena-hover verde");
        $(this).children(":first").removeClass("estrella-vacia-hover");

        let coleccionEstrellas = $(this).siblings();

        coleccionEstrellas.each(function () {
            $(this).children(":first").removeClass("estrella-rellena-hover verde");
            $(this).children(":first").removeClass("estrella-vacia-hover verde");
        });
    });
});


numEstrellita = estrella => {
    let clases = estrella.attr("class");

    console.log(clases);
    let numEstrella;
    if (clases.includes("uno")) {
        numEstrella = 1;
    } else if (clases.includes("dos")) {
        numEstrella = 2;
    } else if (clases.includes("tres")) {
        numEstrella = 3;
    } else if (clases.includes("cuatro")) {
        numEstrella = 4;
    } else {
        numEstrella = 5;
    }

    return numEstrella;
}