
//importamos express y el router
const { Router } = require('express');
const router = Router();

//importamos el controlador
const { dameFormulario, guardarProducto } = require('../controllers/productosController');

//ruta para mostrar el formulario de productos
router.get('/dameFormulario', dameFormulario);

//ruta para guardar el producto
router.post('/guardarProducto', guardarProducto);

//ruta para listar productos
router.get('/listarProductos', listarProducto);

//ruta para mostrar detalles del producto
router.get('/detalleProducto/:id', detallesProducto);

//exportamos el router para poder usarlo en app.js
module.exports = router;