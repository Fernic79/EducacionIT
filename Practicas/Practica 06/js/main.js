//1 - Imprimir título en la consola
let title = document.getElementById("titulo").textContent;
console.log(title);

//3 - Imprimir por consola los nombres y apellidos corregidos
function arreglo(str) {
  // Convierte el primer carácter a mayúscula y el resto a minúscula
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}
//Trabajamos con el primer integrante
function integrante1(){
    // Obtenemos los valores ingresados por el usuario
    let nombre1 = document.getElementById("nombre1").value;
    let nombre12 = document.getElementById("nombre12").value;
    let apellido1 = document.getElementById("apellido1").value;
    let apellido12 = document.getElementById("apellido12").value;
    // Validamos que no se ingresen números en los campos de texto
    let referencia1 = /\d/;
    if(referencia1.test(nombre1) || referencia1.test(nombre12) || referencia1.test(apellido1) || referencia1.test(apellido12)){
      alert("Por favor no ingrese números en los campos de texto.");
      return;
    }
    // Corregimos los nombres y apellidos para que tengan la primera letra en mayúscula y el resto en minúscula
    let corregido1 = arreglo(nombre1);
    let corregido2 = arreglo(nombre12);
    let corregido3 = arreglo(apellido1);
    let corregido4 = arreglo(apellido12);
    // Asignamos los valores corregidos a los elementos correspondientes en el HTML
    n1.innerText = corregido1;
    n12.innerText = corregido2;
    a1.innerText = corregido3;
    a12.innerText = corregido4;
}
//Trabajamos con el segundo integrante
function integrante2(){
    // Obtenemos los valores ingresados por el usuario
    let nombre2 = document.getElementById("nombre2").value;
    let nombre22 = document.getElementById("nombre22").value;
    let apellido2 = document.getElementById("apellido2").value;
    let apellido21 = document.getElementById("apellido21").value;
    // Validamos que no se ingresen números en los campos de texto
    let referencia2 = /\d/;
    if(referencia2.test(nombre2) || referencia2.test(nombre22) || referencia2.test(apellido2) || referencia2.test(apellido21)){
      alert("Por favor no ingrese números en los campos de texto.");
      return;
    }
    // Corregimos los nombres y apellidos para que tengan la primera letra en mayúscula y el resto en minúscula
    let corregido4 = arreglo(nombre2);
    let corregido5 = arreglo(nombre22);
    let corregido6 = arreglo(apellido2);
    let corregido7 = arreglo(apellido21);
    // Asignamos los valores corregidos a los elementos correspondientes en el HTML
    n2.innerText = corregido4;
    n22.innerText = corregido5;
    a2.innerText = corregido6;
    a21.innerText = corregido7;
  }
//eliminar espacios en blanco para la impresión en consola
function mostrarConsola(str){
  if(str != ""){return str + " ";} else {return "";}
}
//Imprimir en consola los nombres y apellidos corregidos
function imprimirConsola(){
console.log("-----\n Integrante 1: " + mostrarConsola(n1.textContent) + mostrarConsola(n12.textContent) + mostrarConsola(a1.textContent) + mostrarConsola(a12.textContent) + "\n Integrante 2: " + mostrarConsola(n2.textContent) + mostrarConsola(n22.textContent) + mostrarConsola(a2.textContent) + mostrarConsola(a21.textContent) + "\n -----");}

//4 - Buscamos y resaltamos coincidencias
function coincidir(){
  //Obtenemos los valores de los nombres y apellidos de la lista
  let nn1 = document.getElementById("n1").textContent;
  let nn2 = document.getElementById("n12").textContent;
  let nn3 = document.getElementById("a1").textContent;
  let nn4 = document.getElementById("a12").textContent;
  let nn5 = document.getElementById("n2").textContent;
  let nn6 = document.getElementById("n22").textContent;
  let nn7 = document.getElementById("a2").textContent;
  let nn8 = document.getElementById("a21").textContent;
  let colorName;
  let colorApellido;
  //Validamos coincidencias de nombres y aplicamos color
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
  //Validamos coincidencias de apellidos y aplicamos color
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

