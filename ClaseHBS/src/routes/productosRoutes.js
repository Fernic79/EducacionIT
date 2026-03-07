
//importamos express y el router
const { Router } = require('express');
const router = Router();

//importamos el controlador
const { dameFormulario, guardarProducto } = require('../controllers/productosController');

//ruta para mostrar el formulario de productos
router.get('/dameFormulario', dameFormulario);

//ruta para guardar el producto
router.post('/guardarProducto', guardarProducto);

//exportamos el router para poder usarlo en app.js
module.exports = router;