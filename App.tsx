import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import WhatWeDo from './components/WhatWeDo';
import Focus from './components/Focus';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-brand-navy text-brand-gray font-sans selection:bg-brand-cyan selection:text-brand-navy overflow-x-hidden">
      <Hero />
      <About />
      <WhatWeDo />
      <Focus />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default App;