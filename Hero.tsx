
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Droplet, Wind, ChevronRight } from 'lucide-react';
import klingVideo from './klingvideo.mp4';

export default function Hero() {
  const [activeCategory, setActiveCategory] = useState<null | 'AGUA' | 'AIRE'>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const categories = {
    AGUA: [
      { label: "Agua Potable", href: "/productos?cat=AGUA&sub=Agua Potable" },
      { label: "Tratamiento de Aguas Residuales", href: "/productos?cat=AGUA&sub=Tratamiento de Aguas Residuales" },
      { label: "Industrial", href: "/productos?cat=AGUA&sub=Industrial" },
      { label: "Piscina", href: "/productos?cat=AGUA&sub=Piscina" },
    ],
    AIRE: [
      { label: "Iones", href: "/productos?cat=AIRE&sub=Iones" },
      { label: "Desinfección", href: "/productos?cat=AIRE&sub=Desinfección" },
    ]
  };

  return (
    <div className="relative h-screen w-full overflow-hidden font-sans">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-slate-900/60 z-10"></div>
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={klingVideo} type="video/mp4" />
          Tu navegador no soporta el tag de video.
        </video>
      </div>

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center px-4">
        <div className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center">
        
          {/* Header Section */}
          <div className="text-center mb-10 max-w-5xl mx-auto px-4 relative mt-20 md:mt-0">
            {/* Spotlight Effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 to-transparent blur-3xl -z-10 pointer-events-none"></div>

            <h1 className="flex flex-col items-center justify-center font-black text-white mb-6 drop-shadow-2xl tracking-tight">
              <span className="text-5xl md:text-8xl mb-2 md:mb-4 tracking-tighter">PURIFIL</span>
              <span className="text-4xl md:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 tracking-wide">INTERNACIONAL</span>
            </h1>
            <p className="text-base md:text-xl text-slate-100/90 max-w-2xl mx-auto leading-relaxed mb-10 font-light tracking-wide">
              Diseñamos soluciones robustas para los sectores más exigentes, <br className="hidden md:block" />
              con enfoque en rendimiento y confiabilidad.
            </p>
            
            <div className="flex items-center justify-center gap-6 opacity-60 hover:opacity-100 transition-opacity duration-700">
              <div className="h-[1px] w-12 md:w-24 bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
              <span className="text-[10px] md:text-sm uppercase tracking-[0.25em] text-white/70 font-semibold">NUESTRAS LÍNEAS DE NEGOCIO</span>
              <div className="h-[1px] w-12 md:w-24 bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
            </div>
          </div>

          {/* Dual Entry Selector */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-12 w-full max-w-5xl items-center justify-center shrink-0">
          
            {/* AGUA Card */}
            <div 
              className="group relative w-[240px] h-[240px] md:w-[280px] md:h-[280px] bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-[2rem] cursor-pointer overflow-hidden transition-all duration-500 hover:bg-slate-800/80 hover:border-blue-400/30 hover:-translate-y-2 shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:shadow-[0_20px_60px_rgba(14,165,233,0.2)]"
              onMouseEnter={() => setActiveCategory('AGUA')}
              onMouseLeave={() => setActiveCategory(null)}
            >
              {/* Default State */}
              <div className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-500 ease-out ${activeCategory === 'AGUA' ? '-translate-y-10 opacity-0' : 'translate-y-0 opacity-100'}`}>
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white backdrop-blur-md border border-blue-400/20 flex items-center justify-center mb-4 md:mb-6 shadow-[inset_0_0_20px_rgba(59,130,246,0.2)] group-hover:scale-110 transition-transform duration-500">
                  <Droplet size={28} className="md:w-8 md:h-8 text-blue-500 drop-shadow-[0_0_10px_rgba(96,165,250,0.3)]" strokeWidth={1.5} />
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-white tracking-[0.2em] group-hover:text-blue-300 transition-colors">AGUA</h2>
              </div>

              {/* Hover State (List) */}
              <div className={`absolute inset-0 p-5 md:p-6 flex flex-col justify-center bg-slate-900/95 transition-all duration-500 ease-out ${activeCategory === 'AGUA' ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
                <div className="flex items-center gap-3 mb-4 md:mb-6 border-b border-white/10 pb-3 md:pb-4">
                  <div className="p-1.5 rounded-full bg-blue-500/20">
                    <Droplet size={16} className="md:w-[18px] md:h-[18px] text-blue-400" />
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-white tracking-wider">SOLUCIONES HÍDRICAS</h3>
                </div>
                <ul className="space-y-2 md:space-y-3">
                  {categories.AGUA.map((item, idx) => (
                    <li key={idx} className="transform translate-y-4 opacity-0 animate-slideUp" style={{ animationDelay: `${idx * 50}ms`, animationFillMode: 'forwards' }}>
                      <Link to={item.href} className="flex items-center justify-between text-slate-300 hover:text-white group/item py-0.5">
                        <span className="text-[10px] md:text-xs font-medium transition-transform group-hover/item:translate-x-1">{item.label}</span>
                        <ChevronRight size={12} className="md:w-3.5 md:h-3.5 text-blue-400 opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-300" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* AIRE Card */}
            <div 
              className="group relative w-[240px] h-[240px] md:w-[280px] md:h-[280px] bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-[2rem] cursor-pointer overflow-hidden transition-all duration-500 hover:bg-slate-800/80 hover:border-cyan-400/30 hover:-translate-y-2 shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:shadow-[0_20px_60px_rgba(34,211,238,0.2)]"
              onMouseEnter={() => setActiveCategory('AIRE')}
              onMouseLeave={() => setActiveCategory(null)}
            >
              {/* Default State */}
              <div className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-500 ease-out ${activeCategory === 'AIRE' ? '-translate-y-10 opacity-0' : 'translate-y-0 opacity-100'}`}>
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white backdrop-blur-md border border-cyan-400/20 flex items-center justify-center mb-4 md:mb-6 shadow-[inset_0_0_20px_rgba(34,211,238,0.2)] group-hover:scale-110 transition-transform duration-500">
                  <Wind size={28} className="md:w-8 md:h-8 text-cyan-500 drop-shadow-[0_0_10px_rgba(34,211,238,0.3)]" strokeWidth={1.5} />
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-white tracking-[0.2em] group-hover:text-cyan-300 transition-colors">AIRE</h2>
              </div>

              {/* Hover State (List) */}
              <div className={`absolute inset-0 p-5 md:p-6 flex flex-col justify-center bg-slate-900/95 transition-all duration-500 ease-out ${activeCategory === 'AIRE' ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
                <div className="flex items-center gap-3 mb-4 md:mb-6 border-b border-white/10 pb-3 md:pb-4">
                  <div className="p-1.5 rounded-full bg-cyan-500/20">
                    <Wind size={16} className="md:w-[18px] md:h-[18px] text-cyan-400" />
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-white tracking-wider">PURIFICACIÓN DE AIRE</h3>
                </div>
                <ul className="space-y-2 md:space-y-3">
                  {categories.AIRE.map((item, idx) => (
                    <li key={idx} className="transform translate-y-4 opacity-0 animate-slideUp" style={{ animationDelay: `${idx * 50}ms`, animationFillMode: 'forwards' }}>
                      <Link to={item.href} className="flex items-center justify-between text-slate-300 hover:text-white group/item py-0.5">
                        <span className="text-[10px] md:text-xs font-medium transition-transform group-hover/item:translate-x-1">{item.label}</span>
                        <ChevronRight size={12} className="md:w-3.5 md:h-3.5 text-cyan-400 opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-300" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 transition-all duration-700 ease-out"
        style={{ 
          opacity: Math.max(0, 1 - scrollY / 200),
          transform: `translate(-50%, ${scrollY * 0.5}px)` 
        }}
      >
        <div className="flex flex-col items-center gap-2 animate-bounce-slow opacity-60 hover:opacity-100 transition-opacity">
          <span className="text-[9px] uppercase tracking-[0.3em] text-white/70 font-light">Descubre Más</span>
          <div className="w-[1px] h-8 bg-gradient-to-b from-transparent via-white/40 to-transparent"></div>
        </div>
      </div>

      <style>{`
        @keyframes slideUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideUp {
          animation: slideUp 0.5s ease-out forwards;
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s infinite;
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(10px); }
        }
      `}</style>
    </div>
  );
}
