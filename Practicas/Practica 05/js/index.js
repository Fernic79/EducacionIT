
//Ejercicio Nº 1 del TP5

let cantidadDeGatos = parseInt(prompt("Ingrese el número de gatos", "Ej. 10"));

let gato1 = "😺";
let gato2 = "😸";
let gato3 = "😹";

for (let i = 1; i <= cantidadDeGatos; i++){
    if (cantidadDeGatos === 1 || (i-1)%3 === 0){
        console.log("Gato #" + i + ":" + " " + gato1);
    } else if (cantidadDeGatos === 2 || (i-2)%3 === 0){
        console.log("Gato #" + i + ":" + " " + gato2);
    } else if(cantidadDeGatos === 3 || (i-3)%3 === 0)
        console.log("Gato #" + i + ":" + " " + gato3);
    }

//Ejercicio Nº 2 del TP5

let cantidadDePasos = parseInt(prompt("Ingrese la cantidad de pasos", "Ej. 5"));

let gatito1 = "🐈";
let pasos = "🐾";

for (let i = 1; i <= cantidadDeGatos; i++){
    console.log("Gato #" + i + ":" + gatito1 + " " + pasos.repeat(cantidadDePasos));
}

//Ejercicio Nº 3 del TP5

let gatito2 = "🐈‍⬛";

for (let i = 1;i <= cantidadDeGatos; i++){
    if (i%2 === 0){
        console.log("Gato #" + i + ":" + gatito2 + " " + pasos.repeat(cantidadDePasos));
    } else {
        console.log("Gato #" + i + ":" + gatito1 + " " + pasos.repeat(cantidadDePasos));
    }
}