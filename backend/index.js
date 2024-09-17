const express = require('express');
const cors = require('cors');  // Importar cors
const mainRoutes = require('./src/rutas/mainRoutes');

const app = express();
// Configurar CORS para aceptar cualquier origen
app.use(cors());

app.use(express.json());
app.use('/api/', mainRoutes);




app.listen(5000, () => {
  console.log(`Servidor corriendo en el puerto 5000`);
});