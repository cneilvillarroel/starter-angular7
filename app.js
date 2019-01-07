// Requires
var express = require('express');


const config = require('./config/config');
// Inicializar variables
var app = express();

// Importar rutas
var appRoutes = require('./routes/app');

// Rutas Principales
app.use('/', appRoutes);

// Escuchar peticiones
app.listen(config.port, () => {
    console.log('Express server corriendo en el puerto ' + config.port + ': \x1b[32m%s\x1b[0m', 'online');
    console.log(`Sitio web corriendo en http://localhost:${config.port}`);
});