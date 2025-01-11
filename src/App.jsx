import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import CartProvider from './Components/CartContext'; // Importamos el proveedor del carrito
import Home from './Pages/Home';

function App() {
  return (
    <CartProvider>
      {' '}
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
