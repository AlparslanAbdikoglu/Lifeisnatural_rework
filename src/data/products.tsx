import React, { useState, useEffect } from "react";
import api from "../api/medusa";
import { Product } from "../types/product";

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);

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

  return (
    <div>
      <h1>Products</h1>
      <div>
        {products.map((product) => (
          <div key={product.id}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <img src={product.image} alt={product.name} />
            <p>${(product.price / 100).toFixed(2)}</p> {/* Price in cents */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
