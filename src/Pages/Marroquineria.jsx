import React from 'react';

export default function Marroquineria() {
  return (
    <section className="bg-black text-white py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gold mb-4 uppercase tracking-widest">
          Marroquinería Exclusiva
        </h2>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto">
          Descubre nuestra exclusiva colección de marroquinería, diseñada con
          materiales premium y un estilo inigualable.
        </p>
      </div>

      {/* Galería de productos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto">
        {productos.map((producto, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
          >
            <img
              src={producto.imagen}
              alt={producto.nombre}
              className="w-full h-64 object-cover"
            />
            <div className="p-5 text-black text-center">
              <h3 className="text-xl font-semibold">{producto.nombre}</h3>
              <p className="text-gray-600 mt-2">{producto.descripcion}</p>
              <button className="mt-4 bg-gold text-black px-6 py-2 rounded-full font-semibold hover:bg-yellow-600 transition">
                Ver más
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// Datos de productos
const productos = [
  {
    nombre: 'Cartera de Cuero Premium',
    descripcion: 'Elegancia y calidad en cada detalle.',
    imagen: 'https://source.unsplash.com/400x400/?leather,bag'
  },
  {
    nombre: 'Mochila de Cuero Exclusiva',
    descripcion: 'Diseño moderno y sofisticado.',
    imagen: 'https://source.unsplash.com/400x400/?leather,backpack'
  },
  {
    nombre: 'Billetera de Lujo',
    descripcion: 'Estilo y distinción en cada uso.',
    imagen: 'https://source.unsplash.com/400x400/?wallet,leather'
  }
];
