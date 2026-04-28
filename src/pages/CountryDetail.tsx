import { useParams, Navigate, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { CheckCircle, Globe, GraduationCap, FileText, Landmark, ArrowRight, ChevronRight, Plane, Map as MapIcon, ExternalLink } from 'lucide-react';
import { countries } from '../data';
import ConsultationForm from '../components/ConsultationForm';
import InteractiveMap from '../components/InteractiveMap';
import { useEffect } from 'react';

const CountryDetail = () => {
  const { id } = useParams();
  const country = countries.find(c => c.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!country) {
    return <Navigate to="/" />;
  }

  return (
    <div className="pt-20">
      {/* Hero — keep dark overlay for photo legibility */}
      <section className="relative h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={country.image}
            alt={country.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/60 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center space-x-2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold mb-6">
              <Globe size={16} />
              <span>Study in {country.name}</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6">
              Study in <span className="text-sky-300">{country.name}</span>
            </h1>
            <p className="text-xl text-slate-200 max-w-2xl leading-relaxed">
              {country.shortDescription}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2 space-y-16">
              {/* Overview */}
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Overview</h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  {country.fullDescription}
                </p>
              </div>

              {/* Interactive Map */}
              <div>
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
                  <h2 className="text-3xl font-bold text-slate-900 flex items-center">
                    <MapIcon className="mr-3 text-blue-600" size={32} />
                    Explore Destinations
                  </h2>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(country.capital + ', ' + country.name)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-white border-2 border-blue-500 text-blue-600 font-bold rounded-xl hover:bg-blue-600 hover:text-white transition-all shadow-md group"
                  >
                    <span>View on Google Maps</span>
                    <ExternalLink size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
                <InteractiveMap cities={country.cities} countryName={country.name} />
              </div>

              {/* Benefits */}
              <div className="bg-sky-50/50 p-8 md:p-12 rounded-3xl border border-blue-100">
                <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center">
                  <GraduationCap className="mr-3 text-blue-600" size={32} />
                  Benefits for International Students
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {country.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <div className="bg-blue-100 text-blue-600 p-1 rounded-full mt-1">
                        <CheckCircle size={18} />
                      </div>
                      <span className="text-slate-700 font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Top Universities */}
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center">
                  <Landmark className="mr-3 text-blue-600" size={32} />
                  Top Universities
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {country.universities.map((uni, idx) => (
                    <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-200 flex items-center space-x-4 hover:shadow-md hover:border-blue-200 transition-all">
                      <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center text-blue-400">
                        <Landmark size={20} />
                      </div>
                      <span className="font-bold text-slate-800">{uni}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Requirements & Visa */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-slate-900 flex items-center">
                    <FileText className="mr-2 text-blue-600" size={24} />
                    Requirements
                  </h3>
                  <ul className="space-y-3">
                    {country.requirements.map((req, idx) => (
                      <li key={idx} className="flex items-center text-slate-600">
                        <ChevronRight size={16} className="mr-2 text-blue-500" />
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-slate-900 flex items-center">
                    <Plane className="mr-2 text-blue-600" size={24} />
                    Visa Process
                  </h3>
                  <ul className="space-y-3">
                    {country.visaProcess.map((step, idx) => (
                      <li key={idx} className="flex items-center text-slate-600">
                        <div className="w-6 h-6 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-xs font-bold mr-3 flex-shrink-0">
                          {idx + 1}
                        </div>
                        {step}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-8">
                <div className="bg-blue-600 p-8 rounded-3xl text-white shadow-xl">
                  <h3 className="text-2xl font-bold mb-4">Ready to Apply?</h3>
                  <p className="text-blue-100 mb-8">
                    Start your application process for {country.name} today with our expert guidance.
                  </p>
                  <a
                    href="#apply-form"
                    className="block w-full bg-white text-blue-700 py-4 rounded-xl font-bold text-center hover:bg-amber-400 hover:text-white transition-colors shadow-lg"
                  >
                    Apply Now
                  </a>
                </div>

                <div className="bg-sky-50 p-8 rounded-3xl border border-blue-100">
                  <h4 className="font-bold text-slate-900 mb-4">Need Help?</h4>
                  <p className="text-slate-600 mb-6 text-sm">
                    Our consultants are available for a free consultation to answer all your questions about studying in {country.name}.
                  </p>
                  <a
                    href="https://wa.me/8801941646278"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-2 text-green-600 font-bold hover:text-blue-600 transition-colors"
                  >
                    <span>Chat on WhatsApp</span>
                    <ArrowRight size={16} />
                  </a>
                </div>

                <div className="bg-white p-6 rounded-3xl border border-slate-200">
                  <h4 className="font-bold text-slate-900 mb-3">Quick Links</h4>
                  <div className="space-y-2">
                    {['/about', '/services', '/success-stories'].map((path) => (
                      <Link key={path} to={path}
                        className="flex items-center gap-2 text-slate-600 hover:text-blue-600 text-sm transition-colors py-1">
                        <ChevronRight size={14} />
                        {path.replace('/', '').replace('-', ' ').replace(/\b\w/g, c => c.toUpperCase())}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Form Section */}
      <section className="py-24 bg-gradient-to-b from-sky-50 to-white" id="apply-form">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-600 font-bold uppercase tracking-widest text-xs mb-4">Free Consultation</span>
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Get Started Today</h2>
            <p className="text-slate-600 text-lg">
              Fill out the form below and we'll get back to you with personalized advice for {country.name}.
            </p>
          </div>
          <ConsultationForm />
        </div>
      </section>
    </div>
  );
};

export default CountryDetail;
