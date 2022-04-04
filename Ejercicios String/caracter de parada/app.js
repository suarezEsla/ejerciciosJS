var call = document.getElementById('ver')
var stop = document.getElementById('parar')


function aleatorios() {


    let box1 = document.getElementById('caja1').value

    let box2 = document.getElementById('caja2')

    let strLength = box1.length

    const random = box1.charAt(Math.floor(Math.random() * strLength))

    box2.value = random

}


function stopped() {
    var abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefgjijklmnopqrstuvwxyz'

    let abcLength = abc.length

    const ran = abc.charAt(Math.random(Math.floor) * abcLength)



    return ran
}

//LLamada a función con parámetros

call.addEventListener('click', () => {
    aleatorios()
})

stop.addEventListener('click', () => {
    stopped()
})