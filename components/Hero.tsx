import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-between pt-8 pb-12 border-b border-brand-gray/10 bg-brand-navy overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-30" 
          style={{
            backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                              linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
            backgroundSize: '80px 80px',
            maskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)'
          }}
        />
        
        {/* Ambient Glow */}
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-brand-cyan/10 rounded-full blur-[120px] pointer-events-none" />
      </div>

      {/* Navigation / Header Area */}
      <div className="relative z-10 px-6 md:px-12 lg:px-24 flex justify-between items-center h-20">
        <div className="flex items-center gap-3">
           <div className="w-8 h-8 border border-brand-cyan/50 flex items-center justify-center bg-brand-navy/50 backdrop-blur-sm">
              <div className="w-2 h-2 bg-brand-cyan rounded-full shadow-[0_0_10px_rgba(0,209,255,0.8)]"></div>
           </div>
           <span className="text-sm font-bold tracking-[0.2em] text-white">TALRIC LABS</span>
        </div>
        
        <div className="hidden md:flex items-center gap-6 text-xs font-mono text-brand-gray/50 uppercase tracking-widest">
          <span>San Francisco</span>
          <span className="w-1 h-1 bg-brand-gray/30 rounded-full"></span>
          <span>Est. 2024</span>
        </div>
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 px-6 md:px-12 lg:px-24 flex-1 flex flex-col justify-center items-start">
        <div className="max-w-6xl w-full">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-cyan/20 bg-brand-cyan/5 text-brand-cyan text-xs font-mono tracking-wider mb-8 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-pulse"></span>
            VENTURE STUDIO v1.0
          </div>

          <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-bold tracking-tighter text-white leading-[0.9]">
            ARCHITECTS
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-brand-gray/50 to-brand-gray/10">
              OF VENTURE<span className="text-brand-cyan">.</span>
            </span>
          </h1>
          
          <div className="mt-12 md:mt-16 w-full h-[1px] bg-gradient-to-r from-brand-cyan/30 via-brand-gray/10 to-transparent"></div>
        </div>
      </div>

      {/* Footer / Description Area */}
      <div className="relative z-10 px-6 md:px-12 lg:px-24 grid grid-cols-1 md:grid-cols-12 gap-12 items-end">
        <div className="col-span-1 md:col-span-5">
          <p className="text-lg text-brand-gray/80 font-light leading-relaxed max-w-lg">
            We systematically build, launch, and scale category-defining companies. 
            <span className="text-brand-cyan"> From thesis to exit.</span>
          </p>
        </div>
        
        <div className="col-span-1 md:col-span-7 flex flex-col md:flex-row justify-between items-end gap-6">
           <div className="hidden lg:block text-brand-gray/30 text-xs font-mono">
              SCROLL TO EXPLORE
           </div>
           
           <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full border border-brand-gray/10 flex items-center justify-center hover:border-brand-cyan/50 hover:bg-brand-cyan/5 transition-all cursor-pointer group">
                 <ArrowDown className="text-brand-gray group-hover:text-brand-cyan w-5 h-5 transition-colors" />
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;