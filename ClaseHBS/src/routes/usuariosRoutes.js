
const { Router } = require('express');
const router = Router();

//Importamos el modelo de usuarios
const UsuarioColletcion = require('../models/usuariosModels');

//Ruta para mostrar el formulario de registro
router.get('/registro', (req, res) => {
    res.render('registro');
});

//Ruta para procesar el formulario de registro
router.post('/registro', async (req, res) => {
    
    //recibimos los datos del formulario
    const nombre = req.body.nombre;
    const email = req.body.email;
    const password = req.body.password;

    //Creamos un nuevo usuario con los datos recibidos
    const persona = {
        nombre,
        email,
        password,
        //confirmPassword
    }

    //otra forma de crear un nuevo usuario
    const otraPersona = {
        nombre: nombre,
        email: email,
        password: password,
        confirmPassword: confirmPassword
    }
    //otra forma de crear un nuevo usuario
    const otraData = {
        nombre: req.body.nombre,
        email: req.body.email,
        password: req.body.password,
        confirmPassword: req.body.confirmPassword
    }
//aqui usamos el modelo de usuarios para guardar el dato en la base de datos
const guardarUsuario = async () => {
    try{
        //creamos una nueva instancia del modelo de usuarios con los datos recibidos
        const usuarioNuevo = new UsuarioColletcion(persona);
        //guardamos el nuevo usuario en la base de datos
        await usuarioNuevo.save();
    }
    catch(error){
        console.error('Error al guardar el usuario en la base de datos:', error);
    }}

//Llamamos a la función para guardar el usuario en la base de datos
guardarUsuario();

//respondemos al cliente con un mensaje de éxito
res.json({
    message: 'Usuario registrado con éxito',
    persona,
    otraPersona,
    otraData    
});

});


module.exports = router;