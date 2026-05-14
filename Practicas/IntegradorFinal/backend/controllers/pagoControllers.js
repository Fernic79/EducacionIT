import { MercadoPagoConfig, Preference } from "mercadopago";
import Carrito from "../models/carritoModels.js";

const client = new MercadoPagoConfig({
  accessToken: process.env.MP_ACCESS_TOKEN,
});

const procesarPagoGalactico = async (req, res) => {
  try {
    const usuarioId = req.usuario.id; //Autenticación del usuario desde el middleware

    //Buscamos el carrito del usuario y los datos del producto
    const carrito = await Carrito.findOne({ usuario: usuarioId }).populate(
      "items.producto",
    );

    if (!carrito || carrito.items.length === 0) {
      return res
        .status(400)
        .json({ mensaje: "El carrito está vacío en esta órbita" });
    }

    //Sacamos el Schema
    const itemsParaPago = carrito.items.map((item) => ({
      id: item.producto._id,
      title: item.producto.nombre,
      quantity: item.cantidad,
      unit_price: item.precio,
      currency_id: "ARS",
    }));

    const body = {
      items: itemsParaPago,
      back_urls: {
        success: `${process.env.FRONTEND_URL}/carrito?status=success`,
        failure: `${process.env.FRONTEND_URL}/carrito?status=failure`,
        pending: `${process.env.FRONTEND_URL}/carrito?status=pending`,
      },
      auto_return: "approved",
    };

    const preference = new Preference(client);
    const result = await preference.create({ body });

    res.json({ init_point: result.init_point });
  } catch (error) {
    res.status(500).json({
      mensaje: "Error al contactar con la central de Mercado Pago",
      error: error.message,
    });
  }
};

export { procesarPagoGalactico };
