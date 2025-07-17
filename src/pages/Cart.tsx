
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from './Layout';
import { ArrowLeft, Minus, Plus, Trash2 } from 'lucide-react';

// Mock cart items - in a real app, this would come from your state management
const initialCartItems = [
  {
    id: '1',
    name: 'Sudadera Logo Crema',
    price: 79900,
    image: '/lovable-uploads/e92f1fbd-6467-4617-a7f5-95406df6dd4f.png',
    size: 'M',
    quantity: 1,
  },
  {
    id: '2',
    name: 'Sudadera Logo Negro',
    price: 79900,
    image: '/lovable-uploads/1166ebfa-17d5-4562-a85d-f0420e0dc857.png',
    size: 'L',
    quantity: 1,
  },
];

const Cart = () => {
  const [cartItems, setCartItems] = useState(initialCartItems);
  const [promoCode, setPromoCode] = useState('');
  const [promoApplied, setPromoApplied] = useState(false);
  
  // Calculate cart totals
  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const discount = promoApplied ? subtotal * 0.1 : 0; // 10% discount when promo applied
  const shipping = subtotal > 100000 ? 0 : 12000; // Free shipping over 100,000 COP
  const total = subtotal - discount + shipping;
  
  const formatPrice = (price: number) => {
    return `$${price.toLocaleString('es-CO')} COP`;
  };
  
  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    
    setCartItems(prev => prev.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };
  
  const removeItem = (id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };
  
  const applyPromo = () => {
    // In a real app, you would validate the promo code with your backend
    if (promoCode.toUpperCase() === 'WINEBRAND10') {
      setPromoApplied(true);
      alert('¡Código promocional aplicado!');
    } else {
      alert('Código promocional inválido');
    }
  };
  
  const checkout = () => {
    console.log('Proceeding to checkout with:', { cartItems, subtotal, discount, shipping, total });
    alert('Redirigiendo al proceso de pago...');
    // Here you would redirect to your checkout page or process
  };

  return (
    <Layout>
      <div className="pt-24 pb-16">
        <div className="editorial-container">
          <h1 className="text-3xl font-serif mb-12 text-center">Carrito de compras</h1>
          
          {cartItems.length === 0 ? (
            <div className="text-center py-12">
              <p className="mb-6">Tu carrito está vacío</p>
              <Link 
                to="/shop" 
                className="btn-minimal bg-wine-DEFAULT text-white hover:bg-black"
              >
                Continuar comprando
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              {/* Cart items */}
              <div className="lg:col-span-8">
                <div className="border-b pb-2 mb-6 hidden md:grid md:grid-cols-12">
                  <div className="md:col-span-6">
                    <span className="text-sm uppercase tracking-wider">Producto</span>
                  </div>
                  <div className="md:col-span-2 text-center">
                    <span className="text-sm uppercase tracking-wider">Precio</span>
                  </div>
                  <div className="md:col-span-2 text-center">
                    <span className="text-sm uppercase tracking-wider">Cantidad</span>
                  </div>
                  <div className="md:col-span-2 text-right">
                    <span className="text-sm uppercase tracking-wider">Total</span>
                  </div>
                </div>
                
                {/* Cart items list */}
                <div className="space-y-6">
                  {cartItems.map((item) => (
                    <div key={`${item.id}-${item.size}`} className="border-b pb-6 grid md:grid-cols-12 items-center gap-4">
                      {/* Product image and info */}
                      <div className="md:col-span-6 grid grid-cols-3 gap-4">
                        <div className="col-span-1">
                          <img 
                            src={item.image} 
                            alt={item.name} 
                            className="w-full h-auto"
                          />
                        </div>
                        <div className="col-span-2">
                          <h3 className="font-serif">{item.name}</h3>
                          <p className="text-sm text-wine-gray mb-1">Talla: {item.size}</p>
                          <button 
                            onClick={() => removeItem(item.id)}
                            className="text-sm text-wine-gray flex items-center hover:text-wine-DEFAULT"
                          >
                            <Trash2 size={14} className="mr-1" />
                            Eliminar
                          </button>
                        </div>
                      </div>
                      
                      {/* Price */}
                      <div className="md:col-span-2 text-center">
                        <span className="md:hidden text-sm text-wine-gray">Precio: </span>
                        <span>{formatPrice(item.price)}</span>
                      </div>
                      
                      {/* Quantity */}
                      <div className="md:col-span-2 flex justify-center">
                        <div className="flex border border-gray-300 w-24">
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="flex-none w-8 h-8 flex items-center justify-center border-r border-gray-300"
                          >
                            <Minus size={14} />
                          </button>
                          <div className="flex-grow flex items-center justify-center text-sm">
                            {item.quantity}
                          </div>
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="flex-none w-8 h-8 flex items-center justify-center border-l border-gray-300"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                      </div>
                      
                      {/* Total */}
                      <div className="md:col-span-2 text-right">
                        <span className="md:hidden text-sm text-wine-gray">Total: </span>
                        <span className="font-medium">{formatPrice(item.price * item.quantity)}</span>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="flex mt-8">
                  <Link 
                    to="/shop" 
                    className="flex items-center text-sm hover:text-wine-gray transition-colors"
                  >
                    <ArrowLeft size={16} className="mr-2" />
                    Continuar comprando
                  </Link>
                </div>
              </div>
              
              {/* Order summary */}
              <div className="lg:col-span-4">
                <div className="bg-wine-cream p-6">
                  <h2 className="text-xl font-serif mb-6">Resumen del pedido</h2>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span>{formatPrice(subtotal)}</span>
                    </div>
                    
                    {promoApplied && (
                      <div className="flex justify-between text-green-600">
                        <span>Descuento (10%)</span>
                        <span>-{formatPrice(discount)}</span>
                      </div>
                    )}
                    
                    <div className="flex justify-between">
                      <span>Envío</span>
                      <span>{shipping === 0 ? 'Gratis' : formatPrice(shipping)}</span>
                    </div>
                    
                    <div className="pt-4 border-t border-gray-300 flex justify-between font-medium">
                      <span>Total</span>
                      <span>{formatPrice(total)}</span>
                    </div>
                  </div>
                  
                  {/* Promo code */}
                  <div className="mt-6">
                    <label htmlFor="promo" className="block text-sm mb-2">Código promocional</label>
                    <div className="flex">
                      <input
                        type="text"
                        id="promo"
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value)}
                        className="flex-grow px-3 py-2 border border-gray-300 focus:outline-none"
                        placeholder="Ingresa tu código"
                        disabled={promoApplied}
                      />
                      <button 
                        onClick={applyPromo}
                        className="px-4 py-2 bg-wine-DEFAULT text-white text-sm uppercase tracking-wider disabled:bg-gray-400"
                        disabled={promoApplied || !promoCode}
                      >
                        Aplicar
                      </button>
                    </div>
                    {promoApplied && (
                      <p className="text-sm text-green-600 mt-1">Código promocional aplicado exitosamente</p>
                    )}
                  </div>
                  
                  <button 
                    onClick={checkout}
                    className="w-full py-3 bg-wine-DEFAULT text-white text-sm uppercase tracking-wider hover:bg-black transition-colors mt-6"
                  >
                    Finalizar compra
                  </button>
                  
                  <p className="text-xs text-wine-gray mt-4 text-center">
                    Los impuestos y gastos de envío se calculan en la página de pago
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
