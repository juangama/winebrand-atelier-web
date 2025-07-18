import { useState } from 'react';
import { Link } from 'react-router-dom';

const Shop = () => {
  const [products, setProducts] = useState([
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
      category: 'Pantalones'
    },
    {
      id: '3',
      name: 'Chaqueta de Cuero',
      price: '120.00',
      image: '/lovable-uploads/1166ebfa-17d5-4562-a85d-f0420e0dc857.png',
      category: 'Chaquetas'
    },
    {
      id: '4',
      name: 'Vestido de Verano',
      price: '45.50',
      image: '/lovable-uploads/2a2ab176-4e73-4d93-80db-ff6421e8ec98.png',
      category: 'Vestidos'
    },
    {
      id: '5',
      name: 'Zapatillas Deportivas',
      price: '79.99',
      image: '/lovable-uploads/e92f1fbd-6467-4617-a7f5-95406df6dd4f.png',
      category: 'Calzado'
    },
    {
      id: '6',
      name: 'Bolso de Mano',
      price: '35.00',
      image: '/lovable-uploads/1166ebfa-17d5-4562-a85d-f0420e0dc857.png',
      category: 'Accesorios'
    }
  ]);

  const addToCart = (product: any) => {
    alert(`Añadido al carrito: ${product.name}`);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif mb-6 text-gray-900">
            Shop
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Descubre nuestra colección de prendas únicas, diseñadas con alma y propósito.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {products.map((product) => (
              <div key={product.id} className="group">
                <Link to={`/products/${product.id}`}>
                  <div className="overflow-hidden mb-4">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-80 sm:h-96 object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </Link>
                
                <div className="space-y-2">
                  <p className="text-xs uppercase tracking-wider text-gray-500">
                    {product.category}
                  </p>
                  
                  <Link to={`/products/${product.id}`}>
                    <h3 className="text-lg sm:text-xl font-serif text-gray-900 group-hover:text-gray-600 transition-colors">
                      {product.name}
                    </h3>
                  </Link>
                  
                  <p className="text-gray-600">
                    ${product.price}
                  </p>
                  
                  <button 
                    onClick={() => addToCart(product)}
                    className="mt-3 w-full bg-black text-white py-2 px-4 hover:bg-gray-800 transition-colors duration-300 uppercase text-sm tracking-wider"
                  >
                    Añadir al carrito
                  </button>
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
