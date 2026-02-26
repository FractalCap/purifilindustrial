import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Droplet, Wind, Leaf } from 'lucide-react';
import { megaMenuProductosData, MegaMenuItem } from "./megaMenuProductosData";

// --- Icons Mapping ---
const getIconForCategory = (label: string) => {
  const l = label.toLowerCase();
  if (l.includes('agua')) return <Droplet size={20} className="text-blue-500" />;
  if (l.includes('aire')) return <Wind size={20} className="text-cyan-400" />;
  if (l.includes('agro')) return <Leaf size={20} className="text-green-500" />;
  return null;
};

// --- Desktop Component ---
export const MegaMenuDesktop: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = window.setTimeout(() => {
      setIsOpen(false);
    }, 150); // 150ms delay
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div 
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link 
        to="/productos"
        className="flex items-center gap-1 text-gray-700 hover:text-primary font-bold text-sm tracking-wide uppercase transition-colors focus:outline-none"
        aria-haspopup="true"
        aria-expanded={isOpen}
        aria-controls="products-mega-menu"
      >
        Productos
        <ChevronDown 
          size={16} 
          className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
        />
      </Link>

      {/* Mega Menu Panel */}
      <div 
        id="products-mega-menu"
        className={`
          absolute left-1/2 -translate-x-1/2 mt-2 w-[900px] bg-white rounded-xl shadow-lg border border-gray-100 p-8 z-50
          transition-all duration-200 origin-top
          ${isOpen ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'}
        `}
      >
        <div className="grid grid-cols-3 gap-8">
          {megaMenuProductosData.map((category) => (
            <div key={category.label} className="flex flex-col">
              {/* Category Header */}
              <Link 
                to={category.href} 
                className="flex items-center gap-2 mb-4 pb-2 border-b border-gray-100 group/header"
                onClick={() => setIsOpen(false)}
              >
                {getIconForCategory(category.label)}
                <span className="font-bold text-lg text-gray-800 group-hover/header:text-primary transition-colors">
                  {category.label}
                </span>
              </Link>

              {/* Subcategories */}
              <div className="flex flex-col gap-3">
                {category.subItems?.map((item) => (
                  <DesktopMenuItem key={item.label} item={item} closeMenu={() => setIsOpen(false)} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const DesktopMenuItem: React.FC<{ item: MegaMenuItem; closeMenu: () => void }> = ({ item, closeMenu }) => {
  const hasSubItems = item.subItems && item.subItems.length > 0;

  return (
    <div className="flex flex-col">
      <Link 
        to={item.href} 
        className={`
          text-sm font-semibold text-gray-700 hover:text-primary hover:translate-x-1 transition-all flex items-center
          ${hasSubItems ? 'mb-1' : 'mb-0'}
        `}
        onClick={closeMenu}
      >
        {item.label}
      </Link>
      
      {hasSubItems && (
        <div className="pl-3 border-l-2 border-gray-100 ml-1 mt-1 flex flex-col gap-1.5">
          {item.subItems!.map((sub) => (
            <Link 
              key={sub.label} 
              to={sub.href} 
              className="text-xs text-gray-500 hover:text-primary transition-colors py-0.5"
              onClick={closeMenu}
            >
              {sub.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};


// --- Mobile Component ---
export const MegaMenuMobile: React.FC<{ closeMobileMenu: () => void }> = ({ closeMobileMenu }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full border-b border-gray-100">
      <div className="w-full flex justify-between items-center py-2">
        <Link 
          to="/productos" 
          className="text-gray-700 font-bold text-sm tracking-wide uppercase hover:text-primary transition-colors"
          onClick={closeMobileMenu}
        >
          Productos
        </Link>
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 text-gray-700 hover:text-primary transition-colors"
        >
          <ChevronDown 
            size={16} 
            className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
          />
        </button>
      </div>

      <div 
        className={`
          overflow-hidden transition-all duration-300 ease-in-out
          ${isOpen ? 'max-h-[1000px] opacity-100 pb-4' : 'max-h-0 opacity-0'}
        `}
      >
        <div className="flex flex-col gap-4 pl-2">
          {megaMenuProductosData.map((category) => (
            <MobileCategory key={category.label} category={category} closeMobileMenu={closeMobileMenu} />
          ))}
        </div>
      </div>
    </div>
  );
};

const MobileCategory: React.FC<{ category: MegaMenuItem; closeMobileMenu: () => void }> = ({ category, closeMobileMenu }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between pr-2">
        <Link 
          to={category.href} 
          className="flex items-center gap-2 font-bold text-gray-800 text-sm py-1"
          onClick={closeMobileMenu}
        >
          {getIconForCategory(category.label)}
          {category.label}
        </Link>
        <button onClick={() => setIsExpanded(!isExpanded)} className="p-1">
          <ChevronDown size={14} className={`text-gray-400 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
        </button>
      </div>

      {isExpanded && (
        <div className="pl-6 flex flex-col gap-2 mt-1 border-l border-gray-100 ml-2">
          {category.subItems?.map((item) => (
            <MobileSubItem key={item.label} item={item} closeMobileMenu={closeMobileMenu} />
          ))}
        </div>
      )}
    </div>
  );
};

const MobileSubItem: React.FC<{ item: MegaMenuItem; closeMobileMenu: () => void }> = ({ item, closeMobileMenu }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const hasSubItems = item.subItems && item.subItems.length > 0;

  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between pr-2">
        <Link 
          to={item.href} 
          className="text-sm text-gray-600 font-medium hover:text-primary"
          onClick={closeMobileMenu}
        >
          {item.label}
        </Link>
        {hasSubItems && (
          <button onClick={() => setIsExpanded(!isExpanded)} className="p-1">
            <ChevronDown size={12} className={`text-gray-400 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
          </button>
        )}
      </div>

      {hasSubItems && isExpanded && (
        <div className="pl-3 flex flex-col gap-1.5 mt-1 border-l border-gray-100 ml-1">
          {item.subItems!.map((sub) => (
            <Link 
              key={sub.label} 
              to={sub.href} 
              className="text-xs text-gray-500 hover:text-primary py-0.5"
              onClick={closeMobileMenu}
            >
              {sub.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};
