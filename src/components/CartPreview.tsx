
import { useTranslation } from 'react-i18next';
import { useCart } from '../store/useCart';
import { Button } from './ui/button';
import { X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const CartPreview = () => {
  const { items, total, removeItem, showCart, toggleCart } = useCart();
  const { t } = useTranslation('common');
  const navigate = useNavigate();

  if (!showCart) return null;

  const handleCheckout = () => {
    navigate('/checkout');
    toggleCart(); // Close the cart preview
  };

  return (
    <div className="cart-preview fixed right-0 top-0 h-full bg-white shadow-lg p-6 w-80 z-50">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-bold">{t('cartPreview.title')}</h2>
        <Button variant="ghost" size="icon" onClick={toggleCart}>
          <X className="h-5 w-5" />
        </Button>
      </div>
      
      {items.length === 0 ? (
        <p>{t('cartPreview.emptyCart')}</p>
      ) : (
        <>
          {items.map((item) => (
            <div key={item.id} className="flex items-center gap-2 mb-4 pb-4 border-b">
              <img
                src={item.image || 'https://via.placeholder.com/100x100'}
                alt={item.name}
                className="w-16 h-16 object-cover rounded"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://via.placeholder.com/100x100';
                }}
              />
              <div className="flex-1">
                <h3 className="text-sm font-medium">{item.name}</h3>
                <p className="text-sm text-gray-600">
                  {item.quantity} x {item.price} Ft
                </p>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => removeItem(item.id)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          ))}
        <div className="mt-4 pt-4 border-t">
            <div className="flex justify-between items-center mb-4">
              <span className="font-bold">{t('cartPreview.total')}</span>
              <span className="font-bold">{total} {t('cartPreview.currency')}</span>
            </div>
            <Button 
              onClick={handleCheckout}
              className="w-full bg-green-600 hover:bg-green-700"
            >
              {t('cartPreview.checkout')}
            </Button>
          </div>
        </>
      )}
    </div>
  );
};
