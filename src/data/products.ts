export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
}

// Local product data
 export const products: Product[] = [
  {
    id: 1,
    name: "CBD Arany Kapszula",
    price: 3990,
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    description: "10 Kapszula, Gram:50g. CBD Tartalma: 3,36mg Kávé származása: Costa Rica. Összetevők: Őrölt pőrkölt kávé 80% arabica 20% rhobusta és 5% CBD Olaj. Nespresso compatibilis."
  },
  {
    id: 2,
    name: " CBD Ezüst Kapszula",
    price: 3290,
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
    description: "10 Kapszula, Gram:50g. CBD Tartalma: 3,36mg Kávé származása: Costa Rica. Összetevők: Őrölt pőrkölt kávé 80% arabica 20% rhobusta és 5% CBD Olaj. Nespresso compatibilis."
  }
];

