var create = document.getElementById('crear')

function crearTabla(c, f) {
    /* const cuerpo = document.body,
    tabla = document.createElement('table'); */

    /*  const cuerpo = document.querySelectorAll('.tabla')[0],
         tabla = document.createElement('table'); */

    /*  const cuerpo = document.getElementsByClassName('tabla')[0],
         tabla = document.createElement('table'); */

    const cuerpo = document.getElementsByTagName('div')[1],
        tabla = document.createElement('table');


    tabla.style.width = '100px';
    tabla.style.border = '6px solid black';
    tabla.style.background = 'white'


    for (let i = 0; i < f; i++) {

        const tr = tabla.insertRow();
        /* tr.appendChild(document.createTextNode('Filas: ' + f)); */

        for (let j = 0; j < c; j++) {
            /* if (i === 2 && j === 1) {
                break;

            } else { */
            const td = tr.insertCell();

            td.appendChild(document.createTextNode('Column: ' + c));

            td.style.border = '3px solid black';

            /* if (i === 1 && j === 1) {
                td.setAttribute('rowSpan', '2');
            } */
            /* } */
        }
    }
    cuerpo.appendChild(tabla);
}

create.addEventListener('click', () => {
    crearTabla(document.getElementById('columnas').value, document.getElementById('filas').value)
})