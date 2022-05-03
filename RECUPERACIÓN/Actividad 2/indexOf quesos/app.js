var boton = document.getElementById('enviar')


function quesos() {
    var usu = document.getElementById('user')
    var respuesta = document.getElementById('caja').value


    let miCadena = "cabrales, torta del casar, idiazabal"
    let miCadenaMayusculas = "Cabrales, Torta del Casar, Idiazabal"

    if (miCadenaMayusculas.indexOf(respuesta) >= 0) {
        let mayus = miCadenaMayusculas.indexOf(respuesta)
        usu.innerHTML = 'Tu respuesta SÍ contiene mayúsculas, has dicho que tu variedad de queso favorita es "' + respuesta + '" y se encuentra en el índice ' + mayus + ' de la cadena'

    } else if (miCadena.indexOf(respuesta) >= 0) {

        let minus = miCadena.indexOf(respuesta)
        usu.innerHTML = 'Tu respuesta NO contiene mayúsculas, has dicho que tu variedad de queso favorita es "' + respuesta + '" y se encuentra en el índice ' + minus + ' de la cadena'
    } else {
        usu.innerHTML = 'La variedad que indicas no se encuentra entre las que proponemos, por favor, vuelve a indicar cual es tu variedad de queso favorita.'
    }


}


enviar.addEventListener('click', () => {
    quesos()
})