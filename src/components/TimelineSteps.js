// src/components/TimelineSteps.js
import React, { useEffect } from 'react';
import { Timeline } from 'antd';
import { useSpeech } from '../hooks/useSpeech';
import './TimelineSteps.css'; // Importa o arquivo CSS

function TimelineSteps({ steps, currentStep }) {
  useSpeech(steps[currentStep]); // Fala o passo atual

  return (
    <Timeline>
      {steps.map((step, index) => (
        <Timeline.Item 
          key={index} 
          className={index === currentStep ? 'active' : ''} // Aplica a classe ativa
        >
          <div className="timeline-item">{step}</div>
        </Timeline.Item>
      ))}
    </Timeline>
  );
}

export default TimelineSteps;
