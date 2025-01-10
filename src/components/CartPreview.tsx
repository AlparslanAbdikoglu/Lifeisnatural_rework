import { useCart } from '../store/useCart';
import { Button } from './ui/button';
import { X } from 'lucide-react';

export const CartPreview = () => {
  const { items, total, removeItem, showCart } = useCart();

  if (!showCart) return null;

  return (
    <div className="cart-preview">
      <h2 className="text-lg font-bold mb-4">Kosár</h2>
      {items.length === 0 ? (
        <p>Kosarad üres</p>
      ) : (
        <>
          {items.map((item) => (
            <div key={item.id} className="flex items-center gap-2 mb-2">
              <img
                src={item.image}
                alt={item.name}
                className="w-12 h-12 object-cover rounded"
              />
              <div className="flex-1">
                <h3 className="text-sm font-medium">{item.name}</h3>
                <p className="text-sm text-gray-600">
                  {item.quantity} x HUF{item.price}
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
              <span className="font-bold">Összesen:</span>
              <span className="font-bold">HUF{total.toFixed(2)}</span>
            </div>
            <Button className="w-full">Fizetés</Button>
          </div>
        </>
      )}
    </div>
  );
};