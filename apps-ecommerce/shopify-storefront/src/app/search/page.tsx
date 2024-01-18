import { theme } from '@/styles/theme';
import { classNames } from '@/styles/utils';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

/**
 * @layout -> Collection List / Search Result / Filter List
 * @returns
 */
const Page = () => {
  const products = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

  return (
    <div className="mt-20">
      <div className="mx-auto flex max-w-screen-2xl flex-col gap-8 px-4 pb-4 text-black dark:text-white md:flex-row">
        {/* Collection List */}
        <div className="order-first w-full flex-none md:max-w-[125px]">
          <p className="text-xs text-gray-400">Collections</p>

          <nav>
            <ul>
              <li className="mt-2 flex text-black dark:text-white cursor-pointer">
                <span className="w-full text-sm underline-offset-4 hover:underline dark:hover:text-neutral-100">
                  All
                </span>
              </li>

              <li className="mt-2 flex text-black dark:text-white cursor-pointer">
                <span className="w-full text-sm underline-offset-4 hover:underline dark:hover:text-neutral-100">
                  Sales
                </span>
              </li>
            </ul>
          </nav>
        </div>

        {/* Search result */}
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

        {/* Filter   */}
        <div className="order-none flex-none md:order-last md:w-[125px]">
          <p className="text-xs text-gray-400">Filter by</p>

          {/* <p className="text-xs text-gray-400">Filter by</p> */}
        </div>
      </div>
    </div>
  );
};

export default Page;
