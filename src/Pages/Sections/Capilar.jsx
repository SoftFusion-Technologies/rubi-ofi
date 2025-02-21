import React, { useState, useEffect } from 'react';
import ModalProducto from '../../Components/GLOBAL/ModalProducto';
import ImgLogoSoft from '../../Images/LOGOSOFT_v1.png';

export default function Capilar() {
  const [modalOpen, setModalOpen] = useState(false);
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);

  // Desplazar hacia la parte superior cuando el componente se monte
  useEffect(() => {
    window.scrollTo({
      top: 0, // Desplazar hacia arriba de la página
      behavior: 'smooth' // Añadir desplazamiento suave
    });
  }, []);

  const abrirModal = (producto) => {
    setProductoSeleccionado(producto);
    setModalOpen(true);
  };
  return (
    <section className="text-white py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-[#d4af37] text-4xl sm:text-6xl font-bold mb-6 font-bignoodle tracking-wide drop-shadow-md">
          Cuidado Capilar Exclusivo
        </h2>
        <p className="font-messina text-lg text-black max-w-3xl mx-auto">
          Descubre nuestra selección de productos premium para el cuidado
          capilar. Fórmulas innovadoras con ingredientes naturales para un
          cabello sano, brillante y fuerte.
        </p>
      </div>

      {/* Descripción global */}
      <div className="max-w-5xl mx-auto bg-gray-200 p-6 rounded-lg shadow-lg mt-12 text-center">
        <h3 className="font-messina text-2xl font-semibold text-[#d4af37] mb-4">
          El Secreto de un Cabello Perfecto
        </h3>
        <p className="font-messina text-black text-lg">
          Nuestra línea capilar combina tecnología avanzada y extractos
          naturales para nutrir, reparar y embellecer tu cabello desde la raíz
          hasta las puntas. Ideal para todo tipo de cabello.
        </p>
      </div>

      {/* Galería de productos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-14 max-w-6xl mx-auto">
        {productosCapilar.map((producto, index) => (
          <div
            key={index}
            className="relative bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <div className="relative">
              <img
                src={producto.imagen}
                alt={producto.nombre}
                className="w-full h-full object-contain rounded-t-xl"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 hover:opacity-100 transition duration-300"></div>
            </div>

            <div className="p-6 text-black text-center">
              <h3 className="text-2xl font-semibold text-gray-900">
                {producto.nombre}
              </h3>
              <p className="text-gray-600 mt-2">{producto.descripcion}</p>
              <button
                className="mt-4 bg-[#d4af37] text-white px-6 py-2 rounded-full font-semibold hover:bg-yellow-500 transition duration-300 shadow-lg hover:shadow-xl"
                onClick={() => abrirModal(producto)}
              >
                Ver más
              </button>
            </div>
          </div>
        ))}
      </div>
      {/* Modal */}
      <ModalProducto
        producto={productoSeleccionado}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </section>
  );
}

// Datos de productos capilares
const productosCapilar = [
  {
    id: 1,
    nombre: 'Shampoo Nutritivo',
    descripcion: 'Limpieza profunda con hidratación intensa.',
    imagen: ImgLogoSoft,  
    precio: 850,
    categoria: 'Shampoo',
    disponibilidad: 'En stock',
    material: 'Ingredientes naturales'
  },
  {
    id: 2,
    nombre: 'Acondicionador Reparador',
    descripcion: 'Repara y fortalece el cabello dañado.',
    imagen: ImgLogoSoft,
    precio: 950,
    categoria: 'Acondicionadores',
    disponibilidad: 'En stock',
    material: 'Aceite de argán'
  },
  {
    id: 3,
    nombre: 'Mascarilla Capilar',
    descripcion: 'Nutrición profunda para un cabello sedoso.',
    imagen: ImgLogoSoft,
    precio: 1200,
    categoria: 'Mascarillas',
    disponibilidad: 'Agotado',
    material: 'Aceite de coco'
  }
];
