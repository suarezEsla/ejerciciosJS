/*1.- Se trata de pedir al usuario un número a través de una ventana de entrada. Comprobar si
es un número. El resultado mostrarlo con una ventana emergente.
 */


function comprobarDato() {

    var resu = "";

    var dato = prompt("Por favor, introduce un dato y comprobaremos si es numérico o no.");

    while (isNaN(dato)) {

        alert(dato + " no es un número.");
        dato = prompt("Introduce un número.");

        resu = dato;
    }

    alert(dato + " es un número.");

    resu = "El número introducido es: " + dato;
    return resu;
}