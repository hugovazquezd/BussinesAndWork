$(document).ready(function () {

    //MESES Y DIAS POR MES
    let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiempre", "Octubre", "Noviembre", "Diciembre"];
    let numDias = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    //Dia activo
    $(".dia").click(function () {
        $(".activo").removeClass("activo");
        $(this).addClass("activo");
        cargarEvento();
    });

    //Mes anterior
    $("#anterior").click(function () {

        let mesActual = $("#mes");
        let anoActual = $("#ano");
        let indiceMes;

        //Obtengo el mes
        for (let i = 0; i < meses.length; i++) {
            if (meses[i] === mesActual.text()) {
                //Si el mes actual es enero, el anterior es diciembre
                if (i === 0) {
                    indiceMes = 11;
                } else {
                    indiceMes = i - 1;
                }
            }
        }
        mesActual.text(meses[indiceMes]);

        //Obtengo el año
        if (indiceMes === 11) {
            let anteriorAno = parseInt(anoActual.text()) - 1;
            console.log(anteriorAno);
            anoActual.text(anteriorAno);
        }

        //Coloco los días
        let dias = numDias[indiceMes];
        //Años bisiestos
        if (indiceMes === 1 && isBisiesto(parseInt(anoActual.text()))) {
            dias++;
        }
        let inicioMes;
        let finMes;
        let celdasDias = $(".celdaCalendario");

        //Calculo la posición en la que finaliza el mes y, a partir de ella, en la que inicia
        for (let i = 0; i < celdasDias.length; i++) {
            if ($(celdasDias[i]).text() !== "") {
                inicioMes = (i + 41 - dias) % 7;
                break;
            }
        }
        finMes = inicioMes + dias;

        //Situo los dias en las casillas correspondientes
        for (let i = 0; i < celdasDias.length; i++) {
            if ((inicioMes < i) && (i <= finMes)) {
                $(celdasDias[i]).text(i - inicioMes);
                //console.log(i - inicioMes + 1);
            } else {
                $(celdasDias[i]).text("");
            }
        }

    });


    //Mes siguiente
    $("#siguiente").click(function () {

        let mesActual = $("#mes");
        let anoActual = $("#ano");
        let indiceMes;

        //Obtengo el mes
        for (let i = 0; i < meses.length; i++) {
            if (meses[i] === mesActual.text()) {
                //Si el mes actual es diciembre, el siguiente es enero
                if (i === 11) {
                    indiceMes = 0;
                } else {
                    indiceMes = i + 1;
                }
            }
        }
        mesActual.text(meses[indiceMes]);

        //Obtengo el año
        if (indiceMes === 0) {
            let siguienteAno = parseInt(anoActual.text()) + 1;
            console.log(siguienteAno);
            anoActual.text(siguienteAno);
        }

        //Coloco los días 
        let dias = numDias[indiceMes];
        //Años bisiestos
        if (indiceMes === 1 && isBisiesto(parseInt(anoActual.text()))) {
            dias++;
        }
        let inicioMes;
        let finMes;
        let celdasDias = $(".celdaCalendario");
        console.log(celdasDias);

        //Calculo la posición en la que inicia el mes y, a partir de ella, en la que inicia
        for (let i = 27; i < celdasDias.length; i++) {
            if ($(celdasDias[i]).text() === "") { //primera celda vacía del final
                inicioMes = i % 7;
                break;
            }
        }
        finMes = inicioMes + dias;

        console.log(inicioMes);
        console.log(finMes);

        //Situo los dias en las casillas correspondientes
        for (let i = 0; i < celdasDias.length; i++) {
            if ((inicioMes <= i) && (i < finMes)) {
                $(celdasDias[i]).text(i - inicioMes + 1);
                //console.log(i - inicioMes + 1);
            } else {
                $(celdasDias[i]).text("");
            }
        }
    });

});

function isBisiesto(ano) {
    return ano % 4 === 0 && (ano % 100 !== 0 || (ano % 100 === 0 && ano % 400 === 0));

}