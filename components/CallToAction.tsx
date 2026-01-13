import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

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
    <section className="py-24 px-6 md:px-12 lg:px-24 w-full bg-gradient-to-b from-brand-navy to-brand-navy-light">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        {/* Text Side */}
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="text-5xl md:text-6xl font-semibold text-white mb-6 tracking-tight">
              Ready to build <br />
              <span className="text-brand-cyan">the impossible?</span>
            </h2>
            <p className="text-xl text-brand-gray/60 max-w-md font-light">
              We are always looking for obsessive founders and breakthrough ideas. If you are ready to execute, we are ready to listen.
            </p>
          </div>
        </div>

        {/* Form Side */}
        <div className="bg-brand-navy p-8 md:p-12 border border-brand-gray/10 rounded-sm shadow-2xl shadow-brand-navy-light/50">
          {submitted ? (
            <div className="h-full flex flex-col items-center justify-center text-center min-h-[300px]">
              <div className="w-16 h-16 bg-brand-cyan/20 rounded-full flex items-center justify-center mb-6">
                <ArrowRight className="text-brand-cyan w-8 h-8 -rotate-45" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Message Received</h3>
              <p className="text-brand-gray/60">We'll be in touch shortly.</p>
              <button 
                onClick={() => setSubmitted(false)}
                className="mt-8 text-sm text-brand-cyan hover:text-white transition-colors uppercase tracking-widest font-semibold"
              >
                Send Another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-xs font-bold uppercase tracking-widest text-brand-gray/50 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formState.name}
                  onChange={handleChange}
                  className="w-full bg-brand-navy-light/30 border-b border-brand-gray/20 focus:border-brand-cyan text-white p-3 outline-none transition-colors placeholder-brand-gray/20"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs font-bold uppercase tracking-widest text-brand-gray/50 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formState.email}
                  onChange={handleChange}
                  className="w-full bg-brand-navy-light/30 border-b border-brand-gray/20 focus:border-brand-cyan text-white p-3 outline-none transition-colors placeholder-brand-gray/20"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-xs font-bold uppercase tracking-widest text-brand-gray/50 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formState.message}
                  onChange={handleChange}
                  className="w-full bg-brand-navy-light/30 border-b border-brand-gray/20 focus:border-brand-cyan text-white p-3 outline-none transition-colors placeholder-brand-gray/20 resize-none"
                  placeholder="Tell us about your vision..."
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full mt-4 bg-brand-cyan text-brand-navy font-bold py-4 px-8 hover:bg-white transition-all duration-300 flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Initialize Contact'}
                {!isSubmitting && <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default CallToAction;