let ubicacion = ["Mar Del Plata", "bariloche", "jujuy", "villa Gesell"];
const descuentos = ubicacion.slice (0, 1);
const descuentos2 = ubicacion.slice (3, 4);
alert ("Por temporada baja " + descuentos + " y " + descuentos2 +" están en descuento");
let precio = [34.535, 65.535, 57.535, 39.535];
let destino = "El destino seleccionado es: ";
function agregardestino(){
  let elegir = prompt("Seleccione el destino:\n1 - Mar del Plata\n2 - Bariloche\n3 - Jujuy\n4 - Villa Gesell\n5 - Salir");
  if(elegir == 5){
    console.log("Cerraste el programa");
  }
  else if(5 > elegir){
    for (let i = 0; i < elegir; i++){
      if(ubicacion[i] == ubicacion[elegir-1]){
        alert("Elegiste "+ubicacion[elegir-1]+" por solo $: "+precio[elegir-1]);
      }
    }
  }
  else{
    alert("Opción incorrecta!!!");
  }
}
agregardestino();






