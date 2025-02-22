
import { create } from 'zustand';
import { products } from '../data/products';

interface SearchState {
  query: string;
  results: typeof products;
  setQuery: (query: string) => void;
  search: (query: string) => void;
}

export const useSearch = create<SearchState>((set) => ({
  query: '',
  results: [],
  setQuery: (query: string) => {
    set({ query });
    if (query.length >= 2) {
      set((state) => ({
        results: products.filter((product) => {
          const searchTerm = query.toLowerCase();
          return (
            product.name.toLowerCase().includes(searchTerm) ||
            product.description.toLowerCase().includes(searchTerm)
          );
        }),
      }));
    } else {
      set({ results: [] });
    }
  },
  search: (query: string) => {
    set((state) => ({ ...state, query }));
  },
}));
