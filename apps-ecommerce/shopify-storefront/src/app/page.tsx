import { Card } from 'ui';
import Image from 'next/image';
import { storeFetch } from '@/shopify-gql';
import ConsoleCompo from './Console';
import { getMenu } from '@/services/common/service';

export default async function Home() {
  const resp = await getMenu('custom-storefront-menu');

  return (
    <main className=" ">
      <ConsoleCompo data={resp} />
    </main>
  );
}
