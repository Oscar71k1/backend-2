const { getCloudflareService } = require('../servicelocator/composer');
const express = require('express');
const router = express.Router();

async function onNewImage(path) {
    const cloudflareService = getCloudflareService();
    return cloudflareService.uploadImages(path);
}

async function onDeleteImage(imageId) {
    const cloudflareService = getCloudflareService();
    return cloudflareService.deleteImage(imageId);
}

module.exports = {
    onNewImage, 
    onDeleteImage
};
