import React, { useEffect, useState } from 'react';
import ImgHero1 from '../Images/Hero/hero1.jpeg';

const Hero = () => {
  // Desplazar hacia la parte superior cuando el componente se monte
  useEffect(() => {
    window.scrollTo({
      top: 0, // Desplazar hacia arriba de la página
      behavior: 'smooth' // Añadir desplazamiento suave
    });
  }, []);
  // Función para hacer el scroll hacia la sección
  const scrollToSection = () => {
    const section = document.getElementById('featured-products');
    section.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <section
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${ImgHero1})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>{' '}
      {/* Overlay para oscurecer la imagen */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4 md:px-8">
        <h1 className="uppercase font-bignoodle text-4xl sm:text-5xl lg:text-7xl font-serif font-bold mb-6">
          Descubre el aroma que te define
        </h1>
        <p className="font-mono font-semibold text-lg sm:text-xl lg:text-2xl mb-8">
          Encuentra fragancias exclusivas que inspiran elegancia y
          sofisticación.
        </p>
        <button
          onClick={scrollToSection}
          className="uppercase bg-white text-black font-semibold py-3 px-6 rounded-lg transition duration-300 ease-in-out hover:bg-black hover:text-white"
        >
          Explorar Colecciones
        </button>
      </div>
    </section>
  );
};

export default Hero;
