// funciones sincrónicas
function tarea1() {
    console.log("Tarea 1");
}

function tarea2() {
    console.log("Tarea 2");
}


//llamamos a las funciones
tarea1();
tarea2();

setTimeout(() => {
    console.log("Tarea 3");
}, 3000);

// funciones asíncronas
function tareaAsincrona() {
    setTimeout(() => {
        console.log("Tarea asíncrona");
    }, 2000);
} 

// tarea asíncrona 2: simulacro de conexión a base de datos
function tareaAsincrona2() {
    setTimeout(() => {
      try {
        connect(); //no existe la función connect()
        console.log("conexión exitosa");
      } catch (error) {// captura el error de la función que no existe
        console.log("no encuentro la conexión");
      }
    }, 4000);
}

tareaAsincrona();

tareaAsincrona2();

console.log("Fin del programa");