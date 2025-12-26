
//Trabajamos la sección de Compartir:
/* Para no repetir 9 veces estas funciones
function meGusta(){
    tomar = document.getElementById("like1");
        tomar.setAttribute("style", "display: none");
    tomar1 = document.getElementById("like2");
        tomar1.setAttribute("style", "display: block");
}
function meGusta1(){
    tomar = document.getElementById("like2");
        tomar.setAttribute("style", "display: none");
    tomar1 = document.getElementById("like1");
        tomar1.setAttribute("style", "display: block");
}
*/
//Trabajamos con este evento para todas las cards
let contenedores = document.querySelectorAll('.compartir');
contenedores.forEach(contenedor => {
    // Para cada contenedor, buscamos sus dos imágenes internas
    let iconos = contenedor.querySelectorAll('.like');

    iconos.forEach(icono => {
        icono.addEventListener('click', function() {
            // Buscamos ambos iconos dentro de este contenedor específico
            let negro = contenedor.querySelector('.inactivo');
            let rojo = contenedor.querySelector('.activo');

            // Intercambiamos la visibilidad
            if (this.classList.contains('inactivo')) {
                negro.style.display = 'none';
                rojo.style.display = 'block';
            } else {
                rojo.style.display = 'none';
                negro.style.display = 'block';
            }
        });
    });
});

// Elemento share
function share(){
    alert("Usted esta compartiendo este producto\nGracias");
}

// Envío de formularios
function enviar(){
    //validar que los campos input y textarea han sido completados
    document.getElementById('form').addEventListener('submit', function(event) {
    // 1. Prevenir el envío por defecto para validar primero
    event.preventDefault(); 
    // 2. Seleccionar todos los inputs y textareas dentro del formulario
    let input = this.querySelectorAll('input, textarea'); 
    let validar = true; // Saber si todos los campos están completos
    // 3. Iterar sobre cada input para verificar si está vacío
    input.forEach(input => {
        // Usamos trim() para ignorar espacios en blanco y length para ver si está vacío
        if (input.value.trim().length === 0) {
            validar = false; // Encontrar campos vacíos
            input.style.border = '2px solid red'; // Marcar el campo vacío
        } else {
            input.style.border = ''; // Quitar el borde al completar el campo
        }
    });
    // 4. Si todos los campos están llenos
    if (validar) {
        alert("¡Su formulario ha sido enviado con éxito!");
    } else {
        alert("Por favor, complete todos los campos.");
    }
})};
 
// Función de compra
function comprar(){
    alert("El producto fue cargado a su carrito de compras\nGracias por su compra!");
}