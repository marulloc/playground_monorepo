import { getProductByHandle } from '@/services/getProductByHandle';
import Recommendations from './Recommendations';
import Reviews from './Reviews';
import ProductHero from './ProductHero';
import ProductDetail from './ProductDetail';
import type { Product, Collection } from '@shopify/hydrogen-react/storefront-api-types';
const Page = async ({ params }: { params: { [key: string]: string } }) => {
  const { handle } = params;

  const response = await getProductByHandle({ handle });

  return (
    <main>
      <div className="mx-auto max-w-2xl lg:max-w-7xl px-4 pt-10 sm:px-6 lg:px-8 lg:pt-16">
        <ProductHero product={response.data.product} />
      </div>

      <div className="mx-auto max-w-2xl lg:max-w-7xl px-4 pt-10 sm:px-6 lg:px-8 lg:pt-16">
        <ProductDetail product={response.data.product} />
        <Reviews />
      </div>

      <div className="mx-auto max-w-2xl lg:max-w-7xl px-4 pt-10 sm:px-6 lg:px-8 lg:pt-16">
        <Recommendations />
      </div>
    </main>
  );
};

export default Page;
