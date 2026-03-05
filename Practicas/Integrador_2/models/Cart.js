
const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    productos: [
        {
            productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
            cantidad: Number
        }
    ],
    fecha: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Cart', cartSchema);