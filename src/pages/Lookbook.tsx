
import Layout from './Layout';

const Lookbook = () => {
  return (
    <Layout>
      <div className="pt-20 pb-16">
        <div className="editorial-container">
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif mb-4 sm:mb-6">
              SS25 Lookbook
            </h1>
            <p className="text-lg sm:text-xl text-wine-gray max-w-2xl mx-auto px-4">
              Nuestra colección primavera-verano 2025. Prendas que hablan sin gritar, 
              que perduran más allá de las temporadas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16 sm:mb-20">
            <div className="aspect-[3/4] overflow-hidden">
              <img 
                src="/lovable-uploads/68a24d84-4ea0-4014-a8a6-94bff79b56c7.png"
                alt="WINEBRAND SS25 Look 1" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="aspect-[3/4] overflow-hidden">
              <img 
                src="/lovable-uploads/2a2ab176-4e73-4d93-80db-ff6421e8ec98.png"
                alt="WINEBRAND SS25 Look 2" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="aspect-[3/4] overflow-hidden">
              <img 
                src="/lovable-uploads/e92f1fbd-6467-4617-a7f5-95406df6dd4f.png"
                alt="WINEBRAND SS25 Look 3" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="aspect-[3/4] overflow-hidden">
              <img 
                src="/lovable-uploads/1166ebfa-17d5-4562-a85d-f0420e0dc857.png"
                alt="WINEBRAND SS25 Look 4" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="aspect-[3/4] overflow-hidden md:col-span-2">
              <img 
                src="/lovable-uploads/68a24d84-4ea0-4014-a8a6-94bff79b56c7.png"
                alt="WINEBRAND SS25 Look 5" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          <div className="text-center max-w-4xl mx-auto px-4">
            <h2 className="text-2xl sm:text-3xl font-serif mb-6 sm:mb-8">
              Filosofía de Temporada
            </h2>
            <div className="prose prose-lg sm:prose-xl mx-auto">
              <p className="mb-6 sm:mb-8 text-base sm:text-lg leading-relaxed">
                "La primavera no es solo cambio, es renovación consciente. Cada prenda 
                en esta colección nace de la intención de crear algo que trascienda 
                el momento, que se convierta en parte de tu historia."
              </p>
              <p className="font-serif italic text-lg sm:text-xl mb-8 sm:mb-12">
                — Equipo creativo WINEBRAND
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Lookbook;
