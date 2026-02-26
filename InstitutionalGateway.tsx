
import React from 'react';
import { ArrowRight, Building2, School, Hospital, Hotel } from 'lucide-react';

export default function InstitutionalGateway() {
  return (
    <section id="institutional" className="relative h-[500px] w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
          alt="Modern Institutional Building" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/40"></div>
      </div>

      <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 text-blue-400 font-bold tracking-wider uppercase mb-4">
            <Building2 size={20} />
            <span>División Institucional</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
            ¿Busca soluciones para <br/>
            <span className="text-blue-400">Hoteles, Hospitales o Centros Comerciales?</span>
          </h2>
          
          <p className="text-xl text-gray-300 mb-8 font-light">
            Visite nuestra Línea Institucional y descubra tecnología especializada para garantizar agua purificada y aire limpio en espacios de alto tráfico.
          </p>

          <div className="flex flex-wrap gap-6 mb-10 text-gray-300">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-white/10 rounded-lg">
                <Hospital size={20} className="text-blue-400" />
              </div>
              <span className="text-sm font-medium">Hospitales</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="p-2 bg-white/10 rounded-lg">
                <School size={20} className="text-blue-400" />
              </div>
              <span className="text-sm font-medium">Colegios</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="p-2 bg-white/10 rounded-lg">
                <Hotel size={20} className="text-blue-400" />
              </div>
              <span className="text-sm font-medium">Hoteles</span>
            </div>
          </div>

          <a 
            href="#institutional-products" 
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary hover:bg-blue-700 text-white font-bold rounded-full transition-all transform hover:translate-x-2 shadow-lg hover:shadow-blue-900/50 text-lg border border-white/10"
          >
            Visite nuestra Línea Institucional
            <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}
