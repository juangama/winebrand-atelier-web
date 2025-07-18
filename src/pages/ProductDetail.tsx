import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from './Layout';
import { ArrowLeft, Minus, Plus, ShoppingCart } from 'lucide-react';

// Mock product data que coincide con los productos de Shop
const products = [
  {
    id: '1',
    name: 'Camiseta Clásica',
    price: '$25.00',
    images: ['/lovable-uploads/2a2ab176-4e73-4d93-80db-ff6421e8ec98.png'],
    description: 'Camiseta clásica confeccionada en algodón 100% orgánico con un ajuste cómodo y duradero.',
    details: [
      'Algodón orgánico certificado',
      'Hecho en Colombia', 
      'Ajuste clásico',
      'Lavado frío, secado natural'
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Blanco'],
    category: 'Camisetas'
  },
  {
    id: '2',
    name: 'Pantalón Vaquero',
    price: '$59.99',
    images: ['/lovable-uploads/e92f1fbd-6467-4617-a7f5-95406df6dd4f.png'],
    description: 'Pantalón vaquero de corte clásico, confeccionado con denim de alta calidad para máxima durabilidad.',
    details: [
      'Denim 100% algodón',
      'Corte clásico',
      'Cinco bolsillos',
      'Lavado a la piedra'
    ],
    sizes: ['28', '30', '32', '34', '36'],
    colors: ['Azul'],
    category: 'Pantalones'
  },
  {
    id: '3',
    name: 'Chaqueta de Cuero',
    price: '$120.00',
    images: ['/lovable-uploads/1166ebfa-17d5-4562-a85d-f0420e0dc857.png'],
    description: 'Chaqueta de cuero genuino con acabado premium y forro interior suave.',
    details: [
      'Cuero genuino',
      'Forro interior suave',
      'Cremalleras YKK',
      'Cuidado profesional recomendado'
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Negro'],
    category: 'Chaquetas'
  },
  {
    id: '4',
    name: 'Vestido de Verano',
    price: '$45.50',
    images: ['/lovable-uploads/2a2ab176-4e73-4d93-80db-ff6421e8ec98.png'],
    description: 'Vestido ligero y fresco, perfecto para los días de verano con un diseño elegante.',
    details: [
      'Algodón ligero',
      'Diseño fluido',
      'Manga corta',
      'Lavado a máquina'
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Blanco'],
    category: 'Vestidos'
  },
  {
    id: '5',
    name: 'Zapatillas Deportivas',
    price: '$79.99',
    images: ['/lovable-uploads/e92f1fbd-6467-4617-a7f5-95406df6dd4f.png'],
    description: 'Zapatillas deportivas con tecnología de amortiguación avanzada para máximo confort.',
    details: [
      'Suela de goma antideslizante',
      'Amortiguación avanzada',
      'Materiales transpirables',
      'Uso deportivo y casual'
    ],
    sizes: ['38', '39', '40', '41', '42', '43'],
    colors: ['Blanco'],
    category: 'Calzado'
  },
  {
    id: '6',
    name: 'Bolso de Mano',
    price: '$35.00',
    images: ['/lovable-uploads/1166ebfa-17d5-4562-a85d-f0420e0dc857.png'],
    description: 'Bolso de mano elegante con múltiples compartimentos y acabados de calidad.',
    details: [
      'Piel sintética premium',
      'Múltiples compartimentos',
      'Asa ajustable',
      'Cierre con cremallera'
    ],
    sizes: ['Único'],
    colors: ['Negro'],
    category: 'Accesorios'
  }
];

const ProductDetail = () => {
  const { id: productId } = useParams();
  const product = products.find(p => p.id === productId);
  
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  
  if (!product) {
    return (
      <Layout>
        <div className="editorial-container py-24">
          <p>Producto no encontrado</p>
          <Link to="/shop" className="underline mt-4 inline-block">Regresar a la tienda</Link>
        </div>
      </Layout>
    );
  }

  const incrementQuantity = () => {
    setQuantity(q => q + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(q => q - 1);
    }
  };

  const addToCart = () => {
    if (!selectedSize) {
      alert('Por favor selecciona una talla');
      return;
    }
    
    console.log('Added to cart:', {
      productId,
      name: product.name,
      price: product.price,
      size: selectedSize,
      quantity
    });
    
    alert('Producto añadido al carrito');
  };

  return (
    <Layout>
      <div className="pt-24 pb-16">
        <div className="editorial-container">
          {/* Breadcrumbs */}
          <nav className="mb-8">
            <ol className="flex text-sm text-gray-600">
              <li className="after:content-['/'] after:mx-2">
                <Link to="/shop" className="hover:text-black">Tienda</Link>
              </li>
              <li className="after:content-['/'] after:mx-2">
                <Link to={`/shop?category=${product.category}`} className="hover:text-black">
                  {product.category}
                </Link>
              </li>
              <li className="font-medium text-black">{product.name}</li>
            </ol>
          </nav>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
            {/* Product images */}
            <div className="space-y-4">
              <div>
                <img 
                  src={product.images[activeImage]} 
                  alt={product.name} 
                  className="w-full h-auto"
                />
              </div>
              
              {product.images.length > 1 && (
                <div className="grid grid-cols-5 gap-2">
                  {product.images.map((image, idx) => (
                    <button 
                      key={idx}
                      onClick={() => setActiveImage(idx)}
                      className={`border-2 ${activeImage === idx ? 'border-black' : 'border-transparent'}`}
                    >
                      <img src={image} alt={`${product.name} view ${idx + 1}`} className="w-full h-auto" />
                    </button>
                  ))}
                </div>
              )}
            </div>
            
            {/* Product info */}
            <div>
              <h1 className="text-3xl font-serif mb-2">{product.name}</h1>
              <p className="text-xl mb-6">{product.price}</p>
              
              <div className="border-t border-gray-200 pt-6 mb-6">
                <p className="mb-6">{product.description}</p>
                
                <div className="mb-8">
                  <h3 className="text-sm uppercase tracking-wider mb-3">Talla</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`w-12 h-12 flex items-center justify-center text-sm border ${
                          selectedSize === size 
                            ? 'border-black bg-black text-white' 
                            : 'border-gray-300 hover:border-black'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-sm uppercase tracking-wider mb-3">Cantidad</h3>
                  <div className="flex border border-gray-300 w-32">
                    <button 
                      onClick={decrementQuantity}
                      className="flex-none w-10 h-10 flex items-center justify-center border-r border-gray-300 hover:bg-gray-100"
                    >
                      <Minus size={16} />
                    </button>
                    <div className="flex-grow flex items-center justify-center">
                      {quantity}
                    </div>
                    <button 
                      onClick={incrementQuantity}
                      className="flex-none w-10 h-10 flex items-center justify-center border-l border-gray-300 hover:bg-gray-100"
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                </div>
                
                <button 
                  onClick={addToCart}
                  className="w-full py-4 bg-black text-white flex items-center justify-center uppercase tracking-wider hover:bg-gray-800 transition-colors mb-6"
                >
                  <ShoppingCart className="mr-2" size={18} />
                  Añadir al carrito
                </button>
                
                <div className="border-t border-gray-200 pt-6">
                  <h3 className="text-lg font-serif mb-3">Detalles</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    {product.details.map((detail, index) => (
                      <li key={index}>{detail}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          {/* Return to shop */}
          <div className="text-center">
            <Link to="/shop" className="inline-flex items-center text-sm uppercase tracking-wider hover:text-gray-600 transition-colors">
              <ArrowLeft size={16} className="mr-2" />
              Continuar comprando
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetail;
