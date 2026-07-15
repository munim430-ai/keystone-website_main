import { Link, useLocation } from 'react-router-dom';
import { Home, Briefcase, Globe, Star, MessageCircle } from 'lucide-react';
import { WHATSAPP_CONSULTATION } from '../constants';

const tabs = [
  { label: 'Home', path: '/', icon: Home },
  { label: 'Services', path: '/services', icon: Briefcase },
  { label: 'Visa Guide', path: '/visa-guide', icon: Globe },
  { label: 'Stories', path: '/success-stories', icon: Star },
];

const BottomTabBar = () => {
  const { pathname } = useLocation();

  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-slate-200 shadow-[0_-4px_24px_rgba(0,0,0,0.08)]"
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}>
      <div className="grid grid-cols-5 h-16">
        {tabs.map(({ label, path, icon: Icon }) => {
          const active = pathname === path;
          return (
            <Link key={path} to={path}
              className={`flex flex-col items-center justify-center gap-0.5 text-[10px] font-semibold transition-colors ${
                active ? 'text-brand-blue' : 'text-slate-400'
              }`}>
              <Icon size={22} strokeWidth={active ? 2.5 : 1.8} />
              <span>{label}</span>
            </Link>
          );
        })}

        {/* WhatsApp CTA tab */}
        <a href={WHATSAPP_CONSULTATION} target="_blank" rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-0.5 text-[10px] font-semibold text-green-600">
          <div className="bg-green-500 rounded-full p-1.5 -mt-1 shadow-lg shadow-green-500/30">
            <MessageCircle size={18} className="text-white" strokeWidth={2.5} />
          </div>
          <span>WhatsApp</span>
        </a>
      </div>
    </nav>
  );
};

export default BottomTabBar;
