var array = []

let numero

let suma = 0


do {
    numero = prompt('Introduzca un número')

    if (numero != 0 && !isNaN(numero)) {
        array.push(numero)
    } else if (isNaN(numero)) {
        alert('Error, tiene que introducir un número')
    }
} while (numero != 0)


if (numero == 0) {
    alert('Ha pulsado 0, procesando números')
    var show = document.getElementById('muestra')
    for (let i of array) {
        var media = suma += i

    }

    show.innerHTML = 'La media de todo los números introducidos es: ' + media / array.length
}




console.log(array)