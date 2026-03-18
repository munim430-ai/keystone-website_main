import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, GraduationCap, ChevronDown } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

const countries = [
  { name: '🇰🇷 South Korea', path: '/country/south-korea' },
  { name: '🇨🇦 Canada', path: '/country/canada' },
  { name: '🇲🇾 Malaysia', path: '/country/malaysia' },
  { name: '🇨🇾 Cyprus', path: '/country/cyprus' },
  { name: '🇪🇺 Europe', path: '/country/europe' },
];

const mainLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Success Stories', path: '/success-stories' },
  { name: 'Contact', path: '/#contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => { setIsOpen(false); }, [location]);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">

          <Link to="/" className="flex items-center space-x-2 flex-shrink-0">
            <img src="/logo.png" alt="Keystone Logo" className="h-12 w-auto"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.parentElement?.querySelector('.fallback-logo')?.classList.remove('hidden');
              }}
            />
            <div className="fallback-logo hidden bg-brand-blue p-2 rounded-lg">
              <GraduationCap className="text-white w-6 h-6" />
            </div>
            <span className="font-display font-extrabold text-xl tracking-tight hidden sm:block text-brand-blue">
              Keystone<span className="text-brand-red">Education</span>
            </span>
          </Link>

          <div className="hidden lg:flex items-center space-x-1">
            {mainLinks.map((link) => (
              <Link key={link.name} to={link.path}
                className={`text-sm font-medium px-3 py-2 rounded-lg transition-colors hover:text-brand-red hover:bg-slate-50 ${location.pathname === link.path ? 'text-brand-red' : 'text-gray-700'}`}>
                {link.name}
              </Link>
            ))}

            <div className="relative" ref={dropdownRef}>
              <button onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-1 text-sm font-medium px-3 py-2 rounded-lg text-gray-700 hover:text-brand-red hover:bg-slate-50 transition-colors">
                Destinations <ChevronDown size={14} className={`transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {dropdownOpen && (
                  <motion.div initial={{ opacity: 0, y: 8, scale: 0.96 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 8, scale: 0.96 }} transition={{ duration: 0.15 }}
                    className="absolute top-full left-0 mt-2 w-48 bg-white rounded-2xl shadow-xl border border-slate-100 py-2 z-50">
                    {countries.map((c) => (
                      <Link key={c.path} to={c.path} onClick={() => setDropdownOpen(false)}
                        className="block px-4 py-2.5 text-sm text-gray-700 hover:text-brand-red hover:bg-slate-50 transition-colors">
                        {c.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <a href="https://forms.gle/grR8xEBQG9rUCmjV7" target="_blank" rel="noopener noreferrer"
              className="ml-2 bg-brand-blue text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-brand-red transition-all shadow-md hover:shadow-lg">
              Apply Now
            </a>
          </div>

          <div className="lg:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 hover:text-brand-blue focus:outline-none p-1">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
            className="lg:hidden bg-white border-t border-gray-100 shadow-xl">
            <div className="px-4 pt-2 pb-6 space-y-1">
              {mainLinks.map((link) => (
                <Link key={link.name} to={link.path}
                  className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-brand-red hover:bg-slate-50 rounded-lg transition-colors">
                  {link.name}
                </Link>
              ))}
              <div className="pt-2 border-t border-slate-100">
                <p className="px-3 text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Destinations</p>
                {countries.map((c) => (
                  <Link key={c.path} to={c.path}
                    className="block px-3 py-2.5 text-base text-gray-700 hover:text-brand-red hover:bg-slate-50 rounded-lg transition-colors">
                    {c.name}
                  </Link>
                ))}
              </div>
              <a href="https://forms.gle/grR8xEBQG9rUCmjV7" target="_blank" rel="noopener noreferrer"
                className="block w-full text-center bg-brand-blue text-white px-3 py-3 rounded-lg text-base font-semibold mt-4 hover:bg-brand-red transition-colors">
                Apply Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
