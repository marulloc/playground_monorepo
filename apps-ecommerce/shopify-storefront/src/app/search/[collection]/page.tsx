import ClientCompo from '@/components/ClientCompo';
import { getCollections } from '@/services/collection/service';
import { theme } from '@/styles/theme';
import { classNames } from '@/styles/utils';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

/**
 * @layout -> Collection List / Search Result / Filter List
 * @returns
 */
const Page = async () => {
  const products = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

  return (
    <div className="order-last min-h-screen w-full md:order-none">
      <div className="flex justify-between items-center">
        {/* Summary */}
        <p className="mb-4 text-xs text-gray-400 ">
          {`Showing ${products.length} ${'result'} for `}
          <span className="font-bold text-gray-200">&quot;{'some~'}&quot;</span>
        </p>

        {/* Sorting */}
        <div className="flex-shrink-0 flex justify-end mb-4">
          <p className=" text-xs flex space-x-2 px-3 py-1 -mt-1 -mr-3 justify-end items-center hover:bg-gray-600 cursor-pointer rounded-full">
            {/* <span className="  text-gray-400">{`Sort by : `}</span> */}

            <span className="font-bold"> {'Price:Low to High'} </span>
            <span>
              <ChevronDownIcon className="h-4 w-4" />
            </span>
          </p>
        </div>
      </div>

      <div className="grid gap-4  grid-cols-2   lg:grid-cols-3">
        {products.map((num) => (
          <div
            key={`product-card-${num}`}
            className={classNames(
              theme.mainBackground,
              'w-full aspect-square',
              'text-zinc-200 flex justify-center items-center',
            )}
          >
            Card {num}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
