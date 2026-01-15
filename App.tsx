import React, { Suspense, lazy } from 'react';
import Hero from './components/Hero';
import { FloatingNav } from './components/ui/floating-navbar';
import { Home, Info, Eye, Layers, Target, Mail } from 'lucide-react';

// Lazy load heavy components
// Deferring the shader background removes 'three.js' from the critical path
const AnimatedShaderBackground = lazy(() => import('./components/ui/animated-shader-background'));
const About = lazy(() => import('./components/About'));
const Vision = lazy(() => import('./components/Vision'));
const WhatWeDo = lazy(() => import('./components/WhatWeDo'));
const Focus = lazy(() => import('./components/Focus'));
const CallToAction = lazy(() => import('./components/CallToAction'));
const Footer = lazy(() => import('./components/Footer'));

const App: React.FC = () => {
  const navItems = [
    { name: 'Home', link: '#home', icon: <Home className="w-4 h-4 text-brand-gray" /> },
    { name: 'About', link: '#about', icon: <Info className="w-4 h-4 text-brand-gray" /> },
    { name: 'Vision', link: '#vision', icon: <Eye className="w-4 h-4 text-brand-gray" /> },
    { name: 'Methodology', link: '#methodology', icon: <Layers className="w-4 h-4 text-brand-gray" /> },
    { name: 'Focus', link: '#focus', icon: <Target className="w-4 h-4 text-brand-gray" /> },
    { name: 'Contact', link: '#contact', icon: <Mail className="w-4 h-4 text-brand-gray" /> },
  ];

  return (
    <div className="min-h-screen w-full bg-brand-navy text-brand-gray font-sans selection:bg-brand-cyan selection:text-brand-navy overflow-x-hidden relative">
      
      {/* Global Background Layer */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 opacity-20 mix-blend-screen">
           <Suspense fallback={<div className="w-full h-full bg-brand-navy" />}>
              <AnimatedShaderBackground />
           </Suspense>
        </div>
      </div>

      <FloatingNav navItems={navItems} />
      
      <div className="relative z-10">
        <Hero />
        
        {/* Wrap lazy-loaded components in Suspense */}
        <Suspense fallback={<div className="w-full h-96 flex items-center justify-center text-brand-cyan/20">Loading...</div>}>
          <About />
          <Vision />
          <WhatWeDo />
          <Focus />
          <CallToAction />
          <Footer />
        </Suspense>
      </div>
    </div>
  );
};

export default App;