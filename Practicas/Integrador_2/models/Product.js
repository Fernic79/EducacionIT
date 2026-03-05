
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    precio: { type: Number, required: true },
    descripcion: String,
    stock: { type: Number, default: 0 }
});

module.exports = mongoose.model('Product', productSchema);