import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import CartProvider from './Components/CartContext'; // Importamos el proveedor del carrito
import Home from './Pages/Home';
import Footer from './Components/Footer/Footer';
import Mapa from './Components/Footer/Mapa';
import ProductDetail from './Pages/ProductDetail';
import NotFound from './Pages/NotFound'; // Importar la página 404
import Cart from './Components/Cart'; // Importamos el proveedor del carrito
import FloatingCart from './Components/FloatingCart';
import About from './Pages/About';
import FraganciasList from './Pages/Sections/Fragancias';
import Marroquineria from './Pages/Sections/Marroquineria';
import Capilar from './Pages/Sections/Capilar';
import Regalos from './Pages/Sections/Regalos';
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
          <Route path="/nosotros" element={<About />} />
          <Route path="/fragancias" element={<FraganciasList />} />
          <Route path="/marroquineria" element={<Marroquineria />} />
          <Route path="/capilar" element={<Capilar />} />
          <Route path="/regalos" element={<Regalos />} />
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
