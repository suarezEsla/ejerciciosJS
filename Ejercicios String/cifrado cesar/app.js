//Al cargar la ventana se carga la función inicio()
window.addEventListener('load', inicio, true)

//Función inicio
function inicio() {
    //Pasa a mayúsculas todo lo que se pase por el input 'mensaje' al pulsar cualquier tecla y soltar ('keyup)
    document.getElementById('mensaje').addEventListener('keyup', function() {
        this.value = this.value.toUpperCase()
    }, true)

    //Cifrar (llamada a botón)
    document.getElementById('cifrar').addEventListener('click', function() {
        //Recogemos el mensaje y la clave de desplazamiento
        let texto = document.getElementById('mensaje').value
        let desplazamiento = document.getElementById('desplazamiento').value

        //En el input mensaje2, mostramos como valor el resultado de la función cifrar con sus parámetros
        document.getElementById('mensaje2').value = cifrar(texto, desplazamiento)
    }, true)



    function cifrar(texto, desplazamiento) {
        let resultado = ''

        let letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

        //El desplazamiento debe ser menor que 26, que son las letras que tiene el Abecedario
        //Por si metemos un número negativo, hacemos módulo y le sumamos 26 y modulo 26 asegurandonos que el numero va a estar entre 0 y 25
        desplazamiento = (desplazamiento % 26 + 26) % 26

        if (texto) {
            //Recorremos el texto
            for (let i = 0; i < texto.length; i++) {
                /*Comprobamos si se encuentra en el array de letras y comprobamos si es distinto de -1, 
                (devuelve -1 si no la encuentra)*/

                if (letras.indexOf(texto[i]) != -1) {
                    /*Si la encuentra en el abcdario, le sumamos el desplazamiento y hacemos modulo 26  */
                    let posicion = ((letras.indexOf(texto[i]) + desplazamiento) % 26)
                        //Si está correcto, guardamos en resultado la letra con su nueva posición
                    resultado += letras[posicion]
                } else {
                    //Si no, mostramos el texto original
                    resultado += texto[i]
                }
            }
            return resultado
        }
    }







}