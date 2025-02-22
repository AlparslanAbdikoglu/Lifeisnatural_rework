
import { useSearch } from '../store/useSearch';
import { Search } from 'lucide-react';
import { Input } from './ui/input';
import { useEffect, useRef, useState } from 'react';
import { SearchResults } from './SearchResults';
import { useDebounce } from '../hooks/useDebounce';

export const SearchInput = () => {
  const { query, setQuery } = useSearch();
  const [isOpen, setIsOpen] = useState(false);
  const debouncedSearch = useDebounce(setQuery, 300);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative w-full" ref={wrapperRef}>
      <div className="relative">
        <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
        <Input
          type="search"
          placeholder="Search products..."
          className="pl-8"
          value={query}
          onChange={(e) => {
            debouncedSearch(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
        />
      </div>
      {isOpen && <SearchResults />}
    </div>
  );
};
