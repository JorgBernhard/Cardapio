import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Main from './Pages/Main/Main';
import Header from './Pages/Header/Header';
import Petiscos from './Pages/Petiscos/Petiscos';
import Pratos from './Pages/Pratos/Pratos';
import Bebidas from './Pages/Bebidas/Bebidas';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Main />
    <Petiscos />
    <Pratos />
    <Bebidas />
  </React.StrictMode>
);

