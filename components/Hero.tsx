import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex flex-col px-6 md:px-12 lg:px-24 pt-12">
      {/* Logo Area */}
      <div className="w-full flex justify-start items-center mb-24 md:mb-32">
        <div className="flex items-center gap-2">
           <div className="w-8 h-8 border-2 border-brand-cyan rotate-45 flex items-center justify-center">
              <div className="w-2 h-2 bg-brand-cyan rounded-full"></div>
           </div>
           <span className="text-xl font-bold tracking-wider text-white">TALRIC LABS</span>
        </div>
      </div>

      {/* Hero Content */}
      <div className="flex-1 flex flex-col justify-center max-w-4xl">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold leading-[1.1] tracking-tight mb-8">
          Architects of <br />
          <span className="text-brand-cyan">Venture.</span>
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-brand-gray/80 max-w-2xl font-light leading-relaxed">
          We systematically build, launch, and scale category-defining companies. 
          Bridging the gap between raw ambition and proven execution.
        </p>
      </div>
      
      {/* Visual Decorator Line */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-brand-cyan/20 to-transparent mx-6 md:mx-24 max-w-[calc(100%-3rem)] md:max-w-[calc(100%-12rem)]" />
    </section>
  );
};

export default Hero;