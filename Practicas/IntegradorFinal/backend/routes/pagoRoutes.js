import express from "express";
import autenticar from "../middlewares/autenticacion.js";
import { procesarPagoGalactico } from "../controllers/pagoControllers.js";

const router = express.Router();

//Solo usuarios logueados pueden generar el pago
router.post("/crear-preferencia", autenticar, procesarPagoGalactico);

export default router;
