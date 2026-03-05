const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Error 500
const sendFileSafe = (res, fileName) => {
    const filePath = path.join(__dirname, 'public', fileName);
    res.sendFile(filePath, (err) => {
        if (err) {
            console.error("Error interno:", err);
            res.status(500).send("<h1>500</h1><p>Error interno del servidor al cargar la página.</p>");
        }
    });
};

app.get('/index', (req, res) => sendFileSafe(res, 'index.html'));
app.get('/about', (req, res) => sendFileSafe(res, 'about.html'));
app.get('/contact', (req, res) => sendFileSafe(res, 'contact.html'));

// Error 404
app.use((req, res) => {
    res.status(404).send("<h1>404</h1><p>Lo sentimos, la página no existe.</p>");
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});