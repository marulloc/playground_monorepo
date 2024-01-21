import ClientCompo from '@/components/ClientCompo';
import ProductCard from '@/components/ProductCard';
import { getCollections } from '@/services/collection/service';
import { getProductsSearch } from '@/services/search/service';
import { theme } from '@/styles/theme';
import { classNames } from '@/styles/utils';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

/**
 * @layout -> Collection List / Search Result / Filter List
 * @returns
 */
const Page = async ({ searchParams }: { searchParams?: { [key: string]: string | string[] | undefined } }) => {
  const { sortKey, query, filter } = searchParams as { [key: string]: string };

  const products = await getProductsSearch({ query, sortKey: sortKey as ShopifySortKey, filters: [], reverse: false });

  console.log('Rerender');
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
          <p className=" text-xs flex space-x-2 px-3 py-1 -mt-1 -mr-3 justify-end items-center hover:bg-gray-600 cursor-pointer rounded-full">
            <span className="font-bold"> {'Price:Low to High'} </span>
            <span>
              <ChevronDownIcon className="h-4 w-4" />
            </span>
          </p>
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
