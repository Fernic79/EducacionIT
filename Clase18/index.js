//Trabajamos con ventanas en JavaScript

//Alerta
alert("Este es un mensaje de alerta para el usuario");

//Prompt
let nombre = prompt("Por favor, ingresa tu nombre:");
console.log("El nombre ingresado es: " + nombre);

//Confirm
let respuesta = confirm("¿Estás seguro de que deseas continuar?");

//Operadores aritméticos
/* suma: +
   resta: -
   multiplicación: *
   división: /
   módulo: % 
*/

let ventasMascotas = 0;
let cancelMascotas = 0;

let mascotaDeseada = prompt("Ingrese la mascota que desea comprar:");
console.log("Mascota seleccionada: " + mascotaDeseada);

let confirmarCompra = confirm("¿Desea confirmar la compra de la mascota " + mascotaDeseada + "?");
console.log("Confirmación de compra: " + confirmarCompra);

if (confirmarCompra) {
    ventasMascotas += 1;
    console.log("Compra confirmada. Total de ventas de mascotas: " + ventasMascotas);
} else {
    cancelMascotas += 1;
    console.log("Compra cancelada. Total de cancelaciones de mascotas: " + cancelMascotas);
}
console.log("El tipo mascota vendida es: " + mascotaDeseada);