// hooks/useSpeech.js
import { useEffect } from 'react';

export function useSpeech(text) {
  useEffect(() => {
    const synth = window.speechSynthesis;

    // Verifica se o sintetizador já está falando, para evitar interrupções
    if (synth.speaking) {
      synth.cancel();
    }

    if (text) {
      const utterance = new SpeechSynthesisUtterance(text);
      
      // Opção: adicione configurações como idioma ou voz, se necessário
      // utterance.lang = 'pt-BR';
      // utterance.voice = synth.getVoices().find(voice => voice.lang === 'pt-BR');

      synth.speak(utterance);

      // Cleanup: cancelar a fala ao desmontar o componente
      return () => {
        synth.cancel();
      };
    }
  }, [text]);
}
