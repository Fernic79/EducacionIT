
//Librerias 
const express = require('express');
const morgan = require('morgan');
const hbs = require('express-handlebars');
const path = require('path');

//importamos las rutas
const usuariosRouter = require('./routes/usuarios.routes');
const productosRouter = require('./routes/productos.routes');

//Creamos el servidor
const app = express();

//Configuramos handlebars (donde se van a cargar las vistas)
app.engine('hbs', hbs.engine({
    extname: '.hbs',//extension name
    defaultLayout: 'main',//layout por defecto
    layoutsDir: path.join(__dirname, 'views/layouts'),//donde se van a cargar los layouts
    partialsDir: path.join(__dirname, 'views/partials')//donde se van a cargar los partials
}));
app.set('view engine', 'hbs');//decimos que el motor de vistas es handlebars
app.set('views', path.join(__dirname, 'views'));//donde se van a cargar las vistas

//Middlewares
app.use(morgan('dev'));//para ver las peticiones en consola
app.use(express.json());//para parsear el body de las peticiones
app.use(express.urlencoded({ extended: true }));//para parsear el body de las peticiones

app.use(express.static(path.join(__dirname, 'public')));//para servir archivos estáticos

//rutas
app.use('/api/usuarios', usuariosRouter);//rutas para usuarios
app.use('/api/productos', productosRouter);//rutas para productos

app.get('/', (req, res) => {
    res.render('home');//renderizamos la vista home.hbs
});

app.get('/{0}', (req, res) => {
    res.status(404).render('error');//renderizamos la vista 404.hbs
});

app.get('/login', (req, res) => {
    res.render('login');//renderizamos la vista login.hbs
});

app.get('/registro', (req, res) => {
    res.render('registro');//renderizamos la vista registro.hbs
});

//exportamos el servidor
module.exports = app;//exportamos el servidor para poder usarlo en index.js