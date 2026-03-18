import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { Sparkles, GraduationCap, Globe, BookOpen, ArrowRight, CheckCircle, RefreshCw } from 'lucide-react';

const CourseMatcher = () => {
  const [step, setStep] = useState(0);
  const [selections, setSelections] = useState<Record<string, string>>({});
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<null | { country: string; courses: string[] }>(null);

  const steps = [
    {
      id: 'level',
      question: 'What is your current education level?',
      options: ['HSC / A-Level', 'Bachelor\'s Degree', 'Master\'s Degree', 'Diploma']
    },
    {
      id: 'interest',
      question: 'Which field are you most interested in?',
      options: ['Business & Management', 'Engineering & Tech', 'Arts & Design', 'Health Sciences']
    },
    {
      id: 'budget',
      question: 'What is your preferred budget range?',
      options: ['Affordable (Low Tuition)', 'Moderate', 'Premium (Top Tier)']
    }
  ];

  const handleSelect = (option: string) => {
    const currentStepId = steps[step].id;
    setSelections(prev => ({ ...prev, [currentStepId]: option }));
    
    if (step < steps.length - 1) {
      setStep(step + 1);
    } else {
      analyzeResults();
    }
  };

  const analyzeResults = () => {
    setIsAnalyzing(true);
    setTimeout(() => {
      setIsAnalyzing(false);
      // Mock logic
      setResult({
        country: selections.budget === 'Affordable (Low Tuition)' ? 'South Korea' : 'Canada',
        courses: ['Global Business Administration', 'Information Technology', 'International Relations']
      });
    }, 2000);
  };

  const reset = () => {
    setStep(0);
    setSelections({});
    setResult(null);
  };

  return (
    <div className="bg-slate-900 rounded-[2.5rem] p-8 md:p-12 text-white relative overflow-hidden shadow-2xl border border-white/10">
      {/* Futuristic Background */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue/20 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-red/10 rounded-full blur-[100px] -z-10" />

      <div className="relative z-10">
        <div className="flex items-center space-x-3 mb-8">
          <div className="bg-brand-blue p-2 rounded-lg">
            <Sparkles className="text-white" size={24} />
          </div>
          <h3 className="text-2xl font-bold">Smart Course Matcher</h3>
        </div>

        <AnimatePresence mode="wait">
          {!isAnalyzing && !result && (
            <motion.div
              key="step"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <div className="mb-8">
                <div className="text-brand-red text-sm font-bold uppercase tracking-widest mb-2">Step {step + 1} of {steps.length}</div>
                <h4 className="text-2xl font-bold leading-tight">{steps[step].question}</h4>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {steps[step].options.map(option => (
                  <button
                    key={option}
                    onClick={() => handleSelect(option)}
                    className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-brand-blue hover:border-brand-blue-light transition-all text-left font-medium group flex justify-between items-center"
                  >
                    {option}
                    <ArrowRight size={18} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {isAnalyzing && (
            <motion.div
              key="analyzing"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <div className="w-20 h-20 border-4 border-brand-red border-t-transparent rounded-full animate-spin mx-auto mb-8" />
              <h4 className="text-2xl font-bold mb-2">AI Analysis in Progress...</h4>
              <p className="text-slate-400">Matching your profile with thousands of global programs.</p>
            </motion.div>
          )}

          {result && (
            <motion.div
              key="result"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="space-y-8"
            >
              <div className="bg-brand-blue/20 border border-brand-blue/30 p-8 rounded-3xl">
                <div className="flex items-center space-x-3 mb-4">
                  <CheckCircle className="text-green-400" size={24} />
                  <span className="text-brand-red font-bold uppercase tracking-widest text-sm">Perfect Match Found</span>
                </div>
                <h4 className="text-3xl font-bold mb-4">Recommended Destination: {result.country}</h4>
                <p className="text-slate-300 mb-6">Based on your profile, {result.country} offers the best balance of quality and budget for your {selections.interest} studies.</p>
                
                <div className="space-y-3">
                  <div className="text-sm font-bold text-slate-400 uppercase tracking-wider">Top Recommended Programs:</div>
                  {result.courses.map(course => (
                    <div key={course} className="flex items-center space-x-3 bg-white/5 p-4 rounded-xl border border-white/5">
                      <BookOpen size={18} className="text-brand-blue-light" />
                      <span className="font-medium">{course}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <button className="bg-brand-blue text-white px-8 py-4 rounded-xl font-bold hover:bg-brand-red transition-all flex-1">
                  Get Detailed Roadmap
                </button>
                <button 
                  onClick={reset}
                  className="bg-white/5 text-white px-8 py-4 rounded-xl font-bold border border-white/10 hover:bg-white/10 transition-all flex items-center justify-center"
                >
                  <RefreshCw size={18} className="mr-2" />
                  Try Again
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default CourseMatcher;
