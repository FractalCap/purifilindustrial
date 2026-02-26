
export default function About() {
  return (
    <section id="nosotros" className="py-20 bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img src="https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Sobre Ozono" className="rounded-lg shadow-xl w-full h-auto object-cover" />
          </div>
          <div className="md:w-1/2">
            <span className="text-primary font-semibold tracking-wider uppercase">Acerca de Nosotros</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6 text-gray-900">Comprometidos con el Agua y la Vida</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              En OZONO S.A.S. entendemos la importancia vital del agua. Por eso, trabajamos incansablemente en busca del acceso al agua limpia y segura para todos los seres vivos.
            </p>
            <blockquote className="border-l-4 border-primary pl-4 italic text-gray-700 mb-6">
              "Nuestro compromiso con la naturaleza es devolverle algo de lo que nos ha dado, el agua como fuente de vida."
            </blockquote>
            <p className="text-gray-600 mb-8">
              ¡Juntos podemos lograrlo! Ofrecemos soluciones integrales para el tratamiento, purificación y manejo eficiente del recurso hídrico.
            </p>
            <a href="#" className="text-primary font-semibold hover:text-accent flex items-center gap-2">
              Conoce más sobre nuestra misión <i className="fas fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
