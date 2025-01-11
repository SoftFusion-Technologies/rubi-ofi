import React from 'react';
import Hero from '../Components/Hero';
import FeaturedProducts from './FeaturedProducts';
import InfoSection from '../Components/InfoSection';
// import ContactForm from '../Components/ContactForm';
const Home = () => {
  return (
    <div>
      <Hero />
      <InfoSection />

      <div className="-mt-36">
        {' '}
        <FeaturedProducts />{' '}
      </div>
      {/* <ContactForm /> */}
    </div>
  );
};

export default Home;
