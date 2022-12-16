//Al cargar la pagina
$(document).ready(function () {
    loadDoc();
});

function loadDoc() {
    let xhttp = new XMLHttpRequest();
    xhttp.open("get", "..\\Scripts\\Datos\\textoOpiniones.xml", true);
    xhttp.send();
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            myFunction(this);
        }
    };
}

function myFunction(xml) {
    let xmlDoc = xml.responseXML;
    let x = xmlDoc.getElementsByTagName("CD");
    let texto = "<p> " + x[0].getElementsByTagName("TEXT")[0].childNodes[0].nodeValue + " </p>";
    let texto1 = "<p> " + x[1].getElementsByTagName("TEXT")[0].childNodes[0].nodeValue + " </p>";
    let texto2 = "<p> " + x[2].getElementsByTagName("TEXT")[0].childNodes[0].nodeValue + " </p>";
    console.log(texto);
    document.getElementById("carga1").innerHTML = texto;
    document.getElementById("carga2").innerHTML = texto1;
    document.getElementById("carga3").innerHTML = texto2;

}