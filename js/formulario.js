
const btn = document.getElementById('button');
document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();
   btn.value = 'Enviando...';
   const serviceID = 'default_service';
   const templateID = 'template_ot28ihh';
   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'ENVIAR FORMULARIO';
               Swal.fire({
        position: 'top',
        icon: 'success',
        title: 'Gracias por compartir tu experiencia',
        showConfirmButton: false,
        timer: 2000
})
    }, (err) => {
      btn.value = 'ENVIAR FORMULARIO';
      alert(JSON.stringify(err));
    });
});

//   const btn = document.getElementById('button');

//   document.getElementById('form')
//    .addEventListener('submit', function(event) {
//      event.preventDefault();
  
//      btn.value = 'Enviando...';
  
//      const serviceID = 'default_service';
//      const templateID = 'template_ot28ihh';
  
//      emailjs.sendForm(serviceID, templateID, this)
//       .then(() => {
//         btn.value = 'ENVIAR FORMULARIO';
//         //alert('Sent!');
//         Swal.fire({
//         position: 'top',
//         icon: 'success',
//         title: 'Gracias por compartir tu experiencia',
//         showConfirmButton: false,
//         timer: 2000
// })
//       }, (err) => {
//         btn.value = 'ENVIAR FORMULARIO';
//         alert(JSON.stringify(err));
//       });
//   });


// let formularios = [];
// let formulario;
// let inputNombre;
// let inputApellido;
// let inputEmail;
// let inputComentario;
// let tabla;
//  let nombre = sessionStorage.getItem('nombre');
//  let apellido = sessionStorage.getItem('apellido');
//  let email = sessionStorage.getItem('email');
//  let comentario = sessionStorage.getItem('comentario');
//  document.getElementById("nombre").value = nombre;
//  document.getElementById("apellido").value = apellido;
//  document.getElementById("email").value = email;
//  document.getElementById("comentario").value = comentario;

// class formularioCantidad {
//   constructor(nombre, apellido, comentario){
//     this.nombre = nombre;
//     this.apellido = apellido;
//     this.email = email;
//     this.comentario = comentario;
//     console.log(nombre, apellido, email, comentario);
//   } 
// }
//EJEMPLO FUNCIONES INVOCADAS
// (function cargarDatos(){
//   formulario = document.getElementById("formulario");
//   inputNombre = document.getElementById("nombre");
//   inputApellido = document.getElementById("apellido");
//   inputEmail = document.getElementById("email");
//   inputComentario = document.getElementById("comentario");
//   tabla = document.getElementById("reset");
// })();
// formulario.onsubmit = (event) => {
// event.preventDefault();
// let nuevoFormulario = new formularioCantidad(inputNombre.value, inputApellido.value, inputEmail.value, inputComentario.value);
// if(inputNombre.value != "" && inputApellido.value != "" && inputEmail.value != "" && inputComentario.value != ""){
// formularios.push(nuevoFormulario);
// agregarComentarios();
// guardarDatos();
// formulario.reset();
//    }else{
//      alert("Por favor ingrese todos los datos.")
// }
//EJEMPLO OPERADOR TERNARIO
//(inputNombre.value != "" && inputApellido.value != "" && inputEmail.value != "" && inputComentario.value != "")? formularios.push(nuevoFormulario) : alert("Por favor ingrese todos los datos.");

// Swal.fire({
//   position: 'top',
//   icon: 'success',
//   title: 'Gracias por compartir tu experiencia',
//   showConfirmButton: false,
//   timer: 2000
// })
// Toastify({
//   text: "This is a toast",
//   duration: 3000
//   }).showToast();
//}
// function guardarDatos(){
//   nombre = document.getElementById("nombre");
//   apellido = document.getElementById("apellido");
//   email = document.getElementById("email");
//   comentario = document.getElementById("comentario");
//   sessionStorage.setItem("nombre", nombre.value);
//   sessionStorage.setItem("apellido", apellido.value);
//   sessionStorage.setItem("email", email.value);
//   sessionStorage.setItem("comentario", comentario.value); 
// }
// function agregarComentarios(){
//   formularios.forEach(datos => {
//     tabla = document.querySelector(".table");
//     let filaTabla = document.createElement("tr");
//     filaTabla.innerHTML = `
//     <td>${datos.nombre}</td>
//     <td>${datos.apellido}</td>
//     <td>${datos.email}</td>
//     <td>${datos.comentario}</td>
//     `
//     tabla.append(filaTabla)
//   });
// }






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
