'use client';

import { Image as TImage, Product } from '@shopify/hydrogen-react/storefront-api-types';
import Image from 'next/image';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { classNames } from '../Marulloc-UI-v2/utils/classNames';

const ProductImageGallery = ({ product }: { product: Product }) => {
  const [mainImg, setMainImg] = useState<TImage | null>(product.featuredImage || null);

  return (
    <div className="w-full">
      {/* <Carousel>
        {product.images.nodes.map((image, idx) => (
          <div key={image.url} className={classNames('flex justify-center items-center')}>
            <Image
              key={image.url}
              className={classNames(
                'w-64 aspect-square rounded-lg cursor-pointer object-cover',
                ' hover:border-2 hover:border-indigo-500   ',
              )}
              src={image.url}
              alt={image.altText || ''}
              width={image.width as number}
              height={image.height as number}
            />
          </div>
        ))}
      </Carousel> */}
      <div>
        <Image
          className="flex-1   rounded-lg  object-cover"
          src={mainImg?.url || ''}
          alt={mainImg?.altText || ''}
          width={mainImg?.width as number}
          height={mainImg?.height as number}
        />
      </div>
      <div className=" flex space-x-2 overflow-auto py-4">
        {[...product.images.nodes, ...product.images.nodes, ...product.images.nodes]?.map((image: any) => (
          <Image
            key={image.url}
            className="w-28 aspect-square rounded-lg cursor-pointer hover:border-2 hover:border-indigo-500 "
            src={image.url}
            alt={image.altText || ''}
            width={image.width}
            height={image.height}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductImageGallery;

// const Carousel = ({ children }: { children: React.ReactNode }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const childrenArr = React.Children.toArray(children);

//   const goToNextSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % childrenArr.length);
//   };

//   const goToPrevSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex - 1 + childrenArr.length) % childrenArr.length);
//   };

//   useEffect(() => {
//     const intervalId = setInterval(goToNextSlide, 1000); // 3초마다 슬라이드 이동
//     return () => clearInterval(intervalId); // 컴포넌트가 언마운트될 때 타이머 제거
//   }, [currentIndex]);

//   return (
//     <div className="relative bg-gray-200 p-4">
//       <button
//         className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white px-4 py-2 rounded"
//         onClick={goToPrevSlide}
//       >
//         이전
//       </button>
//       <div className="flex">
//         {React.Children.map(children, (child, index) => (
//           <div key={index} className={`w-full ${index === currentIndex ? 'block' : 'hidden'}`}>
//             {child}
//           </div>
//         ))}
//       </div>
//       <button
//         className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white px-4 py-2 rounded"
//         onClick={goToNextSlide}
//       >
//         다음
//       </button>
//     </div>
//   );
// };
