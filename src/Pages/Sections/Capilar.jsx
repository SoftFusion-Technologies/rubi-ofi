import React, { useState, useEffect } from 'react';
import ModalProducto from '../../Components/GLOBAL/ModalProducto';
// import ImgLogoSoft from '../../Images/LOGOSOFT_v1.png';
import ProdCapilar1 from '../../Images/ProductosCapilar/Prod_Capilar_1.jpg';
import ProdCapilar2 from '../../Images/ProductosCapilar/Prod_Capilar_2.jpg';
import ProdCapilar3 from '../../Images/ProductosCapilar/Prod_Capilar_3.jpg';
import ProdCapilar4 from '../../Images/ProductosCapilar/Prod_Capilar_4.jpg';
import ProdCapilar5 from '../../Images/ProductosCapilar/Prod_Capilar_5.jpg';
import ProdCapilar6 from '../../Images/ProductosCapilar/Prod_Capilar_6.jpg';

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
            className="relative bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl flex flex-col"
          >
            {/* Imagen con tamaño fijo y centrado */}
            <div className="w-full h-64 flex items-center justify-center bg-gray-100">
              <img
                src={producto.imagen}
                alt={producto.nombre}
                className="max-h-full max-w-full object-contain"
              />
            </div>

            {/* Contenido con altura mínima */}
            <div className="p-6 text-black text-center flex flex-col flex-grow">
              <h3 className="uppercase text-2xl font-semibold text-gold">
                {producto.nombre}
              </h3>
              <p className="text-gray-600 mt-2 flex-grow">
                {producto.descripcion}
              </p>

              {/* Botón fijo abajo */}
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
    nombre: 'Retoque de raíz en spray',
    descripcion:
      'producto temporal que cubre las canas y las raíces oscuras del cabello.',
    imagen: ProdCapilar1,
    precio: 21100,
    categoria: 'Shampoo',
    disponibilidad: 'En stock',
    material: 'Ingredientes en la descripción del producto.'
  },
  {
    id: 2,
    nombre: 'Mascarilla de  nutrición',
    descripcion:
      'Una mascarilla de nutrición es un tratamiento capilar que hidrata, nutre y revitaliza el cabello.',
    imagen: ProdCapilar2,
    precio: 5100,
    categoria: 'Acondicionadores',
    disponibilidad: 'En stock',
    material: 'Ingredientes en la descripción del producto.'
  },
  {
    id: 3,
    nombre: 'Mascara  reparadora profesional',
    descripcion:
      'Hidrata y repara la fibra capilar brindando una textura suave y sedosa.',
    imagen: ProdCapilar3,
    precio: 32000,
    categoria: 'Capilar',
    disponibilidad: 'En Stock',
    material: 'Ingredientes en la descripción del producto.'
  },
  {
    id: 4,
    nombre: 'Aceite reparador para puntas',
    descripcion:
      'El aceite reparador de puntas es un producto capilar que nutre y repara las puntas dañadas o abiertas.',
    imagen: ProdCapilar4,
    precio: 9400,
    categoria: 'Capilar',
    disponibilidad: 'En Stock',
    material: 'Ingredientes en la descripción del producto.'
  },
  {
    id: 5,
    nombre: 'Máscara capilar brasileras de 1kg',
    descripcion:
      'Es una máscara apta Co wash ligera, de nutrición y limpieza suave con aroma a Banana (suave).',
    imagen: ProdCapilar5,
    precio: 4500,
    categoria: 'Capilar',
    disponibilidad: 'En Stock',
    material: 'Ingredientes en la descripción del producto.'
  },
  {
    id: 6,
    nombre: 'Shampo y acondicionador',
    descripcion:
      'El champú limpia el cabello y el cuero cabelludo, mientras que el acondicionador lo protege y embellece.',
    imagen: ProdCapilar6,
    precio: 8000,
    categoria: 'Capilar',
    disponibilidad: 'En Stock',
    material: 'Ingredientes en la descripción del producto.'
  }
];
