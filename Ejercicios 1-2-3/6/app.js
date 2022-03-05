function cambiarFondo() { /*Función*/
    return Math.floor(Math.random() * (255 - 0)) + 0; /*Número random del 0 al 255*/
}

var cambio = document.getElementById('color_change'); /*Llamo a botón con un evento de 'click'*/
cambio.addEventListener('click', function() {

    document.getElementById('aleatorio').style.backgroundColor = "rgb(" + cambiarFondo() + " " + cambiarFondo() + " " + cambiarFondo() + ")";
}); /*LLamp al div del fondo, añado "rgb" para el color y concateno con la función llamada 3 veces*/