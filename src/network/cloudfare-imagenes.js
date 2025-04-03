const Cloudflare = require('../services/cloudflare'); // Importa la clase Cloudflare

// Ruta para obtener todas las imágenes almacenadas en Cloudflare
async function getCloudflareImages(request, response) {
    try {
        const cloudflare = Cloudflare.getInstance(); // Obtener la instancia de Cloudflare
        const imageUrls = await cloudflare.getImages(); // Obtener las URLs de las imágenes desde Cloudflare

        // Devolver las URLs de las imágenes al frontend
        response.json(imageUrls);
    } catch (error) {
        console.error('Error al obtener las imágenes de Cloudflare:', error);
        response.status(500).send('Error al obtener las imágenes desde Cloudflare');
    }
}

module.exports = { getCloudflareImages };
