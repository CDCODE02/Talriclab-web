import React from 'react';
import { ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 pb-12 border-b border-white/5 bg-brand-navy overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Subtle Grid */}
        <div 
          className="absolute inset-0 opacity-20" 
          style={{
            backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
                              linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
            maskImage: 'radial-gradient(circle at center, black, transparent 80%)',
            WebkitMaskImage: 'radial-gradient(circle at center, black, transparent 80%)'
          }}
        />
        
        {/* Top Spotlight Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-brand-cyan/20 rounded-full blur-[120px] opacity-40 mix-blend-screen" />
      </div>

      {/* Navigation / Header Area */}
      <div className="absolute top-0 left-0 w-full z-50 px-6 md:px-12 py-8 flex justify-between items-center">
        <div className="flex items-center gap-4">
           <img 
             src="https://i.ibb.co/MkztCDnK/talriclablogo.png" 
             alt="Talric Labs Logo" 
             className="h-16 w-auto object-contain rounded-md"
           />
        </div>
        
        <div className="hidden md:flex items-center gap-6">
          <span className="text-xs font-mono text-brand-cyan/80 px-3 py-1 bg-brand-cyan/10 border border-brand-cyan/20 rounded-full">
            BETA ACCESS
          </span>
        </div>
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 px-6 max-w-5xl w-full flex flex-col items-center text-center">
        
        {/* Animated Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-brand-gray/80 text-xs font-medium backdrop-blur-md mb-8 hover:border-brand-cyan/30 hover:text-brand-cyan transition-colors cursor-default">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-cyan opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-cyan"></span>
          </span>
          System Status: Operational
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-[1.1] mb-8">
          Build the <br className="md:hidden" />
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">Future Faster.</span>
        </h1>
        
        <p className="text-lg md:text-xl text-brand-gray/60 max-w-2xl font-light leading-relaxed mb-12">
          A thesis-driven venture studio architecting category-defining companies. 
          We bridge the gap between <span className="text-brand-cyan">raw ambition</span> and <span className="text-white">proven execution</span>.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
          <button className="group relative px-8 py-4 bg-brand-cyan text-brand-navy font-bold text-sm tracking-wide rounded-sm overflow-hidden transition-all hover:bg-white hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]">
             <span className="relative z-10 flex items-center gap-2">
               START BUILDING
               <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
             </span>
          </button>
          
          <button className="px-8 py-4 bg-transparent border border-white/10 text-white font-medium text-sm tracking-wide rounded-sm hover:bg-white/5 transition-colors">
             OUR THESIS
          </button>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-50">
        <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-brand-gray">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-brand-cyan to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;