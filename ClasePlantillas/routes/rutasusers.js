//1-importamos router de express
const { Router } = require("express");

//2-creamos una instancia de router
const router = Router();

//3-creamos las rutas del get
router.get("/usuarios", (req, res) => {
  res.send("La lista de usuarios es: Juan, María, Pedro");
});

//4-creamos una ruta del Post para agregar un nuevo usuario
router.post("/usuarios", (req, res) => {
  const user = req.body; //obtenemos el nombre del usuario desde el cuerpo de la solicitud
  res.send(`El usuario ${user.nombre} ha sido agregado correctamente`);
});

//creamos un delete para eliminar un usuario
router.delete("/usuarios/:nombre", (req, res) => {
  const nombre = req.params.nombre; //obtenemos el nombre del usuario desde los parámetros de la ruta
  res.send(`El usuario ${nombre} ha sido eliminado correctamente`);
});

//5-esportamos el router para usarlo en index.js
module.exports = router;