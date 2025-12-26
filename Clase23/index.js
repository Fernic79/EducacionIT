
//Capturamos los datos del formulario
let formulario = document.getElementById("formulario");

//Agregamos el evento submit al formulario
formulario.addEventListener("submit", function(event){
    //Necesita 2 parámetros esta función(1-tipo de evento, 2-función a ejecutar)
    console.log(event);

    event.preventDefault(); //Evita que se recargue la página
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if(email === "" || password === ""){
        alert("Por favor complete ambos campos.");
        return; //Salimos de la función si hay campos vacíos
    } else if(password.length < 8){ //Validamos que la contraseña tenga al menos 8 caracteres
        alert("La contraseña debe tener al menos 8 caracteres.");
        return; //Salimos de la función si la contraseña es muy corta
    }else if(email === "pepe@gmail.com" && password === "12345678"){
        alert("Login exitoso");
    }
    alert("Formulario enviado");
});

let nombreProducto;
let precioProducto;

function capturaDatos(){
    //Capturamos datos del inputs
nombreProducto = document.getElementById("nombreProducto").value;
precioProducto = document.getElementById("precioProducto").value;

//Validamos que los campos no esten vacios
if(nombreProducto == "" || precioProducto == ""){
    alert("Por favor complete ambos campos.");
    return; //Salimos de la funcion si hay campos vacios
}

console.log(`Producto: ${nombreProducto} - Precio: ${precioProducto}`);
}

//Empiezo con la clase 23

/**
 * este es un comentario JSDoc
 * Función para redirigir a la página de descripción
 * @params nombre y user del producto
 * @param {string} nombre - Nombre del producto
 * @param {string} user - Usuario del producto
 * @return no retorna nada
 */

const descripcion = () =>{
    //Redirijo a la página de descripción
    window.location.href = "descripcion.html";
}