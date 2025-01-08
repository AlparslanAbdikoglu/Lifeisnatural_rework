import { ProductCard } from '../components/ProductCard';
import { CartPreview } from '../components/CartPreview';
import { products } from '../data/products';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { TextSection } from '../components/TextSection';
import { Footer } from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>

      <TextSection />
      <Footer />
      <CartPreview />
    </div>
  );
};

export default Index;