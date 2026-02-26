
import React from 'react';
import { Link } from 'react-router-dom';
import { Droplet, Wind, Activity, FileText } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ServicesGrid() {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white overflow-hidden relative" id="servicios">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-1/2 -right-24 w-96 h-96 bg-cyan-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-24 left-1/2 w-96 h-96 bg-sky-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <span className="text-primary font-bold tracking-widest uppercase text-xs mb-3 block">Nuestras Soluciones</span>
          <h2 className="text-3xl font-light text-slate-500 uppercase tracking-[0.2em] mb-2">LÍNEAS DE</h2>
          <h2 className="text-5xl md:text-7xl font-black text-slate-900 uppercase tracking-tight">NEGOCIO</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Curved Timeline Container */}
        <div className="relative w-full max-w-6xl mx-auto h-[500px] hidden md:block">
           {/* SVG Waves - Enhanced for more "Sea Wave" look */}
           <svg className="absolute top-0 left-0 w-full h-full pointer-events-none z-0" viewBox="0 0 1000 500" preserveAspectRatio="none">
             <defs>
               <linearGradient id="waveGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                 <stop offset="0%" stopColor="#bae6fd" stopOpacity="0.4" />
                 <stop offset="100%" stopColor="#e0f2fe" stopOpacity="0.1" />
               </linearGradient>
               <linearGradient id="waveGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                 <stop offset="0%" stopColor="#7dd3fc" stopOpacity="0.5" />
                 <stop offset="100%" stopColor="#bae6fd" stopOpacity="0.2" />
               </linearGradient>
               <linearGradient id="waveGradientMain" x1="0%" y1="0%" x2="100%" y2="0%">
                 <stop offset="0%" stopColor="#0ea5e9" />
                 <stop offset="50%" stopColor="#0284c7" />
                 <stop offset="100%" stopColor="#0369a1" />
               </linearGradient>
             </defs>
             
             {/* Wave 1 (Back - Light & Flowing) - Up/Down Pattern */}
             <motion.path 
               d="M0,250 C150,150 300,350 500,250 C700,150 850,350 1000,250" 
               fill="none" 
               stroke="url(#waveGradient1)" 
               strokeWidth="20" 
               strokeLinecap="round"
               className="opacity-60"
               initial={{ pathLength: 0 }}
               whileInView={{ pathLength: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 2, ease: "easeInOut" }}
             />
             
             {/* Wave 2 (Middle - Medium & Dynamic) - Up/Down Pattern */}
             <motion.path 
               d="M0,260 C180,160 350,380 550,260 C750,160 900,380 1000,260" 
               fill="none" 
               stroke="url(#waveGradient2)" 
               strokeWidth="12" 
               strokeLinecap="round"
               className="opacity-80"
               initial={{ pathLength: 0 }}
               whileInView={{ pathLength: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 2, ease: "easeInOut", delay: 0.2 }}
             />
             
             {/* Wave 3 (Front - Main & Sharp) - Up/Down Pattern to match nodes */}
             <motion.path 
               d="M0,250 C166,100 333,400 500,250 C666,100 833,400 1000,250" 
               fill="none" 
               stroke="url(#waveGradientMain)" 
               strokeWidth="6" 
               className="drop-shadow-2xl"
               initial={{ pathLength: 0 }}
               whileInView={{ pathLength: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 2.5, ease: "easeInOut" }}
             />
             
             {/* Floating Bubbles/Particles */}
             <circle cx="100" cy="200" r="4" fill="#38bdf8" className="animate-pulse opacity-60" />
             <circle cx="250" cy="350" r="6" fill="#7dd3fc" className="animate-pulse opacity-40 animation-delay-1000" />
             <circle cx="450" cy="150" r="3" fill="#0ea5e9" className="animate-pulse opacity-50 animation-delay-2000" />
             <circle cx="600" cy="320" r="5" fill="#38bdf8" className="animate-pulse opacity-40 animation-delay-500" />
             <circle cx="800" cy="180" r="4" fill="#7dd3fc" className="animate-pulse opacity-60 animation-delay-1500" />
           </svg>

           {/* Nodes - Positioned along the new Main Wave path */}
          
          {/* 1. Piscinas (Cresta) - x ~ 10.5% */}
          <Link to="/productos?cat=AGUA&sub=Piscina" className="absolute left-[10.5%] top-[158px] flex flex-col items-center group z-20 -translate-x-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col items-center"
            >
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white border-[3px] border-cyan-400 flex items-center justify-center shadow-[0_10px_20px_rgba(34,211,238,0.2)] group-hover:scale-110 group-hover:shadow-[0_20px_30px_rgba(34,211,238,0.4)] transition-all duration-300 relative">
                <div className="absolute inset-0 rounded-full bg-cyan-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Wind size={32} className="text-slate-600 relative z-10 group-hover:text-cyan-500 transition-colors" strokeWidth={1.5} />
              </div>
              <div className="mt-4 bg-white px-4 py-1.5 rounded-full shadow-md border border-slate-100 group-hover:border-cyan-200 transition-colors">
                <span className="text-xs md:text-sm font-bold text-slate-700 uppercase tracking-wider group-hover:text-cyan-600 transition-colors">PISCINAS</span>
              </div>
            </motion.div>
          </Link>

          {/* 2. Agua Residual (Mid) - x ~ 25% */}
          <Link to="/productos?cat=AGUA&sub=Tratamiento de Aguas Residuales" className="absolute left-[25%] top-[202px] flex flex-col items-center group z-20 -translate-x-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-col items-center"
            >
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white border-[3px] border-cyan-400 flex items-center justify-center shadow-[0_10px_20px_rgba(34,211,238,0.2)] group-hover:scale-110 group-hover:shadow-[0_20px_30px_rgba(34,211,238,0.4)] transition-all duration-300 relative">
                <div className="absolute inset-0 rounded-full bg-cyan-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Droplet size={32} className="text-slate-600 relative z-10 group-hover:text-cyan-500 transition-colors" strokeWidth={1.5} />
              </div>
              <div className="mt-4 bg-white px-4 py-1.5 rounded-full shadow-md border border-slate-100 group-hover:border-cyan-200 transition-colors text-center">
                <span className="text-xs md:text-sm font-bold text-slate-700 uppercase tracking-wider group-hover:text-cyan-600 transition-colors">AGUA<br/>RESIDUAL</span>
              </div>
            </motion.div>
          </Link>

          {/* 3. Medición y Control (Valle) - x ~ 39.5% */}
          <Link to="/productos?cat=AGUA&sub=Industrial" className="absolute left-[39.5%] top-[246px] flex flex-col items-center group z-20 -translate-x-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="flex flex-col items-center"
            >
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white border-[3px] border-cyan-400 flex items-center justify-center shadow-[0_10px_20px_rgba(34,211,238,0.2)] group-hover:scale-110 group-hover:shadow-[0_20px_30px_rgba(34,211,238,0.4)] transition-all duration-300 relative">
                <div className="absolute inset-0 rounded-full bg-cyan-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Activity size={32} className="text-slate-600 relative z-10 group-hover:text-cyan-500 transition-colors" strokeWidth={1.5} />
              </div>
              <div className="mt-4 bg-white px-4 py-1.5 rounded-full shadow-md border border-slate-100 group-hover:border-cyan-200 transition-colors text-center">
                <span className="text-xs md:text-sm font-bold text-slate-700 uppercase tracking-wider group-hover:text-cyan-600 transition-colors">MEDICIÓN<br/>Y CONTROL</span>
              </div>
            </motion.div>
          </Link>

          {/* 4. Agua Potable (Cresta - Grande) - x ~ 60.5% */}
          <Link to="/productos?cat=AGUA&sub=Agua Potable" className="absolute left-[60.5%] top-[142px] flex flex-col items-center group z-20 -translate-x-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1.4 }}
              className="flex flex-col items-center"
            >
              <div className="w-28 h-28 md:w-36 md:h-36 rounded-full bg-white border-[4px] border-blue-600 flex items-center justify-center shadow-[0_20px_50px_rgba(37,99,235,0.3)] group-hover:scale-110 group-hover:shadow-[0_30px_60px_rgba(37,99,235,0.5)] transition-all duration-300 relative z-30 ring-4 ring-blue-50">
                <div className="absolute inset-0 rounded-full bg-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Droplet size={56} className="text-blue-600 fill-blue-50 relative z-10" strokeWidth={1.5} />
              </div>
              <div className="mt-6 bg-white px-6 py-2 rounded-full shadow-lg border border-blue-100 group-hover:border-blue-200 transition-colors text-center relative z-30">
                <span className="text-sm md:text-base font-black text-slate-800 uppercase tracking-wider group-hover:text-blue-600 transition-colors">AGUA<br/>POTABLE</span>
              </div>
            </motion.div>
          </Link>

          {/* 5. Bombeo (Mid) - x ~ 75% */}
          <Link to="/productos?cat=AGUA&sub=Bombeo" className="absolute left-[75%] top-[202px] flex flex-col items-center group z-20 -translate-x-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1.8 }}
              className="flex flex-col items-center"
            >
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white border-[3px] border-cyan-400 flex items-center justify-center shadow-[0_10px_20px_rgba(34,211,238,0.2)] group-hover:scale-110 group-hover:shadow-[0_20px_30px_rgba(34,211,238,0.4)] transition-all duration-300 relative">
                <div className="absolute inset-0 rounded-full bg-cyan-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Wind size={32} className="text-slate-600 relative z-10 group-hover:text-cyan-500 transition-colors" strokeWidth={1.5} />
              </div>
              <div className="mt-4 bg-white px-4 py-1.5 rounded-full shadow-md border border-slate-100 group-hover:border-cyan-200 transition-colors">
                <span className="text-xs md:text-sm font-bold text-slate-700 uppercase tracking-wider group-hover:text-cyan-600 transition-colors">BOMBEO</span>
              </div>
            </motion.div>
          </Link>

          {/* 6. Servicios (Valle) - x ~ 89.5% */}
          <Link to="/servicios" className="absolute left-[89.5%] top-[246px] flex flex-col items-center group z-20 -translate-x-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 2.1 }}
              className="flex flex-col items-center"
            >
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white border-[3px] border-cyan-400 flex items-center justify-center shadow-[0_10px_20px_rgba(34,211,238,0.2)] group-hover:scale-110 group-hover:shadow-[0_20px_30px_rgba(34,211,238,0.4)] transition-all duration-300 relative">
                <div className="absolute inset-0 rounded-full bg-cyan-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <FileText size={32} className="text-slate-600 relative z-10 group-hover:text-cyan-500 transition-colors" strokeWidth={1.5} />
              </div>
              <div className="mt-4 bg-white px-4 py-1.5 rounded-full shadow-md border border-slate-100 group-hover:border-cyan-200 transition-colors">
                <span className="text-xs md:text-sm font-bold text-slate-700 uppercase tracking-wider group-hover:text-cyan-600 transition-colors">SERVICIOS</span>
              </div>
            </motion.div>
          </Link>
        </div>

        {/* Mobile View */}
        <div className="grid grid-cols-2 gap-6 md:hidden">
           <Link to="/productos?cat=AGUA&sub=Piscina" className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
             <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mb-4 text-slate-800 border-2 border-cyan-400">
               <Wind size={24} />
             </div>
             <span className="text-xs font-bold text-gray-700 text-center uppercase tracking-wide">PISCINAS</span>
           </Link>
           
           <Link to="/productos?cat=AGUA&sub=Tratamiento de Aguas Residuales" className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
             <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mb-4 text-slate-800 border-2 border-cyan-400">
               <Droplet size={24} />
             </div>
             <span className="text-xs font-bold text-gray-700 text-center uppercase tracking-wide">AGUA RESIDUAL</span>
           </Link>
           
           <Link to="/productos?cat=AGUA&sub=Industrial" className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
             <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mb-4 text-slate-800 border-2 border-cyan-400">
               <Activity size={24} />
             </div>
             <span className="text-xs font-bold text-gray-700 text-center uppercase tracking-wide">MEDICIÓN Y CONTROL</span>
           </Link>
           
           <Link to="/productos?cat=AGUA&sub=Agua Potable" className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
             <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mb-4 text-slate-800 border-2 border-cyan-400">
               <Droplet size={24} className="fill-cyan-100" />
             </div>
             <span className="text-xs font-bold text-gray-700 text-center uppercase tracking-wide">AGUA POTABLE</span>
           </Link>
           
           <Link to="/productos?cat=AGUA&sub=Bombeo" className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
             <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mb-4 text-slate-800 border-2 border-cyan-400">
               <Wind size={24} />
             </div>
             <span className="text-xs font-bold text-gray-700 text-center uppercase tracking-wide">BOMBEO</span>
           </Link>
           
           <Link to="/servicios" className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
             <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mb-4 text-slate-800 border-2 border-cyan-400">
               <FileText size={24} />
             </div>
             <span className="text-xs font-bold text-gray-700 text-center uppercase tracking-wide">SERVICIOS</span>
           </Link>
        </div>
      </div>
    </section>
  );
}
