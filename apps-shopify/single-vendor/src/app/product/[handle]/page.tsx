import { getProductByHandle } from '@/services/getProductByHandle';
import ImageGallery from './ImageGallery';
import ProductInfo from './ProductInfo';
import Recommendations from './Recommendations';
import Reviews from './Reviews';
import ConsoleCompo from '@/components/Marulloc-UI-v2/components/ConsoleCompo';

const Page = async ({ params }: { params: { [key: string]: string } }) => {
  const { handle } = params;

  const response = await getProductByHandle({ handle });
  console.log(response);

  return (
    <main>
      {/* <ConsoleCompo data={response} /> */}
      <ImageGallery handle={handle} />

      <ProductInfo detail={response.data.product} />

      <Recommendations />
    </main>
  );
};

export default Page;
