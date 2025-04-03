const Cloudflare = require('../services/cloudflare'); 


async function getCloudflareImages(request, response) {
    try {
        const cloudflare = Cloudflare.getInstance(); 
        const imageUrls = await cloudflare.getImages(); 

     
        response.json(imageUrls);
    } catch (error) {
        console.error('Error al obtener las imágenes de Cloudflare:', error);
        response.status(500).send('Error al obtener las imágenes desde Cloudflare');
    }
}

module.exports = { getCloudflareImages };
