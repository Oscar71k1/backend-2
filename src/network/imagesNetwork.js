const express = require('express');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const Controller = require("../controllers/imagesController");

const routes = express.Router();

// Configuración de CORS
const corsOptions = {
    origin: '*', // Permitir solicitudes solo desde localhost:3000
    methods: ['GET', 'POST', 'DELETE'],
    allowedHeaders: ['Content-Type'],
};
routes.use(cors(corsOptions)); // Aplicar CORS a todas las rutas

// Configuración de Multer para almacenar las imágenes
const upload = multer({ dest: 'uploads/' });

// Verificar si el directorio 'uploads' existe, y si no, crearlo
const uploadDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
    console.log('Directorio "uploads" creado');
}

// Ruta para subir la imagen
async function imagesNetwork(request, response) {
    const file = request.file;
    const result = await Controller.onNewImage(file.path);
    response.send(result.data);
}

// Ruta para eliminar la imagen
async function deleteImageNetwork(request, response) {
    const { imageId } = request.params;
    const result = await Controller.onDeleteImage(imageId);
    response.send(result.data);
}

// Ruta para obtener las imágenes subidas
async function getImages(request, response) {
    // Leer el directorio
    fs.readdir(uploadDir, (err, files) => {
        if (err) {
            console.error("Error al leer el directorio:", err); // Agregamos un log de error aquí
            return response.status(500).send('Error al leer el directorio');
        }

        // Filtrar los archivos de imagen
        const imageFiles = files.filter(file => {
            const ext = path.extname(file).toLowerCase();
            return ext === '.jpg' || ext === '.jpeg' || ext === '.png' || ext === '.gif';
        });

        const imagePaths = imageFiles.map(file => `/uploads/${file}`);
        response.json(imagePaths); // Enviar las rutas de las imágenes
    });
}

// Servir el directorio 'uploads' como archivos estáticos
routes.use('/uploads', express.static(uploadDir));

// Rutas
routes.post("/upload", upload.single('file'), imagesNetwork);
routes.delete("/remove/:imageId", deleteImageNetwork);
routes.get("/all", getImages); // Ruta para obtener todas las imágenes

module.exports = routes;
