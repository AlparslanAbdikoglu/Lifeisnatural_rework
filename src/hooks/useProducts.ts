
import { useQuery } from "@tanstack/react-query";
import api from "../api/medusa";
import { Product } from "../types/product";

// Fallback products to use when Medusa is not available
const fallbackProducts: Product[] = [
  {
    id: "prod_01",
    name: "Organic Aloe Vera Gel",
    price: 1299, // Price in cents (12.99)
    image: "https://images.unsplash.com/photo-1626681444556-85e850412337",
    description: "100% pure and natural aloe vera gel for skin and hair care.",
  },
  {
    id: "prod_02",
    name: "Natural Coconut Oil",
    price: 1499, // Price in cents (14.99)
    image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108",
    description: "Cold-pressed organic coconut oil for cooking and beauty uses.",
  }
];

export const useProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: async (): Promise<Product[]> => {
      try {
        console.log("Attempting to fetch products from Medusa...");
        const response = await api.get("/products");
        console.log("Medusa products response:", response.data);
        
        return response.data.products.map((product: any) => ({
          id: product.id,
          name: product.title,
          price: product.variants[0]?.prices[0]?.amount || 0,
          image: product.thumbnail || "",
          description: product.description || "",
        }));
      } catch (error) {
        console.error("Error fetching products:", error);
        console.log("Using fallback products from Supabase");
        // Return fallback products (simulating Supabase integration for MVP)
        return fallbackProducts;
      }
    },
    staleTime: 60 * 1000, // 1 minute
  });
};
