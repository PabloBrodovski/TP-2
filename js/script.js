const listaProductos = document.querySelector("#lista-de-productos");
let productos;

const listaDeProductos = async () => {
  localStorage.clear();
  listaProductos.innerHTML = "";

  productos = localStorage.getItem("productos");

  if (productos == null) {
    const response = await fetch("productos.json");
    productos = await response.json();

    localStorage.setItem("productos", JSON.stringify(productos));
  }

  if (typeof productos == "string") {
    productos = JSON.parse(productos);
  }

  productos.forEach(cargarProductos);
};

const cargarProductos = (product) => {
//   const foto = product.imagen ?? "pawel-szvmanski-oUOxOSPbcJk-unsplash.jpg";
  const productoHTML = `
    <div class="card">
        <h3>${product.nombre}</h3>
        <img class="imagen" src="${product.imagen}">
        <p class="description">${product.descripcion}</p>
        <p class="price">$ ${product.precio}</p>
        <button class="ver" id="${product.id}">Ver</button>
    </div>
  `;

  listaProductos.innerHTML += productoHTML;
};

listaDeProductos();

document.addEventListener("click", (event) => {
    console.log(event.target.tagName == "BUTTON");
    sessionStorage.setItem("id", event.target.id);
    window.location = "producto.html";
  });

  function mostrarEstrellas (estrellas) {
    const estrellasLlenas = estrellas.length;
    const estrellasVacias = 5 - estrellasLlenas;

const estrellasHTML = '<p class="estrella-llena">⭐</p>'.repeat(estrellasLlenas) +
'<p class="estrella-vacia">⭐</p>'.repeat(estrellasVacias);

return `<p class="puntuacion-estrellas">${estrellasHTML}</p>`;
};