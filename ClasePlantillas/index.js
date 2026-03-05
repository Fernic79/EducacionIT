//Sería el config de nuestro proyecto, donde se encuentran las dependencias, scripts, etc. Es un archivo que se genera automáticamente al ejecutar npm init, pero también se puede crear manualmente. Es un archivo JSON, por lo que debe tener una estructura específica. En este caso, se ha agregado el script "dev" para ejecutar el servidor con nodemon, y el script "start" para ejecutar el servidor con node.

//1-Módulos importados npm install
const express = require("express");
const path = require("path");
const dotenv = require("dotenv"); //libreria para privacidad de passwords, claves, etc. Se utiliza para cargar variables de entorno desde un archivo .env en el proceso de Node.js. Esto permite mantener la información sensible fuera del código fuente y facilita la configuración de la aplicación en diferentes entornos (desarrollo, producción, etc.).

//inicializamos las variables necesarias para configurar nuestro servidor
const app = express(); //creamos una instancia de express para configurar nuestro servidor. Express es un framework de Node.js que facilita la creación de aplicaciones web y APIs. Con app, podemos definir rutas, middlewares, configurar el servidor, etc. Es la base para construir nuestra aplicación web con Node.js.
const PORT = process.env.PORT || 9000; //definimos el puerto en el que se ejecutará nuestro servidor. Se obtiene de la variable de entorno PORT, que se puede configurar en el archivo .env, o se utiliza el puerto 3000 por defecto si no se ha configurado. Esto permite que el puerto sea configurable y adaptable a diferentes entornos (desarrollo, producción, etc.).

//configuramos el motor de plantillas handlebars
const { engine }= require("express-handlebars"); //libreria para utilizar handlebars como motor de plantillas en express. Handlebars es un motor de plantillas que permite generar HTML dinámico a partir de datos. Con express-handlebars, podemos configurar express para que utilice handlebars como motor de plantillas, lo que nos permite renderizar vistas dinámicas en nuestra aplicación web.

app.engine(".hbs", engine({
  extname: ".hbs", //extensión de los archivos de plantilla, en este caso .hbs
  layoutsDir: path.join(__dirname, "vistas/layouts"), //directorio donde se encuentran las plantillas de diseño (layouts)
  defaultLayout: "main", //plantilla de diseño por defecto, en este caso main.hbs
  partialsDir: path.join(__dirname, "vistas/partials") //directorio donde se encuentran las plantillas parciales (partials)
}))

//asignamos el motor de plantillas handlebars a express
app.set("view engine", ".hbs"); //configuramos express para que utilice handlebars como motor de plantillas, especificando la extensión de los archivos de plantilla como .hbs. Esto permite renderizar vistas dinámicas utilizando archivos con la extensión .hbs en nuestra aplicación web.
app.set("views", path.join(__dirname, "vistas")); //configuramos el directorio donde se encuentran las vistas (templates) de nuestra aplicación. En este caso, se establece el directorio "vistas" dentro del directorio actual (__dirname). Esto permite a express encontrar las vistas cuando se renderizan en la aplicación web.

//ejecutamos la configuracion de dotenv para cargar las variables de entorno desde el archivo .env
dotenv.config();


//2-Modulos nativos de node, no se instalan con npm install
const os = require("node:os"); //módulo nativo de Node.js que proporciona una serie de métodos para interactuar con el sistema operativo. Permite obtener información sobre el sistema, como la plataforma, la arquitectura, la memoria, etc. También permite realizar operaciones relacionadas con el sistema operativo, como obtener la lista de usuarios, la información de red, etc.
const fs = require("node:fs"); //módulo nativo de Node.js que proporciona una API para interactuar con el sistema de archivos. Permite leer, escribir, eliminar y manipular archivos y directorios en el sistema de archivos. Con fs, podemos realizar operaciones como crear archivos, leer su contenido, escribir datos en ellos, eliminar archivos, etc. Es una parte fundamental para trabajar con archivos en aplicaciones Node.js.

//3-Midlewares
app.use(express.json()); //middleware para parsear el cuerpo de las solicitudes en formato JSON. Permite acceder a los datos enviados en el cuerpo de la solicitud a través de req.body. Es útil para manejar solicitudes POST, PUT, PATCH, etc., donde se envían datos en el cuerpo de la solicitud.

//un get de salud del servidor, para verificar que el servidor está corriendo correctamente
app.get("/health", (req, res) => {
  res.send("Servidor saludable");
});

//renderizamos la vista de inicio (home) en la ruta raíz ("/")
app.get("/", (req, res) => {
  res.render("home"); //renderizamos la vista home.hbs cuando se accede a la ruta raíz ("/"). Esto permite mostrar una página de inicio o bienvenida a los usuarios cuando visitan la aplicación web.
});

app.get("/", (req, res) => {
  res.render("prueba"); //renderizamos la vista home.hbs cuando se accede a la ruta raíz ("/"). Esto permite mostrar una página de inicio o bienvenida a los usuarios cuando visitan la aplicación web.
});

//llevamos las rutas get a un archivo rutasget.js para mantener el código organizado y modularizado. Esto permite separar la lógica de las rutas de la configuración del servidor, lo que facilita el mantenimiento y la escalabilidad del código. En rutasget.js se definirán las rutas relacionadas con las solicitudes GET, mientras que en server.js se encargará de levantar el servidor y manejar otras configuraciones generales.

//traemos las rutas del get desde el archivo rutasget.js
const rutasGet = require("./routes/rutasget.js"); 
const rutaUsers = require("./routes/rutasusers.js"); //importamos las rutas de usuarios desde el archivo rutasusers.js

//usamos las rutas del get en la app
app.use("/api", rutasGet); 
app.use("/api", rutaUsers); //usamos las rutas de usuarios en la app, todas las rutas definidas en rutaUsers.js estarán disponibles bajo el prefijo "/api". Esto significa que si en rutaUsers.js se define una ruta como "/usuarios", esta estará disponible en la aplicación como "/api/usuarios". Esto ayuda a organizar las rutas y mantener una estructura clara en la aplicación.



//no vamos a levantar el servidor en este archivo
//paso importante: vamos a exportar la app configurada con los datos de arriba
module.exports = app; //exportamos la instancia de express para poder utilizarla en otros archivos, como el archivo server.js donde se levantará el servidor. Esto permite separar la configuración del servidor de la lógica de la aplicación, lo que facilita el mantenimiento y la organización del código. (SE EXPORTA UN SOLO ELEMENTO)
