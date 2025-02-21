
import { useCallback } from 'react';

export function useDebounce<T extends (...args: any[]) => any>(
  callback: T,
  delay: number
): T {
  return useCallback(
    ((...args) => {
      const handler = setTimeout(() => callback(...args), delay);
      return () => clearTimeout(handler);
    }) as T,
    [callback, delay]
  );
}
