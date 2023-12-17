'use client';

import useQueryString from '@/hooks/useQueryString';
import { Product } from '@shopify/hydrogen-react/storefront-api-types';
import { useMemo } from 'react';

const ProductOverview = ({ product }: { product: Product }) => {
  const searchParams = useQueryString();

  const images = useMemo(() => [...product.images.nodes], [product]);
  const options = useMemo(() => {
    return product.options.map((option) => ({
      ...option,
      values: option.values.map((value) => ({ value, active: searchParams[option.name] === value })),
    }));
  }, [product.options, searchParams]);

  return (
    <section
      aria-label="product-overview-section"
      className="mx-auto max-w-2xl lg:max-w-7xl px-4 pt-10 sm:px-6 lg:px-8 lg:pt-16"
    >
      bb
    </section>
  );
};

export default ProductOverview;
