
import { useState } from 'react';
import Layout from './Layout';
import { X } from 'lucide-react';

const JoinCommunity = () => {
  const [email, setEmail] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [agreedToPrivacy, setAgreedToPrivacy] = useState(false);
  const [agreedToProcessing, setAgreedToProcessing] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const categories = ['Womenswear', 'Menswear', 'Accessories'];

  const handleCategoryChange = (category: string) => {
    setSelectedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Community signup:', { email, selectedCategories, agreedToPrivacy, agreedToProcessing });
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <Layout>
        <div className="pt-24 pb-16 min-h-screen flex items-center justify-center">
          <div className="max-w-md mx-auto text-center px-4">
            <h1 className="text-3xl font-serif mb-4">¡Bienvenido a WINEBRAND!</h1>
            <p className="text-lg">
              Te has unido exitosamente a nuestra comunidad. 
              Pronto recibirás noticias exclusivas y ofertas especiales.
            </p>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="pt-24 pb-16 min-h-screen">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[80vh]">
            {/* Left side - Image */}
            <div className="hidden lg:block">
              <img 
                src="/lovable-uploads/316d418f-c090-4dcf-bdfb-5372bb9bd094.png" 
                alt="WINEBRAND Community" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Right side - Form */}
            <div className="bg-white p-8 lg:p-16 flex flex-col justify-center">
              <div className="max-w-md mx-auto w-full">
                <h1 className="text-3xl lg:text-4xl font-mono font-bold mb-2 tracking-wider">
                  JOIN THE WINEBRAND™
                </h1>
                <h2 className="text-3xl lg:text-4xl font-mono font-bold mb-8 tracking-wider">
                  COMMUNITY
                </h2>
                
                <p className="text-base mb-8 leading-relaxed">
                  Únete a nuestra lista de correo para disfrutar hasta un 10% 
                  de descuento en tu primera orden y mantente al día 
                  con nuevos lanzamientos, promociones y eventos 
                  de WINEBRAND™.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Tu Email*"
                      required
                      className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-black text-base"
                    />
                  </div>

                  <div className="space-y-3">
                    <p className="text-sm font-medium mb-3">Categorías de interés:</p>
                    {categories.map((category) => (
                      <label key={category} className="flex items-center space-x-3 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={selectedCategories.includes(category)}
                          onChange={() => handleCategoryChange(category)}
                          className="w-4 h-4 border border-gray-400 focus:ring-0"
                        />
                        <span className="text-base">{category}</span>
                      </label>
                    ))}
                  </div>

                  <div className="space-y-4">
                    <label className="flex items-start space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={agreedToPrivacy}
                        onChange={(e) => setAgreedToPrivacy(e.target.checked)}
                        required
                        className="w-4 h-4 border border-gray-400 focus:ring-0 mt-1"
                      />
                      <span className="text-sm">
                        *He leído la <a href="#" className="underline">Política de Privacidad</a> y 
                        acepto el procesamiento de mis datos personales 
                        para propósitos de marketing (Newsletters, Noticias y 
                        Promociones)
                      </span>
                    </label>

                    <label className="flex items-start space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={agreedToProcessing}
                        onChange={(e) => setAgreedToProcessing(e.target.checked)}
                        className="w-4 h-4 border border-gray-400 focus:ring-0 mt-1"
                      />
                      <span className="text-sm">
                        Acepto la recopilación y procesamiento de 
                        mis datos personales para propósitos de perfilado
                      </span>
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-black text-white py-4 px-6 text-base font-medium tracking-wider hover:bg-gray-800 transition-colors"
                  >
                    SUSCRIBIRSE
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default JoinCommunity;
