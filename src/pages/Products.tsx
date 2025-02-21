
import { ProductCard } from '@/components/ProductCard';
import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';

const Products = () => {
  const products = [
    {
      id: 1,
      name: "CBD Coffee Blend",
      price: 29.99,
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
      description: "Premium CBD-infused coffee blend for relaxation and focus"
    },
    {
      id: 2,
      name: "CBD Tea Collection",
      price: 24.99,
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      description: "Soothing CBD tea collection for wellness and calm"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Our Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Products;
