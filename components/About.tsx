import React, { useEffect, useRef, useState } from 'react';

const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const text = "Talric Labs is a thesis-driven venture studio. We don't just invest; we co-found. By combining rigorous operational frameworks with deep industry expertise, we de-risk early-stage company building. Our mission is to empower founders to solve the world's hardest problems with clarity and speed.";
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
      className="scroll-mt-32 py-24 px-6 md:px-12 lg:px-24 w-full"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
        <div className="col-span-1 md:col-span-3">
          <h2 
            className={`text-sm font-bold uppercase tracking-[0.2em] text-brand-cyan transition-all duration-700 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            About Us
          </h2>
        </div>
        <div className="col-span-1 md:col-span-9">
          <p className="text-2xl md:text-3xl lg:text-4xl font-light leading-relaxed text-white">
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
      </div>
    </section>
  );
};

export default About;