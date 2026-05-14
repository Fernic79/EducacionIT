import Producto from "../models/productosModels.js";

const obtenerProductos = async (req, res) => {
  try {
    const items = await Producto.find();
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({
      mensaje: "Error al obtener los productos",
      error: error.message,
    });
  }
};

const obtenerProductosPorId = async (req, res) => {
  try {
    const itemsId = await Producto.findById(req.params.id);
    if (!itemsId) {
      return res.status(404).json({ mensaje: "Producto no encontrado" });
    }
    res.status(200).json(itemsId);
  } catch (error) {
    res.status(500).json({
      mensaje: "Error al obtener los id de los productos",
      error: error.message,
    });
  }
};

const crearProductos = async (req, res) => {
  try {
    const nuevo = new Producto(req.body);
    const crearItem = await nuevo.save();
    res.status(201).json(crearItem);
  } catch (error) {
    res
      .status(400)
      .json({ mensaje: "Error al crear producto nuevo", error: error.message });
  }
};

const modificarProductos = async (req, res) => {
  try {
    const modificarItem = await Producto.findByIdAndUpdate(
      req.params.id,
      {
        ...req.body,
        imagen: req.file ? req.file.path : req.body.imagen,
      },
      { new: true, runValidators: true },
    );
    if (!modificarItem) {
      return res
        .status(404)
        .json({ mensaje: "No se encontró el producto para modificar" });
    }
    res.status(200).json(modificarItem);
  } catch (error) {
    res
      .status(500)
      .json({ mensaje: "Error al modificar producto", error: error.message });
  }
};

const borrarProductos = async (req, res) => {
  try {
    const borrarItem = await Producto.findByIdAndDelete(req.params.id);
    if (!borrarItem) {
      return res
        .status(404)
        .json({ mensaje: "No se encontró el producto para eliminar" });
    }
    res
      .status(200)
      .json({ mensaje: "Producto eliminado correctamente", item: borrarItem });
  } catch (error) {
    res
      .status(500)
      .json({ mensaje: "Error al borrar producto", error: error.message });
  }
};

export {
  obtenerProductos,
  obtenerProductosPorId,
  crearProductos,
  modificarProductos,
  borrarProductos,
};
