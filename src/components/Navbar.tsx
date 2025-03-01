import { ShoppingCart, LogIn } from 'lucide-react';
import { Button } from './ui/button';
import { useCart } from '../store/useCart';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const Navbar = () => {
  const { items, toggleCart } = useCart();
  const { t, i18n } = useTranslation('common');  // Use 'common' namespace for translations

  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);  // Change language when selected
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-sm z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <Link to="/" className="text-2xl font-bold text-green-600">Life is Natural</Link>
            <div className="hidden md:flex items-center gap-6">
              {/* Use translation keys for Navbar Links */}
              <Link to="/" className="text-gray-600 hover:text-primary">{t('nav.home')}</Link> {/* 'Kezdőlap' for Hungarian */}
              <Link to="/products" className="text-gray-600 hover:text-primary">{t('nav.products')}</Link> {/* 'Termékek' for Hungarian */}
              <Link to="/about" className="text-gray-600 hover:text-primary">{t('nav.about')}</Link> {/* 'Rólunk' for Hungarian */}
              <Link to="/contact" className="text-gray-600 hover:text-primary">{t('nav.contact')}</Link> {/* 'Kapcsolat' for Hungarian */}
            </div>
          </div>

          <div className="flex items-center gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="relative">
                  {i18n.language === 'hu' ? '🇭🇺' : '🇬🇧'} {/* Display current language flag */}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => changeLanguage('hu')} className="flex items-center gap-2 cursor-pointer">
                  <span>🇭🇺</span>
                  <span>Magyar</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => changeLanguage('en')} className="flex items-center gap-2 cursor-pointer">
                  <span>🇬🇧</span>
                  <span>English</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button variant="ghost" size="icon">
              <LogIn className="h-6 w-6" />
            </Button>
            <Button variant="ghost" size="icon" onClick={toggleCart} className="relative">
              <ShoppingCart className="h-6 w-6" />
              {itemCount > 0 && (
                <span className="absolute top-0 right-0 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
