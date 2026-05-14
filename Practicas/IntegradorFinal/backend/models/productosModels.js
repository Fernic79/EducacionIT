import mongoose from "mongoose";

const productoSchema = new mongoose.Schema(
  {
    nombre: {
      type: String,
      required: true,
      trim: true,
      minlength: 4,
    },
    precio: {
      type: Number,
      required: true,
      min: 0,
    },
    stock: {
      type: Number,
      required: true,
      min: 0,
    },
    marca: {
      type: String,
      required: true,
      trim: true,
      minlength: 2,
    },
    categoria: {
      type: String,
      required: true,
      trim: true,
      enum: [
        "autos",
        "muñecos",
        "juegos de mesa",
        "accesorios consolas",
        "juegos electronicos",
      ],
      minlength: 4,
      lowercase: true,
    },
    descripcion_corta: {
      type: String,
      required: true,
      trim: true,
      minlength: 4,
    },
    descripcion_larga: {
      type: String,
      trim: true,
      minlength: 4,
    },
    edad_desde: {
      type: Number,
      required: true,
      min: 1,
      max: 99,
    },
    edad_hasta: {
      type: Number,
      required: true,
      min: 2,
      max: 99,
    },
    imagen: {
      type: String,
      required: true,
      default: "placeholder.jpg",
    },
    imagen_alt: {
      type: String,
      default: "Imagen de juguete espacial",
    },
    imagen_title: {
      type: String,
      default: "Ver detalle del producto",
    },
  },
  {
    timestamps: true,
  },
);

const Producto = mongoose.model("Producto", productoSchema);

export default Producto;
