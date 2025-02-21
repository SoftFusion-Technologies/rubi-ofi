import React, { useState, useEffect } from 'react';
import ModalProducto from '../../Components/GLOBAL/ModalProducto';
import ImgLogoSoft from '../../Images/LOGOSOFT_v1.png';

export default function Marroquineria() {
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
          Marroquinería
        </h2>
        <p className="text-lg font-messina text-black max-w-3xl mx-auto">
          Descubre nuestra exclusiva colección de marroquinería, diseñada con
          materiales premium y un estilo inigualable.
        </p>
      </div>

      {/* Galería de productos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-14 max-w-6xl mx-auto">
        {productos.map((producto, index) => (
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
              <h3 className="text-2xl font-semibold text-gold">
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
// Datos de productos
const productos = [
  {
    id: 1,
    nombre: 'Cartera de Cuero Premium',
    descripcion: 'Elegancia y calidad en cada detalle.',
    imagen: ImgLogoSoft,
    precio: 25000,
    categoria: 'Carteras',
    disponibilidad: 'En stock',
    material: 'Cuero genuino'
  },
  {
    id: 2,
    nombre: 'Mochila de Cuero Exclusiva',
    descripcion: 'Diseño moderno y sofisticado.',
    imagen: ImgLogoSoft,
    precio: 32000,
    categoria: 'Mochilas',
    disponibilidad: 'En stock',
    material: 'Cuero ecológico'
  },
  {
    id: 3,
    nombre: 'Billetera de Lujo',
    descripcion: 'Estilo y distinción en cada uso.',
    imagen: ImgLogoSoft,
    precio: 12000,
    categoria: 'Billeteras',
    disponibilidad: 'Agotado',
    material: 'Cuero italiano'
  }
];
