const carrito = {
    productos: [],
    agregarProducto: function(nombre, precio) {
        this.productos.push({ nombre, precio });
        console.log(`Producto "${nombre}" agregado al carrito.`);
    },
    mostrarCarrito: function() {
        console.log("Contenido del carrito:");
        this.productos.forEach(producto => {
            console.log(`${producto.nombre}: $${producto.precio}`);
        });
    },
    guardarCarrito: function() {
        localStorage.setItem('carrito', JSON.stringify(this.productos));
        console.log("Carrito guardado en localStorage.");
    }
};

function agregarProducto(nombre, precio) {
    carrito.agregarProducto(nombre, precio);
}

function mostrarCarrito() {
    carrito.mostrarCarrito();
}

function guardarCarrito() {
    carrito.guardarCarrito();

    
}


document.addEventListener("DOMContentLoaded", function (carrito) {
    let contenedorProductos = document.getElementById("contenedor-productos");


    if (contenedorProductos) {
        let productos = [
  
        ];

        let listaProductos = document.createElement("ul");

        productos.forEach(function (productos) {
            let elementoLista = document.createElement("li");
            elementoLista.textContent = productos.nombre + " - $" + producto.precio;
            listaProductos.appendChild(elementoLista);
        });

        contenedorProductos.appendChild(listaProductos);
    }
});