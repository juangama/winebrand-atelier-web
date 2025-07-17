
import { useState } from 'react';
import Layout from './Layout';
import NewsletterForm from '../components/ui/NewsletterForm';

const Community = () => {
  return (
    <Layout>
      <div className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-serif mb-12 text-center">Únete a la Comunidad</h1>
          
          <div className="prose prose-lg mx-auto mb-12">
            <p>
              En WINEBRAND creemos en construir conexiones significativas más allá de la ropa. 
              Somos una comunidad de personas con ideas afines que valoran la autenticidad, 
              la creatividad y el propósito.
            </p>
            <p>
              Únete a nuestra lista de correo para ser parte de la conversación y mantenerte al día con:
            </p>
            <ul>
              <li>Lanzamientos exclusivos y acceso prioritario a colecciones</li>
              <li>Historias detrás de nuestros diseños y colaboraciones</li>
              <li>Eventos comunitarios en Bogotá y otras ciudades</li>
              <li>Ofertas especiales solo para miembros de la comunidad</li>
            </ul>
          </div>
          
          <div className="bg-wine-cream p-8 md:p-12 mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <img 
                  src="/lovable-uploads/68a24d84-4ea0-4014-a8a6-94bff79b56c7.png" 
                  alt="WINEBRAND Community" 
                  className="w-full h-auto"
                />
              </div>
              <div>
                <h2 className="text-2xl font-serif mb-4">Conecta con nosotros</h2>
                <p className="mb-6">
                  Al unirte a nuestra comunidad, no solo recibirás actualizaciones sobre productos, 
                  sino que también serás parte de una conversación más amplia sobre diseño, 
                  sostenibilidad y creatividad.
                </p>
                <NewsletterForm minimal={true} />
              </div>
            </div>
          </div>
          
          <div className="mb-16">
            <h2 className="text-2xl font-serif mb-8 text-center">Forma parte de algo más grande</h2>
            <NewsletterForm />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Community;
