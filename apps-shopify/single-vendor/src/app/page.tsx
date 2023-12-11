import ConsoleCompo from '@/components/Marulloc-UI-v2/components/ConsoleCompo';
import { Card } from 'ui';
import { getCollectionByHandle } from '@/services/getCollectionByHandle';
import { getProductsInCollection } from '@/services/getProductsInCollection';
import Hero from '@/components/Hero';
import Image from 'next/image';
import ProductList from '@/components/ProductList';
import { Shop, Customer } from '@shopify/hydrogen-react/storefront-api-types';
import { flattenConnection } from '@shopify/hydrogen-react';

const Home = async () => {
  const response = await getProductsInCollection({ handle: 'frontpage' });
  const list = response.data.collection.products.edges;
  return (
    <main className="h-screen relative">
      <Hero />

      <ProductList productList={list} />
      {/* <Image fill alt="..." src="/background.jpg" /> */}
      {/* <ConsoleCompo data={response} /> */}
    </main>
  );
};

export default Home;
