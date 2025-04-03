const express = require('express');
const NetworkImages = require('../network/imagesNetwork'); // Rutas existentes
const { getCloudflareImages } = require('../network/cloudfare-imagenes'); // Ruta nueva para obtener imágenes de Cloudflare

const routes = express.Router();

// Ruta para obtener imágenes desde Cloudflare
routes.get('/imagenes/all', getCloudflareImages);

// Otras rutas que ya tenías
routes.use('/imagenes', NetworkImages);

module.exports = routes;
