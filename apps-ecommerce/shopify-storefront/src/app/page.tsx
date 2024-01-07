import { Card } from 'ui';
import Image from 'next/image';
import { storeFetch } from '@/shopify-gql';
import ConsoleCompo from './Console';
import { getMenu } from '@/services/common/service';

export default async function Home() {
  const resp = await getMenu('custom-storefront-menu');

  return (
    <main className=" ">
      {/* Tester Overlay */}
      {/* <div className="fixed top-0 overscroll-none bg-blue-900 w-screen h-screen z-20  overflow-hidden"></div> */}

      <ConsoleCompo data={resp} />
      <div className="max-w-7xl mx-auto px-4">
        <div className=" isolate  h-96 bg-zinc-900 rounded-lg border border-zinc-700">
          <div className=" h-full flex justify-center items-center   space-x-4">
            <div className="text-zinc-300">Carousel</div>

            <div>
              <button className="px-3 py-1.5 bg-indigo-700 shadow-2xl rounded-lg text-zinc-300">Button</button>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="max-w-7xl mx-auto px-4">
        <div className=" isolate  h-96 bg-zinc-900 rounded-lg border border-zinc-700">
          <div className=" h-full flex justify-center items-center   space-x-4">
            <div className="text-zinc-300">Carousel</div>

            <div>
              <button className="px-3 py-1.5 bg-indigo-700 shadow-2xl rounded-lg text-zinc-300">Button</button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <div className=" isolate  h-96 bg-zinc-900 rounded-lg border border-zinc-700">
          <div className=" h-full flex justify-center items-center   space-x-4">
            <div className="text-zinc-300">Carousel</div>

            <div>
              <button className="px-3 py-1.5 bg-indigo-700 shadow-2xl rounded-lg text-zinc-300">Button</button>
            </div>
          </div>
        </div>
      </div> */}
    </main>
  );
}
