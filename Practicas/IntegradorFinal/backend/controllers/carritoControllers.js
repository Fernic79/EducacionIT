import Carrito from "../models/carritoModels.js";
import Producto from "../models/productosModels.js";

const agregarAlCarrito = async (req, res) => {
  const { productoId, cantidad } = req.body;
  const usuarioId = req.usuario.id;

  try {
    //Buscamos el producto
    const producto = await Producto.findById(productoId);
    if (!producto)
      return res.status(404).json({ mensaje: "Producto no encontrado" });

    //Buscamos el carrito o lo creamos
    let carrito = await Carrito.findOne({ usuario: usuarioId });
    if (!carrito) {
      carrito = new Carrito({ usuario: usuarioId, items: [] });
    }
    //Lógicas del carrito según si el producto ya está o no en el carrito
    //El producto esta en el carrito?
    const indiceItem = carrito.items.findIndex(
      (item) => item.producto.toString() === productoId,
    );

    if (indiceItem > -1) {
      //El producto ya está en el carrito (posibilidad de perdir más productos del stock o no hay stock)
      const nuevaCantidad = carrito.items[indiceItem].cantidad + cantidad;

      if (nuevaCantidad <= 0) {
        //El usuario elimina el producto del carrito
        carrito.items.splice(indiceItem, 1);
      } else {
        //Si es mayor a 0, chequeamos stock
        if (nuevaCantidad > producto.stock) {
          return res.status(400).json({
            mensaje: `Stock insuficiente. Solo quedan ${producto.stock} unidades.`,
          });
        }
        carrito.items[indiceItem].cantidad = nuevaCantidad;
      }
    } else {
      //El producto no estaba en el carrito
      if (cantidad > 0) {
        //Chequeo stock
        if (cantidad > producto.stock) {
          return res.status(400).json({ mensaje: "No hay stock suficiente" });
        }
        //Agregamo el producto al carrito con el precio actual
        carrito.items.push({
          producto: productoId,
          cantidad,
          precio: producto.precio,
        });
      }
    }

    //Guardamos
    await carrito.save();

    //Actulizamos el carrito
    res.status(200).json(carrito);
  } catch (error) {
    res
      .status(500)
      .json({ mensaje: "Error en el servidor", error: error.message });
  }
};

//OBTENER EL CARRITO
const obtenerCarrito = async (req, res) => {
  try {
    const carrito = await Carrito.findOne({ usuario: req.usuario.id }).populate(
      "items.producto",
      "nombre precio imagen imagen_alt imagen_title stock",
    );

    if (!carrito) {
      return res.status(200).json({ items: [], total: 0 });
    }

    res.status(200).json(carrito);
  } catch (error) {
    res.status(500).json({ mensaje: "Error al obtener el carrito", error });
  }
};

//ELIMINAR PRODUCTOS DEL CARRITO
const eliminarDelCarrito = async (req, res) => {
  const { productoId } = req.params;
  const usuarioId = req.usuario.id;

  try {
    let carrito = await Carrito.findOne({ usuario: usuarioId });
    if (!carrito)
      return res.status(404).json({ mensaje: "Carrito no encontrado" });

    carrito.items = carrito.items.filter(
      (item) => item.producto.toString() !== productoId,
    );

    await carrito.save();
    res.status(200).json(carrito);
  } catch (error) {
    res
      .status(500)
      .json({ mensaje: "Error al eliminar producto del carrito", error });
  }
};

//Vaciar el carrito completo (después de una compra exitosa)
const vaciarCarritoCompleto = async (req, res) => {
  const usuarioId = req.usuario.id;
  try {
    //Buscamos el carrito y reseteamos los items y el total
    const carrito = await Carrito.findOneAndUpdate(
      { usuario: usuarioId },
      { $set: { items: [], total: 0 } },
      { new: true },
    );
    res.status(200).json({ mensaje: "Carrito vaciado con éxito", carrito });
  } catch (error) {
    res
      .status(500)
      .json({ mensaje: "Error al vaciar el carrito", error: error.message });
  }
};

export {
  agregarAlCarrito,
  obtenerCarrito,
  eliminarDelCarrito,
  vaciarCarritoCompleto,
};
