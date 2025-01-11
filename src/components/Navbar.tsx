import { ShoppingCart } from 'lucide-react';
import { Button } from './ui/button';
import { useCart } from '../store/useCart';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export const Navbar = () => {
  const { items, toggleCart } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-sm z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-bold text-green-600 hover:text-green-700 transition"
          >
            Life is Natural
          </Link>

          {/* Hamburger Menu (Mobile) */}
          <button
            className="md:hidden text-gray-600 hover:text-gray-800 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-6">
            <Link to="/about" className="text-gray-600 hover:text-primary">
              Rólunk
            </Link>
            <Link to="/product" className="text-gray-600 hover:text-primary">
              Termékeink
            </Link>
            <Link to="/contact" className="text-gray-600 hover:text-primary">
              Kapcsolat
            </Link>
          </div>

          {/* Cart Button */}
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

      {/* Mobile Menu */}
      <div
        className={`absolute top-16 left-0 w-full bg-white shadow-md transition-transform ${
          isMobileMenuOpen ? 'block' : 'hidden'
        } md:hidden`}
      >
        <div className="flex flex-col items-center gap-4 py-4">
          <Link
            to="/about"
            className="text-gray-600 hover:text-primary"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Rólunk
          </Link>
          <Link
            to="/product"
            className="text-gray-600 hover:text-primary"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Termékeink
          </Link>
          <Link
            to="/contact"
            className="text-gray-600 hover:text-primary"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Kapcsolat
          </Link>
        </div>
      </div>
    </nav>
  );
};
