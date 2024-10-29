// src/pages/Home.js
import React from 'react';
import { useSpeech } from '../hooks/useSpeech';
import './Home.css'; // Importa o arquivo CSS

function Home() {
  useSpeech('Bem-vindo à página inicial do aplicativo de navegação escolar.');

  return (
    <div className="home-container">
      <h1 className="home-title">Navegação Escolar</h1>
      <img 
        src="https://i.pinimg.com/originals/84/21/13/842113efadbfb8064345cbbf144e7fe5.jpg" 
        alt="Corredor da escola" 
        className="home-image"
      />
      {/* <button className="home-button">Sensores Bluetooth</button> */}
    </div>
  );
}

export default Home;




