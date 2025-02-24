import React, { useEffect } from 'react';
import ImgLogo from '../../Images/LOGOSOFT_v1.png';
import ImgRegalo1 from '../../Images/Regalos/ImgRegalo1.jpeg';
import ImgRegalo2 from '../../Images/Regalos/ImgRegalo2.jpeg';
import ImgRegalo3 from '../../Images/Regalos/ImgRegalo3.jpeg';
import ImgRegalo4 from '../../Images/Regalos/ImgRegalo4.jpeg';
import ImgRegalo5 from '../../Images/Regalos/ImgRegalo5.jpeg';

const Regalos = () => {
  // Desplazar hacia la parte superior cuando el componente se monte
  useEffect(() => {
    window.scrollTo({
      top: 0, // Desplazar hacia arriba de la página
      behavior: 'smooth' // Añadir desplazamiento suave
    });
  }, []);

  const productosRegalos = [
    {
      id: 1,
      nombre: 'Perfume Floral Elegante',
      imagen: ImgRegalo1
    },
    {
      id: 2,
      nombre: 'Set de Cuidado Corporal',
      imagen: ImgRegalo2
    },
    {
      id: 3,
      nombre: 'Vela Aromática de Lavanda',
      imagen: ImgRegalo3
    },
    {
      id: 4,
      nombre: 'Aceite Esencial de Rosas',
      imagen: ImgRegalo4
    },
    {
      id: 5,
      nombre: 'Set de Baño Relajante',
      imagen: ImgRegalo5
    }
  ];

  const openWhatsApp = (productoNombre) => {
    const message = `¡Hola! Estoy interesado en el regalo: ${productoNombre}. ¿Me podrías dar más información?`;
    const phoneNumber = '3865529067';
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, '_blank');
  };

  return (
    <section className="py-20 px-6 bg-lightgray">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-[#d4af37] text-4xl sm:text-6xl font-bold mb-6 font-bignoodle tracking-wide drop-shadow-md">
          Regalos Especiales para Cada Persona
        </h2>
        <p className="font-messina text-lg font-regular text-black max-w-3xl mx-auto">
          Encuentra el detalle perfecto para tus seres queridos en nuestra
          perfumería. Elige entre fragancias delicadas, productos de cuidado
          personal y mucho más.
        </p>
      </div>

      {/* Galería de productos - Estilo artesanal */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {productosRegalos.map((producto, index) => (
          <div
            key={producto.id}
            className={`${
              index % 3 === 0 ? 'col-span-1 sm:col-span-2' : ''
            } bg-white p-6 rounded-lg shadow-lg hover:shadow-xl cursor-pointer transition duration-300`}
            onClick={() => openWhatsApp(producto.nombre)} // Redirige a WhatsApp al hacer clic
          >
            <div className="w-full flex justify-center items-center">
              <img
                src={producto.imagen}
                alt={producto.nombre}
                className="max-h-[500px] w-auto object-cover rounded-md"
              />
            </div>

            <h3 className="text-xl font-medium text-gray-800 text-center">
              {/* {producto.nombre} */}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Regalos;
