var nombre = document.getElementsByName('nombre')[0]
var apellido = document.getElementsByName('apellido')[0]
var sino = document.getElementsByName('si-no')[0]

document.addEventListener('DOMContentLoaded', () => {
    nombre.focus()
})

nombre.addEventListener('keydown', function(e) {
    if (e.key == 'Enter') {
        console.log('ha pulsado enter ')

        sessionStorage.nombreAlumno = nombre.value
        apellido.focus()
    }
})

apellido.addEventListener('keydown', function(e) {
    if (e.key == 'Enter') {
        console.log('ha pulsado enter ')

        sessionStorage.apellidoAlumno = apellido.value
        sino.focus()
    }
})

sino.addEventListener('keydown', function(e) {
    if (e.key == 'Enter') {
        matricular()
    }
})

function matricular() {
    let matriculacion = sino.value
    if (matriculacion == 'si' || matriculacion == 'SI') {
        console.log('ha dicho si')
        window.location.href = 'director.html'
    } else {
        console.log('ha dicho no')
        limpiar()
    }
}

function limpiar() {
    nombre.value = ""
    apellido.value = ""
    sino.value = ""

    nombre.focus()
}