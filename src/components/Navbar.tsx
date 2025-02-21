
import { ShoppingCart, Search } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { useCart } from '../store/useCart';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  const { items, toggleCart } = useCart();
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-sm z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <Link to="/" className="text-2xl font-bold text-primary">TechStore</Link>
            <div className="hidden md:flex items-center gap-6">
              <Link to="/" className="text-gray-600 hover:text-primary">Home</Link>
              <Link to="/products" className="text-gray-600 hover:text-primary">Products</Link>
              <Link to="/about" className="text-gray-600 hover:text-primary">About</Link>
              <Link to="/contact" className="text-gray-600 hover:text-primary">Contact</Link>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="relative hidden md:block w-64">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
              <Input type="search" placeholder="Search products..." className="pl-8" />
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleCart}
              className="relative"
            >
              <ShoppingCart className="h-6 w-6" />
              {itemCount > 0 && (
                <span className="cart-badge">{itemCount}</span>
              )}
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
