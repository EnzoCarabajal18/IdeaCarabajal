let productos = [
    { id: 100, nombre: "pan", precio: 100 },
    { id: 101, nombre: "leche", precio: 200 },
    { id: 102, nombre: "fernet", precio: 300 },
  ];
  
  let aux = localStorage.getItem("productosEnCarro");
  let productosEnCarro;
  
  if (!aux) {
    productosEnCarro = [];
  } else {
    productosEnCarro = JSON.parse(aux);
    pintarCarrito();
  }
  
  function pintarListado() {
    let aux = "";
    for (let i = 0; i < productos.length; i++) {
      aux =
        aux +
        `<div onclick="meterAlCarro({id: ${productos[i].id}, nombre: '${productos[i].nombre}', precio: ${productos[i].precio}})" style="cursor: pointer;">
      <h3> Nombre: ${productos[i].nombre} </h3>
      <p> Precio: $ ${productos[i].precio} </p>
      <p> ID: ${productos[i].id} </p>
    </div>`;
    }
    document.getElementById("div-productos").innerHTML = aux;
  }
  pintarListado();
  
  function meterAlCarro(objetosProducto) {
    productosEnCarro.push(objetosProducto);
    localStorage.setItem("productosEnCarro", JSON.stringify(productosEnCarro));
    pintarCarrito();
  }
  
  function borrarDelCarro(id) {
    productosEnCarro.splice(id, 1);
    localStorage.setItem("productosEnCarro", JSON.stringify(productosEnCarro));
    pintarCarrito();
  }
  
  function pintarCarrito() {
    let aux = "";
    for (let i = 0; i < productosEnCarro.length; i++) {
      aux =
        aux +
        `<div >
      <h3> Nombre: ${productosEnCarro[i].nombre} </h3>
      <p> Precio: $ ${productosEnCarro[i].precio} </p>
      <p> ID: ${productosEnCarro[i].id} </p>
      <p onclick="borrarDelCarro(${i})" style="cursor: pointer;"> 🗑️</p>
    </div>`;
    }
    document.getElementById("div-carrito").innerHTML = aux;
  }