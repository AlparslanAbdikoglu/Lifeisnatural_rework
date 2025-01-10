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
    image: "/images/arany-1-1.webp",
    description: "10 Kapszula, Gram:50g. CBD Tartalma: 3,36mg Kávé származása: Costa Rica. Összetevők: Őrölt pőrkölt kávé 80% arabica 20% rhobusta és 5% CBD Olaj. Nespresso compatibilis."
  },
  {
    id: 2,
    name: " CBD Ezüst Kapszula",
    price: 3290,
    image: "/images/ezust.webp",
    description: "10 Kapszula, Gram:50g. CBD Tartalma: 3,36mg Kávé származása: Costa Rica. Összetevők: Őrölt pőrkölt kávé 80% arabica 20% rhobusta és 5% CBD Olaj. Nespresso compatibilis."
  }
];

