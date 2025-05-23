import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [dados, setDados] = useState({});

  useEffect(() => {
    const fetchData = () => {
      axios.get('http://localhost:5000/api/consumo')
        .then(res => setDados(res.data))
        .catch(err => console.error(err));
    };

    fetchData();
    const interval = setInterval(fetchData, 5000); // Atualiza a cada 5s
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h2>Dashboard de Consumo</h2>
      <p>Energia: {dados.energia} kWh</p>
      <p>Água: {dados.agua} L</p>
      <p>Gás: {dados.gas} m³</p>
      <p>Atualizado em: {new Date(dados.timestamp).toLocaleTimeString()}</p>
    </div>
  );
};

export default Dashboard;