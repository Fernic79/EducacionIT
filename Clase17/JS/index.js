
//Condicionales
let edad = 18;

if(edad == 18){
    console.log("Puedes comprar bebidas tienes 18 años " + edad);
}

if(edad >= 18){
    console.log("Puedes comprar bebidas tienes más de 18 años " + edad);
}
if(edad <= 17){
    console.log("No puedes comprar bebidas tienes menos de 18 años " + edad);
}

let password = "admin1";

if(password.length >= 6 && password.length <= 15){
    console.log("La contraseña es segura");
} else{
    console.log("La contraseña debe tener entre 6 y 15 caracteres");
}


let pasaporteVigente = true;
let pasajeComprado = true;

//bucles FOR

let password1 = "admin12345";
//utilizamos una condeicion que nos permita agregar automaticamente mas datos
for(let i = 0; i < password1.length; i++){
    console.log("Repetición número: " + i);}

for(let i = 100; i < 110; i++){
    console.log("Alumno " + i);}