const Servicelocator = require('./dependecyLocator');
const Cloudflare = require('../services/cloudflare');

const dl = Servicelocator.getInstance(); // Obtén la instancia del Service Locator

function init() {
    dl.bindSingleton('Cloudflare', () => Cloudflare.getInstance());
}

function getCloudflareService() {
    return dl.get('Cloudflare');
}

module.exports = { init, getCloudflareService };
