
import { Product } from '../types/product';
import { useCart } from '../store/useCart';
import { Button } from './ui/button';
import { ShoppingCart } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const addItem = useCart((state) => state.addItem);
  const { t } = useTranslation();

  // Format price from cents to HUF
  const formattedPrice = `${product.price} Ft`;

  return (
    <div className="product-card bg-white rounded-lg overflow-hidden shadow-md">
      <img
        src={product.image || 'https://via.placeholder.com/400x300'}
        alt={product.name}
        className="w-full h-48 object-cover"
        onError={(e) => {
          (e.target as HTMLImageElement).src = 'https://via.placeholder.com/400x300';
        }}
      />
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
        <p className="text-sm text-gray-600 mb-4">{product.description || 'No description available'}</p>
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold">{formattedPrice}</span>
          <Button
            onClick={() => {
              addItem(product);
            }}
            className="flex items-center gap-2 bg-green-600 hover:bg-green-700"
          >
            <ShoppingCart className="h-4 w-4" />
            {t('products.addToCart')}
          </Button>
        </div>
      </div>
    </div>
  );
};
