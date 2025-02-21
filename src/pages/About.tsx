
import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">About Us</h1>
        <div className="prose prose-lg">
          <p className="mb-6">
            Life is Natural is dedicated to bringing you the highest quality CBD-infused beverages.
            Our mission is to enhance your daily wellness routine with carefully crafted products
            that combine the benefits of CBD with premium coffee and tea blends.
          </p>
          <p className="mb-6">
            Founded in 2024, we work directly with organic farmers and use state-of-the-art
            extraction methods to ensure the highest quality in every product we offer.
          </p>
          <p>
            Our commitment to quality, sustainability, and customer satisfaction drives
            everything we do. We believe in transparency, education, and making premium CBD
            products accessible to everyone.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
