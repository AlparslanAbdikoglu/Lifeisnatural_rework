import { Product } from '../data/products';
import { useCart } from '../store/useCart';
import { Button } from './ui/button';
import { ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const addItem = useCart((state) => state.addItem);

  return (
    <div className="product-card bg-white rounded-lg overflow-hidden shadow-lg">
      <div className="flex justify-center p-4">
        <img
          src={product.image}
          alt={product.name}
          className="max-w-full h-64 object-contain"  // Adjusted size and centering
        />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
        <p className="text-sm text-gray-600 mb-4">{product.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold">HUF {product.price}</span>
          <Button 
            variant="green"  // defined in button
            onClick={() => {
              addItem(product);
            }}
            className="flex items-center gap-2 bg-green-500 text-white hover:bg-green-600 rounded-md p-2"
          >
            <ShoppingCart className="h-4 w-4" />
            Kosárba teszem
          </Button>
        </div>
      </div>
    </div>
  );
};
