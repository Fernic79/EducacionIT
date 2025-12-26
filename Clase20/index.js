
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

/*while (indice < 3) {
    let nombreProducto = prompt("Ingrese el nombre del producto a cargar:");
    productos.push(nombreProducto); //Agregamos el producto al array
    console.log(`Producto en el indice ${indice}: ${productos[indice]}`);
    indice++;
}*/

//Captura de datos desde el HTML
let titulo = document.getElementById("titulo");
console.log(titulo); //Muestra el elemento HTML completo

titulo.innerText = "Listado de Productos"; //Modificamos el texto del H1

//Le damos un estilo al H1 desde JS
titulo.style.textAlign = "center";
titulo.style.color = "blue";
titulo.style.backgroundColor = "lightgray";
titulo.style.padding = "10px";

//Capturamos datos del formulario
//Cremos una variable para cada input
let nombreProducto;
let precioProducto;


//Capturamos datos del inputs
//nombreProducto = document.getElementById("nombreProducto").value;
//precioProducto = document.getElementById("precioProducto").value; 

//Nuestra primer funcion personalizada para capturar datos
//if(){}
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

//console.log(`Producto: ${nombreProducto} - Precio: ${precioProducto}`);