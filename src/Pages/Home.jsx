import React from 'react';
import Hero from '../Components/Hero';
import FeaturedProducts from './FeaturedProducts';
import InfoSection from '../Components/InfoSection';
import ProductosDestacados from '../Components/ProductosDestacados/ProductosDestacados';
import ContactForm from '../Components/ContactForm';
import Testimonials from '../Components/Testimonials';

const Home = () => {
  return (
    <div>
      <Hero />
      <InfoSection />
      <div className="-mt-36">
        {' '}
        <FeaturedProducts />{' '}
      </div>
      <ProductosDestacados></ProductosDestacados>
      <ContactForm />
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
