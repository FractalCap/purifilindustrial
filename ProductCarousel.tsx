
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight, FileText } from 'lucide-react';

const products = [
  {
    id: 1,
    name: "Sistema de Filtración Industrial",
    category: "Agua",
    description: "Filtración de alta capacidad para procesos industriales.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    name: "Purificador de Aire UV-C",
    category: "Aire",
    description: "Desinfección de aire mediante luz ultravioleta.",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    name: "Bombas Centrífugas",
    category: "Agua",
    description: "Equipos de bombeo de alto rendimiento y durabilidad.",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 5,
    name: "Sistema de Osmosis Inversa",
    category: "Agua",
    description: "Purificación avanzada para agua ultra pura.",
    image: "https://images.unsplash.com/photo-1565355648710-8b067f08811d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  }
];

export default function ProductCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-play effect
  useEffect(() => {
    if (isHovered) return;
    
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // 5 seconds per slide

    return () => clearInterval(interval);
  }, [currentIndex, isHovered]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % products.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? products.length - 1 : prev - 1));
  };

  return (
    <section className="py-12 bg-white" id="productos-destacados">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <span className="text-primary font-bold tracking-widest uppercase text-[10px] mb-2 block">Innovación y Tecnología</span>
          <h2 className="text-2xl md:text-3xl font-light text-slate-800 uppercase tracking-[0.2em]">
            Productos <span className="font-semibold text-slate-900">Destacados</span>
          </h2>
          <div className="h-[1px] w-16 bg-slate-200 mx-auto mt-4 mb-4"></div>
          <p className="text-slate-500 font-light max-w-xl mx-auto text-sm">
            Soluciones de alta eficiencia diseñadas para optimizar el rendimiento industrial.
          </p>
        </div>

        {/* Carousel */}
        <div 
          className="overflow-hidden relative rounded-[1.5rem] shadow-xl bg-white border border-gray-100 max-w-4xl mx-auto"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div 
            className="flex transition-transform duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1.0)]"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {products.map((product) => (
              <div 
                key={product.id} 
                className="flex-shrink-0 w-full"
              >
                <div className="flex flex-col md:flex-row h-full min-h-[300px]">
                  {/* Image Section */}
                  <div className="relative w-full md:w-5/12 h-56 md:h-auto overflow-hidden group bg-slate-50 flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-slate-200 opacity-50"></div>
                    
                    {/* PRONTO Text */}
                    <div className="relative z-10 transform transition-transform duration-700 group-hover:scale-110">
                      <span className="text-5xl md:text-6xl font-black text-slate-200 uppercase tracking-widest select-none">
                        PRONTO
                      </span>
                    </div>
                    
                    {/* Floating Badge */}
                    <div className="absolute top-4 left-4 z-20">
                      <div className="bg-white/95 backdrop-blur-md px-3 py-1 rounded-full shadow-md border border-white/20 flex items-center gap-1.5">
                        <div className={`w-1.5 h-1.5 rounded-full ${product.category === 'Agua' ? 'bg-blue-500' : 'bg-cyan-400'}`}></div>
                        <span className="text-gray-900 text-[9px] font-bold uppercase tracking-wider">{product.category}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Content Section */}
                  <div className="w-full md:w-7/12 p-6 flex flex-col justify-center bg-white relative">
                    <div className="relative z-10">
                      <h3 className="text-xl md:text-2xl font-black text-slate-900 uppercase tracking-wide mb-3 leading-tight">
                        {product.name}
                      </h3>
                      
                      <p className="text-gray-500 text-sm mb-5 leading-relaxed font-light">
                        {product.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-4">
                        <Link 
                          to={`/productos?cat=${product.category.toUpperCase()}`}
                          className="px-6 py-2 bg-primary text-white text-xs font-medium rounded-lg hover:bg-primary/80 transition-colors duration-300 flex items-center gap-2 group"
                        >
                          Ver Detalles
                          <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation & Indicators Overlay */}
          <div className="absolute bottom-6 right-6 flex flex-col items-center gap-3 z-20">
             {/* Navigation Buttons Removed */}

            {/* Indicators */}
            <div className="flex justify-center gap-1.5">
              {products.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-1 transition-all duration-300 rounded-full shadow-sm ${
                    idx === currentIndex 
                      ? 'w-6 bg-gray-900' 
                      : 'w-1 bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Ir a diapositiva ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
