'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useMemo } from 'react';

export const useSyncDataUrl = (): [
  {
    dataMap: { [key: string]: string };
    dataArr: [string, string][];
    get: () => {
      queryStringArr: [string, string][];
      queryStringMap: { [key: string]: string };
    };
  },
  (name: string, value: undefined | string) => void,
] => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const setQueryString = useCallback(
    (name: string, value: undefined | string) => {
      const currentUrl = new URLSearchParams(Array.from(searchParams.entries()));
      if (value) currentUrl.set(name, value.trim());
      else currentUrl.delete(name);

      const search = currentUrl.toString();
      const query = search ? `?${search}` : '';

      router.push(`${pathname}${query}`, { scroll: false });
    },
    [pathname, router, searchParams],
  );

  const getQueryString = useCallback(() => {
    const queryStringArr = Array.from(searchParams.entries());
    const queryStringMap = queryStringArr.reduce(
      (result, queryString) => ({ ...result, [queryString[0]]: queryString[1] }),
      {} as { [key: string]: string },
    );
    return { queryStringArr, queryStringMap };
  }, [searchParams]);

  const dataFromUrl = useMemo(() => {
    const { queryStringArr, queryStringMap } = getQueryString();
    return { dataArr: queryStringArr, dataMap: queryStringMap };
  }, [getQueryString]);

  return [{ ...dataFromUrl, get: getQueryString }, setQueryString];
};
