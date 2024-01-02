import ConsoleCompo from '@/components/Marulloc-UI-v2/components/ConsoleCompo';
import { gidParser } from '@/services/parsers/gidParser';
import { productQL } from '@/services/product';
import { Product } from '@shopify/hydrogen-react/storefront-api-types';
import Image from 'next/image';
import Link from 'next/link';

const Recommendations = async ({ productId }: { productId: Product['id'] }) => {
  const recommendations = await productQL.getProductRecommendations({ productId, intent: 'RELATED' });

  return (
    <section aria-labelledby="related-products-heading" className="bg-white">
      <h2 id="related-products-heading" className="text-xl font-bold tracking-tight text-gray-900">
        Customers also purchased
      </h2>

      {/* <ConsoleCompo data={pr} /> */}
      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {recommendations.map((product) => (
          <div key={product.id} className="group relative">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
              <Image
                src={product.featuredImage?.url || ''}
                alt={product.featuredImage?.altText || ''}
                width={product.featuredImage?.width as number}
                height={product.featuredImage?.height as number}
                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
              />
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm text-gray-700">
                  <Link
                    href={`/${gidParser.extract(product.id)?.resource.toLowerCase() as 'product'}/${gidParser.extract(
                      product.id,
                    )?.id}`}
                  >
                    <span aria-hidden="true" className="absolute inset-0" />
                    {product.title}
                  </Link>
                </h3>
                {/* <p className="mt-1 text-sm text-gray-500">{product.color}</p> */}
              </div>
              <p className="text-sm font-medium text-gray-900 space-x-2">
                <span>{product.priceRange.minVariantPrice.currencyCode}</span>
                <span>{product.priceRange.minVariantPrice.amount}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Recommendations;
