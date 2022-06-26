// Ejemplo clase 1
let nombre = prompt("ingrese su nombre")
let apellido = prompt("ingrese su apellido")
alert ("Bienvenido a Mendoza Viajes " + nombre + " " + apellido)

//ejemplo clase 2
let nombreUsuario = prompt("Ingresar nombre de usuario");
if (nombreUsuario == "") {
    alert("No puedes acceder a descuentos");
}
else {
    alert("Acá podrás ver todos los descuentos " + nombreUsuario);
}
let ingreso = 1
if(ingreso == 1){
    console.log("Estás en la página principal")
}
if(ingreso == 2){
    console.log("No puedes ingresar")
}
//ejemplo clase 3
let numero = 1
while(numero < 10){
    console.log(numero)
    numero = numero + 1
}





