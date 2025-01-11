import React, { useState, useEffect } from 'react';
import { FaShippingFast, FaCreditCard, FaWhatsapp } from 'react-icons/fa';
import '../Styles/InfoSection.css';

const InfoSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const items = [
    {
      icon: <FaShippingFast className="icon" />,
      title: 'Envíos',
      description: 'A todo el país.'
    },
    {
      icon: <FaCreditCard className="icon" />,
      title: 'Pagos',
      description: 'Aceptamos tarjetas, transferencia o en efectivo.'
    },
    {
      icon: <FaWhatsapp className="icon" />,
      title: 'Consultas',
      description: 'Si tienes alguna duda, contáctanos al WhatsApp.'
    }
  ];

  // Cambiar el índice cada 4 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [items.length]);

  return (
    <section className="info-section py-16 px-4 sm:px-8">
      <div className="info-section-container slider-enabled">
        {items.map((item, index) => (
          <div
            key={index}
            className={`info-item text-center ${
              index === currentIndex ? 'active' : 'inactive'
            }`}
          >
            <div className="icon-container d-inline-block icon-60px mb-3">
              {item.icon}
            </div>
            <h3 className="info-title mb-2">{item.title}</h3>
            <p className="font-messina info-description mb-2">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InfoSection;
