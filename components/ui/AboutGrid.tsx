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
                        <h3 className="text-base font-bold text-white group-hover:text-brand-cyan transition-colors">Execution First</h3>
                        <p className="text-sm text-brand-gray/60 leading-relaxed">We move from idea to working product quickly with clear execution paths.</p>
                    </div>
                </div>
                
                <div className="flex gap-4 items-start group">
                    <div className="shrink-0 w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center group-hover:border-brand-cyan/30 group-hover:bg-brand-cyan/5 transition-all duration-300">
                        <Palette className="w-5 h-5 text-brand-cyan" />
                    </div>
                    <div className="space-y-2">
                        <h3 className="text-base font-bold text-white group-hover:text-brand-cyan transition-colors">Product Thinking</h3>
                        <p className="text-sm text-brand-gray/60 leading-relaxed">We build practical, user focused products designed for real world use.</p>
                    </div>
                </div>

                <div className="flex gap-4 items-start group">
                    <div className="shrink-0 w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center group-hover:border-brand-cyan/30 group-hover:bg-brand-cyan/5 transition-all duration-300">
                        <Puzzle className="w-5 h-5 text-brand-cyan" />
                    </div>
                    <div className="space-y-2">
                        <h3 className="text-base font-bold text-white group-hover:text-brand-cyan transition-colors">System Design</h3>
                        <p className="text-sm text-brand-gray/60 leading-relaxed">We design scalable systems that support long term growth and adoption.</p>
                    </div>
                </div>

                <div className="flex gap-4 items-start group">
                    <div className="shrink-0 w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center group-hover:border-brand-cyan/30 group-hover:bg-brand-cyan/5 transition-all duration-300">
                        <BookOpen className="w-5 h-5 text-brand-cyan" />
                    </div>
                    <div className="space-y-2">
                        <h3 className="text-base font-bold text-white group-hover:text-brand-cyan transition-colors">Validation Driven</h3>
                        <p className="text-sm text-brand-gray/60 leading-relaxed">We test ideas through hackathons, grants, pilots, and real world deployment.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};