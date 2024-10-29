// hooks/useSpeech.js
import { useEffect } from 'react';

export function useSpeech(text) {
  useEffect(() => {
    // Obtenha o sintetizador de voz
    const synth = window.speechSynthesis;

    // Cancele qualquer fala anterior antes de iniciar uma nova
    synth.cancel();

    // Verifique se há texto e inicie a fala
    if (text) {
      const utterance = new SpeechSynthesisUtterance(text);
      synth.speak(utterance);
    }

    // Cleanup: cancele a fala quando o componente for desmontado
    return () => {
      synth.cancel();
    };
  }, [text]);
}
