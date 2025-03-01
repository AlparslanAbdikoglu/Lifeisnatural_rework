import { ProductCard } from '@/components/ProductCard';
import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';
import { useProducts } from '@/hooks/useProducts';
import { Loader2 } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { CartPreview } from '@/components/CartPreview';
import { useTranslation } from 'react-i18next'; // Import useTranslation

const Products = () => {
  const { data: products = [], isLoading, error } = useProducts();
  const { toast } = useToast();
  const { t } = useTranslation('common'); // Use 'common' namespace for translations

  // Show error toast if fetch fails, but only if we have no products
  if (error && products.length === 0) {
    toast({
      title: t('products.demoErrorTitle'), // Use localization for demo error title
      description: t('products.demoErrorDescription'), // Use localization for demo error description
      variant: "default",
    });
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 pt-24">
        {/* Localized title */}
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          {t('products.title')} {/* Localized page title */}
        </h1>
        
        {isLoading ? (
          <div className="flex justify-center items-center py-20">
            <Loader2 className="w-10 h-10 animate-spin text-green-600" />
          </div>
        ) : products.length === 0 ? (
          <div className="text-center py-10">
            {/* Localized text for no products found */}
            <p className="text-gray-500 text-lg">{t('products.noProducts')}</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </main>
      <CartPreview />
      <Footer />
    </div>
  );
};

export default Products;
