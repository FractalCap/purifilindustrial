
import React from 'react';
import { Quote, User } from 'lucide-react';

const Testimonials = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden relative">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-cyan-50 rounded-full mix-blend-multiply filter blur-3xl opacity-30 translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">
            Lo que dicen <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-500">nuestros clientes</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-cyan-400 mx-auto rounded-full mb-6"></div>
        </div>

        {/* Placeholder Cards with Blur Effect */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Blur Overlay */}
          <div className="absolute inset-0 z-20 backdrop-blur-[2px] bg-white/30 flex items-center justify-center">
            <div className="bg-white/90 p-8 rounded-2xl shadow-2xl border border-gray-100 text-center transform -rotate-2 max-w-md mx-4">
              <Quote size={48} className="text-primary/20 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Historias Reales</h3>
              <p className="text-gray-600">
                Muy pronto podrás conocer cómo nuestras soluciones de purificación están transformando industrias.
              </p>
            </div>
          </div>

          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 opacity-60">
              <div className="flex items-center gap-1 mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <div key={star} className="w-5 h-5 bg-gray-200 rounded-sm"></div>
                ))}
              </div>
              <div className="space-y-3 mb-8">
                <div className="h-4 bg-gray-100 rounded w-full"></div>
                <div className="h-4 bg-gray-100 rounded w-5/6"></div>
                <div className="h-4 bg-gray-100 rounded w-4/6"></div>
              </div>
              <div className="flex items-center gap-4 pt-6 border-t border-gray-50">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                  <User className="text-gray-300" size={24} />
                </div>
                <div>
                  <div className="h-4 bg-gray-100 rounded w-24 mb-2"></div>
                  <div className="h-3 bg-gray-50 rounded w-32"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
