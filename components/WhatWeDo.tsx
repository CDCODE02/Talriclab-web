import React from 'react';
import { Lightbulb, Code2, Rocket } from 'lucide-react';

interface CapabilityProps {
  icon: React.ElementType;
  title: string;
  description: string;
  index: string;
}

const Capability: React.FC<CapabilityProps> = ({ icon: Icon, title, description, index }) => (
  <div className="group border-t border-brand-gray/10 py-12 hover:border-brand-cyan/50 transition-colors duration-500 ease-in-out">
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 items-baseline">
      <div className="col-span-1 md:col-span-1 text-brand-gray/30 font-mono text-sm">
        {index}
      </div>
      <div className="col-span-1 md:col-span-3">
        <div className="flex items-center gap-3 mb-2 md:mb-0">
          <Icon className="w-5 h-5 text-brand-cyan" />
          <h3 className="text-xl font-semibold text-white">{title}</h3>
        </div>
      </div>
      <div className="col-span-1 md:col-span-8">
        <p className="text-brand-gray/70 text-lg leading-relaxed max-w-2xl group-hover:text-brand-gray transition-colors">
          {description}
        </p>
      </div>
    </div>
  </div>
);

const WhatWeDo: React.FC = () => {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 w-full bg-brand-navy-light/20">
      <div className="mb-20">
        <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-brand-cyan">What We Do</h2>
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
          description="Our internal engineering and design teams rapidly prototype and iterate Minimum Viable Products, ensuring technical excellence and product-market fit from day one."
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