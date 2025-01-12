import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import CartProvider from './Components/CartContext'; // Importamos el proveedor del carrito
import Home from './Pages/Home';
import Footer from './Components/Footer';
import Mapa from './Components/Mapa';
import ProductDetail from './Pages/ProductDetail';
import NotFound from './Pages/NotFound'; // Importar la página 404
import Cart from './Components/Cart'; // Importamos el proveedor del carrito
import FloatingCart from './Components/FloatingCart';

function App() {
  return (
    <CartProvider>
      {' '}
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id/:name" element={<ProductDetail />} />{' '}
          <Route path="/cart" element={<Cart />} />
          {/* Ruta para la página no encontrada */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Mapa />
        <FloatingCart />
        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;
