import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import App from './App';
// Importamos BrowserRouter para envolver nuestra aplicación y habilitar el uso de las rutas
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* Envolvemos nuestra aplicación con BrowserRouter para habilitar el enrutamiento */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
