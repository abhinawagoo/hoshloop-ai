import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import WhyUs from './components/WhyUs';
import Work from './components/Work';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import BookCall from './components/BookCall';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <Hero />
      <WhyUs />
      <Work />
      <Pricing />
      <Testimonials />
      <FAQ />
      <BookCall />
      <Footer />
    </div>
  );
}

export default App;