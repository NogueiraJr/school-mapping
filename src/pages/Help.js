// pages/Help.js
import React from 'react';
import AudioGuidance from '../components/AudioGuidance';

export default function Help() {
  return (
    <div>
      <h1>Ajuda</h1>
      <p>Para navegar pelo aplicativo, conecte ao Bluetooth e escolha a sala que deseja chegar.</p>
      <AudioGuidance message="Bem-vindo ao aplicativo de navegação escolar. Siga as instruções para iniciar." />
    </div>
  );
}
