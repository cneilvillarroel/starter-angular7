var express = require('express');
const path = require('path');
var app = express();

// Angular DIST output folder
app.use(express.static(path.join(__dirname, '../public/dist/public')))

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/dist/public/index.html'))
})

app.get('/', (req, res, next) => {

    res.status(200).json({
        ok: true,
        mensaje: 'Peticion realizada correctamente'
    })

});

module.exports = app;