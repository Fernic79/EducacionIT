//Función para saludar al usuario
function saludar() {
    console.log("¡Hola, bienvenido a la Clase 21!");
}
//Llamada a la función de saludo
saludar();

let nombre = saludar();
console.log("El valor de nombre es: " + nombre);
function saludarPersona(nombre) {
    console.log("¡Hola " + nombre + ", bienvenido a la Clase 21!");
}
saludarPersona("Juan");

//Función flecha
const despedirPersona = (nombre) => {
    console.log("¡Adiós " + nombre + ", hasta luego!");
}

//Función con valor de retorno
function sumar(a, b) {
    let resultado = a + b;
    return resultado;
}

function calcularIva(precio, montoIva) {
    let iva = (precio * montoIva) / 100;
    return iva;
    console.log("Este mensaje no se mostrará porque está después del return"); // Código inalcanzable por el return
}
let precioProducto = 200;
let precioConIva = precioProducto + calcularIva(precioProducto, 21);
console.log("El precio con IVA es: " + precioConIva);