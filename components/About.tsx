import React from 'react';

const About: React.FC = () => {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 w-full">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
        <div className="col-span-1 md:col-span-3">
          <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-brand-cyan">About Us</h2>
        </div>
        <div className="col-span-1 md:col-span-9">
          <p className="text-2xl md:text-3xl lg:text-4xl font-light leading-relaxed text-white">
            Talric Labs is a thesis-driven venture studio. We don't just invest; we co-found. 
            By combining rigorous operational frameworks with deep industry expertise, we de-risk early-stage company building. 
            Our mission is to empower founders to solve the world's hardest problems with clarity and speed.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;