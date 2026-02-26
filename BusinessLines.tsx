
import React from 'react';

export default function BusinessLines() {
  return (
    <section className="relative pt-12 pb-10 text-center overflow-hidden bg-white">
      <div className="relative z-10">
        <h2 className="text-gray-900 font-bold text-[2.5rem] mt-4 mb-2 tracking-tight">Bienvenidos</h2>
        <p className="text-gray-500 max-w-[680px] mx-auto px-4 text-lg">
          Descubre nuestras soluciones especializadas en tratamiento de agua y purificación de aire, diseñadas para garantizar salud y bienestar en cada entorno.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-16 max-w-6xl mx-auto px-4 items-start">
        {/* AGUA Panel */}
        <article className="relative">
          <div className="w-[160px] h-[160px] mx-auto mb-10 rounded-full flex items-center justify-center text-white font-bold tracking-widest bg-[radial-gradient(circle_at_30%_30%,_#2f81b7,_#1a5c85)] shadow-[0_10px_30px_rgba(47,129,183,0.4),_inset_0_2px_10px_rgba(255,255,255,0.4)] border-[6px] border-white text-2xl transition-transform hover:scale-105 duration-300 relative overflow-hidden group z-10">
            <span className="relative z-10 drop-shadow-md">AGUA</span>
            <div className="absolute inset-0 rounded-full border-[1px] border-white/30"></div>
            {/* Glossy shine */}
            <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/20 to-transparent rounded-t-full"></div>
          </div>
          
          <div className="relative grid grid-cols-4 gap-4 max-w-[720px] mx-auto pt-6">
            {/* Main Connector Tree */}
            <svg className="absolute top-[-50px] left-0 w-full h-[60px] z-0 pointer-events-none" preserveAspectRatio="none">
              <path d="M50% 0 V20 Q50% 45 25% 45 H12.5 Q12.5 45 12.5 60" fill="none" stroke="#6ec1ff" strokeWidth="4" strokeLinecap="round" />
              <path d="M50% 0 V20 Q50% 45 37.5% 45 H37.5 Q37.5 45 37.5 60" fill="none" stroke="#6ec1ff" strokeWidth="4" strokeLinecap="round" />
              <path d="M50% 0 V20 Q50% 45 62.5% 45 H62.5 Q62.5 45 62.5 60" fill="none" stroke="#6ec1ff" strokeWidth="4" strokeLinecap="round" />
              <path d="M50% 0 V20 Q50% 45 87.5% 45 H87.5 Q87.5 45 87.5 60" fill="none" stroke="#6ec1ff" strokeWidth="4" strokeLinecap="round" />
            </svg>

            <div className="flex flex-col items-center gap-3 relative group cursor-pointer z-10">
              <div className="w-[52px] h-[52px] rounded-full bg-[radial-gradient(circle_at_30%_30%,_#2f81b7,_#1a5c85)] border-2 border-white shadow-md flex items-center justify-center text-white transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/30 to-transparent rounded-t-full"></div>
                <i className="fas fa-tint text-xl drop-shadow-sm"></i>
              </div>
              <small className="block text-[10px] font-bold tracking-tight text-gray-600 uppercase text-center leading-tight mt-1 group-hover:text-primary transition-colors">AGUA<br/>POTABLE</small>
            </div>
            
            <div className="flex flex-col items-center gap-3 relative group cursor-pointer z-10">
              <div className="w-[52px] h-[52px] rounded-full bg-[radial-gradient(circle_at_30%_30%,_#2f81b7,_#1a5c85)] border-2 border-white shadow-md flex items-center justify-center text-white transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/30 to-transparent rounded-t-full"></div>
                <i className="fas fa-water text-xl drop-shadow-sm"></i>
              </div>
              <small className="block text-[10px] font-bold tracking-tight text-gray-600 uppercase text-center leading-tight mt-1 group-hover:text-primary transition-colors">AGUAS<br/>RESIDUALES</small>
            </div>

            <div className="flex flex-col items-center gap-3 relative group cursor-pointer z-10">
              <div className="w-[52px] h-[52px] rounded-full bg-[radial-gradient(circle_at_30%_30%,_#2f81b7,_#1a5c85)] border-2 border-white shadow-md flex items-center justify-center text-white transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/30 to-transparent rounded-t-full"></div>
                <i className="fas fa-industry text-lg drop-shadow-sm"></i>
              </div>
              <small className="block text-[10px] font-bold tracking-tight text-gray-600 uppercase text-center leading-tight mt-1 group-hover:text-primary transition-colors">INDUSTRIAL</small>
            </div>

            <div className="flex flex-col items-center gap-3 relative group cursor-pointer z-10">
              <div className="w-[52px] h-[52px] rounded-full bg-[radial-gradient(circle_at_30%_30%,_#2f81b7,_#1a5c85)] border-2 border-white shadow-md flex items-center justify-center text-white transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/30 to-transparent rounded-t-full"></div>
                <i className="fas fa-swimming-pool text-xl drop-shadow-sm"></i>
              </div>
              <small className="block text-[10px] font-bold tracking-tight text-gray-600 uppercase text-center leading-tight mt-1 group-hover:text-primary transition-colors">PISCINAS</small>
            </div>
          </div>
        </article>

        {/* AIRE Panel */}
        <article className="relative">
          <div className="w-[160px] h-[160px] mx-auto mb-10 rounded-full flex items-center justify-center text-[#2f81b7] font-bold tracking-widest bg-[radial-gradient(circle_at_30%_30%,_#ffffff,_#e6f4fa)] shadow-[0_10px_30px_rgba(47,129,183,0.2),_inset_0_2px_10px_rgba(255,255,255,0.8)] border-[6px] border-white text-2xl transition-transform hover:scale-105 duration-300 relative overflow-hidden group z-10">
            <span className="relative z-10 drop-shadow-sm">AIRE</span>
            <div className="absolute inset-0 rounded-full border-[1px] border-[#2f81b7]/10"></div>
            {/* Glossy shine */}
            <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/60 to-transparent rounded-t-full"></div>
          </div>

          <div className="relative grid grid-cols-2 gap-12 max-w-[320px] mx-auto pt-6">
            {/* Main Connector Tree */}
            <svg className="absolute top-[-50px] left-0 w-full h-[60px] z-0 pointer-events-none" preserveAspectRatio="none">
              <path d="M50% 0 V20 Q50% 45 25% 45 H25% Q25% 45 25% 60" fill="none" stroke="#9ed4f2" strokeWidth="4" strokeLinecap="round" />
              <path d="M50% 0 V20 Q50% 45 75% 45 H75% Q75% 45 75% 60" fill="none" stroke="#9ed4f2" strokeWidth="4" strokeLinecap="round" />
            </svg>

            <div className="flex flex-col items-center gap-3 relative group cursor-pointer z-10">
              <div className="w-[52px] h-[52px] rounded-full bg-[radial-gradient(circle_at_30%_30%,_#ffffff,_#e6f4fa)] border-2 border-white shadow-md flex items-center justify-center text-[#2f81b7] transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/60 to-transparent rounded-t-full"></div>
                <i className="fas fa-wind text-xl drop-shadow-sm"></i>
              </div>
              <small className="block text-[10px] font-bold tracking-tight text-gray-600 uppercase text-center leading-tight mt-1 group-hover:text-primary transition-colors">OLORES</small>
            </div>

            <div className="flex flex-col items-center gap-3 relative group cursor-pointer z-10">
              <div className="w-[52px] h-[52px] rounded-full bg-[radial-gradient(circle_at_30%_30%,_#ffffff,_#e6f4fa)] border-2 border-white shadow-md flex items-center justify-center text-[#2f81b7] transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/60 to-transparent rounded-t-full"></div>
                <i className="fas fa-shield-virus text-xl drop-shadow-sm"></i>
              </div>
              <small className="block text-[10px] font-bold tracking-tight text-gray-600 uppercase text-center leading-tight mt-1 group-hover:text-primary transition-colors">DESINFECCIÓN</small>
            </div>
          </div>
        </article>
      </div>

      {/* Decorative Wave (Right side) */}
      <div className="absolute right-[-80px] top-[70px] w-[320px] h-[120px] bg-[radial-gradient(ellipse_at_20%_50%,_rgba(158,212,242,0.5),_rgba(158,212,242,0)_60%)] blur-[6px] z-0 pointer-events-none"></div>

      {/* Background Flow Animations */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0 opacity-20">
        {/* Water Flow - Bottom Left */}
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl animate-[blob_7s_infinite]"></div>
        {/* Air Flow - Top Right */}
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-cyan-100 rounded-full mix-blend-multiply filter blur-3xl animate-[blob_7s_infinite_2s]"></div>
      </div>
    </section>
  );
}
