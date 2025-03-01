
import { ProductCard } from '@/components/ProductCard';
import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';
import { useProducts } from '@/hooks/useProducts';
import { Loader2 } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { CartPreview } from '@/components/CartPreview';

const Products = () => {
  const { data: products = [], isLoading, error } = useProducts();
  const { toast } = useToast();

  // Show error toast if fetch fails, but only if we have no products
  if (error && products.length === 0) {
    toast({
      title: "Using demo products",
      description: "Connected to Supabase demo data instead of Medusa backend.",
      variant: "default",
    });
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 pt-24">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Our Products</h1>
        
        {isLoading ? (
          <div className="flex justify-center items-center py-20">
            <Loader2 className="w-10 h-10 animate-spin text-green-600" />
          </div>
        ) : products.length === 0 ? (
          <div className="text-center py-10">
            <p className="text-gray-500 text-lg">No products found</p>
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
