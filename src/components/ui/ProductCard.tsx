
import { Link } from 'react-router-dom';

interface ProductCardProps {
  id: string;
  name: string;
  price: string;
  image: string;
  category?: string;
}

const ProductCard = ({ id, name, price, image, category }: ProductCardProps) => {
  return (
    <div className="product-card group">
      <Link to={`/products/${id}`}>
        <div className="overflow-hidden">
          <img 
            src={image} 
            alt={name} 
            className="product-card-image transition-transform duration-700 group-hover:scale-105" 
          />
        </div>
        
        {category && (
          <p className="mt-4 text-xs uppercase tracking-wider text-wine-gray">{category}</p>
        )}
        
        <h3 className="product-card-title">{name}</h3>
        <p className="product-card-price">{price}</p>
      </Link>
    </div>
  );
};

export default ProductCard;
