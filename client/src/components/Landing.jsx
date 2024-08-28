import React from 'react';
import Hero from '../components/Hero';
import Languages from '../components/Languages';
import Service from '../components/Service';
import Footer from '../components/Footer';

const Landing = () => {
  return (
    <div>
      <Hero />
      <Languages />
      <Service />
      <Footer />
    </div>
  );
}

export default Landing;
