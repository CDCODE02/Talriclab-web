import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn, smoothScrollTo } from "../../lib/utils";
import { ArrowRight } from "lucide-react";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: React.ReactNode;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(false);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-fit fixed top-6 inset-x-0 mx-auto border border-white/10 rounded-full bg-brand-navy/80 backdrop-blur-md shadow-[0px_2px_20px_-1px_rgba(0,0,0,0.5)] z-[5000] pr-2 pl-8 py-2 items-center justify-center space-x-6",
          className
        )}
      >
        {navItems.map((navItem: any, idx: number) => (
          <a
            key={`link=${idx}`}
            href={navItem.link}
            onClick={(e) => smoothScrollTo(e, navItem.link, 100)}
            className={cn(
              "relative items-center flex space-x-1 text-brand-gray/80 hover:text-white transition-colors text-sm font-medium tracking-wide"
            )}
          >
            <span className="block sm:hidden">{navItem.icon}</span>
            <span className="hidden sm:block">{navItem.name}</span>
          </a>
        ))}
        
        <a 
          href="#contact" 
          onClick={(e) => smoothScrollTo(e, '#contact', 100)}
          className="group relative flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 overflow-hidden transition-all duration-300 hover:border-brand-cyan/50 hover:shadow-[0_0_20px_rgba(0,209,255,0.15)] active:scale-95"
        >
          {/* Background Gradient Hover */}
          <div className="absolute inset-0 bg-gradient-to-r from-brand-cyan/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out" />
          
          <span className="relative z-10 text-xs font-bold uppercase tracking-widest text-white group-hover:text-brand-cyan transition-colors duration-300">
            Get in Touch
          </span>
          
          <ArrowRight className="w-3.5 h-3.5 text-brand-cyan relative z-10 transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300" />
        </a>
      </motion.div>
    </AnimatePresence>
  );
};