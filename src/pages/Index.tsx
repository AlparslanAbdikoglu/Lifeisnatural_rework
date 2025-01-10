import { ProductCard } from '../components/ProductCard';
import { CartPreview } from '../components/CartPreview';
import { products } from '../data/products';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { TextSection } from '../components/TextSection';
import { FAQ } from '../components/FAQ';
import { Footer } from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />

      <main className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-11">
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-items-center">
    {products.slice(0, 2).map((product) => (
      <ProductCard key={product.id} product={product} />
    ))}
  </div>
</main>



      <TextSection />
      <FAQ />
      <Footer />
      <CartPreview />
    </div>
  );
};

export default Index;