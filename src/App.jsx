import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import CartProvider from './Components/CartContext'; // Importamos el proveedor del carrito

function App() {
  return (
    <CartProvider>
      {' '}
      <Router>
        <Navbar />
        <Routes></Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
