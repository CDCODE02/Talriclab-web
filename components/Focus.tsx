import React from 'react';
import { Cpu, Globe, Layers } from 'lucide-react';
import AnimatedShaderBackground from './ui/animated-shader-background';

const FocusCard: React.FC<{ title: string; tags: string[]; icon: React.ElementType }> = ({ title, tags, icon: Icon }) => (
  <div className="group relative bg-brand-navy border border-white/10 p-8 h-full rounded-xl overflow-hidden hover:border-brand-cyan/30 transition-all duration-500">
    {/* Hover Glow Effect */}
    <div className="absolute -inset-px bg-gradient-to-b from-brand-cyan/20 to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none" />
    
    <div className="relative z-10 flex flex-col h-full justify-between">
      <div>
        <div className="w-12 h-12 bg-white/5 rounded-lg border border-white/10 flex items-center justify-center mb-6 text-brand-cyan group-hover:scale-110 transition-transform duration-500">
           <Icon className="w-6 h-6" />
        </div>
        <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
      </div>
      
      <div className="flex flex-wrap gap-2 mt-8">
        {tags.map((tag) => (
          <span key={tag} className="text-xs font-mono text-brand-gray/60 border border-white/5 bg-white/5 px-2 py-1 rounded hover:bg-brand-cyan/10 hover:text-brand-cyan hover:border-brand-cyan/20 transition-colors cursor-default">
            {tag}
          </span>
        ))}
      </div>
    </div>
  </div>
);

const Focus: React.FC = () => {
  return (
    <section id="focus" className="scroll-mt-32 py-32 px-6 md:px-12 lg:px-24 w-full bg-brand-navy relative overflow-hidden">
      
      {/* Background Shader */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none mix-blend-screen">
        <AnimatedShaderBackground />
      </div>

      {/* Decorative Background Blob */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-cyan/5 rounded-full blur-[100px] pointer-events-none z-0" />

      <div className="relative z-10 mb-16 text-center md:text-left md:flex md:justify-between md:items-end">
        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-brand-cyan mb-4">Focus Areas</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white max-w-2xl">
            Where we deploy capital & code.
          </h3>
        </div>
        <p className="text-brand-gray/50 max-w-md mt-6 md:mt-0 text-sm leading-relaxed">
           Our studio focuses on high-leverage opportunities where technical innovation meets scalable unit economics.
        </p>
      </div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        <FocusCard 
          icon={Cpu}
          title="DeepTech & AI"
          tags={['Generative Models', 'Automation', 'Infrastructure']}
        />
        <FocusCard 
          icon={Globe}
          title="Next-Gen FinTech"
          tags={['DeFi Protocols', 'Payments', 'Embedded Finance']}
        />
        <FocusCard 
          icon={Layers}
          title="Enterprise SaaS"
          tags={['Vertical Software', 'B2B Marketplaces', 'Workflow Ops']}
        />
      </div>
    </section>
  );
};

export default Focus;