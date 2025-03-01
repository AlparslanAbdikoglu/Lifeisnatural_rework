
import { ProductCard } from '../components/ProductCard';
import { CartPreview } from '../components/CartPreview';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { TextSection } from '../components/TextSection';
import { FAQ } from '../components/FAQ';
import { Footer } from '../components/Footer';
import { useProducts } from '@/hooks/useProducts';
import { Loader2, PackageOpen } from 'lucide-react';

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
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-16">
            <div className="p-8 flex flex-col items-center justify-center">
              <div className="bg-gray-100 p-6 mb-6 rounded-full">
                <PackageOpen className="w-16 h-16 text-green-600" />
              </div>
              <img 
                src="https://images.unsplash.com/photo-1485833077593-4278bba3f11f" 
                alt="Products coming soon" 
                className="w-full h-64 object-cover mb-6 rounded-md"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">No Featured Products Found</h3>
              <p className="text-gray-600 text-center mb-4">
                We're working on adding exciting new natural products for you.
                Check back soon to see our featured collection!
              </p>
              <div className="border-t border-gray-200 w-full pt-4 mt-2">
                <p className="text-sm text-gray-500 text-center">
                  We're adding new organic and eco-friendly products regularly.
                </p>
              </div>
            </div>
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
