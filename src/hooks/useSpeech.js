// hooks/useSpeech.js
import { useEffect } from 'react';

export function useSpeech(text) {
  useEffect(() => {
    const synth = window.speechSynthesis;

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
