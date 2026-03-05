
const Cart = require('../models/Cart');

//Registro del carrito en la base de datos, con la información del pedido enviada desde el frontend
exports.saveCart = async (req, res) => {
    try {
        const cartData = req.body; // Array de productos enviado desde el frontend
        
        //Mostrar en consola la información del pedido
        console.log('Información del pedido recibida:', cartData);

        //Almacenamos la información en la base de datos
        const newCart = new Cart({ productos: cartData });
        await newCart.save();

        res.status(201).json({ mensaje: 'Pedido recibido y procesado correctamente' });
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al procesar transacción del carrito' });
    }
};