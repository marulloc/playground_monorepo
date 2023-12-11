'use client';

import { useSearchParams } from 'next/navigation';
import { useMemo } from 'react';

const useQueryString = () => {
  const search = useSearchParams();
  const mySearch = useMemo(() => {
    const result: { [key: string]: string } = {};
    search.forEach((value, key) => (result[key] = value));
    return result;
  }, [search]);

  return mySearch;
};

export default useQueryString;
