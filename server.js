const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());

app.get('/api/consumo', (req, res) => {
  const consumo = {
    energia: Math.floor(Math.random() * 1000),
    agua: Math.floor(Math.random() * 500),
    gas: Math.floor(Math.random() * 300),
    timestamp: new Date().toISOString()
  };
  res.json(consumo);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});