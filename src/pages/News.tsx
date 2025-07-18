
const News = () => {
  const newsArticles = [
    {
      id: 1,
      title: "SS25: Nueva Colección",
      date: "Diciembre 2024",
      excerpt: "Presentamos nuestra nueva colección primavera-verano 2025, inspirada en la autenticidad y el propósito.",
      image: "/lovable-uploads/2a2ab176-4e73-4d93-80db-ff6421e8ec98.png"
    },
    {
      id: 2,
      title: "Detrás del Diseño",
      date: "Noviembre 2024",
      excerpt: "Conoce el proceso creativo detrás de cada pieza WINEBRAND y nuestra filosofía de diseño.",
      image: "/lovable-uploads/e92f1fbd-6467-4617-a7f5-95406df6dd4f.png"
    },
    {
      id: 3,
      title: "Cultivando Calidad",
      date: "Octubre 2024",
      excerpt: "Nuestro compromiso con la calidad no es solo una promesa, es una forma de vida.",
      image: "/lovable-uploads/1166ebfa-17d5-4562-a85d-f0420e0dc857.png"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif mb-6 text-gray-900">
            News
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Mantente al día con las últimas novedades, lanzamientos y historias detrás de WINEBRAND.
          </p>
        </div>
      </section>

      {/* News Articles */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {newsArticles.map((article) => (
              <article key={article.id} className="group cursor-pointer">
                <div className="overflow-hidden mb-6">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-64 sm:h-80 object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                
                <div className="space-y-3">
                  <p className="text-sm uppercase tracking-wider text-gray-500">
                    {article.date}
                  </p>
                  
                  <h2 className="text-xl sm:text-2xl font-serif text-gray-900 group-hover:text-gray-600 transition-colors">
                    {article.title}
                  </h2>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {article.excerpt}
                  </p>
                  
                  <button className="text-sm uppercase tracking-wider text-gray-900 hover:text-gray-600 transition-colors pt-2">
                    Leer más →
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-serif mb-6 text-gray-900">
            Mantente Conectado
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Suscríbete a nuestro newsletter y sé el primero en conocer nuestras novedades, lanzamientos exclusivos y historias detrás de cada colección.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Tu email"
              className="flex-1 px-4 py-3 border border-gray-200 focus:outline-none focus:border-gray-400 transition-colors"
            />
            <button className="px-6 py-3 bg-black text-white hover:bg-gray-800 transition-colors uppercase text-sm tracking-wider">
              Suscribirse
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;
