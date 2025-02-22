
import { ProductCard } from '../components/ProductCard';
import { CartPreview } from '../components/CartPreview';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { TextSection } from '../components/TextSection';
import { FAQ } from '../components/FAQ';
import { Footer } from '../components/Footer';

const Index = () => {
  const featuredProducts = [
    {
      id: 1,
      name: "CBD Ezustkolloid kávé kapszula",
      price: 3000,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      description: "Our signature CBD-infused coffee blend"
    },
    {
      id: 2,
      name: "Premium CBD Arany kávé kapszula",
      price: 3000,
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      description: "Relaxing CBD tea for your daily wellness"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <TextSection />
        <FAQ />
      </main>

      <Footer />
      <CartPreview />
    </div>
  );
};

export default Index;
