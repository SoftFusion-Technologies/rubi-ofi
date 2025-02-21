import React from 'react';
import { FaGoogle } from 'react-icons/fa'; // Importa el ícono de Google

const Testimonials = () => {
  const testimonials = [
    {
      name: 'María López',
      feedback:
        '¡Rubí tiene las mejores fragancias! Siempre encuentro lo que busco.'
    },
    {
      name: 'Ricardo Diaz',
      feedback:
        'Excelente atención al cliente y productos de gran calidad. ¡Muy recomendable!'
    },
    {
      name: 'Carla Rodríguez',
      feedback:
        'Un lugar perfecto para encontrar regalos únicos y sofisticados.'
    }
  ];

  return (
    <div className="bg-gradient-to-r from-pink-100 via-pink-200 to-pink-300 py-12 px-4 sm:px-8 lg:px-16">
      <h2 className="text-center text-3xl sm:text-4xl font-extrabold text-pink-700 mb-8">
        Lo que dicen nuestros clientes
      </h2>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105"
          >
            <p className="text-gray-700 text-lg italic mb-4">
              "{testimonial.feedback}"
            </p>
            <div className="flex items-center justify-end space-x-2">
              <FaGoogle className="text-pink-700" /> {/* Ícono de Google */}
              <p className="text-pink-700 font-bold">- {testimonial.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
