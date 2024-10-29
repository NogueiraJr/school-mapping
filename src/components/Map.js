// pages/Map.js
import React from 'react';
import { useSpeech } from '../hooks/useSpeech';

function Map() {
  useSpeech('Você está na página de mapa. Selecione um destino para obter orientação.');

  return <h1>Mapa Escolar</h1>;
}

export default Map;
