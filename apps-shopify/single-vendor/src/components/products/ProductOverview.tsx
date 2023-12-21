import { Product } from '@shopify/hydrogen-react/storefront-api-types';
import { useMemo } from 'react';
import ProductVariantSelector from './ProductSelectForm';
import { RadioGroup } from '../headless-component/Form/RadioGroup';

const ProductOverview = ({ product }: { product: Product }) => {
  return (
    <section
      aria-label="product-overview-section"
      className="mx-auto max-w-2xl lg:max-w-7xl px-4 pt-10 sm:px-6 lg:px-8 lg:pt-16"
    >
      <div className="grid lg:grid-cols-3 lg:space-x-4">
        <div className="col-span-3 lg:col-span-2 bg-blue-500">Image Section</div>

        <div className="col-span-3 lg:col-span-1 h-full">
          <ProductVariantSelector product={product} />
        </div>
      </div>
    </section>
  );
};

export default ProductOverview;
