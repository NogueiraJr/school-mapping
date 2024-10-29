// src/pages/Home.js
import React, { useEffect, useState } from 'react';
import TimelineSteps from '../components/TimelineSteps'; // Importa o componente
import './Home.css';

function Home() {
  const steps = [
    "Você saiu do Elevador, vire à direita e siga.",
    "Agora você está no corredor, vire à direita e siga.",
    "Pare, você chegou na porta da sua sala de aula, que está ao seu lado esquerdo.",
    "Entre na sala de aula, seu lugar é na primeira carteira na segunda fileira. Bons estudos!"
  ];

  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    if (currentStep < steps.length - 1) { // Continue apenas se não for o último passo
      const intervalId = setInterval(() => {
        setCurrentStep((prevStep) => prevStep + 1); // Avança para o próximo passo
      }, 9000); // Troca de passo a cada 9 segundos

      return () => clearInterval(intervalId);
    }
  }, [currentStep, steps.length]); // Adiciona currentStep como dependência

  return (
    <div className="home-container">
      <h1 className="home-title">Navegação Escolar</h1>
      <img 
        src="https://i.pinimg.com/originals/84/21/13/842113efadbfb8064345cbbf144e7fe5.jpg" 
        alt="Corredor da escola" 
        className="home-image"
      />
      <TimelineSteps steps={steps} currentStep={currentStep} /> {/* Adiciona o componente TimelineSteps */}
    </div>
  );
}

export default Home;
