
import { ProductCard } from '../components/ProductCard';
import { CartPreview } from '../components/CartPreview';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { TextSection } from '../components/TextSection';
import { FAQ } from '../components/FAQ';
import { Footer } from '../components/Footer';
import { useProducts } from '@/hooks/useProducts';
import { Loader2 } from 'lucide-react';

const Index = () => {
  const { data: products = [], isLoading } = useProducts();
  
  // Show only the first 2 products as featured
  const featuredProducts = products.slice(0, 2);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl font-bold text-green-600 mb-8">Featured Products</h2>
        
        {isLoading ? (
          <div className="flex justify-center items-center py-20">
            <Loader2 className="w-10 h-10 animate-spin text-green-600" />
          </div>
        ) : featuredProducts.length === 0 ? (
          <div className="text-center py-10">
            <p className="text-gray-500 text-lg">No featured products found</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
        
        <TextSection />
        <FAQ />
      </main>

      <Footer />
      <CartPreview />
    </div>
  );
};

export default Index;
