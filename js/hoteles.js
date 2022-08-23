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
