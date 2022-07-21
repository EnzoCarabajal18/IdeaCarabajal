let formularios = [];
let formulario;
let inputNombre;
let inputApellido;
let inputEmail;
let inputComentario;



class formularioCantidad {
  constructor(nombre, apellido, email, comentario){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.comentario = comentario;
  }
}

function cargarDatos(){
  formulario = document.getElementById("formulario");
  inputNombre = document.getElementById("nombre");
  inputApellido = document.getElementById("apellido");
  inputEmail = document.getElementById("email");
  inputComentario = document.getElementById("comentario");
  console.log(formulario, inputNombre, inputApellido, inputEmail, inputComentario);
}
cargarDatos();

//let formulario = document.getElementById("formulario");
formulario.onsubmit = (event) => {
  event.preventDefault();
  console.log("evento")
}





