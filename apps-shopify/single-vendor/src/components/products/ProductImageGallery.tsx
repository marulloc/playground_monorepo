'use client';

import { Image as TImage, Product } from '@shopify/hydrogen-react/storefront-api-types';
import Image from 'next/image';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { classNames } from '../Marulloc-UI-v2/utils/classNames';
import { Carousel } from '../headless-component/Carousel';

const ProductImageGallery = ({ product }: { product: Product }) => {
  const [mainImg, setMainImg] = useState<TImage | null>(product.featuredImage || null);

  return (
    <div className="w-full">
      <Carousel>
        <Carousel.Controller direction="left">
          <div className="absolute left-0 z-10 h-full">
            <button
              className={classNames(
                'h-full px-4',
                'bg-gray-600 text-white backdrop-blur-sm bg-opacity-10 rounded-r-3xl shadow-md',
                'hover:bg-opacity-30 hover:shadow-2xl',
              )}
            >
              Left
            </button>
          </div>
        </Carousel.Controller>
        <Carousel.Controller direction="right">
          <div className="absolute right-0 z-10 h-full">
            <button
              className={classNames(
                'h-full px-4',
                'bg-black text-white backdrop-blur-sm bg-opacity-10 rounded-l-3xl shadow-2xl',
                'hover:bg-opacity-30 hover:shadow-2xl',
              )}
            >
              Right
            </button>
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
