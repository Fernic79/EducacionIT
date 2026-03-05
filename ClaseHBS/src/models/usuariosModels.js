
//Codigo para crear las colecciones de usuarios en la base de datos
const mongoose = require('mongoose');

const usuariosCollection = new mongoose.Schema({
    nombre: {type: String, required: true, trim: true, lowercase: true, min: 3, max: 20, default: 'Sin nombre'},
    email: {type: String, required: true, unique: true, trim: true, lowercase: true},
    password: {type: String, required: true, trim: true, min: 8, max: 20},
    rol: {type: String, enum: ['admin', 'user'], default: 'user'},
    dataRegistro: {type: Date, default: Date.now},
});

//Creacion del modelo de usuarios
const usuariosModel = mongoose.model('usuarios', usuariosCollection);

module.exports = usuariosModel;