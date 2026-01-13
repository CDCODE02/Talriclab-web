import React from 'react';

const FocusCard: React.FC<{ title: string; tags: string[] }> = ({ title, tags }) => (
  <div className="bg-brand-navy-light border border-brand-gray/5 p-8 md:p-10 h-full hover:border-brand-cyan/30 transition-all duration-300">
    <h3 className="text-2xl font-semibold text-white mb-8">{title}</h3>
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span key={tag} className="text-sm font-mono text-brand-cyan bg-brand-cyan/10 px-3 py-1 rounded-sm">
          {tag}
        </span>
      ))}
    </div>
  </div>
);

const Focus: React.FC = () => {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 w-full">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
        <div className="col-span-1 md:col-span-3">
          <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-brand-cyan">Focus Areas</h2>
        </div>
        <div className="col-span-1 md:col-span-9">
          <p className="text-xl text-brand-gray/80 max-w-2xl font-light">
            We concentrate our capital and intellectual resources on sectors where technology acts as a fundamental force multiplier.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <FocusCard 
          title="DeepTech & AI"
          tags={['Generative Models', 'Automation', 'Infrastructure']}
        />
        <FocusCard 
          title="Next-Gen FinTech"
          tags={['DeFi Protocols', 'Payments', 'Embedded Finance']}
        />
        <FocusCard 
          title="Enterprise SaaS"
          tags={['Vertical Software', 'B2B Marketplaces', 'Workflow Ops']}
        />
      </div>
    </section>
  );
};

export default Focus;