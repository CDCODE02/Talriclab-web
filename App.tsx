import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import WhatWeDo from './components/WhatWeDo';
import Focus from './components/Focus';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import { FloatingNav } from './components/ui/floating-navbar';
import { Home, Info, Layers, Target, Mail } from 'lucide-react';

const App: React.FC = () => {
  const navItems = [
    { name: 'Home', link: '#home', icon: <Home className="w-4 h-4 text-brand-gray" /> },
    { name: 'About', link: '#about', icon: <Info className="w-4 h-4 text-brand-gray" /> },
    { name: 'Methodology', link: '#methodology', icon: <Layers className="w-4 h-4 text-brand-gray" /> },
    { name: 'Focus', link: '#focus', icon: <Target className="w-4 h-4 text-brand-gray" /> },
    { name: 'Contact', link: '#contact', icon: <Mail className="w-4 h-4 text-brand-gray" /> },
  ];

  return (
    <div className="min-h-screen w-full bg-brand-navy text-brand-gray font-sans selection:bg-brand-cyan selection:text-brand-navy overflow-x-hidden">
      <FloatingNav navItems={navItems} />
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