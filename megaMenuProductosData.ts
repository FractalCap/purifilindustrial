
export interface MegaMenuItem {
  label: string;
  href: string;
  subItems?: MegaMenuItem[];
}

export const megaMenuProductosData: MegaMenuItem[] = [
  {
    label: "AGUA",
    href: "/productos?cat=AGUA",
    subItems: [
      {
        label: "Agua Potable",
        href: "/productos?cat=AGUA&sub=Agua Potable",
        subItems: [
          { label: "Pozos", href: "/productos?cat=AGUA&sub=Agua Potable&item=Pozos" },
          { label: "Superficial", href: "/productos?cat=AGUA&sub=Agua Potable&item=Superficial" },
          { label: "Lluvias", href: "/productos?cat=AGUA&sub=Agua Potable&item=Lluvias" },
        ]
      },
      {
        label: "Tratamiento de Aguas Residuales",
        href: "/productos?cat=AGUA&sub=Tratamiento de Aguas Residuales",
        subItems: [
          { label: "Industrial", href: "/productos?cat=AGUA&sub=Tratamiento de Aguas Residuales&item=Industrial" },
          { label: "Doméstico", href: "/productos?cat=AGUA&sub=Tratamiento de Aguas Residuales&item=Doméstico" },
        ]
      },
      {
        label: "Industrial",
        href: "/productos?cat=AGUA&sub=Industrial",
        subItems: [
          { label: "Laboratorios", href: "/productos?cat=AGUA&sub=Industrial&item=Laboratorios" },
          { label: "Embotellaciones", href: "/productos?cat=AGUA&sub=Industrial&item=Embotellaciones" },
          { label: "Lavanderías industriales", href: "/productos?cat=AGUA&sub=Industrial&item=Lavanderías industriales" },
          { label: "Consumibles", href: "/productos?cat=AGUA&sub=Industrial&item=Consumibles" },
          { label: "Plantas de alimento", href: "/productos?cat=AGUA&sub=Industrial&item=Plantas de alimento" },
        ]
      },
      {
        label: "Piscina",
        href: "/productos?cat=AGUA&sub=Piscina",
        subItems: [
          { label: "Ozono", href: "/productos?cat=AGUA&sub=Piscina&item=Ozono" },
          { label: "Electroionización", href: "/productos?cat=AGUA&sub=Piscina&item=Electroionización" },
        ]
      },
    ]
  },
  {
    label: "AIRE",
    href: "/productos?cat=AIRE",
    subItems: [
      { label: "Iones", href: "/productos?cat=AIRE&sub=Iones" },
      { label: "Desinfección", href: "/productos?cat=AIRE&sub=Desinfección" },
    ]
  },
  {
    label: "AGROINDUSTRIA",
    href: "/productos?cat=AGROINDUSTRIA",
    subItems: [
      { label: "Pecuario", href: "/productos?cat=AGROINDUSTRIA&sub=Pecuario" },
      { label: "Agrícola", href: "/productos?cat=AGROINDUSTRIA&sub=Agrícola" },
    ]
  }
];
