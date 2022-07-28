function accion(){
  let desplaza = document.getElementsByClassName('menu');
  for(let i = 0; i < desplaza.length; i++){
    desplaza[i].classList.toggle('on-off');
  }
}

// let destinos = `[{
//   "lugar1": "mar del plata";
//   "precio": 34.535;
// }
// {
//   "lugar2": "bariloche";
//     "precio": 65.535;
// }
// {
//   "lugar3": "jujuy";
//   "precio": 57.535;

// }
// {
//   "lugar4": "villa gesell";
//   "precio": 39.535;
// }
// ]`;

  
//console.log(typeof destinos);




let parrafo = document.getElementsByClassName('text-2');
parrafo[3].textContent="Ingresá a nuestra app y obtené beneficios increibles";

let container = document.getElementById("contenedor")
container.innerHTML = "<p> Incluye impuestos, tasas y cargos</p>"

let texto = document.querySelector(".col-12 col-md-6 #contenedor2")
contenedor2.textContent= "25% OFF SOLO POR HOY";



const elem = document.createElement('p');
const target = document.querySelector('.publicidad');
target.parentNode.insertBefore(elem, target);


// let nombre = prompt("ingrese su nombre");
// alert ("Bienvenido " + nombre + " "+ " a Mendoza Viajes");
// let jsonCompleto = JSON.stringify(nombre); 
// console.log(jsonCompleto); 

// let ubicacion = ["Mar Del Plata", "bariloche", "jujuy", "villa Gesell"];
// const descuentos = ubicacion.slice (0, 1);
// const descuentos2 = ubicacion.slice (3, 4);
// alert ("Por temporada baja " + descuentos + " y " + descuentos2 +" están en descuento");
// let precio = [34.535, 65.535, 57.535, 39.535];
// let destinoElegido,precioElegido;
// agregardestino();
// function agregardestino(){
//   let elegir = prompt("Seleccione el destino:\n1 - Mar del Plata\n2 - Bariloche\n3 - Jujuy\n4 - Villa Gesell\n5 - Salir");
//   if(elegir == 5){
//     alert("Cerraste el programa");
//   }
//   else if((5 > elegir) && (elegir > 0)){
//     for (let i = 0; i < elegir; i++){
//       if(ubicacion[i] == ubicacion[elegir-1]){
//         destinoElegido = ubicacion[i];
//         precioElegido = precio[i];
//       }
//     }
//   }
//   else{
//     alert("Opción incorrecta!!!");
//   }
// }

// function Lugar(nombreLugar, precioLugar) {
//   this.nombreLugar = nombreLugar;
//   this.precioLugar = precioLugar;
//   this.informacion = function(){ alert("La ciudad "+ this.nombreLugar +" tiene un costo de "+ this.precioLugar)}
// }
// const lugar1 = new Lugar(destinoElegido,precioElegido);
// if(destinoElegido){
//   lugar1.informacion();
// }

