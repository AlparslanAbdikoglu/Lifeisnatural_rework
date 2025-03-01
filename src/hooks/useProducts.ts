
import { useQuery } from "@tanstack/react-query";
import api from "../api/medusa";
import { Product } from "../types/product";

// Fallback products to use when Medusa is not available
const fallbackProducts: Product[] = [
  {
    id: "prod_01",
    name: "CBD Ezustkolloid kávé kapszula",
    price: 3900, // Price in HUF
    image: "/04.webp",
    description: "( 1 doboz10 kapszula, 1 Csepp ) Gram: 50g CBD tartalom. 3,36 mg. Kávé származása: Costa Rica Származási ország: Magyarország Összetevők: őrölt pörkölt kávé (80% arabica és 20% rhobusta) és CBD olaj 5%-os oldatban. CBD-olajat tartalmazó őrölt pörkölt kávé Nespresso kompatibilis kapszulában.",
  },
  {
    id: "prod_02",
    name: "CBD Arany kávé kapszula",
    price: 4500, // Price in HUF
    image: "/04.webp",
    description: "( 1 doboz10 kapszula, 1 Csepp ) Gram: 50g CBD tartalom. 3,36 mg. Kávé származása: Costa Rica Származási ország: Magyarország Összetevők: őrölt pörkölt kávé (80% arabica és 20% rhobusta) és CBD olaj 5%-os oldatban. CBD-olajat tartalmazó őrölt pörkölt kávé Nespresso kompatibilis kapszulában",
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
        
        // Convert cents to HUF (approximating 1 USD = 300 HUF)
        return response.data.products.map((product: any) => ({
          id: product.id,
          name: product.title,
          price: Math.round((product.variants[0]?.prices[0]?.amount || 0) * 3), // Convert to HUF
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
