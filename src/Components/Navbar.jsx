import React, { useState, useEffect, useContext } from 'react';
import { menuItems } from '../Config/menu';
import LogoRubi from '../Images/LogoPerfumeria.png';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa'; // Importa el ícono del carrito
import { CartContext } from '../Components/CartContext'; // Importa el contexto del carrito
import '../Styles/animacionlinks.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const { cartItems } = useContext(CartContext); // Obtener los productos del carrito
  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  // Cambiar el estado de isScrolled cuando el usuario haga scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo y Nombre */}
        <div className="flex items-center space-x-3">
          <Link to="/">
            {/* Mostrar texto si no se ha hecho scroll, o el logo si se hizo scroll */}
            {isScrolled ? (
              <img
                src={LogoRubi}
                alt="Rubi Perfumeria Logo"
                className="h-auto w-24"
              />
            ) : (
              <span className="text-white text-2xl font-bold uppercase">
                RUBI PERFUMERÍA
              </span>
            )}
          </Link>
        </div>

        {/* Menú Desktop */}
        <div className="hidden md:flex space-x-8">
          {menuItems.map((item) => (
            <Link
              key={item.id}
              to={item.href}
              className={`link font-bignoodle text-lg font-medium transition ${
                isScrolled ? 'text-black' : 'text-white'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

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
