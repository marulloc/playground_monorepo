import ConsoleCompo from '@/components/Marulloc-UI-v2/components/ConsoleCompo';
import { Card } from 'ui';
import { getCollectionByHandle } from '@/services/getCollectionByHandle';
import { getProductsInCollection } from '@/services/getProductsInCollection';
import Hero from '@/components/Hero';
import Image from 'next/image';
const Home = async () => {
  const response = await getProductsInCollection({ handle: 'automated-collection' });
  return (
    <main className="h-screen relative">
      <Hero />
      {/* <Image fill alt="..." src="/background.jpg" /> */}
      <ConsoleCompo data={response} />
    </main>
  );
};

export default Home;
