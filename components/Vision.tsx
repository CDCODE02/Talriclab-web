import React from 'react';
import { Rocket, Zap, ShieldCheck, BarChart3, RefreshCw, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const GoalItem: React.FC<{ icon: React.ElementType; title: string; description: string }> = ({ icon: Icon, title, description }) => (
    <div className="flex flex-col items-center text-center space-y-4 p-4 group">
        <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-lg mb-2 group-hover:scale-110 transition-transform duration-300">
            <Icon className="w-8 h-8 text-brand-navy" />
        </div>
        <h4 className="font-bold text-brand-navy text-lg">{title}</h4>
        <p className="text-brand-navy/70 text-sm leading-relaxed max-w-xs">{description}</p>
    </div>
);

const Vision: React.FC = () => {
  return (
    <section id="vision" className="relative w-full bg-brand-navy pt-24 lg:pt-32 pb-0 overflow-hidden">
        {/* Top Content */}
        <div className="container mx-auto px-6 md:px-12 lg:px-24 mb-32 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* Text Content */}
                <div>
                    <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-brand-cyan mb-4">Our Vision</h2>
                    <h3 className="text-4xl md:text-5xl font-bold text-white mb-8">
                        Building the <br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-white">Launchpad for Innovation.</span>
                    </h3>
                    <p className="text-lg text-brand-gray/80 leading-relaxed mb-8">
                        We decided to create a software framework that is both accessible and easy to set up. Our mission is to provide a comprehensive palette of tools with the goal of improving the performance of the founding teams who use our solution.
                    </p>
                    <a 
                        href="#contact" 
                        className="inline-flex items-center gap-2 px-6 py-3 bg-brand-cyan text-brand-navy font-bold rounded-lg hover:bg-white transition-all shadow-[0_0_20px_rgba(0,209,255,0.3)] hover:shadow-[0_0_25px_rgba(255,255,255,0.4)]"
                    >
                        Start Building <ArrowRight className="w-4 h-4" />
                    </a>
                </div>

                {/* Illustration Area */}
                <div className="relative flex justify-center items-center">
                    <div className="relative z-10 w-full max-w-md aspect-square flex items-center justify-center">
                         {/* Rocket Circle Background */}
                         <div className="absolute inset-0 bg-brand-cyan/5 rounded-full blur-3xl transform scale-90"></div>
                         <div className="absolute inset-4 bg-gradient-to-tr from-brand-navy-light to-brand-navy rounded-full border border-white/10 shadow-2xl flex items-center justify-center overflow-hidden">
                            {/* Abstract Stars */}
                            <div className="absolute top-10 left-10 w-2 h-2 bg-white/40 rounded-full animate-pulse"></div>
                            <div className="absolute bottom-20 right-12 w-3 h-3 bg-brand-cyan/40 rounded-full animate-pulse delay-700"></div>
                            <div className="absolute top-20 right-20 w-1.5 h-1.5 bg-white/30 rounded-full animate-pulse delay-300"></div>
                            
                            <motion.div 
                                animate={{ y: [-8, 8, -8] }}
                                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                            >
                                <Rocket className="w-40 h-40 text-brand-cyan drop-shadow-[0_0_15px_rgba(0,209,255,0.5)]" />
                            </motion.div>
                         </div>
                         
                         {/* Floating Tag */}
                         <motion.div 
                            initial={{ x: 20, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="absolute -right-4 top-1/4 bg-brand-navy border border-brand-cyan/30 p-3 rounded-lg shadow-xl backdrop-blur-md"
                         >
                             <div className="flex items-center gap-2">
                                 <div className="w-8 h-8 rounded-full bg-brand-cyan/20 flex items-center justify-center">
                                     <Zap className="w-4 h-4 text-brand-cyan" />
                                 </div>
                                 <div className="text-xs">
                                     <div className="text-white font-bold">Velocity</div>
                                     <div className="text-brand-cyan">Maximized</div>
                                 </div>
                             </div>
                         </motion.div>
                    </div>
                </div>
            </div>
        </div>

        {/* Curved Divider & Bottom Section */}
        <div className="relative w-full">
            {/* SVG Curve - Creates the hill effect */}
            <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] transform -translate-y-[98%] z-10">
                <svg className="relative block w-[calc(100%+1.3px)] h-[80px] md:h-[120px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M0,120 L0,100 Q600,0 1200,100 L1200,120 Z" fill="#00D1FF"></path>
                </svg>
            </div>
            
            <div className="bg-brand-cyan pt-8 pb-24 px-6 md:px-12 lg:px-24 relative z-0">
                <div className="text-center mb-16 relative z-10">
                     <h3 className="text-2xl md:text-3xl font-bold text-brand-navy">Our goal is to:</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10 max-w-7xl mx-auto">
                    <GoalItem 
                        icon={Zap}
                        title="Simplify Execution"
                        description="Simplify the venture creation process to get to market faster."
                    />
                    <GoalItem 
                        icon={RefreshCw}
                        title="Improve Automation"
                        description="Improve automation across legal, finance, and back-office tasks."
                    />
                    <GoalItem 
                        icon={ShieldCheck}
                        title="Ensure Transparency"
                        description="Ensure transparency and alignment for every founder and stakeholder."
                    />
                    <GoalItem 
                        icon={BarChart3}
                        title="Eliminate Errors"
                        description="Eliminate the errors that arise from manual execution and ad-hoc scaling."
                    />
                </div>
            </div>
        </div>
    </section>
  );
};

export default Vision;