
//1-Importamos router de express para definir las rutas del servidor
const { Router } = require("express"); //enrutador de express para definir las rutas del servidor. Router es una clase que permite crear rutas modulares y montables en una aplicación Express. Con Router, podemos definir rutas específicas para diferentes partes de la aplicación, lo que facilita la organización y el mantenimiento del código. En este archivo, se utilizará Router para definir las rutas relacionadas con las solicitudes GET, mientras que en el archivo server.js se encargará de levantar el servidor y manejar otras configuraciones generales.

//2-inicializamos el router para definir las rutas del servidor
const router = Router(); //creamos una instancia de Router para definir las rutas del servidor. Con router, podemos definir rutas específicas para diferentes partes de la aplicación, lo que facilita la organización y el mantenimiento del código. En este archivo, se utilizará router para definir las rutas relacionadas con las solicitudes GET, mientras que en el archivo server.js se encargará de levantar el servidor y manejar otras configuraciones generales.

//3-Rutas del get - obtiene datos del servidor
router.get("/html", (req, res) => {
  //enviar html al cliente
    res.send(`<h1>Bienvenido a la aplicación con motores de plantillas</h1>`);
});

router.get("/file", (req, res) => {
  //enviar un archivo al cliente
  res.sendFile(path.join(__dirname, "/index.html"));
});

router.get("/template", (req, res) => {
  //respondemos con unos datos del OS
  const datosSO = {
    plataforma: os.platform(),
    version: os.version(),
    memoria: os.totalmem(),
    memoriaLibre: os.freemem(),
  };
  res.send(`<h1>Datos del sistema operativo</h1>
  <ul>
    <li>Plataforma: ${datosSO.plataforma}</li>
    <li>Versión: ${datosSO.version}</li>
    <li>Memoria total: ${datosSO.memoria}</li>
    <li>Memoria libre: ${datosSO.memoriaLibre}</li>
  </ul>`);
});

//4-Exportamos el router para poder utilizarlo en server.js
module.exports = router;