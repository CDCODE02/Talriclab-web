import React from "react";
import { Zap, Palette, Puzzle, BookOpen } from "lucide-react";

export default function AboutGrid() {
    return (
        <div className="w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
                <div className="flex gap-4 items-start group">
                    <div className="shrink-0 w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center group-hover:border-brand-cyan/30 group-hover:bg-brand-cyan/5 transition-all duration-300">
                        <Zap className="w-5 h-5 text-brand-cyan" />
                    </div>
                    <div className="space-y-2">
                        <h3 className="text-base font-bold text-white group-hover:text-brand-cyan transition-colors">Rapid Execution</h3>
                        <p className="text-sm text-brand-gray/60 leading-relaxed">We go from zero to one in record time using proven frameworks.</p>
                    </div>
                </div>
                
                <div className="flex gap-4 items-start group">
                    <div className="shrink-0 w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center group-hover:border-brand-cyan/30 group-hover:bg-brand-cyan/5 transition-all duration-300">
                        <Palette className="w-5 h-5 text-brand-cyan" />
                    </div>
                    <div className="space-y-2">
                        <h3 className="text-base font-bold text-white group-hover:text-brand-cyan transition-colors">Product Excellence</h3>
                        <p className="text-sm text-brand-gray/60 leading-relaxed">Pixel-perfect interfaces and user-centric design that build trust.</p>
                    </div>
                </div>

                <div className="flex gap-4 items-start group">
                    <div className="shrink-0 w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center group-hover:border-brand-cyan/30 group-hover:bg-brand-cyan/5 transition-all duration-300">
                        <Puzzle className="w-5 h-5 text-brand-cyan" />
                    </div>
                    <div className="space-y-2">
                        <h3 className="text-base font-bold text-white group-hover:text-brand-cyan transition-colors">Strategic Alignment</h3>
                        <p className="text-sm text-brand-gray/60 leading-relaxed">Deep industry fit ensuring product-market resonance early.</p>
                    </div>
                </div>

                <div className="flex gap-4 items-start group">
                    <div className="shrink-0 w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center group-hover:border-brand-cyan/30 group-hover:bg-brand-cyan/5 transition-all duration-300">
                        <BookOpen className="w-5 h-5 text-brand-cyan" />
                    </div>
                    <div className="space-y-2">
                        <h3 className="text-base font-bold text-white group-hover:text-brand-cyan transition-colors">Proven Playbooks</h3>
                        <p className="text-sm text-brand-gray/60 leading-relaxed">Leveraging decades of operational experience to avoid pitfalls.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};