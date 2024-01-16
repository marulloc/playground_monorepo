import ClientCompo from '@/app/ClientCompo';
import ProductCard from '@/components/ProductCart';
import ProductGallery from '@/components/ProductGallery';
import ProductSelector from '@/components/ProductSelector';
import { getProduct, getProductRecommendations } from '@/services/product/service';
import { theme } from '@/styles/theme';
import { classNames } from '@/styles/utils';
import { PlusIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

/**
 * @layout => Product / Recommendations
 * @returns
 */
const Page = async ({ params }: { params: { handle: string } }) => {
  const product = await getProduct(params.handle);
  const recommendations = await getProductRecommendations(product!.id);

  return (
    <div className={classNames(' mt-6')}>
      {/* <ClientCompo data={product} />  */}
      <section className={classNames(' w-full     ', theme.maxSize, theme.layoutPadding)}>
        <div className="flex flex-col rounded-lg border border-neutral-200 bg-white p-8 dark:border-neutral-800 dark:bg-zinc-950 md:p-12 lg:flex-row lg:gap-8">
          <div className="h-full w-full basis-full lg:basis-4/6">
            <ProductGallery images={product!.images} />
          </div>

          {/* Product Selector */}
          <div className="basis-full lg:basis-2/6 mt-12 lg:mt-0 flex flex-col justify-between ">
            <div className="text-zinc-300  flex-1  ">
              <div className="mb-6 flex flex-col border-b pb-6 dark:border-neutral-700">
                <h1 className="mb-2 text-2xl font-semibold">{product?.title}</h1>
              </div>

              <ProductSelector product={product as Product} />

              <div className="mt-8 flex flex-col ">
                <div className="text-right">
                  <Link href={`#product-${product?.handle}-description`} className="text-sm text-teal-600">
                    View Details
                  </Link>
                  <div className="text-right ">
                    <Link href={`#product-${product?.handle}-recommendations`} className="text-sm text-teal-600">
                      View Recommendations
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="mr-auto w-auto rounded-full bg-blue-600 p-2 text-sm text-white">
              <p suppressHydrationWarning={true}>
                {`${new Intl.NumberFormat(undefined, {
                  style: 'currency',
                  currency: product?.priceRange.maxVariantPrice.currencyCode,
                  currencyDisplay: 'narrowSymbol',
                }).format(parseFloat(product?.priceRange.maxVariantPrice.amount as string))}`}
                <span
                  className={classNames('ml-1 inline')}
                >{`${product?.priceRange.maxVariantPrice.currencyCode}`}</span>
              </p>
            </div>

            <div className="">
              <button
                className={classNames(
                  'bg-teal-700 hover:bg-teal-600 hover:scale-105 transition-all rounded-lg',

                  'py-3 px-8',
                  'relative w-full  text-center',
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
      <section
        id={`product-${product?.handle}-recommendations`}
        className={classNames(' w-full   text-zinc-400   ', theme.maxSize, theme.layoutPadding)}
      >
        <div className="py-8">
          <h2 className="mb-4 text-2xl font-bold">Recommendations</h2>
          <ul className="flex w-full gap-4 overflow-x-auto pt-1">
            {recommendations.map((product) => (
              <li
                key={`product-recommendations-${product.id}`}
                className="aspect-square w-full flex-none min-[475px]:w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5"
              >
                <Link className="relative h-full w-full" href={product.handleRoute}>
                  <ProductCard product={product} />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Desecription */}
      <section
        id={`product-${product?.handle}-description`}
        className={classNames(' w-full   text-zinc-300   ', theme.maxSize, theme.layoutPadding)}
      >
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
