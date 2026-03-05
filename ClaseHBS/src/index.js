//Acá se corre el server
//Librerias
const dotenv = require('dotenv');
dotenv.config();

//importamos el servidor
const app = require('./app.js');

//Levantamos el servidor
const PORT = process.env.PORT || 8080;

//Importamos la función de conexión a la base de datos
const connectDB = require('./database/conexion.js');
connectDB();

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});