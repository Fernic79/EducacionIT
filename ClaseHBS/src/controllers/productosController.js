
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

const listarProductos = async (req, res) => {
    let titulo = 'Listado de Productos';
        try {
            const productos = await ProductoModel.find({}).lean();//buscamos todos los productos en la base de datos
            res.render('listarProductos', { productos: productos, titulo: titulo });//renderizamos la vista listarProductos.hbs y le pasamos los productos encontrados
        } catch (error) {
            res.status(500).json({ mensaje: 'Error al listar los productos', error: error });
        }

    }
    const detalleProducto = async (req, res) => {
        let descripcion = 'Detalle del Producto Seleccionado';
        let stock = 'Stock Disponible';
        const id = req.params.id;

        try {
            const producto = await ProductoModel.findById(id).lean();
            res.render('detalleProducto', { producto: producto, id: id, descripcion: descripcion, stock: stock });
        } catch (error) {
            res.status(500).json({ mensaje: 'Error al mostrar los detalles del producto', error: error });
        }
    }

module.exports = { dameFormulario, guardarProducto, listarProductos, detalleProducto };//exportamos el controlador para poder usarlo en productosRoutes.js