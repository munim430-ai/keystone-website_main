import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './pages/Home';
import About from './pages/About';
import CountryDetail from './pages/CountryDetail';
import Services from './pages/Services';
import SuccessStories from './pages/SuccessStories';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-slate-50 font-sans selection:bg-brand-blue/20 selection:text-brand-blue">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/success-stories" element={<SuccessStories />} />
            <Route path="/country/:id" element={<CountryDetail />} />
            <Route path="*" element={
              <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 pt-24">
                <div className="text-8xl mb-6">🌍</div>
                <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Page Not Found</h1>
                <p className="text-slate-500 mb-8 text-lg">This destination doesn't exist yet.</p>
                <a href="/" className="bg-brand-blue text-white font-bold px-8 py-4 rounded-full hover:bg-brand-red transition-all">
                  Go Back Home
                </a>
              </div>
            } />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}
