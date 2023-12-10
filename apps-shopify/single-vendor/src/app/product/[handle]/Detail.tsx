'use client';

import { classNames } from '@/components/Marulloc-UI-v2/utils/classNames';
import { RadioGroup } from '@headlessui/react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { useMemo, useState } from 'react';

const ProductCard = ({ product }: { product: any }) => {
  const search = useSearchParams();
  const searchParams: any = {};
  search.forEach((value, key) => {
    searchParams[key] = value;
  });

  // 품절인 variant의 option 조합을 추출
  // const disabledVariants = useMemo(() => {
  //   const variantsQuantity = product.variants.edges
  //     ?.filter(({ node }) => !node.quantityAvailable)
  //     .map(({ node }) =>
  //       [...node.selectedOptions].reduce((result, selectedOptions) => {
  //         return [...selectedOptions];
  //         // return { ...result, [selectedOptions.name]: selectedOptions.value };
  //       }, {}),
  //     );

  //   return variantsQuantity;
  // }, [product]);

  const options = useMemo(() => {
    return product.options.map((option: any) => ({
      ...option,
      values: option.values.map((value: any) => ({
        value,
        active: searchParams[option.name] === value,
        disabled: false,
      })),
    }));
  }, [product.options, searchParams]);

  // const selectedOption = useMemo(() => {
  //   return options.reduce((result, option) => {
  //     const [activeValue] = option.values.filter(({ active }: any) => active);
  //     const optionName = option.name;

  //     return [...result, { name: optionName, value: activeValue?.value ?? null }];
  //   }, [] as any[]);
  // }, [options]);

  return (
    <div className="mx-auto max-w-2xl lg:max-w-7xl mt-6 lg:px-8">
      <div className=" ">
        <div className="  grid  lg:grid-cols-3 lg:space-x-4">
          {/* Image Gallery */}
          <div className=" col-span-3 lg:col-span-2      ">
            <div className="w-full  flex  space-x-2 ">
              <div className="space-y-2  max-h-[490px] overflow-scroll">
                {product.images.nodes?.map((image: any) => (
                  <Image
                    key={image.url}
                    className="w-32 aspect-square rounded-lg"
                    src={image.url}
                    alt={image.altText || ''}
                    width={image.width}
                    height={image.height}
                  />
                ))}
              </div>

              <div>
                <Image
                  key={product.featuredImage.url}
                  className="flex-1 aspect-square rounded-lg"
                  src={product.featuredImage.url}
                  alt={product.featuredImage.altText || ''}
                  width={product.featuredImage.width}
                  height={product.featuredImage.height}
                />
              </div>
            </div>
          </div>

          {/* Options */}
          <div className="  h-full col-span-3 lg:col-span-1  ">
            <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
              <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{product.title}</h1>
            </div>

            <form className="mt-10  ">
              {options.map((option: any) => (
                <div className="mt-10" key={option.name}>
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium text-gray-900">{option.name}</h3>
                    <a></a>
                  </div>
                  <fieldset className="mt-4">
                    <legend className="sr-only">{`Choose a ${option.name}`}</legend>

                    <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
                      {option.values.map(({ value, active }: any) => (
                        <label
                          key={`${option.name}-${value}`}
                          className={classNames(
                            // ===> default
                            'group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 cursor-pointer bg-white text-gray-900 shadow-sm undefined',
                            // ===> disabled
                            // 'group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6  bg-gray-50 text-gray-200',
                            // 'cursor-not-allowed'
                          )}
                        >
                          <Link href={{ query: { ...searchParams, [option.name]: value } }} scroll={false}>
                            <input type="radio" className="sr-only" value={active} />
                            <span>{value}</span>

                            {active && (
                              <span className="pointer-events-none absolute -inset-px rounded-md border-2 border-indigo-500"></span>
                            )}
                            {/* disalbed */}
                            {/* <span className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"></span> */}
                          </Link>
                        </label>
                      ))}
                    </div>
                  </fieldset>
                </div>
              ))}
              {/*  */}
              <button
                type="submit"
                className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Add to bag
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
