const express = require('express');
const routes = require('./src/routes'); // Importa las rutas definidas correctamente
const { init } = require('./src/servicelocator/composer'); // Importa el Service Locator
const cors = require('cors');

const app = express();
const port = 5005;

init(); // Inicializa las dependencias

app.use(cors()); // Configura CORS
app.use(express.json()); // Configura el middleware para manejar JSON

// Usa las rutas definidas
app.use(routes); // Asegúrate de que 'routes' sea un enrutador y no un objeto

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
