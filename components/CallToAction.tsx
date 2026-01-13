import React, { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';

const CallToAction: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormState({ name: '', email: '', message: '' });
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  return (
    <section className="py-32 px-6 md:px-12 lg:px-24 w-full bg-brand-navy border-t border-white/5">
      <div className="max-w-6xl mx-auto bg-gradient-to-b from-white/[0.03] to-transparent border border-white/5 rounded-2xl p-8 md:p-16 lg:p-24 relative overflow-hidden">
        
        {/* Glow Effects */}
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-brand-cyan/10 blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-blue-600/10 blur-[80px] pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
          {/* Text Side */}
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              Ready to <span className="text-brand-cyan">execute?</span>
            </h2>
            <p className="text-lg text-brand-gray/60 mb-8 max-w-md">
              We are always looking for obsessive founders and breakthrough ideas. If you have the vision, we have the engine.
            </p>
            <div className="flex items-center gap-4 text-sm font-mono text-brand-gray/40">
               <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-gray-800 border border-brand-navy"></div>
                  <div className="w-8 h-8 rounded-full bg-gray-700 border border-brand-navy"></div>
                  <div className="w-8 h-8 rounded-full bg-gray-600 border border-brand-navy"></div>
               </div>
               <span>Join 50+ Founders</span>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-brand-navy/50 backdrop-blur-sm p-6 md:p-8 rounded-xl border border-white/10">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center min-h-[300px]">
                <div className="w-16 h-16 bg-brand-cyan/10 rounded-full flex items-center justify-center mb-6 border border-brand-cyan/20">
                  <Check className="text-brand-cyan w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Transmission Received</h3>
                <p className="text-brand-gray/60 mb-8">Our team is reviewing your submission.</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="text-sm text-brand-cyan hover:text-white transition-colors uppercase tracking-widest font-semibold"
                >
                  Reset Form
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label htmlFor="name" className="text-[10px] uppercase font-bold tracking-widest text-brand-gray/40">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formState.name}
                      onChange={handleChange}
                      className="w-full bg-black/20 border border-white/10 rounded-lg p-3 text-white focus:border-brand-cyan/50 focus:bg-brand-cyan/5 focus:outline-none transition-all placeholder-white/10 text-sm"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="space-y-1">
                    <label htmlFor="email" className="text-[10px] uppercase font-bold tracking-widest text-brand-gray/40">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formState.email}
                      onChange={handleChange}
                      className="w-full bg-black/20 border border-white/10 rounded-lg p-3 text-white focus:border-brand-cyan/50 focus:bg-brand-cyan/5 focus:outline-none transition-all placeholder-white/10 text-sm"
                      placeholder="you@company.com"
                    />
                  </div>
                </div>
                <div className="space-y-1">
                  <label htmlFor="message" className="text-[10px] uppercase font-bold tracking-widest text-brand-gray/40">Brief</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formState.message}
                    onChange={handleChange}
                    className="w-full bg-black/20 border border-white/10 rounded-lg p-3 text-white focus:border-brand-cyan/50 focus:bg-brand-cyan/5 focus:outline-none transition-all placeholder-white/10 text-sm resize-none"
                    placeholder="Describe what you are building..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full mt-2 bg-white text-brand-navy font-bold py-3 px-6 rounded-lg hover:bg-brand-cyan hover:shadow-[0_0_15px_rgba(0,209,255,0.4)] transition-all duration-300 flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed text-sm tracking-wide"
                >
                  {isSubmitting ? 'Processing...' : 'Submit Application'}
                  {!isSubmitting && <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;