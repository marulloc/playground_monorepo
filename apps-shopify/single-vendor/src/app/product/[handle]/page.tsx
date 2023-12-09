import ImageGallery from './ImageGallery';
import ProductInfo from './ProductInfo';
import Recommendations from './Recommendations';
import Reviews from './Reviews';

const Page = async ({ params }: { params: { [key: string]: string } }) => {
  console.log(params);

  return (
    <main>
      <ImageGallery />

      <ProductInfo />

      <Recommendations />
    </main>
  );
};

export default Page;
