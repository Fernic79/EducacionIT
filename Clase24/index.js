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

//Barra de busqueda
const productosSearch = () => {
    //redirijo a la página de búsqueda
    window.location.href = "descipcion.html";
}
let searchForm = document.getElementById("searchForm");
let searchInput;

searchForm.addEventListener("submit", function(event){
    event.preventDefault(); //Evita que se recargue la página   
searchInput = document.getElementById("search").value;//Capturamos el valor del input de búsqueda

//lista de productos de ejemplo
let productos = ["Camisa", "Pantalón", "Zapatos", "Sombrero"];
//Utilizamos el método filter para buscar el producto

//let resultado = productos.find();
//usamos un ciclo for para mostrar los resultados
for(let i=0; i<resultado.length; i++){
    if(searchInput == productos[i]){
        alert(`Producto encontrado: ${productos[i]}`);
        return; //Salimos de la función si encontramos el producto
    } else {
        alert("Producto no encontrado");
        return; //Salimos de la función si no encontramos el producto
    }
}});

//Limpiamos la barra de búsqueda después de enviar el formulario
const limpiarBusqueda = () => {
    searchInput = document.getElementById("search");
    search.value = "";
}
