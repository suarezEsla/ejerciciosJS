/*4.- Crear una página web que permita implementar el juego de “Adivinar el número que ha generado la página entre el 1 y el 1000”. 
-El programa permitirá un número de intentos indefinido, irá contabilizando el número de intentos, hasta acertar, o bien,
el usuario podrá salir voluntariamente de la partida pulando “Salir”. 

-Al mismo tiempo el programa irá guiando al usuario en el intento de adivinar, es mayor, es menor, etc. Al final el programa mostrará un informe relativo a “Mensaje de acierto
y en el número” y si desea o no volver a intentar la partida. Igualmente si ha salido deberá mostrarlo con un mensaje. */


let numero, n;
let salir = false;
let volver;
do { // se repite este c�digo al menos una vez
    cont = 0;
    // c�lculo del n�mero del 1 al 1000
    numero = parseInt(Math.random() * 1000) + 1;
    do {
        // bucle del juego, se repite hasta
        // que el usuario indique salir o acierte
        do {
            // bucle de petici�n del n�mero
            // se repite mientras el usuario no
            // indique un n�mero correcto o 
            // pulse cancelar
            volver = false;
            n = prompt("�Qu� n�mero del 1 al 1000 crees que he pensado?");
            // si se cancel� el cuadro
            // la variable centinela "salir"
            // valdr� true
            if (n == null) salir = true;
            //comprobamos si el n�mero es v�lido
            else if (isNaN(n) || n < 0 || n > 1000) {
                alert("N�mero no v�lido");
                volver = true;
            }
        } while (salir == false && volver == true);

        cont++;
        if (salir == false) {
            // mensajes de lo cerca o no que
            // est� el n�mero del usuario
            // solo se muestran si no se puls� en salir
            if (numero > n) {
                alert("Mi numero es mayor")
            } else if (numero < n) {
                alert("Mi numero es menor")
            }
        }
    } while (salir == false && n != numero);
    // solo podemos salir si hemos acertado o 
    // hemos cancelado alg�n cuadro
    if (salir == false)
    // mensaje de acierto
        alert("�Acertaste! Intentos: " + cont);
    // pedimos confirmaci�n al usuario para 
    // jugar otra vez si no ha indicado que quiere
    // salir
} while (salir == false && confirm("�Quieres jugar de nuevo?"));

//mensajes dependiendo de lo que eligi� el usuario
if (salir) {
    document.write("<h1>Se cancel� la partida</h1>");
} else document.write("<h1>Gracias por jugar</h1>");