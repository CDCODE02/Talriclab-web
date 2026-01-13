import React from 'react';
import { Twitter, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-6 md:px-12 lg:px-24 border-t border-brand-gray/10 bg-brand-navy">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Brand */}
        <div className="flex items-center gap-2">
          <img 
            src="https://i.ibb.co/xqqK9L2D/talriclogo.png" 
            alt="Talric Labs Logo" 
            className="h-8 w-auto object-contain rounded-sm"
          />
          <span className="text-lg font-bold tracking-wider text-white">TALRIC LABS</span>
        </div>

        {/* Contact/Socials */}
        <div className="flex items-center gap-8">
          <a href="#" className="text-brand-gray/50 hover:text-brand-cyan transition-colors" aria-label="Twitter">
            <Twitter className="w-5 h-5" />
          </a>
          <a href="#" className="text-brand-gray/50 hover:text-brand-cyan transition-colors" aria-label="LinkedIn">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="mailto:hello@talriclabs.com" className="text-brand-gray/50 hover:text-brand-cyan transition-colors" aria-label="Email">
            <Mail className="w-5 h-5" />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-xs text-brand-gray/30 font-mono">
          © {new Date().getFullYear()} Talric Labs. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;