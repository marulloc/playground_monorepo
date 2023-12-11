import Link from 'next/link';
import { classNames } from './Marulloc-UI-v2/utils/classNames';
import Image from 'next/image';
import { ProductConnection } from '@shopify/hydrogen-react/storefront-api-types';
import { gidParser } from '@/services/parsers/gidParser';

const ProductList = ({ productList }: { productList: ProductConnection['edges'] }) => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
          {productList.map(({ node: product }) => (
            <div key={product.id}>
              <Link
                href={`/${gidParser.extract(product.id)?.resource.toLowerCase() as 'product'}/${gidParser.extract(
                  product.id,
                )?.id}`}
              >
                <div className="relative">
                  <div className="relative h-72 w-full overflow-hidden rounded-lg">
                    <Image
                      fill
                      src={product.featuredImage?.url || ''}
                      alt={product.featuredImage?.altText || ''}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <div className="relative mt-4">
                    <h3 className="text-sm font-medium text-gray-900">{product.title}</h3>

                    {/* <p className="mt-1 text-sm text-gray-500">{product.color}</p> */}
                  </div>

                  {/* Overlay */}
                  <div className="absolute inset-x-0 top-0 flex h-72 items-end justify-end overflow-hidden rounded-lg p-4">
                    <div
                      aria-hidden="true"
                      className={classNames('absolute inset-x-0 top-0 h-32 bg-gradient-to-b', ' from-black opacity-30')}
                    />
                    <div
                      aria-hidden="true"
                      className={classNames(
                        'absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t',
                        'from-black opacity-30',
                      )}
                    />
                    <div className="absolute top-0 pt-4">
                      <h3 className="text-sm font-medium text-white ">{product.title}</h3>
                    </div>

                    <p className="relative text-lg font-semibold text-white">
                      {product.priceRange.minVariantPrice.amount}
                      {product.priceRange.minVariantPrice.currencyCode}
                    </p>
                  </div>
                </div>
                {/* <div className="mt-6">
                <a
                  href={product.href}
                  className="relative flex items-center justify-center rounded-md border border-transparent bg-gray-100 px-8 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200"
                >
                  Add to bag<span className="sr-only">, {product.name}</span>
                </a>
              </div> */}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
