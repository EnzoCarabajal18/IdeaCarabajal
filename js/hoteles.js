let btn = document.getElementById("myBtn");
let btn2 = document.getElementById("myBtn2");
let btn3 = document.getElementById("myBtn3");
let btn4 = document.getElementById("myBtn4");
btn.addEventListener('click', () => {
Swal
.fire({
      title: "¿Estás listo?",
      text: "Hacé click y terminá tu compra!",
      icon: 'success',
      showCancelButton: true,
      confirmButtonText: "Continuar",
      cancelButtonText: "Cancelar",
      cancelButtoncolor: "red", 
})
});
  btn2.addEventListener('click', () => {
    Swal
        .fire({
            title: "¿Estás listo?",
            text: "Hacé click y terminá tu compra!",
            icon: 'success',
            showCancelButton: true,
            confirmButtonText: "Continuar",
            cancelButtonText: "Cancelar",
            cancelButtoncolor: "red", 
    })
  });
btn3.addEventListener('click', () => {
  Swal
  .fire({
        title: "¿Estás listo?",
        text: "Hacé click y terminá tu compra!",
        icon: 'success',
        showCancelButton: true,
        confirmButtonText: "Continuar",
        cancelButtonText: "Cancelar",
        cancelButtoncolor: "red", 
  })
  });
btn4.addEventListener('click', () => {
    Swal
      .fire({
        title: "¿Estás listo?",
        text: "Hacé click y terminá tu compra!",
        icon: 'success',
        showCancelButton: true,
        confirmButtonText: "Continuar",
        cancelButtonText: "Cancelar",
        cancelButtoncolor: "red", 
})
});
// let cantHabitacionesTotal = prompt("Cantidad de habitaciones disponibles");
// let precioFinde = 10000;
// let pregunta;
// console.log("La cantidad de habitaciones disponibles es de " + cantHabitacionesTotal);
// let gananciaTotal = 0;
// for (let habitaciones = 1; habitaciones <= cantHabitacionesTotal; habitaciones++) {
//   pregunta = prompt("La habitación "+ habitaciones + " se ocupó? elige una opción:\n1 - Si \n2 - No");
//   if(pregunta == 1){
//     console.log("ocupada");
//     gananciaTotal = gananciaTotal + precioFinde
//   }else {
//     console.log("no ocupada");
//   }
// }
// alert ("La ganancia del fin de semana fue de $" + gananciaTotal);
const usuario1 = {
    nombre: "John Doe",
    edad: 14
  }
  const usuario2 = {
    carsNum : 20,
    marca : "VW"
  };
  
  console.log( usuario1 || "El usuario no existe" )
  // { nombre: 'John Doe', edad: 14 }
  console.log( usuario2 || "El usuario no existe" )
  // El usuario no existe




//ejemplo clase 
// fetch('https://pokeapi.co/api/v2/pokemon?limit=5&offset=0')
//   .then((resinicial) => resinicial.json())
//   .then((res) => {
//     const miArray = res.results;

//     let htmlAux = '';
//     for (let i = 0; i < miArray.length; i++) {
//       htmlAux =
//         htmlAux +
//         `<div>
//             <h3>${miArray[i].name}</h3>
//             <a href="${miArray[i].url}">${miArray[i].url}</a>
//         </div>`;
//     }
//     document.getElementById('listadoDePoques').innerHTML = htmlAux;
//   })
//   .catch((e) => {
//     console.log(e);
//   });






// function clickEnPoque(name) {
//   alert('click en ' + name);
// }

// fetch('https://pokeapi.co/api/v2/pokemon?limit=5&offset=0')
//   .then((resinicial) => resinicial.json())
//   .then((res) => {
//     const miArray = res.results;

//     let htmlAux = '';
//     for (let i = 0; i < miArray.length; i++) {
//       htmlAux =
//         htmlAux +
//         `<div onclick="clickEnPoque('${miArray[i].name}')">
//             <h3>${miArray[i].name}</h3>
//             <a href="${miArray[i].url}">${miArray[i].url}</a>
//         </div>`;
//     }
//     document.getElementById('listadoDePoques').innerHTML = htmlAux;
//     console.log(htmlAux);
//   })
//   .catch((e) => {
//     console.log(e);
//   });
