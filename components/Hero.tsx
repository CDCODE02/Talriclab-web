import React, { useState, useEffect, useRef } from 'react';
import { ChevronRight, Menu, X } from 'lucide-react';

const Hero: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isLoaded, setIsLoaded] = useState(false);

  // Refs for parallax elements
  const gridRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Trigger animation after mount
    const timer = setTimeout(() => setIsLoaded(true), 100);

    const handleScroll = () => {
      const scrollPos = window.scrollY;

      // Parallax effects
      if (gridRef.current) {
        gridRef.current.style.transform = `translateY(${scrollPos * 0.25}px)`;
      }
      if (glowRef.current) {
        // Maintain the horizontal centering (-50%) while translating vertically
        glowRef.current.style.transform = `translate(-50%, ${scrollPos * 0.15}px)`;
      }
    };

    // Intersection Observer for Active Link highlighting
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-45% 0px -45% 0px' } 
    );

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
      clearTimeout(timer);
    };
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Methodology', href: '#methodology' },
    { name: 'Focus', href: '#focus' },
    { name: 'Contact', href: '#contact' },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center pt-20 pb-12 border-b border-white/5 bg-brand-navy overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Subtle Grid */}
        <div 
          ref={gridRef}
          className="absolute inset-0 opacity-20 will-change-transform" 
          style={{
            backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
                              linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
            maskImage: 'radial-gradient(circle at center, black, transparent 80%)',
            WebkitMaskImage: 'radial-gradient(circle at center, black, transparent 80%)'
          }}
        />
        
        {/* Top Spotlight Glow */}
        <div 
          ref={glowRef}
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-brand-cyan/20 rounded-full blur-[120px] opacity-40 mix-blend-screen will-change-transform" 
        />
      </div>

      {/* Navigation / Header Area - Changed from fixed to absolute */}
      <div 
        className="absolute top-0 left-0 w-full z-50 px-6 md:px-12 flex justify-between items-center py-8 bg-transparent"
      >
        <a href="#home" className="flex items-center gap-3 group relative z-50">
           <img 
             src="https://i.ibb.co/MkztCDnK/talriclablogo.png" 
             alt="Talric Labs Logo" 
             className="w-auto object-contain rounded-md h-12 transition-all duration-300"
           />
           <span className="font-bold tracking-wide text-white transition-all duration-300 group-hover:text-brand-cyan text-xl">
             Talric
           </span>
        </a>
        
        {/* Centered Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a 
                key={link.name} 
                href={link.href} 
                className={`group relative tracking-wide transition-all duration-300 ${
                  isActive 
                    ? 'text-base font-bold text-white' 
                    : 'text-sm font-medium text-brand-gray/70 hover:text-white'
                }`}
              >
                {link.name}
                <span className={`absolute -bottom-1.5 left-0 w-full bg-brand-cyan rounded-full transition-all duration-300 origin-left ${
                  isActive 
                    ? 'scale-x-100 h-[3px] shadow-[0_0_8px_rgba(0,209,255,0.5)]' 
                    : 'scale-x-0 h-0.5 group-hover:scale-x-100'
                }`} />
              </a>
            );
          })}
        </nav>

        {/* Right Side Actions */}
        <div className="flex items-center gap-4 relative z-50">
            <a href="#contact" className="hidden md:block text-xs font-mono text-brand-navy px-5 py-2 bg-white hover:bg-brand-cyan transition-colors rounded-sm font-bold tracking-wider">
                GET IN TOUCH
            </a>

            {/* Mobile Hamburger */}
            <button 
            className="md:hidden text-white hover:text-brand-cyan transition-colors"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            >
            {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-brand-navy/95 backdrop-blur-lg flex flex-col items-center justify-center animate-in fade-in duration-200">
          <nav className="flex flex-col items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsMenuOpen(false)}
                className="text-2xl font-light text-white hover:text-brand-cyan transition-colors"
              >
                {link.name}
              </a>
            ))}
            {/* Mobile CTA */}
             <a 
               href="#contact"
               onClick={() => setIsMenuOpen(false)}
               className="mt-4 text-sm font-mono text-brand-navy px-8 py-3 bg-white hover:bg-brand-cyan transition-colors rounded-sm font-bold tracking-wider"
             >
                GET IN TOUCH
             </a>
          </nav>
        </div>
      )}

      {/* Main Hero Content */}
      <div className="relative z-10 px-6 max-w-5xl w-full flex flex-col items-center text-center mt-16">
        
        {/* Animated Badge */}
        <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-brand-gray/80 text-xs font-medium backdrop-blur-md mb-8 hover:border-brand-cyan/30 hover:text-brand-cyan transition-all duration-700 ease-out cursor-default ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-cyan opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-cyan"></span>
          </span>
          System Status: Operational
        </div>

        {/* Headline with Staggered Animation */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-[1.1] mb-8">
          <span className={`inline-block transition-all duration-1000 ease-[cubic-bezier(0.2,0.8,0.2,1)] ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Build the
          </span>
          {' '}
          <br className="md:hidden" />
          <span className={`inline-block text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40 transition-all duration-1000 delay-200 ease-[cubic-bezier(0.2,0.8,0.2,1)] ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Future Faster.
          </span>
        </h1>
        
        <p className={`text-lg md:text-xl text-brand-gray/60 max-w-2xl font-light leading-relaxed mb-12 transition-all duration-1000 delay-400 ease-[cubic-bezier(0.2,0.8,0.2,1)] ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          A thesis-driven venture studio architecting category-defining companies. 
          We bridge the gap between <span className="text-brand-cyan">raw ambition</span> and <span className="text-white">proven execution</span>.
        </p>

        {/* CTA Buttons */}
        <div className={`flex flex-col sm:flex-row gap-4 w-full justify-center transition-all duration-1000 delay-500 ease-[cubic-bezier(0.2,0.8,0.2,1)] ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <a href="#contact" className="group relative px-8 py-4 bg-brand-cyan text-brand-navy font-bold text-sm tracking-wide rounded-sm overflow-hidden transition-all hover:bg-white hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]">
             <span className="relative z-10 flex items-center gap-2">
               START BUILDING
               <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
             </span>
          </a>
          
          <a href="#about" className="px-8 py-4 bg-transparent border border-white/10 text-white font-medium text-sm tracking-wide rounded-sm hover:bg-white/5 transition-colors">
             OUR THESIS
          </a>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div className={`absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-50 transition-all duration-1000 delay-700 ${isLoaded ? 'opacity-50 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-brand-gray">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-brand-cyan to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;