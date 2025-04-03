const express = require('express');
const routes = require('./src/routes'); 
const { init } = require('./src/servicelocator/composer'); 
const cors = require('cors');

const app = express();
const port = 5005;

init(); 

app.use(cors()); 
app.use(express.json()); 


app.use(routes); 

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
