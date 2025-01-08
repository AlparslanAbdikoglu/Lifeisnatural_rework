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
    name: "Premium Laptop",
    price: 1299.99,
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    description: "High-performance laptop for professionals"
  },
  {
    id: 2,
    name: "Smart Robot",
    price: 799.99,
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
    description: "AI-powered home assistant robot"
  },
  {
    id: 3,
    name: "Developer Workstation",
    price: 2499.99,
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    description: "Complete developer setup with multiple monitors"
  },
  {
    id: 4,
    name: "Coding Laptop",
    price: 1599.99,
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    description: "Specially configured for programming"
  },
  {
    id: 5,
    name: "Home Office Bundle",
    price: 899.99,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    description: "Complete home office setup"
  },
  {
    id: 6,
    name: "AI Development Kit",
    price: 399.99,
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
    description: "Start your journey in AI development"
  },
  {
    id: 7,
    name: "Circuit Board Kit",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    description: "Advanced circuit board for electronics projects"
  },
  {
    id: 8,
    name: "Security Suite",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
    description: "Complete cybersecurity solution"
  },
  {
    id: 9,
    name: "Coding Bootcamp",
    price: 999.99,
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    description: "Intensive programming course materials"
  },
  {
    id: 10,
    name: "Remote Work Setup",
    price: 1099.99,
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
    description: "Professional remote work equipment bundle"
  }
];