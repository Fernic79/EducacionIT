
const mongoose = require('mongoose');
const productoSchema = new mongoose.Schema({
    nombre: { type: String, required: true, trim: true, min: 2},
    precio: { type: Number, required: true, min: 0 },
    descripcion: { type: String, required: true },
    imagen: { type: String, required: true },
    dataRegistro: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Producto', productoSchema);//exportamos el modelo para poder usarlo en el controlador de productos