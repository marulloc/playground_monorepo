import ConsoleCompo from '@/components/Marulloc-UI-v2/components/ConsoleCompo';
import { getShop } from '@/services/getShop';
import { Card } from 'ui';
import ClientCompo from './ClientCompo';

const Home = async () => {
  const response = await getShop();
  return (
    <main className="">
      asd
      <ConsoleCompo data={response} />
      <ClientCompo />
    </main>
  );
};

export default Home;
