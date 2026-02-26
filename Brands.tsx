
export default function Brands() {
  return (
    <section className="py-12 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-center text-gray-500 text-sm font-semibold tracking-wider uppercase mb-8">Nuestras Marcas Aliadas</h3>
        <div className="flex flex-wrap justify-center gap-12 items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {/* Brand Placeholders */}
          <div className="text-2xl font-bold text-gray-400">PENTAIR</div>
          <div className="text-2xl font-bold text-gray-400">HAYWARD</div>
          <div className="text-2xl font-bold text-gray-400">PEDROLLO</div>
          <div className="text-2xl font-bold text-gray-400">SAER</div>
          <div className="text-2xl font-bold text-gray-400">FRANKLIN</div>
        </div>
      </div>
    </section>
  );
}
