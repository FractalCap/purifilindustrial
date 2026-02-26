
export interface Product {
  id: string;
  name: string;
  category: "AGUA" | "AIRE" | "AGROINDUSTRIA";
  subcategory: string;
  tags: string[]; // Replaces single 'item' for multi-category support
  brand?: string;
  type?: string;
  shortSpec: string;
  image?: string;
}

export const productsMock: Product[] = [
  // --- INDUSTRIAL SECTOR (Multi-assigned) ---
  {
    id: 'ind-1',
    name: 'Sistema Ultrafiltración UF6EI',
    category: 'AGUA',
    subcategory: 'Industrial',
    tags: ['Laboratorios', 'Embotellaciones', 'Plantas de alimento', 'Lavanderías industriales'],
    shortSpec: 'Capacidad: 6000 L/h, Membrana PVDF',
  },
  {
    id: 'ind-2',
    name: 'Sistema Ultrafiltración PVDF 1000',
    category: 'AGUA',
    subcategory: 'Industrial',
    tags: ['Laboratorios', 'Embotellaciones', 'Plantas de alimento'],
    shortSpec: 'Capacidad: 1000 L/h, Alta resistencia química',
  },
  {
    id: 'ind-3',
    name: 'Sistema Ultrafiltración PVDF 2000',
    category: 'AGUA',
    subcategory: 'Industrial',
    tags: ['Laboratorios', 'Embotellaciones', 'Plantas de alimento'],
    shortSpec: 'Capacidad: 2000 L/h, Alta resistencia química',
  },
  {
    id: 'ind-4',
    name: 'Sistema Ultrafiltración PVC 1000',
    category: 'AGUA',
    subcategory: 'Industrial',
    tags: ['Laboratorios', 'Embotellaciones', 'Plantas de alimento', 'Lavanderías industriales'],
    shortSpec: 'Capacidad: 1000 L/h, Material PVC-U',
  },
  {
    id: 'ind-5',
    name: 'Sistema Ultrafiltración PVC 2000',
    category: 'AGUA',
    subcategory: 'Industrial',
    tags: ['Laboratorios', 'Embotellaciones', 'Plantas de alimento', 'Lavanderías industriales'],
    shortSpec: 'Capacidad: 2000 L/h, Material PVC-U',
  },
  {
    id: 'ind-6',
    name: 'Sistema Ultrafiltración PVC 3000',
    category: 'AGUA',
    subcategory: 'Industrial',
    tags: ['Laboratorios', 'Embotellaciones', 'Plantas de alimento', 'Lavanderías industriales'],
    shortSpec: 'Capacidad: 3000 L/h, Material PVC-U',
  },
  {
    id: 'ind-7',
    name: 'Sistema UF+UV 4',
    category: 'AGUA',
    subcategory: 'Industrial',
    tags: ['Laboratorios', 'Embotellaciones', 'Plantas de alimento'],
    shortSpec: 'Ultrafiltración + Desinfección UV integrada, 4 GPM',
  },
  {
    id: 'ind-8',
    name: 'Sistema UF+UV 6',
    category: 'AGUA',
    subcategory: 'Industrial',
    tags: ['Laboratorios', 'Embotellaciones', 'Plantas de alimento'],
    shortSpec: 'Ultrafiltración + Desinfección UV integrada, 6 GPM',
  },
  {
    id: 'ind-9',
    name: 'Filtro Bolsa Industrial FC BOLSA',
    category: 'AGUA',
    subcategory: 'Tratamiento de Aguas Residuales',
    tags: ['Industrial'],
    shortSpec: 'Carcasa acero inox, para bolsas filtrantes estándar',
  },
  {
    id: 'ind-10',
    name: 'Membrana PVDF 1000L',
    category: 'AGUA',
    subcategory: 'Industrial',
    tags: ['Consumibles'],
    shortSpec: 'Repuesto membrana fibra hueca PVDF',
  },

  // --- EXISTING CATEGORIES ADAPTED TO NEW SCHEMA ---
  
  // AGUA -> Agua Potable
  {
    id: '1',
    name: 'Bomba Sumergible Pozo Profundo',
    category: 'AGUA',
    subcategory: 'Agua Potable',
    tags: ['Pozos'],
    brand: 'Grundfos',
    shortSpec: 'Caudal máx: 10 m3/h, Altura: 50m',
  },
  {
    id: '2',
    name: 'Sistema de Captación Superficial',
    category: 'AGUA',
    subcategory: 'Agua Potable',
    tags: ['Superficial'],
    shortSpec: 'Filtro de rejilla autolimpiante',
  },
  {
    id: '3',
    name: 'Tanque de Almacenamiento Pluvial',
    category: 'AGUA',
    subcategory: 'Agua Potable',
    tags: ['Lluvias'],
    shortSpec: 'Capacidad: 5000L, Material: PEAD',
  },

  // AGUA -> Tratamiento de Aguas Residuales
  {
    id: '4',
    name: 'Planta de Tratamiento Compacta',
    category: 'AGUA',
    subcategory: 'Tratamiento de Aguas Residuales',
    tags: ['Industrial'],
    shortSpec: 'Capacidad: 50 m3/día, Tecnología: MBBR',
  },
  {
    id: '5',
    name: 'Biodigestor Séptico',
    category: 'AGUA',
    subcategory: 'Tratamiento de Aguas Residuales',
    tags: ['Doméstico'],
    shortSpec: 'Capacidad: 1200L, Autolimpiable',
  },

  // AGUA -> Piscina
  {
    id: '11',
    name: 'Generador de Ozono Piscina',
    category: 'AGUA',
    subcategory: 'Piscina',
    tags: ['Ozono'],
    shortSpec: 'Producción: 5 g/h, Para piscinas hasta 100 m3',
  },
  {
    id: '12',
    name: 'Sistema de Electroionización Cobre/Plata',
    category: 'AGUA',
    subcategory: 'Piscina',
    tags: ['Electroionización'],
    shortSpec: 'Control automático, Para piscinas hasta 80 m3',
  },

  // AIRE
  {
    id: '13',
    name: 'Generador de Iones Negativos',
    category: 'AIRE',
    subcategory: 'Iones',
    tags: ['Iones'], // Self-referential tag for simplicity if no sub-items
    shortSpec: 'Cobertura: 50 m2, Silencioso',
  },
  {
    id: '14',
    name: 'Cañón de Ozono Desinfección',
    category: 'AIRE',
    subcategory: 'Desinfección',
    tags: ['Desinfección'],
    shortSpec: 'Producción: 10 g/h, Temporizador integrado',
  },

  // AGROINDUSTRIA
  {
    id: '15',
    name: 'Sistema de Tratamiento de Agua Pecuario',
    category: 'AGROINDUSTRIA',
    subcategory: 'Pecuario',
    tags: ['Pecuario'],
    shortSpec: 'Eliminación de patógenos, Dosificación automática',
  },
  {
    id: '16',
    name: 'Sistema de Riego de Precisión',
    category: 'AGROINDUSTRIA',
    subcategory: 'Agrícola',
    tags: ['Agrícola'],
    shortSpec: 'Control por sectores, Ahorro de agua',
  },
];
