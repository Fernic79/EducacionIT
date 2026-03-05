
//1-cargar el modulo express(para esto debo correr el npm i express en el directorio del proyecto)
const express = require('express');

//2-cargar el modulo path (para que nodemon sepa donde estamos parados)
const path = require('node:path');

//3-crear la aplicacion de express (para correr express)
const app = express();

//4-configuramos el puerto (para levantar el servidor en el navegador y no el index.html directamente)
const PORT = 3000;

//5-definimos la carpeta public (para que express sepa donde estan los archivos del index.html, estilos, imagenes, etc)
//middleware que sirve archivos estaticos
app.use(express.static(path.join(__dirname, 'public')));

//6-middleware para parsear json (para que express pueda entender los datos que le enviamos en formato json)
app.use(express.json());

//8-creamos una ruta global para manejar rutas no definidas (para que express maneje los errores 404)
app.use((req, res, next) => {
    res.status(404).json({ error: "Ruta no encontrada" });
    next(); //esta funcion deja que la request siga su curso normal al backend
});

//7-definimos la ruta del api (para que express sepa donde recibir los datos del formulario)
app.post('/contacto', (req, res) => {
  console.log("Datos recibidos:", req.body);
  res.json({ message: "Datos recibidos correctamente" }); //(esto no funciona porque ya hay un res en la ruta global de errores 404)
});

//ruta para recibir los productos
app.post('/productos', (req, res) => {
    console.log("Producto recibido:", req.body);
});

//arrancamos el servidor (observamos el servidor en la consola corriendo npm run dev)
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto http://localhost:${PORT}`);
});