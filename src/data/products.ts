export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "CBD Ezustkolloid kávé kapszula",
    price: 3000,
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    description: "High-performance laptop for professionals"
  },
  {
    id: 2,
    name: "CBD Arany kávé kapszula",
    price: 3000,
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
    description: "AI-powered home assistant robot"
  },

];