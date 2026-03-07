
const ProductoModel = require('../models/productosModels');//importamos el modelo de productos

const dameFormulario = (req, res) => {
    res.render('formProductos');//renderizamos la vista formularioProductos.hbs
}

const guardarProducto = async (req, res) => {
    const nuevoProducto = { nombre: req.body.nombre, precio: req.body.precio, descripcion: req.body.descripcion, imagen: req.body.imagen };//desestructuramos el body de la petición
    const crearProducto = new ProductoModel(nuevoProducto);//creamos un nuevo producto con los datos del body
    try {
        await crearProducto.save();//guardamos el producto en la base de datos
        res.render('exitoProducto');//renderizamos la vista exitoProducto.hbs
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al guardar el producto', error: error });
    }
}


module.exports = { dameFormulario, guardarProducto };//exportamos el controlador para poder usarlo en productosRoutes.js