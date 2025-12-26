
//Creamos un objeto
let persona = {
    nombre: "Juan",
    edad: 30,
    ciudad: "Madrid",
    profesion: "Desarrollador",
    empresa: "Tech Solutions",
    trabajo: "Remoto"
};//los objetos se crean con llaves {}

let personaUno = {
    nombre: "Jose",
    edad: 30,
    ciudad: "Madrid",
    profesion: "Desarrollador",
    empresa: "Tech Solutions",
    trabajo: "Remoto"
};

let personaDos = {
    nombre: "Julian",
    edad: 30,
    ciudad: "Madrid",
    profesion: "Desarrollador",
    empresa: "Tech Solutions",
    trabajo: "Remoto"
};

//Creamos un array de objetos
let empleados = [persona, personaUno, personaDos];

//buscar un empleado por nombre
let empleadoBuscado = empleados.find(function(empleado){
    return empleado.nombre === "Jose";
});//el metodo find recibe una función de callback en lugar de parametros directos
console.log(empleadoBuscado);