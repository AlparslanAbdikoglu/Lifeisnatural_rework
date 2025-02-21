
import { useSearch } from '../store/useSearch';
import { Link } from 'react-router-dom';

export const SearchResults = () => {
  const { results, query } = useSearch();

  if (query.length < 2) return null;
  
  return (
    <div className="absolute top-full left-0 right-0 bg-white shadow-lg rounded-b-lg mt-1 max-h-96 overflow-y-auto z-50">
      {results.length === 0 ? (
        <div className="p-4 text-gray-500">No results found for "{query}"</div>
      ) : (
        <div className="divide-y divide-gray-100">
          {results.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="flex items-center gap-4 p-4 hover:bg-gray-50 transition-colors"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-12 h-12 object-cover rounded"
              />
              <div>
                <h3 className="font-medium text-gray-900">{product.name}</h3>
                <p className="text-sm text-gray-500">{product.description}</p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};
