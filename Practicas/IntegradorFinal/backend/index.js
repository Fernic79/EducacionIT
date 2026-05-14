import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import productoRoutes from "./routes/productosRoutes.js";
import usuarioRoutes from "./routes/usuariosRoutes.js";
import carritoRoutes from "./routes/carritoRoutes.js";
import pagoRoutes from "./routes/pagoRoutes.js";

dotenv.config();

const app = express();
app.use(cors());

app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Conectado a la Base de Datos de Mongo"))
  .catch((error) =>
    console.error("Error al conectar a la Base de Datos", error),
  );

app.use("/api/productos", productoRoutes);
app.use("/api/usuarios", usuarioRoutes);
app.use("/api/carrito", carritoRoutes);
app.use("/api/mercadopago", pagoRoutes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
