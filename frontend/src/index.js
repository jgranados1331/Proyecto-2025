import React from 'react';
import ReactDOM from 'react-dom/client'; // Cambio en React 18
import App from './App';

// Selecciona el contenedor raíz en el HTML
const root = ReactDOM.createRoot(document.getElementById('root'));

// Renderiza la aplicación
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);