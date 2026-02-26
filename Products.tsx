
import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Search, Filter, ChevronDown, ChevronRight, ShoppingCart } from 'lucide-react';
import { productsMock, Product } from "./productsMock";
import { megaMenuProductosData, MegaMenuItem } from "./megaMenuProductosData";
import Navigation from "./Navigation";
import Footer from "./Footer";

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState('');
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  // Read filters from URL
  const selectedCategory = searchParams.get('cat');
  const selectedSubcategory = searchParams.get('sub');
  const selectedItem = searchParams.get('item');

  // Filter Logic
  const filteredProducts = productsMock.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          product.shortSpec.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory ? product.category === selectedCategory : true;
    const matchesSubcategory = selectedSubcategory ? product.subcategory === selectedSubcategory : true;
    
    // Multi-tag matching: If an item is selected, check if the product's tags include it
    const matchesItem = selectedItem ? product.tags.includes(selectedItem) : true;

    return matchesSearch && matchesCategory && matchesSubcategory && matchesItem;
  });

  const clearFilters = () => {
    setSearchParams({});
    setSearchTerm('');
  };

  const handleCategoryClick = (cat: string) => {
    setSearchParams({ cat });
  };

  const handleSubcategoryClick = (cat: string, sub: string) => {
    setSearchParams({ cat, sub });
  };

  const handleItemClick = (cat: string, sub: string, item: string) => {
    setSearchParams({ cat, sub, item });
  };

  return (
    <div className="font-sans text-gray-700 bg-white">
      <div className="min-h-screen bg-gray-50 pt-32 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb (Optional but requested) */}
          <div className="flex items-center text-sm text-gray-500 mb-6 overflow-x-auto whitespace-nowrap">
            <Link to="/" className="hover:text-primary transition-colors">Inicio</Link>
            <ChevronRight size={14} className="mx-2" />
            <Link to="/productos" className={`hover:text-primary transition-colors ${!selectedCategory ? 'font-bold text-primary' : ''}`}>Catálogo</Link>
            {selectedCategory && (
              <>
                <ChevronRight size={14} className="mx-2" />
                <span className={`${!selectedSubcategory ? 'font-bold text-primary' : ''}`}>{selectedCategory}</span>
              </>
            )}
            {selectedSubcategory && (
              <>
                <ChevronRight size={14} className="mx-2" />
                <span className={`${!selectedItem ? 'font-bold text-primary' : ''}`}>{selectedSubcategory}</span>
              </>
            )}
            {selectedItem && (
              <>
                <ChevronRight size={14} className="mx-2" />
                <span className="font-bold text-primary">{selectedItem}</span>
              </>
            )}
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            
            {/* Sidebar (Desktop) & Mobile Drawer Trigger */}
            <div className="lg:w-1/4 flex-shrink-0">
              {/* Mobile Filter Toggle */}
              <button 
                className="lg:hidden w-full flex items-center justify-between bg-white p-4 rounded-lg shadow-sm border border-gray-100 mb-4"
                onClick={() => setIsMobileFiltersOpen(!isMobileFiltersOpen)}
              >
                <span className="font-bold text-gray-800 flex items-center gap-2">
                  <Filter size={18} /> Filtros y Categorías
                </span>
                <ChevronDown size={18} className={`transition-transform ${isMobileFiltersOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Sidebar Content */}
              <div className={`
                lg:block 
                ${isMobileFiltersOpen ? 'block' : 'hidden'} 
                bg-white rounded-xl shadow-sm border border-gray-100 p-6 sticky top-24
              `}>
                <div className="flex justify-between items-center mb-6">
                  <h3 className="font-bold text-lg text-gray-900">Categorías</h3>
                  {(selectedCategory || selectedSubcategory || selectedItem) && (
                    <button onClick={clearFilters} className="text-xs text-red-500 hover:text-red-700 font-medium">
                      Limpiar
                    </button>
                  )}
                </div>

                <div className="space-y-4">
                  {megaMenuProductosData.map((cat) => (
                    <SidebarCategory 
                      key={cat.label} 
                      category={cat} 
                      selectedCategory={selectedCategory}
                      selectedSubcategory={selectedSubcategory}
                      selectedItem={selectedItem}
                      onCategoryClick={handleCategoryClick}
                      onSubcategoryClick={handleSubcategoryClick}
                      onItemClick={handleItemClick}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:w-3/4 flex-grow">
              
              {/* Top Bar: Search & Quick Filters */}
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 mb-6 flex flex-col md:flex-row gap-4 justify-between items-center">
                <div className="relative w-full md:w-96">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                  <input 
                    type="text" 
                    placeholder="Buscar productos..." 
                    className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                
                <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
                  {/* Placeholder Filters */}
                  <select className="px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-600 focus:outline-none focus:border-primary cursor-pointer">
                    <option>Marca</option>
                    <option>Todas</option>
                  </select>
                  <select className="px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-600 focus:outline-none focus:border-primary cursor-pointer">
                    <option>Precio</option>
                    <option>Menor a Mayor</option>
                    <option>Mayor a Menor</option>
                  </select>
                </div>
              </div>

              {/* Loading State or Products Grid */}
              {isLoading ? (
                <div className="flex flex-col items-center justify-center py-32">
                  <div className="relative w-16 h-16">
                    <div className="absolute top-0 left-0 w-full h-full border-4 border-gray-200 rounded-full"></div>
                    <div className="absolute top-0 left-0 w-full h-full border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
                  </div>
                  <p className="mt-4 text-gray-500 font-medium animate-pulse">Cargando catálogo...</p>
                </div>
              ) : (
                <>
                  <div className="mb-4 text-sm text-gray-500">
                    Mostrando <span className="font-bold text-gray-900">{filteredProducts.length}</span> productos
                  </div>

                  {filteredProducts.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                      {filteredProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-20 bg-white rounded-xl border border-gray-100 border-dashed">
                      <Search size={48} className="mx-auto text-gray-300 mb-4" />
                      <h3 className="text-xl font-bold text-gray-900 mb-2">No se encontraron productos</h3>
                      <p className="text-gray-500 mb-6">Intenta con otros términos de búsqueda o filtros.</p>
                      <button 
                        onClick={clearFilters}
                        className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                      >
                        Limpiar Filtros
                      </button>
                    </div>
                  )}
                </>
              )}

            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

// --- Helper Components ---

interface SidebarCategoryProps {
  category: MegaMenuItem;
  selectedCategory: string | null;
  selectedSubcategory: string | null;
  selectedItem: string | null;
  onCategoryClick: (cat: string) => void;
  onSubcategoryClick: (cat: string, sub: string) => void;
  onItemClick: (cat: string, sub: string, item: string) => void;
}

const SidebarCategory = ({ 
  category, 
  selectedCategory, 
  selectedSubcategory, 
  selectedItem,
  onCategoryClick, 
  onSubcategoryClick, 
  onItemClick 
}: SidebarCategoryProps) => {
  const isSelected = selectedCategory === category.label;
  const [isOpen, setIsOpen] = useState(isSelected); // Auto-open if selected

  // Sync open state if selection changes externally
  useEffect(() => {
    if (isSelected) setIsOpen(true);
  }, [isSelected]);

  return (
    <div className="border-b border-gray-50 last:border-0 pb-2">
      <button 
        className={`w-full flex items-center justify-between py-2 text-left font-semibold transition-colors ${isSelected ? 'text-primary' : 'text-gray-700 hover:text-primary'}`}
        onClick={() => {
          setIsOpen(!isOpen);
          onCategoryClick(category.label);
        }}
      >
        {category.label}
        <ChevronDown size={16} className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && category.subItems && (
        <div className="pl-4 mt-1 space-y-1">
          {category.subItems.map((sub: MegaMenuItem) => (
            <SidebarSubcategory 
              key={sub.label} 
              categoryLabel={category.label}
              subcategory={sub}
              selectedSubcategory={selectedSubcategory}
              selectedItem={selectedItem}
              onSubcategoryClick={onSubcategoryClick}
              onItemClick={onItemClick}
            />
          ))}
        </div>
      )}
    </div>
  );
};

interface SidebarSubcategoryProps {
  categoryLabel: string;
  subcategory: MegaMenuItem;
  selectedSubcategory: string | null;
  selectedItem: string | null;
  onSubcategoryClick: (cat: string, sub: string) => void;
  onItemClick: (cat: string, sub: string, item: string) => void;
}

const SidebarSubcategory = ({ 
  categoryLabel, 
  subcategory, 
  selectedSubcategory, 
  selectedItem,
  onSubcategoryClick, 
  onItemClick 
}: SidebarSubcategoryProps) => {
  const isSelected = selectedSubcategory === subcategory.label;
  const [isOpen, setIsOpen] = useState(isSelected);

  useEffect(() => {
    if (isSelected) setIsOpen(true);
  }, [isSelected]);

  return (
    <div>
      <button 
        className={`w-full flex items-center justify-between py-1.5 text-sm text-left transition-colors ${isSelected ? 'text-primary font-medium' : 'text-gray-600 hover:text-primary'}`}
        onClick={() => {
          setIsOpen(!isOpen);
          onSubcategoryClick(categoryLabel, subcategory.label);
        }}
      >
        {subcategory.label}
        {subcategory.subItems && (
          <ChevronDown size={14} className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
        )}
      </button>

      {isOpen && subcategory.subItems && (
        <div className="pl-3 mt-1 space-y-1 border-l border-gray-200 ml-1">
          {subcategory.subItems.map((item: MegaMenuItem) => (
            <button
              key={item.label}
              className={`w-full block text-left py-1 px-2 text-xs rounded-md transition-colors ${selectedItem === item.label ? 'bg-primary/10 text-primary font-medium' : 'text-gray-500 hover:text-primary hover:bg-gray-50'}`}
              onClick={(e) => {
                e.stopPropagation();
                onItemClick(categoryLabel, subcategory.label, item.label);
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md border border-gray-100 transition-all duration-300 overflow-hidden flex flex-col group">
      {/* Image Placeholder */}
      <div className="h-48 bg-gray-50 relative overflow-hidden flex items-center justify-center">
        {product.image ? (
          <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        ) : (
          <div className="text-gray-300 flex flex-col items-center">
            <ShoppingCart size={32} strokeWidth={1.5} />
            <span className="text-xs mt-2 font-medium">No Image</span>
          </div>
        )}
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-bold text-gray-600 shadow-sm">
          {product.category}
        </div>
      </div>

      <div className="p-5 flex flex-col flex-grow">
        <div className="mb-2">
          <span className="text-xs font-semibold text-primary uppercase tracking-wider">{product.subcategory}</span>
          {product.tags && product.tags.length > 0 && (
            <span className="text-xs text-gray-400"> / {product.tags[0]} {product.tags.length > 1 ? `+${product.tags.length - 1}` : ''}</span>
          )}
        </div>
        
        <h3 className="font-bold text-gray-900 text-lg mb-2 leading-tight group-hover:text-primary transition-colors">{product.name}</h3>
        
        <p className="text-sm text-gray-500 mb-4 line-clamp-2 flex-grow">{product.shortSpec}</p>
        
        <div className="mt-auto pt-4 border-t border-gray-50 flex items-center justify-between">
          <span className="text-xs text-gray-400 font-medium">
            {product.brand || 'Generico'}
          </span>
          <button className="bg-primary text-white text-sm font-bold px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors shadow-sm hover:shadow active:scale-95 transform duration-150">
            Cotizar
          </button>
        </div>
      </div>
    </div>
  );
};
