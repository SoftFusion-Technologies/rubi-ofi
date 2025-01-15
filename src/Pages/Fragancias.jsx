import React, { useEffect, useState } from 'react';
import '../Styles/Productos.css';
import { Link } from 'react-router-dom'; // Importar Link
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import ProductNotFound from '../Components/ProductNotFound';
import { fraganciasPremium } from '../Helpers/Fragancias/fraganciasPremium';
import { fraganciasClasicas } from '../Helpers/Fragancias/fraganciasClasicas';
const Fragancias = () => {
  // Desplazar hacia la parte superior cuando el componente se monte
  useEffect(() => {
    window.scrollTo({
      top: 0, // Desplazar hacia arriba de la página
      behavior: 'smooth' // Añadir desplazamiento suave
    });
  }, []);

  // Estado para manejar la búsqueda
  const [searchQuery, setSearchQuery] = useState('');

  const handleWhatsAppClick = (nombre, precio) => {
    const phoneNumber = '3863531891'; // Número de WhatsApp
    const message = `Hola, estoy interesado en el producto: ${nombre}, que tiene un precio de ${precio}.`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, '_blank');
  };

  // Filtrar productos basados en el término de búsqueda
  const filteredProductosPremium = fraganciasPremium.filter((producto) =>
    producto.nombre.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredProductos = fraganciasClasicas.filter((producto) =>
    producto.nombre.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="productos-container py-16 px-4 sm:px-8">
      <h1 className="text-3xl font-bold text-center sm:text-5xl mb-8 font-bignoodle">
        Nuestros Productos
      </h1>
      {/* Campo de búsqueda */}
      <div className="relative mb-8">
        {/* Input con lupa */}
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Buscar productos..."
          className="p-2 border border-gray-300 rounded-lg w-full sm:w-1/3 mx-auto pl-10"
        />
        <FontAwesomeIcon
          icon={faSearch}
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
        />
      </div>
      {filteredProductosPremium.some(
        (producto) => producto.categoria === 'premium'
      ) && (
        <h1 className="text-3xl font-bold text-left sm:text-5xl mb-8 font-bignoodle">
          FRAGANCIAS PREMIUM
        </h1>
      )}
      {/* Grid de productos premium, se adapta a 3 o 4 por fila */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredProductosPremium.map((producto) => (
          <Link
            key={producto.id} // Usamos el id como clave única
            to={`/product/${producto.id}/${encodeURIComponent(
              producto.nombre
            )}`} // Ruta dinámica con id y nombre del producto
            className="producto-card border border-gray-300 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition"
          >
            <img
              src={producto.imagen}
              alt={producto.nombre}
              className="w-full h-64 object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="text-xl font-semibold text-black">
                {producto.nombre}
              </h3>
              <p className="text-lg text-gray-600">{producto.precio}</p>
              <p className="uppercase text-xs mt-2 mb-2">
                {producto.newPrecio}
              </p>

              <butonn
                className="cursor-pointer font-bignoodle text-2xl"
                onClick={() =>
                  handleWhatsAppClick(producto.nombre, producto.precio)
                }
              >
                COMPRAR
              </butonn>
            </div>
          </Link>
        ))}
      </div>
      {filteredProductos.some(
        (producto) => producto.categoria === 'simple'
      ) && (
        <h1 className="mt-10 text-3xl font-bold text-left sm:text-5xl mb-8 font-bignoodle">
          FRAGANCIAS CLASICAS
        </h1>
      )}
      {/* Grid de productos, se adapta a 3 o 4 por fila */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredProductos.map((producto) => (
          <div
            key={producto.id}
            className="producto-card border border-gray-300 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition"
            onClick={() =>
              handleWhatsAppClick(producto.nombre, producto.precio)
            }
          >
            <img
              src={producto.imagen}
              alt={producto.nombre}
              className="w-full h-64 object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="text-xl font-semibold text-black">
                {producto.nombre}
              </h3>
              <p className="text-lg text-gray-600">{producto.precio}</p>
              <p className="uppercase text-xs mt-2 mb-2">
                {producto.newPrecio}
              </p>

              <butonn
                className="cursor-pointer font-bignoodle text-2xl"
                onClick={() =>
                  handleWhatsAppClick(producto.nombre, producto.precio)
                }
              >
                COMPRAR
              </butonn>
            </div>
          </div>
        ))}
      </div>

      {/* Componente de "No se encontraron productos" */}
      {filteredProductos.length === 0 &&
        filteredProductosPremium.length === 0 && (
          <div className="-mt-56">
            <ProductNotFound />
          </div>
        )}
    </div>
  );
};

export default Fragancias;
