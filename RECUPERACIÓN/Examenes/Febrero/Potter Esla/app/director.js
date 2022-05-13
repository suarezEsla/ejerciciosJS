document.addEventListener('DOMContentLoaded', cuentaAtras, false)
var crono = document.getElementsByName('crono')[0]
var tiempo = 10

function cuentaAtras() {
    crono.value = tiempo
    if (tiempo == 0) {

        window.location.href = 'matricula.html'
    } else {
        tiempo -= 1
        setTimeout("cuentaAtras()", 300);

    }

}