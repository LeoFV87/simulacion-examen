const express = require('express');
const app = express();

// IMPORTANTE: server.js escucha en 8080 (el defecto del Reto 1 usa EXPOSE 3000)
const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.status(200).json({ status: 'ok', message: 'Aplicacion funcionando correctamente' });
});

app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

if (require.main === module) {
  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Servidor activo en el puerto ${PORT}`);
  });
}

module.exports = app;
