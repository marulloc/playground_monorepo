import ConsoleCompo from '@/components/Marulloc-UI-v2/components/ConsoleCompo';
import { Card } from 'ui';
import Hero from '@/components/Hero';
import ProductList from '@/components/ProductList';
import { getProductsInCollection } from '@/service/collection';

const Home = async () => {
  const homeCollection = await getProductsInCollection({ id: 'gid://shopify/Collection/445727310126' });

  const productList = homeCollection.products!.edges;

  return (
    <main className="h-screen relative">
      <Hero />

      <ProductList productList={productList} />

      {/* <Image fill alt="..." src="/background.jpg" /> */}
      <ConsoleCompo data={homeCollection} />
    </main>
  );
};

export default Home;
