let productos = [
    { id: 100, nombre: "Mar Del Plata", precio: 34.535},
    { id: 101, nombre: "Bariloche", precio: 65.535 },
    { id: 102, nombre: "Jujuy", precio: 57.535 },
    { id: 103, nombre: "Villa Gesell", precio: 39.535 },
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
      aux = aux + `<div onclick="meterAlCarro({id: ${productos[i].id}, nombre: '${productos[i].nombre}', precio: ${productos[i].precio}})" style="cursor: pointer;">
      <h3>${productos[i].nombre} </h3>
      <p> Precio: $ ${productos[i].precio} </p>
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
      <h3> Seleccionaste: ${productosEnCarro[i].nombre} por solo $ ${productosEnCarro[i].precio}</h3>
      <p> Precio final: $ ${productosEnCarro[i].precio} </p>
      <p onclick="borrarDelCarro(${i})" style="cursor: pointer;"> 🗑️</p>
    </div>`;
    break;
    }
    document.getElementById("div-carrito").innerHTML = aux;
  }