
import ProductCard from '../ui/ProductCard';

const FeaturedProducts = () => {
  // Sample product data
  const products = [
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
    }
  ];

  return (
    <section className="py-24">
      <div className="editorial-container">
        <div className="flex justify-between items-baseline mb-14">
          <h2 className="text-3xl font-serif">Productos destacados</h2>
          <a href="/shop" className="text-sm uppercase tracking-wider hover-underline">
            Ver todo
          </a>
        </div>
        
        <div className="editorial-grid">
          {products.map((product) => (
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
    </section>
  );
};

export default FeaturedProducts;
