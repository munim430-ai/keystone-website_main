import { Link } from 'react-router-dom';
import { Facebook, Mail, Phone, MapPin, GraduationCap, ChevronRight, ExternalLink } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-slate-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          {/* Brand column */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <img src="/logo.png" alt="Keystone Logo" className="h-10 w-auto"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement?.querySelector('.fallback-logo')?.classList.remove('hidden');
                }}
              />
              <div className="fallback-logo hidden bg-blue-600 p-2 rounded-lg">
                <GraduationCap className="text-white w-5 h-5" />
              </div>
              <span className="font-bold text-2xl text-slate-900 tracking-tight">
                Keystone<span className="text-amber-500">Education</span>
              </span>
            </div>
            <p className="text-slate-500 leading-relaxed">
              Where global dreams begin. Founded in 2022, we empower Bangladeshi students to achieve their international education goals with expert guidance and support.
            </p>
            <div className="flex space-x-3">
              <a href="https://www.facebook.com/share/187gaTjhFD/" target="_blank" rel="noopener noreferrer"
                className="bg-slate-100 border border-slate-200 p-3 rounded-full hover:bg-blue-50 hover:border-blue-200 transition-colors group">
                <Facebook size={18} className="text-slate-600 group-hover:text-blue-600" />
              </a>
              <a href="mailto:info@keystoneeducations.com"
                className="bg-slate-100 border border-slate-200 p-3 rounded-full hover:bg-blue-50 hover:border-blue-200 transition-colors group">
                <Mail size={18} className="text-slate-600 group-hover:text-blue-600" />
              </a>
              <a href="https://wa.me/8801941646278" target="_blank" rel="noopener noreferrer"
                className="bg-slate-100 border border-slate-200 p-3 rounded-full hover:bg-blue-50 hover:border-blue-200 transition-colors group">
                <Phone size={18} className="text-slate-600 group-hover:text-blue-600" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-slate-900 font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {[
                { label: 'Home', to: '/' },
                { label: 'About', to: '/about' },
                { label: 'Services', to: '/services' },
                { label: 'Success Stories', to: '/success-stories' },
                { label: 'Contact', to: '/#contact' },
              ].map((item) => (
                <li key={item.label}>
                  <Link to={item.to} className="flex items-center text-slate-500 hover:text-blue-600 transition-colors group">
                    <ChevronRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 transition-all -ml-4 group-hover:ml-0" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-slate-900 font-bold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4 text-slate-500">
              <li className="flex items-start space-x-3">
                <MapPin className="text-blue-500 mt-1 flex-shrink-0" size={18} />
                <span>Gazipur Main Branch, Rajendrapur Bazar, Gazipur, Bangladesh</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="text-blue-500 flex-shrink-0" size={18} />
                <span>+8801941646278 (WhatsApp)</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="text-blue-500 flex-shrink-0" size={18} />
                <span>info@keystoneeducations.com</span>
              </li>
            </ul>
          </div>

          {/* Mission — accent panel */}
          <div>
            <div className="bg-gradient-to-br from-sky-50 to-blue-50 rounded-2xl p-6 border border-blue-100">
              <h3 className="text-slate-900 font-bold text-lg mb-4">Our Mission</h3>
              <p className="text-slate-500 mb-6 text-sm leading-relaxed">
                Dedicated to providing transparent and professional consultancy services for students seeking higher education abroad since 2022.
              </p>
              <a href="https://forms.gle/grR8xEBQG9rUCmjV7" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-blue-700 transition-all shadow-sm hover:shadow-md">
                Start Application
                <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-slate-400">
            © 2022–{currentYear} Keystone Education Consultancy. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-slate-400">
            <a href="#" className="hover:text-blue-600 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
