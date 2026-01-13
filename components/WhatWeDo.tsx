import React from 'react';
import { Lightbulb, Code2, Rocket, ArrowRight } from 'lucide-react';

interface CapabilityProps {
  icon: React.ElementType;
  title: string;
  description: string;
  index: string;
}

const Capability: React.FC<CapabilityProps> = ({ icon: Icon, title, description, index }) => (
  <div className="group relative border-t border-white/10 py-16 hover:bg-white/[0.02] transition-colors duration-300">
    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
      
      {/* Index Number */}
      <div className="col-span-1 md:col-span-2">
        <span className="font-mono text-sm text-brand-cyan/50 group-hover:text-brand-cyan transition-colors">
          {index}
        </span>
      </div>

      {/* Title & Icon */}
      <div className="col-span-1 md:col-span-4 flex items-center gap-4">
        <div className="p-2 rounded-md bg-white/5 text-brand-gray group-hover:text-white group-hover:bg-brand-cyan/10 transition-all">
          <Icon className="w-5 h-5" />
        </div>
        <h3 className="text-2xl font-bold text-white tracking-tight">{title}</h3>
      </div>

      {/* Description */}
      <div className="col-span-1 md:col-span-5">
        <p className="text-brand-gray/60 text-lg leading-relaxed group-hover:text-brand-gray/90 transition-colors">
          {description}
        </p>
      </div>

      {/* Action Arrow */}
      <div className="hidden md:flex col-span-1 justify-end opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-[-10px] group-hover:translate-x-0 duration-300">
         <ArrowRight className="text-brand-cyan w-6 h-6" />
      </div>

    </div>
  </div>
);

const WhatWeDo: React.FC = () => {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 w-full bg-brand-navy relative">
      <div className="mb-20">
        <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-brand-cyan">Methodology</h2>
        <h3 className="mt-4 text-3xl font-light text-white">How we build.</h3>
      </div>

      <div className="flex flex-col">
        <Capability 
          index="01"
          icon={Lightbulb}
          title="Thesis & Ideation"
          description="We identify market inefficiencies and validate opportunities through rigorous data analysis and expert networks before a single line of code is written."
        />
        <Capability 
          index="02"
          icon={Code2}
          title="Product & Build"
          description="Our internal engineering and design teams rapidly prototype and iterate Minimum Viable Products, ensuring technical excellence and product-market fit."
        />
        <Capability 
          index="03"
          icon={Rocket}
          title="Scale & Growth"
          description="We provide the operational scaffolding—legal, finance, HR, and growth marketing—allowing founders to focus purely on execution and customer acquisition."
        />
      </div>
    </section>
  );
};

export default WhatWeDo;