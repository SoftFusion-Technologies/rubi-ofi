import React, { useState, useContext } from 'react';
import { menuItems } from '../Config/menu';
import LogoRubi from '../Images/LogoPerfumeria.png';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa'; // Importa el ícono del carrito
import { CartContext } from '../Components/CartContext'; // Importa el contexto del carrito
import '../Styles/animacionlinks.css';
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Función para hacer el scroll hacia la sección de contacto
  const scrollToContactSection = () => {
    const section = document.getElementById('contacto');
    section.scrollIntoView({ behavior: 'smooth' });
  };

  const { cartItems } = useContext(CartContext); // Obtener los productos del carrito

  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <nav className="bg-white shadow-md relative z-10">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo y Nombre */}
        <div className="flex items-center space-x-3">
          <Link to="/">
            {' '}
            {/* Redirige al inicio cuando se hace clic */}
            <img
              src={LogoRubi}
              alt="Rubi Perfumeria Logo"
              className="h-auto w-24"
            />
          </Link>
          {/* <Link to="/" className="link">
            <span className="font-bignoodle text-2xl font-bold text-black tracking-wide uppercase">
              Rubi
            </span>
          </Link> */}
        </div>

        {/* Menú Desktop */}
        <div className="hidden md:flex space-x-8">
          {menuItems.map((item) => (
            <Link
              key={item.id}
              to={item.href}
              className="link font-bignoodle text-lg font-medium text-black hover:text-gray-500 transition"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Carrito de compras en Desktop */}
        {/* Carrito de compras en Desktop */}
        <div className="relative">
          <Link to="/cart" className="flex items-center">
            <FaShoppingCart size={30} className="text-black" />
            {totalQuantity > 0 && (
              <span className="absolute top-0 right-0 bg-pink-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center">
                {totalQuantity}
              </span>
            )}
          </Link>
        </div>

        {/* Botón Hamburguesa */}
        <button
          className="block md:hidden text-black focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={
                isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'
              }
            />
          </svg>
        </button>
      </div>

      {/* Menú Mobile */}
      {isMenuOpen && (
        <div className="md:hidden bg-white">
          {menuItems.map((item) => (
            <Link
              key={item.id}
              to={item.href}
              className="font-bignoodle block px-4 py-2 text-black hover:bg-gray-100 transition"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
