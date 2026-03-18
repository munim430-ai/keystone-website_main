import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, CheckCircle } from 'lucide-react';

const ConsultationForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100">
      <AnimatePresence mode="wait">
        {!isSubmitted ? (
          <motion.div
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="p-8 md:p-12"
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Send an Inquiry</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                  <input
                    required
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
                  <input
                    required
                    type="tel"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all"
                    placeholder="+880 1XXX XXXXXX"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                <input
                  required
                  type="email"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all"
                  placeholder="john@example.com"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Education Level</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all bg-white">
                    <option>HSC / A-Level</option>
                    <option>Bachelor's</option>
                    <option>Master's</option>
                    <option>Diploma</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Preferred Country</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all bg-white">
                    <option>South Korea</option>
                    <option>Canada</option>
                    <option>Malaysia</option>
                    <option>Cyprus</option>
                    <option>Europe</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Your Message</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all"
                  placeholder="Tell us about your study goals..."
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-brand-blue text-white py-4 rounded-xl font-bold text-lg hover:bg-brand-red transition-all shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 disabled:opacity-70"
              >
                {isLoading ? (
                  <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  <>
                    <span>Submit Inquiry</span>
                    <Send size={20} />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        ) : (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-12 text-center"
          >
            <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle size={48} />
            </div>
            <h3 className="text-3xl font-bold text-slate-900 mb-4">Inquiry Received!</h3>
            <p className="text-slate-600 mb-8 text-lg">
              Thank you for reaching out. One of our expert consultants will contact you within 24 hours to discuss your study abroad journey.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="text-brand-blue font-semibold hover:text-brand-red transition-colors"
            >
              Send another inquiry
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ConsultationForm;
