import Usuario from "../models/usuariosModels.js";
import nodemailer from "nodemailer";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

//REGISTRO
const registrarUsuario = async (req, res) => {
  try {
    const { nombre, email, password } = req.body;

    //Encripto la contraseña antes de guardar
    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, salt);

    const nuevoUsuario = new Usuario({
      nombre,
      email,
      password: passwordHash,
    });

    await nuevoUsuario.save();

    //Configuro el envío de mail
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    //Contenido del mail
    const mailOptions = {
      from: "Juguetería Cósmica <nicocito79@gmail.com>",
      to: email,
      subject: "¡Bienvenido a la Juguetería Cósmica!",
      text: `Hola ${nombre}, gracias por registrarte en nuestra tienda estelar. ¡Explora nuestro catálogo y disfruta de tus compras!`,
    };

    await transporter.sendMail(mailOptions);

    res.status(201).json({ mensaje: "Usuario registrado y mail enviado" });
  } catch (error) {
    res.status(500).json({ error: "Error al registrar usuario" });
  }
};

//LOGIN
const loginUsuario = async (req, res) => {
  try {
    const { email, password } = req.body;

    //Busco el usuario por su email
    const usuarioEncontrado = await Usuario.findOne({ email });
    if (!usuarioEncontrado) {
      return res.status(404).json({ mensaje: "El usuario no existe" });
    }

    //Comparo la contraseña
    const passwordCorrecto = await bcrypt.compare(
      password,
      usuarioEncontrado.password,
    );
    if (!passwordCorrecto) {
      return res.status(401).json({ mensaje: "Contraseña incorrecta" });
    }

    //Token para interactuar con el frontend
    const token = jwt.sign(
      { id: usuarioEncontrado._id },
      process.env.JWT_SECRET,
      { expiresIn: "30d" },
    );

    res.status(200).json({
      mensaje: "Login exitoso",
      token,
      usuario: {
        id: usuarioEncontrado._id,
        nombre: usuarioEncontrado.nombre,
        email: usuarioEncontrado.email,
      },
    });
  } catch (error) {
    res.status(500).json({ error: "Error en el servidor durante el login" });
  }
};

export { registrarUsuario, loginUsuario };
