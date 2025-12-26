//Capturamos los datos del formulario
let formulario = document.getElementById("formulario");

//Agregamos el evento submit al formulario
formulario.addEventListener("submit", function(event){
    //Necesita 2 parámetros esta función(1-tipo de evento, 2-función a ejecutar)
    console.log(event);
    alert("Formulario enviado");
});