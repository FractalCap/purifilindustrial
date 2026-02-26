
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Youtube, MapPin, Phone, Mail } from 'lucide-react';
import logoPuri from './logopuri.png';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <img src={logoPuri} alt="Purifil" className="h-10 w-auto brightness-0 invert opacity-80" />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">Soluciones integrales para la purificación de agua y aire. Tecnología avanzada para el sector industrial e institucional.</p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/purifilinter" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors p-2 bg-gray-800 rounded-full hover:bg-primary"><Facebook size={18} /></a>
              <a href="https://www.instagram.com/purifilinternacional?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors p-2 bg-gray-800 rounded-full hover:bg-primary"><Instagram size={18} /></a>
              <a href="https://www.youtube.com/@PurifilTV/featured" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors p-2 bg-gray-800 rounded-full hover:bg-primary"><Youtube size={18} /></a>
            </div>
          </div>
          
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-gray-200 mb-6">Navegación</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link to="/" className="hover:text-primary transition-colors">Inicio</Link></li>
              <li><a href="/#nosotros" className="hover:text-primary transition-colors">Nosotros</a></li>
              <li><Link to="/productos" className="hover:text-primary transition-colors">Productos</Link></li>
              <li><a href="/#blog" className="hover:text-primary transition-colors">Blog</a></li>
              <li><a href="https://wa.me/573112100552" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Contacto</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-gray-200 mb-6">Líneas de Negocio</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link to="/productos?cat=AGUA" className="hover:text-primary transition-colors">Tratamiento de Agua</Link></li>
              <li><Link to="/productos?cat=AIRE" className="hover:text-primary transition-colors">Purificación de Aire</Link></li>
              <li><Link to="/productos?cat=AGROINDUSTRIA" className="hover:text-primary transition-colors">Sector Agroindustrial</Link></li>
              <li><a href="/#institutional" className="hover:text-primary transition-colors">Sector Institucional</a></li>
              <li><a href="https://wa.me/573112100552?text=Hola,%20estoy%20interesado%20en%20el%20servicio%20de%20mantenimiento" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Mantenimiento</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-gray-200 mb-6">Contacto</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary mt-0.5" />
                <span>Cra. 28 #83-31<br />Bogotá, Colombia</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-primary" />
                <a href="https://wa.me/573112100552" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">+57 311 2100552</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-primary flex-shrink-0" />
                <span>telemercadeo@purifilinternacional.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; 2024 Purifil Internacional S.A.S. Todos los derechos reservados.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Política de Privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Términos y Condiciones</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
