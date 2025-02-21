import React from 'react';

export default function ModalProducto({ producto, isOpen, onClose }) {
  if (!isOpen) return null;
  const handleWhatsAppRedirect = () => {
    const numeroWhatsApp = '3865529067'; // Número de WhatsApp
    const mensaje = encodeURIComponent(
      `¡Hola! Estoy interesado en el producto: ${producto.nombre}. ¿Podrías darme más información?`
    );
    const url = `https://wa.me/${numeroWhatsApp}?text=${mensaje}`;
    window.open(url, '_blank'); // Abre WhatsApp en una nueva pestaña
    onClose(); // Cierra la modal después de abrir WhatsApp
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl p-6 max-w-3xl w-full relative flex flex-col md:flex-row">
        {/* Imagen */}
        <div className="md:w-1/2 w-full flex justify-center">
          <img
            src={producto.imagen}
            alt={producto.nombre}
            className="w-full h-auto max-h-80 object-cover rounded-lg"
          />
        </div>

        {/* Contenido */}
        <div className="md:w-1/2 w-full mt-4 md:mt-0 md:pl-6 flex flex-col justify-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            {producto.nombre}
          </h2>
          <p className="text-gray-700 mt-2">{producto.descripcion}</p>

          {/* Información adicional */}
          <p className="mt-2 text-gray-500">
            <strong>Material:</strong> {producto.material}
          </p>
          <p className="mt-2 text-gray-500">
            <strong>Disponibilidad:</strong> {producto.disponibilidad}
          </p>

          {/* Precio */}
          <p className="mt-4 text-2xl font-bold text-[#d4af37]">
            ${producto.precio.toLocaleString()}
          </p>

          {/* Botón de cerrar */}
          <div className="mt-6 flex justify-between">
            <button
              onClick={onClose}
              className="bg-[#d4af37] text-gray-600 font-bold px-4 py-2 rounded-md hover:bg-gray-500 transition"
            >
              Cerrar
            </button>
            <button
              onClick={handleWhatsAppRedirect}
              className="bg-[#d4af37] text-gray-600 font-bold px-4 py-2 rounded-md hover:bg-yellow-500 transition"
            >
              Consultar por WhatsApp
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
