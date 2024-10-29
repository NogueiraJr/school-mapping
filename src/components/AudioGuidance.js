// components/AudioGuidance.js
import React from 'react';
import { useSpeechSynthesis } from 'react-speech-kit';

export default function AudioGuidance({ message }) {
  const { speak } = useSpeechSynthesis();

  return (
    <button onClick={() => speak({ text: message })}>
      Ouvir Instruções
    </button>
  );
}
