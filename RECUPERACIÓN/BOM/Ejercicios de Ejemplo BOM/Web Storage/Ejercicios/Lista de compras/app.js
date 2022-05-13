var item = document.getElementById('item')
var cantidad = document.getElementById('cantidad')

var lista = document.getElementById('list')

document.addEventListener('click', accion, false)


function accion(e) {
    var cantidadCapturada = cantidad.value
    var itemCapturado = item.value

    switch (e.target.innerText) {
        case 'GUARDAR':
            localStorage.setItem(cantidadCapturada, itemCapturado)

            console.log('entra en guardar')
            guardar()
            break

        case 'MODIFICAR':
            console.log('entra en modificar')
            modificar()
            break

        case 'ELIMINAR':

            eliminar()
            break
    }
}

function guardar() {
    var cantidadCapturada = cantidad.value
    var itemCapturado = item.value

    localStorage.setItem(itemCapturado, cantidadCapturada)

    mostrarItems()
}

function mostrarItems() {
    let todoContenidoLocal = "";
    let keysLocal = Object.keys(localStorage);
    for (let key of keysLocal) {

        todoContenidoLocal += key + " = " + localStorage.getItem(key) + '\n';

    }
    document.getElementById("list").innerHTML = 'Valores en local: <br>' +
        todoContenidoLocal;
}