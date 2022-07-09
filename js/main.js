// Ejemplo clase 1
// let nombre = prompt("ingrese su nombre")
// let apellido = prompt("ingrese su apellido")
// alert ("Bienvenido a Mendoza Viajes " + nombre + " " + apellido)

//ejemplo clase 2
// let nombreUsuario = prompt("Ingresar nombre de usuario");
// if (nombreUsuario == "") {
//     alert("No puedes acceder a descuentos");
// }
// else {
//     alert("Acá podrás ver todos los descuentos " + nombreUsuario);
// }
// let ingreso = 1
// if(ingreso == 1){
//     console.log("Estás en la página principal")
// }
// if(ingreso == 2){
//     console.log("No puedes ingresar")
// }
//ejemplo clase 3
// let numero = 1;
// while(numero <= 10){
//     console.log(numero);
//     numero = numero + 1
// }

//clase 5
//function Persona(nombre, edad) {
   // //constructor
   // this.nombre = nombre;
   // this.edad = edad;
   // this.piernas = 4;
  
    //funciones
    //this.hablar = function () {
    //  console.log('hola yo soy ' + (this.nombre || 'amigo') + ' tengo ' + this.piernas + ' piernas!');
    //};
    //this.resetear = function () {
    //  this.nombre = '';
    //  this.edad = 0;
    //  this.piernas = 0;
    //};
  //}
  
  // class Persona {
  //   //constructor
  //   constructor(nombre, edad) {
  //     this.nombre = nombre;
  //     this.edad = edad;
  //     this.piernas = 4;
  //   }
  //   //funciones
  //   hablar() {
  //     console.log('hola yo soy ' + (this.nombre || 'amigo') + ' tengo ' + this.piernas + ' piernas!');
  //   }
  //   resetear() {
  //     this.nombre = '';
  //     this.edad = 0;
  //     this.piernas = 0;
  //   }
  // }
  
  // const persona1 = new Persona('Homero', 39);
  // persona1.resetear();
  // persona1.hablar();

  // let wood = 5;
  // let paper = 0;
  // while (wood > 0) {
  //   paper += 1000;
  //   wood--;
  // }
  // console.log("The paper factory made " + paper + " sheets of paper.");

  //Ejemplo compa
// console.log("Ingresa los productos al registro de sctok")
// console.log("Para finalizar el ingreso de los productos escriba EXIT en vez de un producto")
// const array = []

// function productos() {
    
//     for (let i = 0; i < Number.MAX_SAFE_INTEGER  ; i++) {
       
//         let producto = prompt("producto").toUpperCase()
//         while (producto == "") {
//             alert("Error. Ingrese el nombre del producto")
//             producto = prompt("producto").toUpperCase()
//         }
//         if (producto == "EXIT") {
//             break
//         }
//         let precio = parseInt(prompt("precio"))
//         while (isNaN(precio)) {
//             alert("Error. Ingrese el precio del producto")
//             precio = parseInt(prompt("precio"))
//         }
//         let cantidad = parseInt(prompt("cantidad"))
//         while (isNaN(cantidad)) {
//             alert("Error. Ingrese la cantidad del producto")
//             cantidad = parseInt(prompt("cantidad"))
//         }
//         array[i]= Object.assign({producto,precio,cantidad})
// array[i]= Object.assign({producto,precio,cantidad})
//         console.log("Nuevo ingreso realizado")
        
//     }
    
// }

// productos()

// for (let propiedad in array) {
//     console.log(array[propiedad])
// }
// let stock = 10;
// let disponible;
// for (stock = 0; stock <= 10; stock++){
//   alert = prompt("Ingrese cantidad de habitaciones")
// }

let cantHabitacionesTotal = prompt("Cantidad de habitaciones disponibles");
let precioFinde = 10000;
let pregunta;
console.log("La cantidad de habitaciones disponibles es de " + cantHabitacionesTotal);
let gananciaTotal = 0;
for (let habitaciones = 1; habitaciones <= cantHabitacionesTotal; habitaciones++) {
  pregunta = prompt("La habitación "+ habitaciones + " se ocupó? elige una opción:\n1 - Si \n2 - No");
  if(pregunta == 1){
    console.log("ocupada");
    gananciaTotal = gananciaTotal + precioFinde
  }else {
    console.log("no ocupada");
  }
}
alert ("La ganancia del fin de semana fue de $" + gananciaTotal);
