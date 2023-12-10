'use client';

import { classNames } from '@/components/Marulloc-UI-v2/utils/classNames';
import { RadioGroup } from '@headlessui/react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';
import lodash from 'lodash';
import { getProductVariantBySelectedOption } from '@/services/getProductVariantBySelectedOption';

const useMySearchParams = () => {
  const search = useSearchParams();
  const mySearch = useMemo(() => {
    const result: { [key: string]: string } = {};
    search.forEach((value, key) => (result[key] = value));
    return result;
  }, [search]);

  return mySearch;
};

const ProductCard = ({ product }: { product: any }) => {
  const searchParams = useMySearchParams();
  const options = useMemo(() => {
    return product.options.map((option: any) => ({
      ...option,
      values: option.values.map((value: any) => ({ value, active: searchParams[option.name] === value })),
    }));
  }, [product.options, searchParams]);

  // => loading state
  const [selectedVariant, setSelectedVariant] = useState<any>(null);
  useEffect(() => {
    const selectedOption = Object.entries(searchParams).reduce((result, current) => {
      const [name, value] = current;
      return [...result, { name, value }];
    }, [] as any);

    if (selectedOption.length !== options.length) return;

    (async () => {
      const response = await getProductVariantBySelectedOption({ handle: product.handle, selectedOption });
      setSelectedVariant(response?.data?.product?.variantBySelectedOptions ?? null);
    })();
  }, [options.length, product.handle, searchParams]);

  return (
    <div className="mx-auto max-w-2xl lg:max-w-7xl mt-6 lg:px-8">
      <div className=" ">
        <div className="  grid  lg:grid-cols-3 lg:space-x-4">
          {/* Image Gallery */}
          <div className=" col-span-3 lg:col-span-2      ">
            <div className="w-full  flex  space-x-2 ">
              <div
                className="   max-h-[490px] overflow-scroll"
                //  onMouseOut={() => handleHoverImage(null)}
              >
                {product.images.nodes?.map((image: any) => (
                  <Image
                    key={image.url}
                    className="w-32 aspect-square rounded-lg cursor-pointer hover:border-2 hover:border-indigo-500 hover:-p-px  "
                    src={image.url}
                    alt={image.altText || ''}
                    width={image.width}
                    height={image.height}
                    // onMouseOver={() => handleHoverImage(image)}
                    // onMouseOut={(e) => e.stopPropagation()}
                  />
                ))}
              </div>

              <div>
                <Image
                  className="flex-1 aspect-square rounded-lg"
                  src={selectedVariant?.image.url || product.featuredImage.url}
                  alt={selectedVariant?.image.altText || product.featuredImage.altText || ''}
                  width={selectedVariant?.image.width || product.featuredImage.width}
                  height={selectedVariant?.image.height || product.featuredImage.height}
                />
              </div>
            </div>
          </div>

          {/* Options */}
          <div className="  h-full col-span-3 lg:col-span-1  ">
            <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
              <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{product.title}</h1>
            </div>

            <form className="mt-10  " onSubmit={(e) => e.preventDefault()}>
              {options.map((option: any) => (
                <div className="mt-10" key={option.name}>
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium text-gray-900">{option.name}</h3>
                    <a></a>
                  </div>
                  <fieldset className="mt-4" aria-required>
                    <legend className="sr-only">{`Choose a ${option.name}`}</legend>

                    <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
                      {option.values.map(({ value, active }: any) => (
                        <label
                          key={`${option.name}-${value}`}
                          className={classNames(
                            'group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 cursor-pointer bg-white text-gray-900 shadow-sm undefined',
                          )}
                        >
                          <Link href={{ query: { ...searchParams, [option.name]: value } }} scroll={false}>
                            <input type="radio" className="sr-only" value={active} />
                            <span>{value}</span>
                            {active && (
                              <span className="pointer-events-none absolute -inset-px rounded-md border-2 border-indigo-500"></span>
                            )}
                          </Link>
                        </label>
                      ))}
                    </div>
                  </fieldset>
                </div>
              ))}
              <button
                type="submit"
                className={classNames(
                  'relative mt-10 flex w-full items-center justify-center rounded-md border   px-8 py-3 text-base font-medium uppercase ',
                  selectedVariant?.quantityAvailable <= 0
                    ? 'focus:outline-none sm:flex-1  cursor-not-allowed bg-gray-100 text-gray-400 undefined'
                    : 'border-transparent bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2',
                )}
              >
                {selectedVariant?.quantityAvailable <= 0 ? 'Sold out, Choose another options' : 'Add to Cart'}
                {selectedVariant?.quantityAvailable <= 0 && (
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                  >
                    <svg
                      className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                      viewBox="0 0 100 100"
                      preserveAspectRatio="none"
                      stroke="currentColor"
                    >
                      <line x1="0" y1="100" x2="100" y2="0" vector-effect="non-scaling-stroke"></line>
                    </svg>
                  </span>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
