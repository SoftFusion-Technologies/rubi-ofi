import React, { useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'aos/dist/aos.css'; // Importa los estilos de AOS
import AOS from 'aos'; // Importa AOS JS

import {
  product1,
  product2,
  product3,
  product4,
  product5,
  product6,
  product7,
  product8,
  product9,
  product10
} from './productos';

const ProductosDestacados = () => {
  const ProductosDestacados = [
    product1,
    product2,
    product3,
    product4,
    product5,
    product6,
    product7,
    product8,
    product9,
    product10
  ];

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2
        }
      }
    ]
  };

  useEffect(() => {
    AOS.init({
      duration: 1500, // Duración de las animaciones
      easing: 'ease-in-out', // Efecto de la animación
      once: true // La animación solo se ejecutará una vez
    });
  }, []);
  return (
    <div
      className="py-12 font-lora font-bold max-w-screen-lg mx-auto"
      data-aos="fade-down"
    >
      <div className="container mx-auto">
        <h2 className="text-5xl font-bignoodle text-center text-black mb-12">
          DESTACADOS
        </h2>
        <div className="overflow-hidden">
          <Slider {...sliderSettings} className="slick-slider">
            {ProductosDestacados.map((prod, index) => (
              <div key={index} className="p-4 sm:p-6">
                <div className="relative rounded-xl shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl duration-300">
                  <img
                    src={prod}
                    alt={`Producto Dest ${index + 1}`}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-transparent to-transparent p-4 text-white text-lg font-semibold">
                    {/* Producto {index + 1} */}
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default ProductosDestacados;
