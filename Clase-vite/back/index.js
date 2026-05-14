

// Librerias
import dotenv from 'dotenv';
dotenv.config();

// Importar el servidor
import app from './app.js';
import { conexionMongoLocal } from './database/conexionLocal.js';

// Levantar el servidor
const PORT = process.env.PORT || 8000;

// 1. Conexión a MongoDB Atlas
// Importar la función de conexión a MongoDB
//import { conexionMongo } from './database/conexionAtlas.js';

// Establecer la conexión a MongoDB antes de iniciar el servidor
conexionMongoLocal();

// Inicio del servidor
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto http://localhost:${PORT}`);
});



