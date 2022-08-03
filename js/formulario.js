let formularios = [];
let formulario;
let inputNombre;
let inputApellido;
let inputComentario;
let tabla;
 let nombre = sessionStorage.getItem('nombre');
 let apellido = sessionStorage.getItem('apellido');
 let comentario = sessionStorage.getItem('comentario');
 document.getElementById("nombre").value = nombre;
 document.getElementById("apellido").value = apellido;
 document.getElementById("comentario").value = comentario;

class formularioCantidad {
  constructor(nombre, apellido, comentario){
    this.nombre = nombre;
    this.apellido = apellido;
    this.comentario = comentario;
    console.log(nombre, apellido, comentario);
  } 
}
//EJEMPLO FUNCIONES INVOCADAS
(function cargarDatos(){
  formulario = document.getElementById("formulario");
  inputNombre = document.getElementById("nombre");
  inputApellido = document.getElementById("apellido");
  inputComentario = document.getElementById("comentario");
  tabla = document.getElementById("reset");
})();
formulario.onsubmit = (event) => {
event.preventDefault();
let nuevoFormulario = new formularioCantidad(inputNombre.value, inputApellido.value, inputComentario.value);
//   if(inputNombre.value != "" && inputApellido.value != "" && inputComentario.value != "" && inputComentario.value != ""){
//formularios.push(nuevoFormulario);
//agregarComentarios();
//guardarDatos();
//     formulario.reset();
//   }else{
//     alert("Por favor ingrese todos los datos.")
//   }
//EJEMPLO OPERADOR TERNARIO
(inputNombre.value != "" && inputApellido.value != "" && inputComentario.value != "" && inputComentario.value != "")? formularios.push(nuevoFormulario) : alert("Por favor ingrese todos los datos.");
agregarComentarios();
guardarDatos();
Swal.fire({
  position: 'top',
  icon: 'success',
  title: 'Gracias por compartir tu experiencia',
  showConfirmButton: false,
  timer: 2000
})
// Toastify({
//   text: "This is a toast",
//   duration: 3000
//   }).showToast();
}
function guardarDatos(){
  nombre = document.getElementById("nombre");
  apellido = document.getElementById("apellido");
  comentario = document.getElementById("comentario");
  sessionStorage.setItem("nombre", nombre.value);
  sessionStorage.setItem("apellido", apellido.value);
  sessionStorage.setItem("comentario", comentario.value); 
}
function agregarComentarios(){
  formularios.forEach(datos => {
    tabla = document.querySelector(".table");
    let filaTabla = document.createElement("tr");
    filaTabla.innerHTML = `
    <td>${datos.nombre}</td>
    <td>${datos.apellido}</td>
    <td>${datos.comentario}</td>
    `
    tabla.append(filaTabla)
  });
}
// let miFormulario = document.getElementById ("formulario");
//   let inputNombre = document.getElementById("show-nombre");
//   let inputApellido = document.getElementById("show-apellido");
//   let inputEmail = document.getElementById("show-email");
//   let inputComentario = document.getElementById("show-comentario");
// miFormulario. addEventListener ("submit", validarFormulario );
// function validarFormulario (e){
// e.preventDefault ();
// let formulario = e.target
// inputNombre.textContent=formulario.children[0].value;
// inputApellido.textContent=formulario.children[1].value;
// inputEmail.textContent=formulario.children[2].value;
// inputComentario.textContent=formulario.children[3].value;
// formulario.reset();
// }