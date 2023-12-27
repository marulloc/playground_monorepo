'use client';

import { Image as TImage, Product } from '@shopify/hydrogen-react/storefront-api-types';
import Image from 'next/image';
import React, { useEffect } from 'react';
import { classNames } from '../Marulloc-UI-v2/utils/classNames';
import { Carousel } from '../headless-component/Carousel';
import { ChevronDoubleLeftIcon, ChevronDoubleRightIcon } from '@heroicons/react/20/solid';

const ProductImageGallery = ({ product }: { product: Product }) => {
  return (
    <div className="w-full">
      <Carousel autoDuration={3000}>
        <Carousel.Controller direction="left">
          <div className={classNames('absolute left-0 z-10 ', 'group cursor-pointer', 'h-full')}>
            <div className="relative h-full flex items-center">
              <button
                className={classNames(
                  'px-2 ml-2',
                  'rounded-full aspect-square ',
                  'bg-black text-white backdrop-blur-sm bg-opacity-20 shadow-xl',
                  'group-hover:bg-opacity-30   ',
                )}
              >
                <ChevronDoubleLeftIcon className="h-6 w-6" />
              </button>

              <div
                className={classNames(
                  'absolute inset-0 -z-10',
                  'bg-gradient-to-l from-transparent group-hover:to-gray-400 opacity-40',
                )}
              />
            </div>
          </div>
        </Carousel.Controller>
        <Carousel.Controller direction="right">
          <div className={classNames('absolute right-0 z-10 ', 'group cursor-pointer', 'h-full')}>
            <div className="relative h-full flex items-center">
              <button
                className={classNames(
                  'px-2 mr-2',
                  'rounded-full aspect-square ',
                  'bg-black text-white backdrop-blur-sm bg-opacity-20 shadow-xl',
                  'group-hover:bg-opacity-30   ',
                )}
              >
                <ChevronDoubleRightIcon className="h-6 w-6" />
              </button>
              <div
                className={classNames(
                  'absolute inset-0 -z-10',
                  'bg-gradient-to-r from-transparent group-hover:to-gray-400 opacity-40',
                )}
              />
            </div>
          </div>
        </Carousel.Controller>
        <Carousel.Container>
          {product.images.nodes.map((image, idx) => (
            <Carousel.Item key={image.url}>
              <Image
                key={image.url}
                className={classNames(
                  'w-full aspect-square rounded-lg cursor-pointer object-cover',
                  // ' hover:border-2 hover:border-indigo-500   ',
                )}
                src={image.url}
                alt={image.altText || ''}
                width={image.width as number}
                height={image.height as number}
              />
            </Carousel.Item>
          ))}
        </Carousel.Container>
      </Carousel>
    </div>
  );
};

export default ProductImageGallery;
