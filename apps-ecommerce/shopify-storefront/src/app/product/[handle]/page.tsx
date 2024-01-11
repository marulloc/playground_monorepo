import { theme } from '@/styles/theme';
import { classNames } from '@/styles/utils';
import { PlusIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

/**
 * @layout => Product / Recommendations
 * @returns
 */
const Page = () => {
  const relatedProducts = [1, 2, 3, 4, 5, 6];

  return (
    <div className={classNames(' mt-6')}>
      {/*  */}
      <section className={classNames(' w-full     ', theme.maxSize, theme.layoutPadding)}>
        <div className="flex flex-col rounded-lg border border-neutral-200 bg-white p-8 dark:border-neutral-800 dark:bg-zinc-950 md:p-12 lg:flex-row lg:gap-8">
          <div className="h-full w-full basis-full lg:basis-4/6">
            {/* Gallery */}
            <div className="aspect-square text-zinc-300 bg-zinc-950 flex flex-col  gap-4 relative">
              {/* Selected Image */}
              <div className="flex-1 flex">
                <div className="flex-1   bg-zinc-800 rounded-lg"></div>
              </div>

              {/* Images */}
              <div className="overflow-scroll absolute bottom-4 w-full ">
                <ul className="flex justify-center space-x-2">
                  <li className="h-16 lg:h-20 aspect-square bg-black border border-gray-800 rounded-lg"></li>
                  <li className="h-16 lg:h-20 aspect-square bg-black border border-gray-800 rounded-lg"></li>
                  <li className="h-16 lg:h-20 aspect-square bg-black border border-gray-800 rounded-lg"></li>
                  <li className="h-16 lg:h-20 aspect-square bg-black border border-gray-800 rounded-lg"></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Product Selector */}
          <div className="basis-full lg:basis-2/6 mt-12 lg:mt-0 flex flex-col justify-between ">
            <div className="text-zinc-300  flex-1  ">
              <div className="mb-6 flex flex-col border-b pb-6 dark:border-neutral-700">
                <h1 className="mb-2 text-2xl font-semibold">{'Product Title'}</h1>
              </div>
              <dl className="mb-8">
                <dt className="mb-4 text-sm uppercase tracking-wide">{'Colors'}</dt>
                <dd className="flex flex-wrap gap-3">
                  <button
                    // key={value}
                    // aria-disabled={!isAvailableForSale}
                    // disabled={!isAvailableForSale}
                    // onClick={() => {
                    //   // router.replace(optionUrl, { scroll: false });
                    // }}
                    title={`${'Colors'} ${'Red'}${!true ? ' (Out of Stock)' : ''}`}
                    className={classNames(
                      'flex min-w-[48px] items-center justify-center rounded-lg border bg-neutral-100 px-3 py-2 text-sm dark:border-neutral-800 dark:bg-neutral-900',

                      'ring-1 ring-transparent transition duration-300 ease-in-out hover:scale-110 hover:ring-teal-600 ',
                    )}
                  >
                    {'Red'}
                  </button>

                  <button
                    title={`${'Colors'} ${'Blue'}${!true ? ' (Out of Stock)' : ''}`}
                    className={classNames(
                      'flex min-w-[48px] items-center justify-center rounded-lg border bg-neutral-100 px-3 py-2 text-sm dark:border-neutral-800 dark:bg-neutral-900',

                      'cursor-default ring-2 ring-teal-600', // => active options인 경우
                      // 'ring-1 ring-transparent transition duration-300 ease-in-out hover:scale-110 hover:ring-blue-600 ',
                    )}
                  >
                    {'Blue'}
                  </button>

                  <button
                    title={`${'Colors'} ${'Blue'}${!true ? ' (Out of Stock)' : ''}`}
                    className={classNames(
                      'flex min-w-[48px] items-center justify-center rounded-lg border bg-neutral-100 px-3 py-2 text-sm dark:border-neutral-800 dark:bg-neutral-900',

                      'cursor-default ring-2 ring-blue-600',
                      // 'ring-1 ring-transparent transition duration-300 ease-in-out hover:scale-110 hover:ring-blue-600 ',
                      'relative z-10 cursor-not-allowed overflow-hidden bg-neutral-100 text-neutral-500 ring-1 ring-neutral-300 before:absolute before:inset-x-0 before:-z-10 before:h-px before:-rotate-45 before:bg-neutral-300 before:transition-transform dark:bg-neutral-900 dark:text-neutral-400 dark:ring-neutral-700 before:dark:bg-neutral-700',
                      // {
                      //   'relative z-10 cursor-not-allowed overflow-hidden bg-neutral-100 text-neutral-500 ring-1 ring-neutral-300 before:absolute before:inset-x-0 before:-z-10 before:h-px before:-rotate-45 before:bg-neutral-300 before:transition-transform dark:bg-neutral-900 dark:text-neutral-400 dark:ring-neutral-700 before:dark:bg-neutral-700':
                      //     !isAvailableForSale
                      // }
                    )}
                  >
                    {'White'}
                  </button>
                </dd>
              </dl>

              <div className="text-right mt-8">
                <span className="text-sm text-teal-600">View Details</span>
              </div>
            </div>

            <div className="">
              <button
                className={classNames(
                  'bg-teal-700 hover:bg-teal-600 hover:scale-105 transition-all rounded-lg',

                  'py-3 px-8',
                  'relative w-full  text-center',

                  // 'bg-opacity-50', // inactive
                )}
              >
                <PlusIcon className="w-5 h-5 text-zinc-200 absolute left-4 " />
                <span className=" text-zinc-200 text-base">Add to cart</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Recommendations */}

      <section className={classNames(' w-full   text-zinc-400   ', theme.maxSize, theme.layoutPadding)}>
        <div className="py-8">
          <h2 className="mb-4 text-2xl font-bold">Recommendations</h2>
          <ul className="flex w-full gap-4 overflow-x-auto pt-1">
            {relatedProducts.map((product) => (
              <li
                // key={product.handle}
                key={`product-${product}`}
                className="aspect-square w-full flex-none min-[475px]:w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5"
              >
                <Link className="relative h-full w-full" href={`/product/${product}`}>
                  {/* <GridTileImage
                  alt={product.title}
                  label={{
                    title: product.title,
                    amount: product.priceRange.maxVariantPrice.amount,
                    currencyCode: product.priceRange.maxVariantPrice.currencyCode,
                  }}
                  src={product.featuredImage?.url}
                  fill
                  sizes="(min-width: 1024px) 20vw, (min-width: 768px) 25vw, (min-width: 640px) 33vw, (min-width: 475px) 50vw, 100vw"
                /> */}
                  <div className="w-full h-full bg-zinc-950 rounded-lg"></div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Desecription */}
      <section className={classNames(' w-full   text-zinc-300   ', theme.maxSize, theme.layoutPadding)}>
        <h2 className="mb-4 text-2xl font-bold">Details</h2>
        <div className={classNames(theme.mainBackground, 'rounded-lg p-6 space-y-4')}>
          <p>Thanks Images are made by midjourney Description is made by ChatGPT</p>
          <p>
            {`Discover the epitome of style and vivacity with our exclusive "Colorful Shirts." Dive into a spectrum of
            shades that redefine fashion on our product detail page. These shirts are more than just clothing; they're a
            statement. Immerse yourself in the finest quality fabric, expert craftsmanship, and a burst of colors that
            elevate your fashion game.`}
          </p>
          <p>{`
          
          🌈 Features:

          Premium Quality: Each shirt is crafted from high-grade materials, ensuring durability and comfort.
          Bold Colors: Explore a stunning array of colors that cater to every mood and occasion.
          Tailored Fit: Our shirts are designed to provide a sleek and modern silhouette, flattering all body types.
          Versatility: Perfect for both casual and formal settings, these shirts effortlessly transition from day to night.
          `}</p>
        </div>
      </section>
    </div>
  );
};

export default Page;
