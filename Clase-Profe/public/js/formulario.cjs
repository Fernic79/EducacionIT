
/* 
A. Funcionalidad de control del Login y Cerrar Sesión
*/

// 1. Verificamos si el usuario está logeado
let isLoggedIn = localStorage.getItem("isLoggedIn");

// 2. Si no está logeado, redirigimos al login
if (isLoggedIn !== "true") {

    // enviamos un alert informando que no está logeado
    alert("Por favor, inicie sesión para acceder a esta página.");

  // y lo redirigimos al login
    window.location.href = "../index.html";
}  

// Mostramos el nombre del administrador en la página
let userAdmin = document.getElementById("userAdmin");
let adminName = localStorage.getItem("administrador");

userAdmin.innerText = `Bienvenido ${adminName}`;


// 3. Agregamos la funcionalidad de cerrar sesión
let cerrarSesionBtn = document.getElementById("cerrar");

cerrarSesionBtn.addEventListener("click", function() {

    // Limpiamos el localStorage un dato a la vez
    localStorage.removeItem("administrador");
    localStorage.removeItem("email");
    localStorage.removeItem("isLoggedIn");

    // borramos todo el localStorage: es lo mismo que borrar cada item individualmente
    localStorage.clear();

    // Redirigimos al login
    window.location.href = "../index.html";
});



/* 
B. Funciones para datos del Formulario y localStorage
*/

// Creamos un arreglo de productos
let productos = [];

let formProductos = document.getElementById("formProductos");

formProductos.addEventListener("submit", (e) => {
    e.preventDefault();
    
    // Obtenemos los valores del formulario
    let nombre = document.getElementById("nombre").value;
    let precio = document.getElementById("precio").value;
    let stock = document.getElementById("stock").value;

    // Creamos un objeto literal producto
    let producto = {
        nombre, // lo mismo que nombre: nombre (si la clave y el valor se llaman igual)
        precio: parseFloat(precio),
        stock: parseInt(stock)
    };

    // Crear un objeto literal para una función genérica de envío al backend

/*     let datosProducto = {
        nombre: nombre,
        precio: parseFloat(precio),
        stock: parseInt(stock)
    }; */

/*     let compraProductos = {
        producto: nombre,
        precio: parseFloat(precio),
        stock: parseInt(stock)
    }; */

    // Confirmamos que el producto se creó correctamente
    console.log(producto);

    // Agregamos el producto al arreglo de productos
    productos.push(producto);

    // Confirmamos que el producto se agregó al arreglo
    console.log(productos);

    // Guardamos el arreglo de productos en el localStorage
    localStorage.setItem("productos", JSON.stringify(productos));
    alert("Producto agregado correctamente");
    // Limpiamos el formulario
    formProductos.reset();

/*     let dataBase = "https://mi-base-de-datos.com/api/productos";
    let tiendaOnline = "https://mi-tienda-online.com/api/productos"; */

    // llamar a la función que envía los datos al backend
/*     enviarDatosAlBackend(datosProducto, dataBase);

    enviarDatosAlBackend(compraProductos, tiendaOnline); */

    enviarFetch(producto);
});


// Crear una función que también envé los datos al backend
/* Metodo viejo: XMLHttpRequest
function enviarDatosAlBackend(datos, lugar) {
    // Crear el objeto XMLHttpRequest
    let xhr = new XMLHttpRequest();

}*/

//funcion activa de http request usando Ajax viejo
/*function enviarAjax(producto) {
    //creamos la instancia de XMLHttpRequest
    let xhr = new XMLHttpRequest();
    //obtener la url del backend
    let url = "https://localhost:3000/reciboProductos";
    //confirmamos la peticion
    xhr.open("POST", url, true);
    //configuramos el encabezado para enviar JSON
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    //definimos la funcion de respuesta
    xhr.onread = function() {
        if (xhr.status === 201 && xhr.status === 200) {
            console.log("Producto enviado correctamente al backend", producto);
            console.log("Respuesta del servidor:", xhr.responseText);
        }
        else {
            console.error("Error al enviar el producto al backend", xhr.statusText);
        }
    };
    //http no envia datos de objetos literales, se debe convertir a JSON
    let data = JSON.stringify(producto);
    //enviamos la peticion con los datos
    xhr.send(data);

}*/

//funcion activa de http request usando fetch API

const enviarFetch = (producto) => {
    //obtener la url del backend
    let url = "http://localhost:3000/reciboProductos";
    //enviar la peticion usando fetch
    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json;charset=UTF-8"
        },
        body: JSON.stringify(producto)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error("Error en la respuesta del servidor "+response.statusText);
        }
        return response.json();
    })
    .then(data => {
        console.log("Producto enviado correctamente al backend:", producto);
        console.log("Respuesta del servidor:", data);
    })
    .catch(error => {
        console.error("Error al enviar el producto al backend:", error);
    });
};