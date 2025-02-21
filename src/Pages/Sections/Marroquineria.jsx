import React, { useState, useEffect } from 'react';
import ModalProducto from '../../Components/GLOBAL/ModalProducto';
// import ImgLogoSoft from '../../Images/LOGOSOFT_v1.png';
import ProdMarroquineria1 from '../../Images/ProductosMarroquineria/Prod_Marroquineria_1.jpg';
import ProdMarroquineria2 from '../../Images/ProductosMarroquineria/Prod_Marroquineria_2.jpg';
import ProdMarroquineria3 from '../../Images/ProductosMarroquineria/Prod_Marroquineria_3.jpg';
import ProdMarroquineria4 from '../../Images/ProductosMarroquineria/Prod_Marroquineria_4.jpg';
import ProdMarroquineria5 from '../../Images/ProductosMarroquineria/Prod_Marroquineria_5.jpg';
import ProdMarroquineria6 from '../../Images/ProductosMarroquineria/Prod_Marroquineria_6.jpg';

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
    nombre: 'BOLSO AGARRATE CATALINA',
    descripcion: 'Elegancia y calidad en cada detalle.',
    imagen: ProdMarroquineria1,
    precio: 35000,
    categoria: 'Bolsos',
    disponibilidad: 'En stock',
    material:
      'Las carteras Agarrate Catalina están hechas de diferentes materiales, como cuero ecológico, charol, poliéster, microfibra y simil cuero.'
  },
  {
    id: 2,
    nombre: 'BOLSO LAS OREIRO',
    descripcion: 'Diseño moderno y sofisticado.',
    imagen: ProdMarroquineria2,
    precio: 45000,
    categoria: 'Bolsos',
    disponibilidad: 'En stock',
    material:
      'Los bolsos de Las Oreiro pueden estar hechos de diferentes materiales, como poliéster, nailon, cuero sintético, cuero vacuno y eco cuero.'
  },
  {
    id: 3,
    nombre: 'CARTERA AMAYRA',
    descripcion: 'Estilo y distinción en cada uso.',
    imagen: ProdMarroquineria3,
    precio: 35190,
    categoria: 'Carteras',
    disponibilidad: 'En stoc',
    material:
      ' La cartera Amayra puede estar hecha de diferentes materiales, como poliéster, cuero sintético, nylon o símil cuero.'
  },
  {
    id: 4,
    nombre: 'BILLETERA LIMA',
    descripcion: 'Elegancia y comodidad.',
    imagen: ProdMarroquineria4,
    precio: 15000,
    categoria: 'BILLETERA',
    disponibilidad: 'En stock',
    material: 'Las billeteras LIMA estan hechas de Cuero Sintetico Monedero.'
  },
  {
    id: 5,
    nombre: 'CARTUCHERAS LAS OREIRO',
    descripcion: 'Elegancia y calidad en cada detalle.',
    imagen: ProdMarroquineria5,
    precio: 20000,
    categoria: 'Cartucheras',
    disponibilidad: 'En stock',
    material:
      'Las Cartucheras LAS OREIRO están hechas de diferentes materiales,  Cuero Ecológico.'
  },
  {
    id: 6,
    nombre: 'BILLETERA LIMA',
    descripcion: 'Elegancia y comodidad.',
    imagen: ProdMarroquineria6,
    precio: 15000,
    categoria: 'BILLETERA',
    disponibilidad: 'En stock',
    material: 'Las billeteras LIMA estan hechas de Cuero Sintetico Monedero.'
  }
];
