
console.log("Bienvenido al Front de la App");

//Crear una funcion para el login de usuario
let loginForm = document.getElementById("loginForm");

const loginUser = (e) => {
    e.preventDefault();
    console.log("Iniciando el login");

    //capturamos los datos del usuario
    let email = document.getElementById("usuario").value;
    let password = document.getElementById("contraseña").value;

    let login = "true";

    //datos harcodeados del admin - despues se hara con la base de datos backend
    let adminUser = "admin@bootcamp.com";
    let adminPassword = "admin123";
    let adminName = "Juan Perez";

    //creamos la logica para validar login
    if(email == adminUser && password == adminPassword) {
        console.log("login exitoso");

        //guardar en el localStorage que el usuario esta logueado (con setItem subo los datos al navegador en formato string)
        localStorage.setItem("administrador", adminName);
        localStorage.setItem("email", email);
        localStorage.setItem("isLoggedIn", login);

        alert("login exitoso");
        //redirigir a la pagina de administracion
        window.location.href = "./pages/formulario.html";
    } else {
        console.log("credenciales invalidas");
        //si el usuario no se loguea correctamente
        login = "false";
        //guardar en el localStorage que el usuario no esta logueado
        localStorage.setItem("isLoggedIn", login);
        alert("credenciales invalidas, por favor intente de nuevo");
    }
}

loginForm.addEventListener("submit", loginUser);
