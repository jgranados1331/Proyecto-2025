import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ListaChicas from './componente/ListaChica';
import DetalleChica from './componente/DetalleChica';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ListaChicas />} />
        <Route path="/chicas/:slug" element={<DetalleChica />} />
      </Routes>
    </Router>
  );
}

export default App;