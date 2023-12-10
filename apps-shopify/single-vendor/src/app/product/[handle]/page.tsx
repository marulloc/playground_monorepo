import { getProductByHandle } from '@/services/getProductByHandle';
import ImageGallery from './ImageGallery';
import ProductInfo from './ProductInfo';
import Recommendations from './Recommendations';
import Reviews from './Reviews';
import ConsoleCompo from '@/components/Marulloc-UI-v2/components/ConsoleCompo';
import { classNames } from '@/components/Marulloc-UI-v2/utils/classNames';
import ProductCard from './Detail';

const Page = async ({ params }: { params: { [key: string]: string } }) => {
  const { handle } = params;

  const response = await getProductByHandle({ handle });
  console.log(response);

  return (
    <main>
      <ProductCard product={response.data.product} />
      {/* <ConsoleCompo data={response} /> */}
      {/* <ImageGallery handle={handle} /> */}

      <ProductInfo detail={response.data.product} />

      <Recommendations />
    </main>
  );
};

export default Page;
