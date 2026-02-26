
import React from 'react';
import { ArrowRight, Building2 } from 'lucide-react';

export default function LineSwitcher() {
  return (
    <div className="bg-gray-900 text-white text-xs font-medium py-1.5 transition-colors z-[60] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-end items-center gap-4">
        <span className="text-gray-400">División Industrial</span>
        <div className="h-3 w-px bg-gray-700"></div>
        <a 
          href="#institutional" 
          className="flex items-center gap-1 text-gray-300 hover:text-white transition-colors group"
        >
          <Building2 size={12} className="text-blue-400 group-hover:text-blue-300 transition-colors" />
          <span>Ir a Mercado Institucional</span>
          <ArrowRight size={10} className="transform group-hover:translate-x-0.5 transition-transform" />
        </a>
      </div>
    </div>
  );
}
