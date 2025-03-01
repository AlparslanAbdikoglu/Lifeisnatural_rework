
import { useQuery } from "@tanstack/react-query";
import api from "../api/medusa";
import { Product } from "../types/product";

export const useProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: async (): Promise<Product[]> => {
      try {
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
        throw error;
      }
    },
  });
};
