var vehicles = new Array();
var brand, price;
var coche; 
    
function store0(){ //stores items in sessionStorage
    brand = document.getElementById('carBrand').value;//retrieves value
    price = document.getElementById('carPrice').value;//retrieve value
    coche = {
        brand: brand,
        price: price,
    }
    //también se podría: const coche = {brand: brand,price: price}
    alert(coche.brand);
    vehicles.push(coche);

   //window.sessionStorage.setItem('cars',JSON.stringify(coche));  
    //converting object to string
     // adding an object to list
     /*vehicles.push(window.sessionStorage.getItem('car'));*/
    console.log(vehicles);
}
function cargarotrapagina(){
        window.sessionStorage.setItem('cars',JSON.stringify(vehicles));
        console.log(window.sessionStorage.getItem('cars'))  
        //converting the list to string. SessionStorage only stores values in Strings
        window.location="coches-1.html";
}
document.addEventListener("DOMContentLoaded", inicializar,false);//ensures the page is loaded before functions are executed.
function inicializar(){
        document.getElementById("storeButton").addEventListener("click",store0,false);
        document.getElementById("carForm").addEventListener("click",cargarotrapagina,false);
        document.getElementById('carBrand').focus();
        document.getElementById('carBrand').addEventListener("keydown",gestionarteclado,false);
        document.getElementById('carPrice').addEventListener("keydown",gestionarteclado,false);
}
function gestionarteclado(e){
    //alert(e.target.name);
    switch (e.target.name) {
        case "marca":
            //alert(e.key);
            if (e.key == "Enter"){
                document.getElementById('carPrice').focus();
                document.getElementById('carBrand').disabled=true;
            }
            break;
        
        case "precio":
            if (e.key == "Enter"){
                store0();
                document.getElementById('carPrice').disabled=false;
                document.getElementById('carBrand').disabled=false;
                document.getElementById('carPrice').value="";
                document.getElementById('carBrand').value="";
                document.getElementById('carBrand').focus();
            }
            break;
        default:
            console.log("Algo no se ha hecho bien");
            
    }
}