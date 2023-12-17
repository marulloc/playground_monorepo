import Recommendations from './Recommendations';
import Reviews from './Reviews';
import ProductHero from './ProductHero';
import ProductDetail from './ProductDetail';
import { productQL } from '@/services/product';
import ConsoleCompo from '@/components/Marulloc-UI-v2/components/ConsoleCompo';
import { gidParser } from '@/services/parsers/gidParser';
import ProductOverview from '@/components/products/ProductOverview';
import ProductVariantSelector from '@/components/products/ProductVariantSelector';

const Page = async ({ params }: { params: { [key: string]: string } }) => {
  const { id } = params;

  const gid = gidParser.comibne(id, 'Product');
  const product = await productQL.getProductById({ id: gid });

  return (
    <main>
      {/* <ProductOverview product={product} /> */}

      <ProductVariantSelector product={product} />
      {/* <ConsoleCompo data={product} /> */}
      <div className="mx-auto max-w-2xl lg:max-w-7xl px-4 pt-10 sm:px-6 lg:px-8 lg:pt-16">
        <ProductHero product={product} />
      </div>

      <div className="mx-auto max-w-2xl lg:max-w-7xl px-4 pt-10 sm:px-6 lg:px-8 lg:pt-16">
        <ProductDetail product={product} />
        {/* <Reviews /> */}
      </div>

      <div className="mx-auto max-w-2xl lg:max-w-7xl px-4 pt-10 sm:px-6 lg:px-8 lg:pt-16">
        <Recommendations productId={product.id} />
      </div>
    </main>
  );
};

export default Page;
