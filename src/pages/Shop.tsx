
import { useState } from 'react';
import Layout from './Layout';
import ProductCard from '../components/ui/ProductCard';

// Sample categories and products
const categories = ['Todo', 'Sudaderas', 'Camisetas', 'Accesorios'];

const allProducts = [
  {
    id: '1',
    name: 'Sudadera Logo Crema',
    price: '$79.900 COP',
    image: '/lovable-uploads/e92f1fbd-6467-4617-a7f5-95406df6dd4f.png',
    category: 'Sudaderas'
  },
  {
    id: '2',
    name: 'Sudadera Logo Negro',
    price: '$79.900 COP',
    image: '/lovable-uploads/1166ebfa-17d5-4562-a85d-f0420e0dc857.png',
    category: 'Sudaderas'
  },
  {
    id: '3',
    name: 'Camiseta Cosecha Negro',
    price: '$59.900 COP',
    image: '/lovable-uploads/2a2ab176-4e73-4d93-80db-ff6421e8ec98.png',
    category: 'Camisetas'
  },
  {
    id: '4',
    name: 'Camiseta Estándar Negro',
    price: '$49.900 COP',
    image: '/lovable-uploads/68a24d84-4ea0-4014-a8a6-94bff79b56c7.png',
    category: 'Camisetas'
  },
  // Additional products
  {
    id: '5',
    name: 'Gorra Logo Negro',
    price: '$45.900 COP',
    image: '/lovable-uploads/2a2ab176-4e73-4d93-80db-ff6421e8ec98.png',
    category: 'Accesorios'
  },
  {
    id: '6',
    name: 'Sudadera Estampada Azul',
    price: '$89.900 COP',
    image: '/lovable-uploads/e92f1fbd-6467-4617-a7f5-95406df6dd4f.png',
    category: 'Sudaderas'
  },
];

const Shop = () => {
  const [activeCategory, setActiveCategory] = useState('Todo');
  const [sortBy, setSortBy] = useState('newest');

  // Filter products based on active category
  const filteredProducts = activeCategory === 'Todo' 
    ? allProducts 
    : allProducts.filter(product => product.category === activeCategory);

  // Sort products based on selected option
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'priceAsc') {
      return parseFloat(a.price.replace(/[^\d.-]/g, '')) - parseFloat(b.price.replace(/[^\d.-]/g, ''));
    } else if (sortBy === 'priceDesc') {
      return parseFloat(b.price.replace(/[^\d.-]/g, '')) - parseFloat(a.price.replace(/[^\d.-]/g, ''));
    }
    // Default to newest
    return 0;
  });

  return (
    <Layout>
      <div className="pt-24 pb-16">
        <div className="editorial-container">
          <h1 className="text-4xl font-serif mb-12 text-center">Colección</h1>
          
          {/* Category filter */}
          <div className="mb-10 flex justify-center">
            <div className="border-b border-gray-200 w-full max-w-3xl">
              <ul className="flex flex-wrap justify-center -mb-px text-sm">
                {categories.map((category) => (
                  <li key={category} className="mr-8 last:mr-0">
                    <button
                      onClick={() => setActiveCategory(category)}
                      className={`inline-block py-4 px-2 ${
                        activeCategory === category 
                          ? 'border-b-2 border-wine-DEFAULT font-medium' 
                          : 'border-b-2 border-transparent text-wine-gray hover:text-wine-DEFAULT'
                      } transition-colors`}
                    >
                      {category}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Sort and filter controls */}
          <div className="flex justify-end mb-8">
            <div className="flex items-center">
              <span className="text-sm text-wine-gray mr-2">Ordenar por:</span>
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="text-sm py-1 px-3 border border-gray-200 rounded bg-transparent focus:outline-none"
              >
                <option value="newest">Más reciente</option>
                <option value="priceAsc">Precio: menor a mayor</option>
                <option value="priceDesc">Precio: mayor a menor</option>
              </select>
            </div>
          </div>
          
          {/* Products grid */}
          <div className="editorial-grid">
            {sortedProducts.map((product) => (
              <ProductCard 
                key={product.id} 
                id={product.id}
                name={product.name}
                price={product.price}
                image={product.image}
                category={product.category}
              />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Shop;
