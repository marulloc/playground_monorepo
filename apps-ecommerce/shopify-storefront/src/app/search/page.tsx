import ClientCompo from '@/components/ClientCompo';
import ProductCard from '@/components/ProductCard';
import { getCollections } from '@/services/collection/service';
import { getProductsSearch } from '@/services/search/service';
import { theme } from '@/styles/theme';
import { classNames } from '@/styles/utils';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Sort from './Sort';
import { SortKey } from '@/services/search/type';

/**
 * @layout -> Collection List / Search Result / Filter List
 * @returns
 */
const Page = async ({ searchParams }: { searchParams?: { [key: string]: string | string[] | undefined } }) => {
  const { sort, query, filter } = searchParams as { [key: string]: string };

  const products = await getProductsSearch({ query, sortKey: sort as SortKey, filters: [] });

  return (
    <div className="order-last min-h-screen w-full md:order-none">
      <div className="flex justify-between items-center">
        {/* Summary */}
        <p className="mb-4 text-xs text-gray-400 ">
          {`Showing ${products.length} ${'result'} for `}
          <span className="font-bold text-gray-200">&quot;{query}&quot;</span>
        </p>

        {/* Sorting */}
        <div className="flex-shrink-0 flex justify-end mb-4">
          <Sort />
        </div>
      </div>

      <div>
        <ul className="grid gap-4  grid-cols-2   lg:grid-cols-3">
          {products.map((product) => (
            <li
              key={`product-card-${product.handle}`}
              className={classNames(theme.mainBackground, 'w-full aspect-square')}
            >
              <Link href={product.handleRoute} key={`home-product-card-${product.handle}`}>
                <ProductCard product={product} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Page;
