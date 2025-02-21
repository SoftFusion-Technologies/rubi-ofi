import React from 'react';

export default function Mapa() {
  return (
    <div
      className="flex flex-col md:flex-row lg:flex-row justify-center items-center mx-auto w-full transition-opacity duration-500"
      data-aos="fade-up"
      id="ubicacion"
    >
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3537.606527786407!2d-65.61482152497986!3d-27.43316822201164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9423fbdcd86b490d%3A0x55f5b7b8c31844d6!2sJuan%20Bautista%20Alberdi%201645%2C%20Aguilares%2C%20Tucum%C3%A1n!5e0!3m2!1ses-419!2sar!4v1708119228391!5m2!1ses-419!2sar"
        width="100%"
        height="450"
        style={{ border: '0' }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
