
//verificamos si el usuario esta logueado
let isLoggedIn = localStorage.getItem("isLoggedIn");

//si no esta logueado, lo redirigimos al login
if(isLoggedIn !== "true") {
    alert("Por favor inicie sesion para acceder al formulario");
    window.location.href = "../index.html";
}

//mostramos el nombre del usuario en el formulario
let nombreUsuario = localStorage.getItem("administrador");
let saludoUsuario = document.getElementById("saludo-usuario");
saludoUsuario.innerText = `Bienvenido, ${nombreUsuario}`;

//agregamos la funcionalidad de cerrar sesion
let cerrarBtn = document.getElementById("cerrar");
cerrarBtn.addEventListener("click", function() {
    //pasamos a false el localStorage
    localStorage.setItem("isLoggedIn", "false");
    //redireccionamos al login
    window.location.href = "../index.html";
});

//creamos un array producto
let productos = [];

//funciones para datos del formulario y localStorage
let formProductos = document.getElementById("formProductos");
formProductos.addEventListener("submit", (e) => {
    e.preventDefault();
    //obtenemos los valores del formulario
    let nombre = document.getElementById("nombre").value;
    let precio = document.getElementById("precio").value;
    let stock = document.getElementById("stock").value;
    //creamos un objeto literal de producto
    let producto = {
        nombre: nombre,
        precio: parseFloat(precio),
        stock: parseInt(stock)
    };
    //agregamos el producto al array
    productos.push(producto);
    //guardamos el array en el localStorage
    localStorage.setItem("productos", JSON.stringify(productos));//convierte los objetos en string
    //reseteamos el formulario
    formProductos.reset();
    alert("Producto agregado correctamente");
});

//Enviar los datos al backend (simulado)
//1-Metodo viejo AJAX con XMLHttpRequest
function enviarDatosAJAX(datos, lugar) {
    let xhr = new XMLHttpRequest();
}