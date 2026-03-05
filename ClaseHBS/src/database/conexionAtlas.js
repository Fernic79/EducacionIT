
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const MONGO_PASSWORD = process.env.MONGO_PASSWORD;

const uri = `mongodb+srv://nico:${MONGO_PASSWORD}@cluster0.je0nng4.mongodb.net/ecommerce?appName=Cluster0`;

//falat contenido

const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URL, {

        });
        console.log('Conexión a la base de datos exitosa');
    } catch (error) {
        console.error('Error al conectar a la base de datos:', error);
        process.exit(1); // Salir del proceso con un código de error
    }};

module.exports = connectDB;
