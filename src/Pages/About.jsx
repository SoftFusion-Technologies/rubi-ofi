import React from 'react';
import '../Styles/About.css';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/contacto', { state: { scrollTo: 'mapas' } });
  };

  return (
    <div className="about-container">
      <h1 className="text-center text-[#d4af37] text-4xl sm:text-6xl font-bold mb-6 font-bignoodle tracking-wide drop-shadow-md">
        QUIÉNES SOMOS
      </h1>
      <section className="about-content ">
        <h2 className="font-bignoodle">Sobre Rubí</h2>
        <p>
          Bienvenidos a <strong>Rubí</strong>, una perfumería ubicada en
          Aguilares, Tucumán, dedicada a ofrecer las mejores fragancias y
          productos de cuidado personal. En Rubí, seleccionamos cada producto
          pensando en satisfacer los gustos y necesidades de nuestros clientes,
          brindando una experiencia única en cada visita. Ya sea que busques un
          perfume para una ocasión especial, un regalo inolvidable o productos
          para tu rutina diaria, tenemos todo lo que necesitas para resaltar tu
          esencia.
        </p>
        <h2 className="font-bignoodle">Nuestra Misión</h2>
        <p>
          En <strong>Rubí</strong>, nuestra misión es ser el destino favorito
          para quienes buscan calidad y exclusividad en fragancias y cuidado
          personal. Estamos comprometidos a brindar una atención personalizada y
          asesoramiento experto para ayudar a nuestros clientes a encontrar el
          producto perfecto que refleje su estilo y personalidad. Creemos que la
          belleza y el bienestar van de la mano, y trabajamos para hacer que
          cada visita sea inolvidable.
        </p>
        <h2 className="font-bignoodle">Nuestra Visión</h2>
        <p>
          Aspiramos a ser la perfumería de referencia en Aguilares y la región,
          reconocida por nuestra dedicación a la calidad y el excelente servicio
          al cliente. En <strong>Rubí</strong>, nos esforzamos por inspirar a
          nuestros clientes a través de nuestras fragancias y productos,
          ayudándoles a expresar su mejor versión en cada momento de su vida.
        </p>
      </section>
    </div>
  );
};

export default About;
