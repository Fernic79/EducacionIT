import mongoose from "mongoose";

const carritoSchema = new mongoose.Schema(
  {
    usuario: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Usuario", //Lo traemos del models de usuarios
      required: true,
      unique: true,
    },
    items: [
      {
        producto: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Producto", //Lo traemos del models de productos
          required: true,
        },
        cantidad: {
          type: Number,
          required: true,
          min: 1,
          default: 1,
        },
        precio: {
          type: Number, // Guardamos el precio unitario del momento
          required: true,
        },
      },
    ],
    total: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true },
);

// Middleware para calcular el total antes de guardar cambios
carritoSchema.pre("save", function (next) {
  this.total = this.items.reduce((acumulador, item) => {
    return acumulador + item.precio * item.cantidad;
  }, 0);
  next();
});

const Carrito = mongoose.model("Carrito", carritoSchema);

export default Carrito;
