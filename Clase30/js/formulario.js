
//verificamos si el usuario esta logueado
let isLoggedIn = localStorage.getItem("isLoggedIn");

//si no esta logueado, lo redirigimos al login
if(isLoggedIn !== "true") {
    alert("Por favor inicie sesion para acceder al formulario");
    window.location.href = "../index.html";
}

//agregamos la funcionalidad de cerrar sesion
let cerrarBtn = document.getElementById("cerrar");
cerrarBtn.addEventListener("click", function() {
    //pasamos a false el localStorage
    localStorage.setItem("isLoggedIn", "false");
    //redireccionamos al login
    window.location.href = "../index.html";
});