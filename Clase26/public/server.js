
//1-Importamos la libreria de express
const express = require('express');
//esta variable tiene toda la libreria express en su interior

//2-Importamos path para que Node encuentre las rutas
const path = require('node:path');
//esta variable tiene toda la libreria express en su interior

//3-Inicializamos la aplicacion de express
const app = express();

//4-Definimos el puerto
const PORT = 3000;

//5-Definimos la carpeta publica
app.use(express.static(path.join(__dirname, 'public')));

//6-Ejecutamos la aplicacion
app.listen(PORT, () => {
    console.log('Servidor corriendo en http://localhost:${PORT}');
});