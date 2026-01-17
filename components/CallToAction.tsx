import React, { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const CallToAction: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Use FormSubmit.co for backend-less email submission
    fetch("https://formsubmit.co/ajax/talriclab@gmail.com", {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            name: formState.name,
            email: formState.email,
            message: formState.message,
            _subject: `New Application from ${formState.name}`
        })
    })
    .then(response => {
        if (response.ok) {
            setSubmitted(true);
            setFormState({ name: '', email: '', message: '' });
        } else {
             // Fallback to mailto if service is down/blocked
             window.location.href = `mailto:talriclab@gmail.com?subject=New Application from ${encodeURIComponent(formState.name)}&body=${encodeURIComponent(formState.message)}`;
        }
    })
    .catch(error => {
        console.error(error);
        // Fallback to mailto
        window.location.href = `mailto:talriclab@gmail.com?subject=New Application from ${encodeURIComponent(formState.name)}&body=${encodeURIComponent(formState.message)}`;
    })
    .finally(() => {
        setIsSubmitting(false);
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="scroll-mt-32 py-32 px-6 md:px-12 lg:px-24 w-full bg-transparent border-t border-white/5 relative overflow-hidden">
      
      <div className="max-w-6xl mx-auto bg-gradient-to-b from-white/[0.03] to-transparent border border-white/5 rounded-2xl p-8 md:p-16 lg:p-24 relative overflow-hidden z-10">
        
        {/* Glow Effects */}
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-brand-cyan/10 blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-blue-600/10 blur-[80px] pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
          {/* Text Side */}
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              Ready to <span className="text-brand-cyan">Execute?</span>
            </h2>
            <p className="text-lg text-brand-gray/60 mb-8 max-w-md">
              We are looking for passionate founders and breakthrough ideas, If you have the vision, we have the engine.
            </p>
            
          </div>

          {/* Form Side */}
          <div className="bg-brand-navy/50 backdrop-blur-sm p-6 md:p-8 rounded-xl border border-white/10 min-h-[420px] flex flex-col justify-center">
            
            {!submitted && (
              <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
            )}

            <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div 
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="h-full flex flex-col items-center justify-center text-center w-full"
              >
                <motion.div 
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.1 }}
                  className="w-16 h-16 bg-brand-cyan/10 rounded-full flex items-center justify-center mb-6 border border-brand-cyan/20"
                >
                  <Check className="text-brand-cyan w-8 h-8" />
                </motion.div>
                
                <motion.h3 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-xl font-bold text-white mb-2"
                >
                  Transmission Received
                </motion.h3>
                
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-brand-gray/60 mb-8"
                >
                  Our team is reviewing your submission.
                </motion.p>
                
                <motion.button 
                  onClick={() => setSubmitted(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.4 }}
                  className="text-sm text-brand-cyan hover:text-white transition-colors uppercase tracking-widest font-semibold"
                >
                  Reset Form
                </motion.button>
              </motion.div>
            ) : (
              <motion.form 
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                onSubmit={handleSubmit} 
                className="space-y-4 w-full"
              >
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
                  <label htmlFor="message" className="text-[10px] uppercase font-bold tracking-widest text-brand-gray/40">Message / Brief</label>
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
                  {isSubmitting ? 'Sending...' : 'Submit'}
                  {!isSubmitting && <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
                </button>
              </motion.form>
            )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;