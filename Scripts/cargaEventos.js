$(document).ready(cargarEvento());

//$("#descEvento").firstChild.text(eventos.Eventos[0].ano)

function cargarEvento() {
    let hayEvento = false;
    fetch("..\\Scripts\\Datos\\eventos.json")
        .then(response => response.json())
        .then(lista => {
            for (x in lista.eventos) {
                if (lista.eventos[x].ano === $("#ano").text() && lista.eventos[x].mes === $("#mes").text() && lista.eventos[x].dia === $(".activo").text()) {
                    $("#titEvento").text(lista.eventos[x].nombreEvento);
                    $("#descEvento").text(lista.eventos[x].descripcionEvento);
                    hayEvento = true;
                }
                if (!hayEvento) {
                    $("#titEvento").text("");
                    $("#descEvento").text("");
                }
            }
        });
    return true;
}