
import { Product } from '../data/products';
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

  return (
    <div className="product-card bg-white rounded-lg overflow-hidden">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
        <p className="text-sm text-gray-600 mb-4">{product.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold">${product.price}</span>
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
