
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const MONGO_URL = process.env.MONGO_URL_ATLAS || process.env.MONGO_URL_LOCAL;

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