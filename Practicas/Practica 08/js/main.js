
//Punto 2 - mostrar contenido del DOM cargado
document.addEventListener("DOMContentLoaded", function() {
    console.log("Contenido del DOM cargado");
});
//Punto 3 - cambiar el texto del textaerea
document.addEventListener("DOMContentLoaded", function() {
    let textarea = document.getElementById("origen");
    textarea.value = "<p>Este contenido <strong>está listo</strong><br>para ser editado y pasarlo abajo.</p>";    
});
//Punto 4 - cambiar el estado de los elementos input disabled
document.addEventListener("DOMContentLoaded", function() {
    let inputs = document.getElementsByTagName("input");
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].disabled = false;
    }
    let boton = document.getElementsByTagName("button")[0];
    boton.disabled = false;
});
//Punto 5 - programar los botones superiores
//A-Boton reemplazar
document.addEventListener("DOMContentLoaded", function() {
    let botonReemplazar = document.getElementById("btn-reemplazar");
    botonReemplazar.addEventListener("click", function() {
        let contenidoOrigen = document.getElementById("origen").value;
        document.getElementById("destino").innerHTML = contenidoOrigen;
        destino.style.fontFamily = "Arial, sans-serif";
    });
});
//B-Boton agregar
document.addEventListener("DOMContentLoaded", function() {
    let botonAgregar = document.getElementsByClassName("btn-agregar");
    botonAgregar[0].addEventListener("click", function() {
        let contenidoOrigen = document.getElementById("origen").value;
        let destino = document.getElementById("destino");
        destino.innerHTML += contenidoOrigen;
        destino.style.fontFamily = "Arial, sans-serif";
    });
});
//C-Boton agregar 5 veces
document.addEventListener("DOMContentLoaded", function() {
    let botonAgregar5 = document.getElementsByClassName("btn-agregar");
    botonAgregar5[1].addEventListener("click", function() {
        let contenidoOrigen = document.getElementById("origen").value;
        let destino = document.getElementById("destino");
        for (let i = 0; i < 5; i++) {
            destino.innerHTML += contenidoOrigen;
            destino.style.fontFamily = "Arial, sans-serif";
        }
    });
});
//D-Boton agregar 10 veces
document.addEventListener("DOMContentLoaded", function() {
    let botonAgregar10 = document.getElementsByClassName("btn-agregar");
    botonAgregar10[2].addEventListener("click", function() {
        let contenidoOrigen = document.getElementById("origen").value;
        let destino = document.getElementById("destino");
        for (let i = 0; i < 10; i++) {
            destino.innerHTML += contenidoOrigen;
            destino.style.fontFamily = "Arial, sans-serif";
        }
    });
});
//E-Boton agregar n veces
document.addEventListener("DOMContentLoaded", function() {
    let botonAgregarN = document.getElementsByClassName("btn-agregar");
    botonAgregarN[3].addEventListener("click", function() {
        let contenidoOrigen = document.getElementById("origen").value;
        let destino = document.getElementById("destino");
        let n = prompt("¿Cuántas veces desea agregar el contenido?");
        for (let i = 0; i < n; i++) {
            destino.innerHTML += contenidoOrigen;
            destino.style.fontFamily = "Arial, sans-serif";
        }
    });
});
//Punto 6 - programar los botones inferiores
//A-Boton vaciar
document.addEventListener("DOMContentLoaded", function() {
    let botonVaciar = document.getElementsByClassName("btn-vaciar");
    botonVaciar[0].addEventListener("click", function() {
        document.getElementById("destino").textContent = "";
    });
});
//B-Boton convertir en mayusculas
document.addEventListener("DOMContentLoaded", function() {
    let botonMayusculas = document.getElementsByClassName("btn-convertir-a-mayusculas");
    botonMayusculas[0].addEventListener("click", function() {
        let destino = document.getElementById("destino");
        destino.innerHTML = destino.innerHTML.toUpperCase();
        destino.style.fontFamily = "Arial, sans-serif";
    });
});
//C-Boton convertir en minusculas
document.addEventListener("DOMContentLoaded", function() {
    let botonMinusculas = document.getElementsByTagName("button");
    botonMinusculas[0].addEventListener("click", function() {
        let destino = document.getElementById("destino");
        destino.innerHTML = destino.innerHTML.toLowerCase();
        destino.style.fontFamily = "Arial, sans-serif";
    });
});
//Punto 7 - agregamos un boton para el punto 7
document.addEventListener("DOMContentLoaded", function() {
    let botonPunto7 = document.createElement("button");
    botonPunto7.textContent = "Agregar OK a li";
    document.body.appendChild(botonPunto7);
});
//Punto 7b - obtener el HTMLCollection de los elementos li y agregar el texto OK delante
document.addEventListener("DOMContentLoaded", function() {
    let botonLi = document.getElementsByTagName("button");
    botonLi[1].addEventListener("click", function() {
        let elementosLi = document.getElementsByTagName("li");
        for (let i = 0; i < elementosLi.length; i++) {
            elementosLi[i].textContent = "OK " + elementosLi[i].textContent;
        }
    });
});