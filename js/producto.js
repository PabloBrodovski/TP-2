const productoElegido = sessionStorage.getItem("id");
console.log(productoElegido);

const destacado = JSON.parse(localStorage.getItem("productos"));
console.log(destacado)

const mostrarProducto = document.querySelector("#producto-elegido");


destacado.forEach((product) => {
    if(product.id == productoElegido){
    let content = document.createElement("div");
    content.className = "card2";
    content.innerHTML = `
        <div>
            <h3 class="name">${product.nombre}</h3> </div>
        <div class="imagen-descripcion">
            <img class="imagen" src="${product.imagen}">
            <p class="descriptionLarge">${product.descripcionLarga}</p>
        </div>
        <div>
            <p class="price-product">$ ${product.precio}</p>
        </div>
        <div>
        <p>${product.estrellas}</p>
        </div>
    `;
    mostrarProducto.append(content);
}
});




















// const destacado = JSON.parse(localStorage.getItem("producto"));

// const mostrarProducto = document.querySelector("#producto-elegido");
 
// destacado.forEach((product) => {
//     let content = document.createElement("div");
//     content.className = "card2";
//     content.innerHTML = `
//         <div>
//             <h3 class="name">${product.nombre}</h3> </div>
//         <div class="imagen-descripcion">
//             <img class="imagen" src="${product.imagen}">
//             <p class="descriptionLarge">${product.descripcionLarga}</p>
//         </div>
//         <div>
//             <p class="price-product">$ ${product.precio}</p>
//         </div>
//         <div>
//             ${product.estrellas}
//         </div>
//     `;

//     mostrarProducto.append(content);
// });

// localStorage.removeItem(destacado);
