//capturamos el div principal
const divPrincipal = document.getElementById("principal");

//creamos la barra de navegacion
let navegacion = document.createElement("nav");

//le agregamos algunos estilos basicos
navegacion.style.backgroundColor = "#874e4eff";
navegacion.style.width = "100%";
navegacion.style.height = "60px";
navegacion.style.display = "flex";
navegacion.style.alignItems = "center";
navegacion.style.paddingLeft = "20px";

//agregamos la barra de navegacion al div principal
divPrincipal.appendChild(navegacion);
/*
//agregamos un avento a la navegacion para hacer click
navegacion.addEventListener("click", () => {
  alert("Haz hecho clic en la navegación");
});
*/
//creamos la lista de navegacion
let listaNavegacion = document.createElement("ul");
//creamos los elementos de la lista
let listHome = document.createElement("li");
listHome.innerText = "Home";
listHome.style.display = "inline";
listHome.style.margin = "20px";
listHome.style.color = "white";
listHome.style.cursor = "pointer";
listHome.addEventListener("click", () => {
    window.location.href = "../index.html";
    /*alert("Haz hecho clic en Home");*/
});

//creamos un ancla para home
let anclaHome = document.createElement("a");
anclaHome.href = "../index.html";

//agregamos el ancla al elemento de la lista
listHome.appendChild(anclaHome);

//agregamos el primer elemento a la lista de navegacion
listaNavegacion.appendChild(listHome);

//subimos el ul a la barra de navegacion
navegacion.appendChild(listaNavegacion);

let listProductos = document.createElement("li");
listProductos.innerText = "Productos";
listProductos.style.display = "inline";
listProductos.style.margin = "20px";
listProductos.style.color = "white";
listProductos.style.cursor = "pointer";
listProductos.addEventListener("click", () => {
    window.location.href = "../pages/productos.html";
    /*alert("Haz hecho clic en Productos");*/
});

listaNavegacion.appendChild(listProductos);

let listFormulario = document.createElement("li");
listFormulario.innerText = "Formulario";
listFormulario.style.display = "inline";
listFormulario.style.margin = "20px";
listFormulario.style.color = "white";
listFormulario.style.cursor = "pointer";
listFormulario.addEventListener("click", () => {
    window.location.href = "../pages/formulario.html";
    /*alert("Haz hecho clic en Formulario");*/
});

listaNavegacion.appendChild(listFormulario);