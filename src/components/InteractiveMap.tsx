import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { MapPin, Info, X } from 'lucide-react';
import { City } from '../types';

interface InteractiveMapProps {
  cities: City[];
  countryName: string;
}

const InteractiveMap = ({ cities, countryName }: InteractiveMapProps) => {
  const [selectedCity, setSelectedCity] = useState<City | null>(null);

  return (
    <div className="relative w-full aspect-video bg-slate-100 rounded-3xl overflow-hidden border border-slate-200 shadow-inner">
      {/* Map Background Placeholder (Stylized Grid) */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <span className="text-slate-300 font-bold text-6xl md:text-9xl uppercase tracking-widest opacity-50">
          {countryName}
        </span>
      </div>

      {/* Markers */}
      {cities.map((city) => (
        <motion.button
          key={city.name}
          className="absolute z-10 group"
          style={{ left: `${city.x}%`, top: `${city.y}%` }}
          whileHover={{ scale: 1.2 }}
          onClick={() => setSelectedCity(city)}
        >
          <div className="relative">
            <MapPin className="text-brand-red w-8 h-8 drop-shadow-lg" />
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-white px-3 py-1 rounded-full shadow-lg border border-slate-100 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-20">
              <span className="text-sm font-bold text-slate-900">{city.name}</span>
            </div>
          </div>
        </motion.button>
      ))}

      {/* City Detail Overlay */}
      <AnimatePresence>
        {selectedCity && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="absolute bottom-6 left-6 right-6 md:left-auto md:right-6 md:w-80 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-2xl border border-white/20 z-30"
          >
            <div className="flex justify-between items-start mb-4">
              <h4 className="text-xl font-bold text-slate-900 flex items-center">
                <Info className="mr-2 text-brand-blue" size={20} />
                {selectedCity.name}
              </h4>
              <button 
                onClick={() => setSelectedCity(null)}
                className="text-slate-400 hover:text-slate-600 transition-colors"
              >
                <X size={20} />
              </button>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              {selectedCity.description}
            </p>
            <button className="text-brand-blue font-bold text-sm hover:underline flex items-center">
              Explore Universities in {selectedCity.name}
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="absolute top-6 left-6 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 shadow-sm">
        <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Interactive Destination Map</span>
      </div>
    </div>
  );
};

export default InteractiveMap;
