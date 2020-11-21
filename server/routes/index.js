const express = require('express');
const app = express();

app.use(require('./usuario')); // Indicamos y usamos las rutas de usuario
app.use(require('./login')); // Indicamos y usamos las rutas de login

module.exports = app;