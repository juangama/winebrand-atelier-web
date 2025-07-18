
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const products = [
    {
      id: '1',
      name: 'Camiseta Clásica',
      price: '25.00',
      image: '/lovable-uploads/2a2ab176-4e73-4d93-80db-ff6421e8ec98.png',
      category: 'Camisetas'
    },
    {
      id: '2',
      name: 'Pantalón Vaquero',
      price: '59.99',
      image: '/lovable-uploads/e92f1fbd-6467-4617-a7f5-95406df6dd4f.png',
      category: 'Sudaderas'
    },
    {
      id: '3',
      name: 'Chaqueta de Cuero',
      price: '120.00',
      image: '/lovable-uploads/1166ebfa-17d5-4562-a85d-f0420e0dc857.png',
      category: 'Sudaderas'
    },
    {
      id: '4',
      name: 'Vestido de Verano',
      price: '45.50',
      image: '/lovable-uploads/2a2ab176-4e73-4d93-80db-ff6421e8ec98.png',
      category: 'Camisetas'
    },
    {
      id: '5',
      name: 'Zapatillas Deportivas',
      price: '79.99',
      image: '/lovable-uploads/e92f1fbd-6467-4617-a7f5-95406df6dd4f.png',
      category: 'Accesorios'
    },
    {
      id: '6',
      name: 'Bolso de Mano',
      price: '35.00',
      image: '/lovable-uploads/1166ebfa-17d5-4562-a85d-f0420e0dc857.png',
      category: 'Accesorios'
    }
  ];

  const categories = ['All', 'Camisetas', 'Sudaderas', 'Accesorios'];

  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif mb-4 text-gray-900">
            Shop
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Descubre nuestra colección de prendas únicas, diseñadas con alma y propósito.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 text-sm uppercase tracking-wider transition-colors ${
                  selectedCategory === category
                    ? 'bg-black text-white'
                    : 'bg-transparent text-gray-600 hover:text-black border border-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
            {filteredProducts.map((product) => (
              <div key={product.id} className="group">
                <Link to={`/products/${product.id}`}>
                  <div className="overflow-hidden mb-2">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-40 sm:h-48 object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </Link>
                
                <div className="space-y-1">
                  <p className="text-xs uppercase tracking-wider text-gray-500">
                    {product.category}
                  </p>
                  
                  <Link to={`/products/${product.id}`}>
                    <h3 className="text-xs sm:text-sm font-serif text-gray-900 group-hover:text-gray-600 transition-colors">
                      {product.name}
                    </h3>
                  </Link>
                  
                  <p className="text-xs text-gray-600">
                    ${product.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Shop;
