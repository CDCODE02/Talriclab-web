import React, { useRef } from 'react';
import { Twitter, Linkedin, Mail } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Footer: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  // Parallax transforms
  const y1 = useTransform(scrollYProgress, [0, 1], [-100, 0]);
  const y2 = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.1, 0.15]);

  return (
    <footer ref={containerRef} className="relative py-16 px-6 md:px-12 lg:px-24 border-t border-white/5 bg-transparent overflow-hidden">
      
      {/* Parallax Background Elements */}
      <motion.div 
        style={{ y: y1, opacity }}
        className="absolute -top-[200px] -left-[100px] w-[500px] h-[500px] bg-brand-cyan rounded-full blur-[120px] pointer-events-none z-0"
      />
      
      <motion.div 
        style={{ y: y2, opacity }}
        className="absolute -bottom-[200px] -right-[100px] w-[600px] h-[600px] bg-blue-900 rounded-full blur-[140px] pointer-events-none z-0"
      />

      <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Brand */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-2">
          <h3 className="text-xl font-bold text-white tracking-tight">Talric Labs</h3>
          <p className="text-sm text-brand-gray/50 font-light max-w-xs">Turning ideas into startups that solve real-world problems.</p>
        </div>

        {/* Contact/Socials */}
        <div className="flex items-center gap-8">
          <a href="#" className="group p-2 rounded-full hover:bg-white/5 transition-all duration-300" aria-label="Twitter">
            <Twitter className="w-5 h-5 text-brand-gray/50 group-hover:text-brand-cyan group-hover:scale-110 transition-all" />
          </a>
          <a href="#" className="group p-2 rounded-full hover:bg-white/5 transition-all duration-300" aria-label="LinkedIn">
            <Linkedin className="w-5 h-5 text-brand-gray/50 group-hover:text-brand-cyan group-hover:scale-110 transition-all" />
          </a>
          <a href="mailto:talriclab@gmail.com" className="group p-2 rounded-full hover:bg-white/5 transition-all duration-300" aria-label="Email">
            <Mail className="w-5 h-5 text-brand-gray/50 group-hover:text-brand-cyan group-hover:scale-110 transition-all" />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-xs text-brand-gray/30 font-mono tracking-wide">
          © 2026 Talric Labs. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;