class Ordenador {
    constructor(marca, modelo, ram, hd, pantalla) {
        this.marca = marca;
        this.modelo = modelo;
        this.ram = 8;
        this.hd = 1024;
        this.pantalla = 17;

    }
}

function crearOrdenador(marcaValor, modeloValor, ramValor, hdValor, pantallaValor) {


    var ordenador = new Ordenador(marcaValor, modeloValor, ramValor, hdValor, pantallaValor)


    var muestra = document.getElementsByClassName('ordena')[0]
    muestra.innerHTML = 'El portátil ' + ordenador.marca + ' ' + ordenador.modelo + ' tiene ' + ordenador.ram + ' gb de RAM, HD de ' + ordenador.hd + ' y pantalla de ' + ordenador.pantalla + ' pulgadas.'

    return ordenador
}


var boton = document.getElementById('enviar')

boton.addEventListener('click', () => {
    crearOrdenador(document.getElementById('marca').value, document.getElementById('modelo').value, document.getElementById('ram').value, document.getElementById('hd').value, document.getElementById('pantalla').value)
})



































/* const ordenador = {
    marca: 'HP',
    modelo: 'Pavilion',
    ram: 8,
    hd: 1024,
    pantalla: 17,
    listado: function() {
        return 'El portátil ' + ordenador.marca + ' ' + ordenador.modelo + ' tiene ' + ordenador.ram + ' gb de RAM, HD de ' + ordenador.hd + 'y pantalla de ' + ordenador.pantalla + ' pulgadas.'
    }
}


var muestra = document.getElementsByClassName('ordena')[0]

muestra.innerHTML = ordenador.listado() */


/* var marcaValor = document.getElementsByClassName('marca')[0]
var modeloValor = document.getElementsByClassName('modelo')[0]
var ramValor = document.getElementsByClassName('ram')[0]
var hdValor = document.getElementsByClassName('hd')[0]
var pantallaValor = document.getElementsByClassName('pantalla')[0] */





/* create.addEventListener('click', () => {
    crearTabla(document.getElementById('columnas').value, document.getElementById('filas').value)
}) */


/* var muestra = document.getElementsByClassName('ordena')[0]

muestra.innerHTML = ordenador.listado() */