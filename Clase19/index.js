
//Estos ARRAYS tienen un Indice y un Valor
let productos = ['Barcelona','Buenos Aires','Madrid','Miami','Paris','Pipa'];

//Para acceder a un elemento del array usamos el INDICE
console.log(productos[0]); //Barcelona
console.log(productos[3]); //Miami

//Accedemos a los productos mediante un BUCLE FOR
for (let i = 0; i < productos.length; i++) {
    console.log(`Producto en el indice ${i}: ${productos[i]}`);
}

//Probamos ahora un BUCLE WHILE
let cargaDatos = confirm("¿Desea cargar los productos? (SI/NO)");
let indice = 0;

while (cargaDatos) {
    let nombreProducto = prompt("Ingrese el nombre del producto a cargar:");
    productos.push(nombreProducto); //Agregamos el producto al array
    console.log(`Producto en el indice ${indice}: ${productos[indice]}`);
    indice++;

    //Condicion de salida
    if (indice === productos.length) {
        cargaDatos = false;
    }
}