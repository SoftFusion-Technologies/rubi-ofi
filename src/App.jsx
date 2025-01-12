import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import CartProvider from './Components/CartContext'; // Importamos el proveedor del carrito
import Home from './Pages/Home';
import Footer from './Components/Footer';
import Mapa from './Components/Mapa';
import ProductDetail from './Pages/ProductDetail';
import NotFound from './Pages/NotFound'; // Importar la página 404

function App() {
  return (
    <CartProvider>
      {' '}
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id/:name" element={<ProductDetail />} />{' '}
          {/* Ruta para la página no encontrada */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Mapa />
        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;
