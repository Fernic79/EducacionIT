
const express = require('express');
const connectDB = require('./config/db.js');
const productRoutes = require('./routes/productRoutes');
const cartRoutes = require('./routes/cartRoutes');

const app = express();

//Conectar con la base de datos
connectDB();

//Middleware para JSON
app.use(express.json());

//Definición de Rutas
app.use('/api/productos', productRoutes);
app.use('/api/carrito', cartRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});