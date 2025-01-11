import { CarouselDemo } from "@/components/Carousel";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Link } from "react-router-dom";

export const Product = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="bg-gray-100 flex-grow pt-24 flex flex-col items-center">
        <div className="max-w-4xl w-full px-4 sm:px-6 lg:px-8">
          {/* Heading Section */}
          <h1 className="text-3xl font-extrabold text-gray-900 text-center mb-6">
            Termékeink
          </h1>
          <p className="text-gray-700 text-center font-semibold text-lg mb-12">
          Üdvözöljük a Life Is Naturalnál! Célunk, hogy a legjobb CBD-vel dúsított kávékészítményeket kínáljuk Önnek. Küldetésünk, hogy egészségtudatos és minőségi élményeket nyújtsunk mindenkinek.
          </p>

          {/* Image and Text Section carousel */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
               <CarouselDemo ></CarouselDemo>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Kávé Kapszuláink:
              </h2>
              <p className="text-gray-600 text-lg font-semibold leading-relaxed">
                Life Is Natural started with a vision to create a harmonious blend of health and taste. Our CBD coffee is crafted to enhance your well-being and elevate your mornings. We believe in natural solutions for a better lifestyle.
              </p>
            </div>
          </div>

          {/* Call to Action or Additional Info */}
          <div className="mt-12 text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              5db dobozz feletti vásárlás esetén ingyenes házhoz szállítás!
            </h3>
            <Link to="/"
              className="inline-block bg-slate-950 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition"
            >
              Megvásárolom
              </Link>
            
          </div>
        </div>
      </div>
      
      <div className="bg-gray-100 flex-grow pt-24 flex flex-col items-center"></div>
      <Footer />
      </div>
  );
};

export default Product;
