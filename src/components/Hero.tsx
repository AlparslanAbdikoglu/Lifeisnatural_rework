import { Button } from './ui/button';

export const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-purple-50 to-purple-100 py-20 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Discover Amazing Tech Products
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              Explore our curated collection of premium tech gadgets and accessories. 
              Find the perfect device to enhance your digital lifestyle.
            </p>
            <Button size="lg" className="animate-fade-in">
              Shop Now
            </Button>
          </div>
          <div className="aspect-video rounded-lg overflow-hidden shadow-xl">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/jfKfPfyJRdk"
              title="Product Showcase"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};