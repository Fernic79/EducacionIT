import express from "express";
import {
  obtenerProductos,
  obtenerProductosPorId,
  crearProductos,
  modificarProductos,
  borrarProductos,
} from "../controllers/productosControllers.js";

const router = express.Router();

router.get("/", obtenerProductos);
router.get("/:id", obtenerProductosPorId);
router.post("/", crearProductos);
router.put("/:id", modificarProductos);
router.delete("/:id", borrarProductos);

export default router;
