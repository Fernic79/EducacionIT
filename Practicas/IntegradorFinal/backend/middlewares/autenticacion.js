import jwt from "jsonwebtoken";
import Usuario from "../models/usuariosModels.js";

const autenticar = async (req, res, next) => {
  let token;

  //Token del header
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.usuario = await Usuario.findById(decoded.id).select("-password");
      if (!req.usuario) {
        return res.status(401).json({ mensaje: "Usuario no encontrado" });
      }

      next();
    } catch (error) {
      res.status(401).json({ mensaje: "Token no válido o expirado" });
    }
  }

  if (!token) {
    res.status(401).json({ mensaje: "No hay token, permiso denegado" });
  }
};

export default autenticar;
