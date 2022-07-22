// let formularios = [];
// let formulario;
// let inputNombre;
// let inputApellido;
// let inputEmail;
// let inputComentario;



// class formularioCantidad {
//   constructor(nombre, apellido, email, comentario){
//     this.nombre = nombre;
//     this.apellido = apellido;
//     this.email = email;
//     this.comentario = comentario;
//   }
// }

// function cargarDatos(){
//   formulario = document.getElementById("formulario");
//   inputNombre = document.getElementById("nombre");
//   inputApellido = document.getElementById("apellido");
//   inputEmail = document.getElementById("email");
//   inputComentario = document.getElementById("comentario");
//   console.log(formulario, inputNombre, inputApellido, inputEmail, inputComentario);
// }
// cargarDatos();

//let formulario = document.getElementById("formulario");
// formulario.onsubmit = (event) => {
//   event.preventDefault();
//   console.log("evento")
// }



let miFormulario = document.getElementById ("formulario");
  let inputNombre = document.getElementById("show-nombre");
  let inputApellido = document.getElementById("show-apellido");
  let inputEmail = document.getElementById("show-email");
  let inputComentario = document.getElementById("show-comentario");
miFormulario. addEventListener ("submit", validarFormulario );
function validarFormulario (e){
e.preventDefault ();
let formulario = e.target
inputNombre.textContent=formulario.children[0].value;
inputApellido.textContent=formulario.children[1].value;
inputEmail.textContent=formulario.children[2].value;
inputComentario.textContent=formulario.children[3].value;
}


