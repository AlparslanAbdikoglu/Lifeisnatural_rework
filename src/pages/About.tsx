export const AboutUs = () => {
    return (
      <div className="bg-gray-100 min-h-screen flex flex-col items-center py-12">
        <div className="max-w-4xl w-full px-4 sm:px-6 lg:px-8">
          {/* Heading Section */}
          <h1 className="text-3xl font-extrabold text-gray-900 text-center mb-6">
            About Us
          </h1>
          <p className="text-gray-700 text-center text-lg mb-12">
            Welcome to Life Is Natural! We are dedicated to bringing you the finest CBD-infused coffee products. Our mission is to provide health-conscious and high-quality experiences for everyone.
          </p>
  
          {/* Image and Text Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <img
                src="https://via.placeholder.com/400x300"
                alt="About Us"
                className="rounded-lg shadow-md w-full h-auto object-cover"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Who We Are
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Life Is Natural started with a vision to create a harmonious blend of health and taste. Our CBD coffee is crafted to enhance your well-being and elevate your mornings. We believe in natural solutions for a better lifestyle.
              </p>
            </div>
          </div>
  
          {/* Call to Action or Additional Info */}
          <div className="mt-12 text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Ready to explore our products?
            </h3>
            <a
              href="/products"
              className="inline-block bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition"
            >
              Browse Our Collection
            </a>
          </div>
        </div>
      </div>
    );
  };
  