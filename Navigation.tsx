
import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import { MegaMenuDesktop, MegaMenuMobile } from "./MegaMenuProductos";
import logoPuri from './logopuri.png';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(() => {
    // Check if it's the first visit in this session
    const hasVisited = sessionStorage.getItem('hasVisited');
    return !hasVisited;
  });
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname === '/') return;

    setIsTransitioning(true);
    // Phase 1: Wave Rises (Slower) - 1000ms
    setTimeout(() => {
      navigate('/');
      // Phase 2: Loading Animation (Hold) - 1500ms
      setTimeout(() => {
        setIsTransitioning(false);
      }, 1500); 
    }, 1000); 
  };

  // Initial Load Animation
  React.useEffect(() => {
    if (isTransitioning) {
      sessionStorage.setItem('hasVisited', 'true');
      
      // Hold for 1.8s then exit
      const timer = setTimeout(() => {
        setIsTransitioning(false);
      }, 1800);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <>
      {/* Water Transition Overlay */}
      <div 
        className={`fixed inset-0 z-[100] pointer-events-none transition-opacity duration-300 ${isTransitioning ? 'opacity-100' : 'opacity-0 pointer-events-none delay-[800ms]'}`}
      >
        {/* Wave 1 - Dark Blue */}
        <div className={`absolute inset-0 bg-blue-500/20 backdrop-blur-sm transition-transform ease-in-out ${isTransitioning ? 'duration-[1000ms] translate-y-0' : 'duration-[700ms] delay-[0ms] translate-y-full'}`}></div>
        
        {/* Wave 2 - Cyan */}
        <div className={`absolute inset-0 bg-cyan-400/30 backdrop-blur-md transition-transform ease-in-out ${isTransitioning ? 'duration-[1000ms] delay-75 translate-y-0' : 'duration-[700ms] delay-[100ms] translate-y-full'}`}></div>
        
        {/* Main Background - White */}
        <div className={`absolute inset-0 bg-white flex items-center justify-center transition-transform ease-in-out ${isTransitioning ? 'duration-[1000ms] delay-150 translate-y-0' : 'duration-[700ms] delay-[200ms] translate-y-full'}`}>
          <div className="flex flex-col items-center animate-pulse">
            <img src={logoPuri} alt="Logo" className="h-24 w-auto object-contain mb-4" />
            <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
          </div>
        </div>
      </div>

      <nav 
        className={`fixed w-full z-50 transition-all duration-300 bg-white/90 backdrop-blur-md shadow-sm py-3`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="/" onClick={handleLogoClick} className="flex items-center gap-2">
                <img 
                  src={logoPuri}
                  alt="Purifil Internacional" 
                  className="h-14 md:h-20 w-auto object-contain"
                />
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <MegaMenuDesktop />
              <a href="/#blog" className="text-gray-700 hover:text-primary font-bold text-sm tracking-wide uppercase transition-colors">Blog</a>
              <a href="https://wa.me/573112100552" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-primary font-bold text-sm tracking-wide uppercase transition-colors">CONTÁCTANOS</a>
              
              <a 
                href="https://wa.me/573112100552" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-6 py-2.5 rounded-full font-bold text-xs tracking-widest uppercase transition-all flex items-center gap-2 border border-primary text-primary hover:bg-primary hover:text-white ml-4"
              >
                Mercado Institucional
                <ArrowRight size={14} />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-900 p-2"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-lg py-4 px-4 md:hidden flex flex-col gap-4">
            <MegaMenuMobile closeMobileMenu={() => setMobileMenuOpen(false)} />
            <a href="/#blog" className="text-gray-700 hover:text-primary font-bold text-sm tracking-wide uppercase py-2 border-b border-gray-100" onClick={() => setMobileMenuOpen(false)}>Blog</a>
            <a href="https://wa.me/573112100552" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-primary font-bold text-sm tracking-wide uppercase py-2 border-b border-gray-100" onClick={() => setMobileMenuOpen(false)}>Contáctanos</a>
            <a 
              href="https://wa.me/573112100552" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full text-center px-6 py-3 rounded-lg bg-primary text-white font-bold text-sm tracking-widest uppercase mt-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Mercado Institucional
            </a>
          </div>
        )}
      </nav>
    </>
  );
}
