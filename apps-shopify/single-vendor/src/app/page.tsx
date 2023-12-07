import ConsoleCompo from '@/components/Marulloc-UI-v2/components/ConsoleCompo';
import { getShopDetail } from '@/services/getShopDetails';
import { Card } from 'ui';
import ClientCompo from './ClientCompo';
import { getCollectionByHandle } from '@/services/getCollectionByHandle';
import { getProductsInCollection } from '@/services/getProductsInCollection';

const Home = async () => {
  const response = await getProductsInCollection({ handle: 'automated-collection' });
  return (
    <main className="">
      asd
      <ConsoleCompo data={response} />
      {/* <ClientCompo /> */}
    </main>
  );
};

export default Home;
