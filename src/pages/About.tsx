
import Layout from './Layout';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <Layout>
      <div className="pt-20 sm:pt-24 pb-12 sm:pb-16">
        <div className="editorial-container">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif mb-8 sm:mb-12 text-center px-4">
            Nuestra Historia
          </h1>
          
          <div className="max-w-3xl mx-auto mb-16 sm:mb-20 px-4">
            <p className="text-lg sm:text-xl lg:text-2xl font-serif italic mb-8 sm:mb-12 leading-relaxed text-center">
              "No buscamos encajar en una estética, sino construir una propia: honesta, creativa y sin pretensiones."
            </p>
            
            <div className="prose prose-base sm:prose-lg lg:prose-xl mx-auto space-y-6 sm:space-y-8">
              <p className="text-base sm:text-lg leading-relaxed">
                WINEBRAND nació en Bogotá entre amigos, ideas y convicciones. No somos solo una marca de ropa, 
                somos una forma de ver el mundo: auténtica, bien hecha y con algo que decir.
              </p>
              
              <p className="text-base sm:text-lg leading-relaxed">
                Cada prenda que creamos está cargada de alma, concepto y verdad. No seguimos tendencias pasajeras, 
                sino que diseñamos desde la intención y el respeto por quienes confían en nosotros.
              </p>
              
              <p className="text-base sm:text-lg leading-relaxed">
                Creemos firmemente que una camiseta bien hecha dice más que mil frases vacías. Por eso, nos enfocamos 
                en la calidad de nuestras prendas, la transparencia de nuestros procesos y el impacto positivo 
                que podemos generar en nuestra comunidad.
              </p>
              
              <h2 className="text-2xl sm:text-3xl font-serif pt-8 sm:pt-12 mb-6 sm:mb-8">
                Nuestros Valores
              </h2>
              
              <div className="space-y-8 sm:space-y-10">
                <div>
                  <h3 className="text-xl sm:text-2xl font-serif mb-4 sm:mb-6">Autenticidad</h3>
                  <p className="text-base sm:text-lg leading-relaxed">
                    No pretendemos ser lo que no somos. Nuestra estética, nuestro mensaje y nuestros productos 
                    son un reflejo honesto de quiénes somos y qué nos inspira.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl sm:text-2xl font-serif mb-4 sm:mb-6">Calidad</h3>
                  <p className="text-base sm:text-lg leading-relaxed">
                    Creemos en hacer las cosas bien. Utilizamos materiales de primera calidad y procesos de producción 
                    responsables para crear prendas que perduren en el tiempo.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl sm:text-2xl font-serif mb-4 sm:mb-6">Comunidad</h3>
                  <p className="text-base sm:text-lg leading-relaxed">
                    Estamos inspirados por las personas que viven con propósito. Nuestra marca existe para conectar 
                    con quienes comparten nuestra visión y valores.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl sm:text-2xl font-serif mb-4 sm:mb-6">Creatividad</h3>
                  <p className="text-base sm:text-lg leading-relaxed">
                    Vemos el diseño como una forma de expresión. Cada colección es un capítulo en nuestra historia, 
                    una oportunidad para explorar nuevas ideas y perspectivas.
                  </p>
                </div>
              </div>
              
              <p className="text-base sm:text-lg leading-relaxed pt-8 sm:pt-12">
                En WINEBRAND, no hay fórmulas. Hay alma. Y estamos comprometidos con mantener esa alma viva 
                en todo lo que hacemos.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 mb-16 sm:mb-20 px-4">
            <div className="aspect-square overflow-hidden">
              <img 
                src="/lovable-uploads/68a24d84-4ea0-4014-a8a6-94bff79b56c7.png"
                alt="WINEBRAND en la nieve" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="flex flex-col justify-center space-y-6 sm:space-y-8">
              <h2 className="text-2xl sm:text-3xl font-serif">Nuestro Compromiso</h2>
              <p className="text-base sm:text-lg leading-relaxed">
                Estamos comprometidos con prácticas responsables en cada etapa del proceso. 
                Desde la selección de materiales hasta la producción y distribución, 
                trabajamos para minimizar nuestro impacto ambiental y maximizar el valor 
                que aportamos a nuestra comunidad local.
              </p>
              <p className="font-serif italic text-lg sm:text-xl">
                "Cuando todo suena igual, elegimos sonar distinto."
              </p>
              <div>
                <Link 
                  to="/community" 
                  className="btn-minimal bg-wine-DEFAULT text-white hover:bg-black transition-colors duration-300"
                >
                  Únete a la comunidad
                </Link>
              </div>
            </div>
          </div>
          
          <div className="text-center mb-8 sm:mb-12 px-4">
            <h2 className="text-2xl sm:text-3xl font-serif mb-4 sm:mb-6">
              WINEBRAND — Harvesting quality.
            </h2>
            <p className="max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
              Si quieres conocer más sobre nuestra historia o tienes alguna pregunta, 
              no dudes en contactarnos.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
