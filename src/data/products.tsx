import React, { useState, useEffect } from "react";
import api from "../api/medusa";
import { Product } from "../types/product";
import { useTranslation } from "react-i18next";  // Import i18n for localization

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const { i18n } = useTranslation('common'); // Access the current language
  const currentLanguage = i18n.language; // Get the selected language

  // Fetch products data from API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await api.get("/products");
        const fetchedProducts = response.data.products.map((product: any) => ({
          id: product.id,
          name: product.title,  // Mapping to your custom `name` field
          price: product.variants[0].prices[0].amount, // Assuming the first variant is the default
          image: product.images[0]?.url || "", // Get the image URL if available
          description: product.description,
        }));
        setProducts(fetchedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  // Format price based on the selected locale
  const formatPrice = (priceInCents: number) => {
    return new Intl.NumberFormat(currentLanguage, {
      style: "currency",
      currency: currentLanguage === "en" ? "USD" : "HUF", // Use USD for English and HUF for Hungarian
    }).format(priceInCents / 100);  // Price is in cents, so we divide by 100
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">
        {currentLanguage === 'en' ? 'Featured Products' : 'Kiemelt Termékek'}  {/* Example for dynamic title */}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={product.image || "https://via.placeholder.com/400x300"}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="font-semibold text-lg mb-2">{product.name}</h2>
              <p className="text-sm text-gray-600 mb-4">{product.description || 'No description available'}</p>
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold">{formatPrice(product.price)}</span>
                <button className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded">
                  {currentLanguage === 'en' ? 'Add to Cart' : 'Kosárba helyez'} {/* Example for dynamic button text */}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
