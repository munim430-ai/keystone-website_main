import { motion, useInView } from 'motion/react';
import { useRef, useEffect, useState } from 'react';

interface CounterProps {
  end: number;
  label?: string;
  suffix?: string;
}

const Counter = ({ end, label, suffix = "" }: CounterProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const increment = end / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      
      return () => clearInterval(timer);
    }
  }, [isInView, end]);

  return (
    <div ref={ref} className="text-center p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl">
      <div className="text-4xl md:text-5xl font-bold text-brand-blue mb-2">
        {count}{suffix}
      </div>
      <div className="text-slate-600 font-medium uppercase tracking-wider text-sm">
        {label}
      </div>
    </div>
  );
};

export default Counter;
