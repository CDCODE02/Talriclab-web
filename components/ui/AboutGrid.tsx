import React from "react";
import { Zap, Palette, Puzzle, BookOpen, Box, Brain } from "lucide-react";

export default function AboutGrid() {
    return (
        <div className="relative w-full pt-12">
            {/* Background Blob */}
            <div className="w-[520px] h-[520px] -top-80 left-1/2 -translate-x-1/2 rounded-full absolute blur-[120px] -z-10 bg-brand-cyan/5 pointer-events-none"></div>
            
            <div className="relative w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                <div>
                    <div className="w-10 h-10 p-2 bg-white/5 border border-white/10 rounded-md flex items-center justify-center">
                        <Zap className="w-5 h-5 text-brand-cyan" />
                    </div>
                    <div className="mt-4 space-y-2">
                        <h3 className="text-base font-bold text-white">Rapid Execution</h3>
                        <p className="text-sm text-brand-gray/60 leading-relaxed">Built with speed — we go from zero to one in record time using proven frameworks.</p>
                    </div>
                </div>
                <div>
                    <div className="w-10 h-10 p-2 bg-white/5 border border-white/10 rounded-md flex items-center justify-center">
                        <Palette className="w-5 h-5 text-brand-cyan" />
                    </div>
                    <div className="mt-4 space-y-2">
                        <h3 className="text-base font-bold text-white">Product Excellence</h3>
                        <p className="text-sm text-brand-gray/60 leading-relaxed">Pixel-perfect interfaces and user-centric design that build trust from day one.</p>
                    </div>
                </div>
                <div>
                    <div className="w-10 h-10 p-2 bg-white/5 border border-white/10 rounded-md flex items-center justify-center">
                        <Puzzle className="w-5 h-5 text-brand-cyan" />
                    </div>
                    <div className="mt-4 space-y-2">
                        <h3 className="text-base font-bold text-white">Strategic Alignment</h3>
                        <p className="text-sm text-brand-gray/60 leading-relaxed">Deep industry fit ensuring product-market resonance before a single line of code.</p>
                    </div>
                </div>
                <div>
                    <div className="w-10 h-10 p-2 bg-white/5 border border-white/10 rounded-md flex items-center justify-center">
                        <BookOpen className="w-5 h-5 text-brand-cyan" />
                    </div>
                    <div className="mt-4 space-y-2">
                        <h3 className="text-base font-bold text-white">Proven Playbooks</h3>
                        <p className="text-sm text-brand-gray/60 leading-relaxed">Leveraging decades of operational experience to avoid common startup pitfalls.</p>
                    </div>
                </div>
                <div>
                    <div className="w-10 h-10 p-2 bg-white/5 border border-white/10 rounded-md flex items-center justify-center">
                        <Box className="w-5 h-5 text-brand-cyan" />
                    </div>
                    <div className="mt-4 space-y-2">
                        <h3 className="text-base font-bold text-white">Scalable Systems</h3>
                        <p className="text-sm text-brand-gray/60 leading-relaxed">Architectures designed to handle enterprise scale and growth without breaking.</p>
                    </div>
                </div>
                <div>
                    <div className="w-10 h-10 p-2 bg-white/5 border border-white/10 rounded-md flex items-center justify-center">
                        <Brain className="w-5 h-5 text-brand-cyan" />
                    </div>
                    <div className="mt-4 space-y-2">
                        <h3 className="text-base font-bold text-white">Deep Expertise</h3>
                        <p className="text-sm text-brand-gray/60 leading-relaxed">Partnering with world-class subject matter experts across key verticals.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};