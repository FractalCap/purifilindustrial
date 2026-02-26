
import React from 'react';
import { Clock } from 'lucide-react';

export default function BlogPreview() {
  return (
    <section className="py-24 bg-gray-50" id="blog">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-2xl mx-auto">
          <span className="text-primary font-bold tracking-widest uppercase text-sm mb-2 block">Actualidad</span>
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Blog Técnico</h2>
          
          <div className="bg-white rounded-2xl p-12 shadow-sm border border-gray-100 flex flex-col items-center justify-center">
            <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mb-6">
              <Clock size={40} className="text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Próximamente</h3>
            <p className="text-gray-500 text-lg">
              Estamos preparando contenido técnico especializado para usted.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
