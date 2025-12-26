/*
alert("Bienvenido a la tienda online");

let precioProducto = prompt("Ingrese el precio del producto:");
let montoIva = prompt("Ingrese el porcentaje de IVA a aplicar:");

//Función para calcular el precio con IVA   
let precioSinIva = document.getElementById("precioSinIva");
let precioConIva = document.getElementById("precioConIva");

function calcularIva(precioProducto, montoIva ) {
    precioProducto = parseFloat(precioProducto);
    montoIva = parseFloat(montoIva);

    let iva = (precioProducto * montoIva) / 100;
    
    precioSinIva.innerText = "Precio sin IVA: $" + precioProducto;
    precioConIva.innerText = "Precio con IVA: $" + (precioProducto + iva);
}
calcularIva(precioProducto, montoIva);
*/


//Función para calcular el precio con IVA desde el botón de la página 
let precioSinIva = document.getElementById("precioSinIva");
let precioConIva = document.getElementById("precioConIva");

function calcularIva() {
    alert("Bienvenido a la tienda online");
    
    let precioProducto = prompt("Ingrese el precio del producto:");
    let montoIva = prompt("Ingrese el porcentaje de IVA a aplicar:");
    precioProducto = parseFloat(precioProducto);
    montoIva = parseFloat(montoIva);

    let iva = (precioProducto * montoIva) / 100;
    
    precioSinIva.innerText = "Precio sin IVA: $" + precioProducto;
    precioConIva.innerText = "Precio con IVA: $" + (precioProducto + iva);
}
