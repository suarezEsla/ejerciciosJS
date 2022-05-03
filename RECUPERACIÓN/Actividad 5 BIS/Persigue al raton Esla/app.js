var sigue = document.getElementById('sigue').style;
//Seguir hace que las coordenadas x e y se muestren con una variación de N pixeles respecto a la posición original.
function seguir() {
    sigue.top = parseInt(window.event.pageY + 2) + "px";
    sigue.left = parseInt(window.event.pageX + 2) + "px";
}