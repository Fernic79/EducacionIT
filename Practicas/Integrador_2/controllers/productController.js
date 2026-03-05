
const Product = require('../models/Product');

//Obtenemos todos los productos
exports.getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al obtener los productos' });
    }
};

//Obtenemos un producto por ID
exports.getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) return res.status(404).json({ mensaje: 'Producto no encontrado' });
        res.json(product);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al buscar el producto' });
    }
};

//Creamos un nuevo producto
exports.createProduct = async (req, res) => {
    try {
        const newProduct = new Product(req.body);
        await newProduct.save();
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(400).json({ mensaje: 'Error al crear producto' });
    }
};

//Actualizamos un producto existente
exports.updateProduct = async (req, res) => {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedProduct);
    } catch (error) {
        res.status(400).json({ mensaje: 'Error al actualizar producto' });
    }
};

//Eliminamos un producto
exports.deleteProduct = async (req, res) => {
    try {
        await Product.findByIdAndDelete(req.params.id);
        res.json({ mensaje: 'Producto eliminado' });
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al eliminar producto' });
    }
};