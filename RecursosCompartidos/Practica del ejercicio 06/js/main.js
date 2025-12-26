//1 - Imprimir título en la consola
let title = document.getElementById("titulo").textContent;
console.log(title);

//3 - Imprimir por consola los nombres y apellidos corregidos
function arreglo(str) {
  /* Devuelve un string vacío si no hay texto
  if (!str) return alert("Por favor complete todos los campos.");
  // Convierte el primer carácter a mayúscula y el resto a minúscula*/
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

function integrante1( ){
    
    let nombre1 = document.getElementById("nombre1").value/*.replace(/\d/g, '')*/;
    let nombre12 = document.getElementById("nombre12").value/*.replace(/\d/g, '')*/;
    let apellido1 = document.getElementById("apellido1").value/*.replace(/\d/g, '')*/;
    let apellido12 = document.getElementById("apellido12").value/*.replace(/\d/g, '')*/;
    
    /*
    if(nombre1 == "" || nombre12 == "" || apellido1 == ""){
    alert("Por favor complete todos los campos correctamente.");
    return;
    }
    */

    let referencia1 = /\d/;
    if(referencia1.test(nombre1) || referencia1.test(nombre12) || referencia1.test(apellido1) || referencia1.test(apellido12)){
      alert("Por favor no ingrese números en los campos de texto.");
      return;
    }
   
    let corregido1 = arreglo(nombre1);
    let corregido2 = arreglo(nombre12);
    let corregido3 = arreglo(apellido1);
    let corregido4 = arreglo(apellido12);
    
    n1.innerText = corregido1;
    n12.innerText = corregido2;
    a1.innerText = corregido3;
    a12.innerText = corregido4;
}

function integrante2( ){
    let nombre2 = document.getElementById("nombre2").value/*.replace(/\d/g, '')*/;
    let nombre22 = document.getElementById("nombre22").value/*.replace(/\d/g, '')*/;
    let apellido2 = document.getElementById("apellido2").value/*.replace(/\d/g, '')*/;
    let apellido21 = document.getElementById("apellido21").value/*.replace(/\d/g, '')*/;
    
    /*
    if(nombre2 == "" || nombre22 == "" || apellido2 == ""){
    alert("Por favor complete todos los campos correctamente.");
    return;
    }
    */

    let referencia2 = /\d/;
    if(referencia2.test(nombre2) || referencia2.test(nombre22) || referencia2.test(apellido2) || referencia2.test(apellido21)){
      alert("Por favor no ingrese números en los campos de texto.");
      return;
    }

    let corregido4 = arreglo(nombre2);
    let corregido5 = arreglo(nombre22);
    let corregido6 = arreglo(apellido2);
    let corregido7 = arreglo(apellido21);
    
    n2.innerText = corregido4;
    n22.innerText = corregido5;
    a2.innerText = corregido6;
    a21.innerText = corregido7;
  }

function mostrarConsola(str){
  if(str != ""){return str + " ";} else {return "";}
}

function imprimirConsola(){
console.log("-----\n Integrante 1: " + mostrarConsola(n1.textContent) + mostrarConsola(n12.textContent) + mostrarConsola(a1.textContent) + mostrarConsola(a12.textContent) + "\n Integrante 2: " + mostrarConsola(n2.textContent) + mostrarConsola(n22.textContent) + mostrarConsola(a2.textContent) + mostrarConsola(a21.textContent) + "\n -----");}

  /*
function imprimirConsola(){
  console.log("-----\n Integrante 1: " + n1.textContent + " " + n12.textContent + " " + a1.textContent + " " + a12.textContent + "\n Integrante 2: " + n2.textContent + " " + n22.textContent + " " + a2.textContent + " " + a21.textContent + "\n -----");
  }
*/
  /*
  console.log("-----\n Integrante 1: " + nombre1 + " " + nombre12 + " " + apellido1 + "\n Integrante 2: " + nombre2 + " " + nombre22 + " " + apellido2  + "\n -----");   
  */ 

/*
Validamos que los campos no esten vacios
if(nombreProducto == "" || precioProducto == ""){
    alert("Por favor complete ambos campos.");
    return; //Salimos de la funcion si hay campos vacios
}
Para convertir el texto
function capitalizarPrimeraLetra(str) {
  // Devuelve un string vacío si no hay texto
  if (!str) return "";

  // Convierte el primer carácter a mayúscula y el resto a minúscula
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}
*/
/* Para obtener los datos del form
function cargar(){
let nombreCompleto = [];
for(i=0; i<3; i++){
    nombreCompleto.push(document.getElementById("nombre"+[i]).value.replace(/\d/g, ''));
    while(nombreCompleto[i] == ""){
        alert("Por favor complete los campos de forma adecuada");
    }}
}
*/
//4 - 
//Validamos coincidencias del nombre1
function coincidir(){
  let nn1 = document.getElementById("n1").textContent;
  let nn2 = document.getElementById("n12").textContent;
  let nn3 = document.getElementById("a1").textContent;
  let nn4 = document.getElementById("a12").textContent;
  let nn5 = document.getElementById("n2").textContent;
  let nn6 = document.getElementById("n22").textContent;
  let nn7 = document.getElementById("a2").textContent;
  let nn8 = document.getElementById("a21").textContent;
  let colorName;// = prompt("Ingrese un color para resaltar las coincidencias");
  let colorApellido;// = prompt("Ingrese un color para resaltar las coincidencias");
  //Validamos coincidencias de nombres
  if(nn1 == nn5 && (nn1 != "" || nn5 != "")){
    console.log("Hay coincidencia en estos nombres " + nn1 + " = " + nn5);
    colorName = prompt("Se han encontrado coincidencias en los nombres, ingrese un color para resaltarlas:");
    n1.style.color = colorName;
    n2.style.color = colorName;
  } else if(nn1 == nn6 && (nn1 != "" || nn6 != "")){
    console.log("Hay coincidencia en estos nombres " + nn1 + " = " + nn6);
    colorName = prompt("Se han encontrado coincidencias en los nombres, ingrese un color para resaltarlas:");
    n1.style.color = colorName;
    n22.style.color = colorName;
  } else if(nn2 == nn5 && (nn2 != "" || nn5 != "")){
    console.log("Hay coincidencia en estos nombres " + nn2 + " = " + nn5);
    colorName = prompt("Se han encontrado coincidencias en los nombres, ingrese un color para resaltarlas:");
    n12.style.color = colorName;
    n2.style.color = colorName;
  } else if(nn2 == nn6 && (nn2 != "" || nn6 != "")){
    console.log("Hay coincidencia en estos nombres " + nn2 + " = " + nn6);
    colorName = prompt("Se han encontrado coincidencias en los nombres, ingrese un color para resaltarlas:");
    n12.style.color = colorName;
    n22.style.color = colorName;
  } else {console.log("No hay coincidencias entre los nombres");
    alert("No se encontraron coincidencias entre los nombres ingresados")
  }
  if(confirm("¿Desea buscar coincidencias entre los apellidos?")){
  //Validamos coincidencias de apellidos
  if(nn3 == nn7 && (nn3 != "" || nn7 != "")){
    console.log("Hay coincidencia en estos apellidos " + nn3 + " = " + nn7);
    colorApellido = prompt("Se han encontrado coincidencias en los apellidos, ingrese un color para resaltarlas:");
    a1.style.color = colorApellido;
    a2.style.color = colorApellido;
  } else if(nn3 == nn8 && (nn3 != "" || nn8 != "")){
    console.log("Hay coincidencia en estos apellidos " + nn3 + " = " + nn8);
    colorApellido = prompt("Se han encontrado coincidencias en los apellidos, ingrese un color para resaltarlas:");
    a1.style.color = colorApellido;
    a21.style.color = colorApellido;
  } else if(nn4 == nn7 && (nn4 != "" || nn7 != "")){
    console.log("Hay coincidencia en estos apellidos " + nn4 + " = " + nn7);
    colorApellido = prompt("Se han encontrado coincidencias en los apellidos, ingrese un color para resaltarlas:");
    a12.style.color = colorApellido;
    a2.style.color = colorApellido;
  } else if(nn4 == nn8 && (nn4 != "" || nn8 != "")){
    console.log("Hay coincidencia en estos apellidos " + nn4 + " = " + nn8);
    colorApellido = prompt("Se han encontrado coincidencias en los apellidos, ingrese un color para resaltarlas:");
    a12.style.color = colorApellido;
    a21.style.color = colorApellido;
  } else {console.log("No hay coincidencias entre los apellidos");
    alert("No se encontraron coincidencias entre los apellidos ingresados")
  }} else { return; }
}
/*
function obtenerSaludo(usuario) {
  if (usuario) {
    return "¡Hola, " + usuario + "!";
  } else {
    return "¡Hola, invitado!";
  }
}

console.log(obtenerSaludo("Ana")); // Imprime: "¡Hola, Ana!"
console.log(obtenerSaludo(null)); // Imprime: "¡Hola, invitado!"
*/
