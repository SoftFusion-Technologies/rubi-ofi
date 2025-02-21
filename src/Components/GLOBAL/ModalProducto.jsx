import React from 'react';

export default function ModalProducto({ producto, isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-xl p-6 max-w-3xl w-full relative flex">
        {/* Imagen a la izquierda */}
        <div className="w-1/2">
          <img
            src={producto.imagen}
            alt={producto.nombre}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Contenido a la derecha */}
        <div className="w-1/2 pl-6 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-gray-900">
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

          {/* Precio (ahora visible en la modal) */}
          <p className="mt-4 text-2xl font-bold text-[#d4af37]">
            ${producto.precio.toLocaleString()}
          </p>

          {/* Botón de cerrar */}
          <button
            onClick={onClose}
            className="mt-6 bg-[#d4af37] text-black px-4 py-2 rounded-md hover:bg-yellow-500 transition"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
}
