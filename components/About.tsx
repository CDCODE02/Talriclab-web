import React, { useEffect, useRef, useState } from 'react';
import AboutGrid from './ui/AboutGrid';

const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const text = "Talric Labs is a venture studio and innovation lab focused on turning vision into execution. We engineer ideas into startups that solve real-world problems by building practical, scalable products across Web2 and Web3. We don’t just generate ideas — we design systems, develop products, and launch startups with clear use cases and measurable impact.";
  const words = text.split(' ');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Only animate once
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -10% 0px" }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="scroll-mt-20 py-24 px-6 md:px-12 lg:px-24 w-full bg-brand-navy border-b border-white/5 overflow-hidden"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* Left Column: Visual */}
        <div className={`relative h-full min-h-[400px] w-full rounded-2xl overflow-hidden transition-all duration-1000 ease-out bg-brand-navy-light/30 border border-white/5 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
          }`}>
            
            {/* Image Container - Contained and Padded */}
            <div className="absolute inset-0 z-0 p-8 flex items-center justify-center">
               <img 
                src="https://i.ibb.co/xKFr9Pr6/talricabout.png"
                alt="Abstract geometric structure representing venture building" 
                className="w-full h-full object-contain hover:scale-105 transition-transform duration-1000 ease-out drop-shadow-2xl"
                loading="lazy"
                decoding="async"
               />
            </div>

            {/* Subtle Gradient Overlay - Adjusted to not obscure image */}
            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 via-transparent to-transparent z-10 pointer-events-none" />
            
            {/* Decorative Border */}
            <div className="absolute inset-0 border border-white/5 rounded-2xl z-20 pointer-events-none" />
            <div className="absolute -bottom-1 -right-1 w-24 h-24 border-r-2 border-b-2 border-brand-cyan/30 rounded-br-2xl z-20 pointer-events-none" />
            <div className="absolute -top-1 -left-1 w-24 h-24 border-t-2 border-l-2 border-brand-cyan/30 rounded-tl-2xl z-20 pointer-events-none" />
        </div>

        {/* Right Column: Content */}
        <div className="flex flex-col justify-center">
          <h2 
            className={`text-sm font-bold uppercase tracking-[0.2em] text-brand-cyan mb-6 flex items-center gap-3 transition-all duration-700 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <span className="w-8 h-[1px] bg-brand-cyan"></span>
            About Us
          </h2>

          <div className="mb-10">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
              Architecting the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">Next Generation.</span>
            </h3>
            
            <p className="text-lg text-brand-gray/80 font-light leading-relaxed">
              {words.map((word, index) => (
                <React.Fragment key={index}>
                  <span
                    className={`inline-block transition-all duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)] ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
                    style={{ transitionDelay: `${index * 15}ms` }}
                  >
                    {word}
                  </span>
                  {' '}
                </React.Fragment>
              ))}
            </p>
          </div>

          <div className={`transition-all duration-1000 delay-300 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <AboutGrid />
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;