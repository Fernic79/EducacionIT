import express from "express";

const router = express.Router();

import autenticar from "../middlewares/autenticacion.js";
import {
  agregarAlCarrito,
  obtenerCarrito,
  eliminarDelCarrito,
  vaciarCarritoCompleto,
} from "../controllers/carritoControllers.js";

router.get("/", autenticar, obtenerCarrito);

router.post("/", autenticar, agregarAlCarrito);

router.delete("/:productoId", autenticar, eliminarDelCarrito);

router.delete("/vaciar/todo", autenticar, vaciarCarritoCompleto);

export default router;
