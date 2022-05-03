var obtener = document.getElementById('enviar')
var mostrar = document.getElementsByClassName('cajas')[1]

function obtenerDiferencia(inicio, actual) {

    nacimiento = new Date(inicio).getTime()

    hoy = new Date(actual).getTime()


    if (hoy > nacimiento) {
        var diferencia = hoy - nacimiento

        Math.trunc(diferencia)

        const div = document.createElement('div')
        div.className = 'cajas' //Esto añade nombre de clase al nuevo div que hemos creado
        div.innerHTML = 'Tienes: ' + diferencia / (1000 * 60 * 60 * 24) + ' días!'

        document.body.appendChild(div)

        /*  mostrar.innerHTML = 'Tienes: ' + diferencia / (1000 * 60 * 60 * 60) + ' días!' */
        limpiarCajas()

    } else {

        /* mostrar.innerHTML = 'La fecha de tu nacimiento debe ser anterior a hoy! */


        const div = document.createElement('div')
        div.className = 'cajas' //Esto añade nombre de clase al nuevo div que hemos creado
        div.innerHTML = 'La fecha de tu nacimiento debe ser anterior a hoy!'

        document.body.appendChild(div)
        limpiarCajas()
    }

}


function limpiarCajas() {
    nacimiento.value = ''
    hoy.value = ''
}





obtener.addEventListener('click', () => {
    obtenerDiferencia(document.getElementById('fechaInicial').value, document.getElementById('fechaActual').value)
})