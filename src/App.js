// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Map from './pages/Map';
import Help from './pages/Help';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="map" element={<Map />} />
        <Route path="help" element={<Help />} />
      </Routes>
    </Router>
  );
}

export default App;
