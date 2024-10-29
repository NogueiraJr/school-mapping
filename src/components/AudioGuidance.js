// components/AudioGuidance.js
import React from 'react';
import { Speech } from 'react-speech';

export default function AudioGuidance({ message }) {
  return (
    <div>
      <button onClick={() => {
        const utterance = new SpeechSynthesisUtterance(message);
        window.speechSynthesis.speak(utterance);
      }}>
        Ouvir Instruções
      </button>
    </div>
  );
}
