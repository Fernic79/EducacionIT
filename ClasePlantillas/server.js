//Sería la ejecución de nuestro servidor, donde se importan las dependencias necesarias, se configura el servidor y se definen las rutas. En este caso, se ha importado express para crear el servidor, se ha configurado el puerto en el que se ejecutará el servidor y se han definido dos rutas: la ruta raíz ("/") que devuelve un mensaje de bienvenida, y la ruta "/api" que devuelve un mensaje indicando que es la ruta de la API. Finalmente, se inicia el servidor y se muestra un mensaje en la consola indicando que el servidor está corriendo.
//importamos la app configurada en el archivo index.js
const app = require("./index");

//importamos dotenv para cargar las variables de entorno desde el archivo .env
const dotenv = require("dotenv");
dotenv.config();

//puerto del servidor, se obtiene de la variable de entorno PORT
const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto http://localhost:${PORT}`);
});

