import { classNames } from '@/styles/utils';
import Collections from './Collections';
import { getCollections } from '@/services/collection/service';

const Layout = async ({ children }: { children: React.ReactNode }) => {
  const collections = await getCollections();
  return (
    <div className="mt-20">
      <div
        className={classNames(
          'mx-auto max-w-7xl ',
          'flex flex-col gap-8 px-4 pb-4 md:flex-row',
          ' text-black dark:text-white',
        )}
      >
        <div className="order-first w-full flex-none md:max-w-[125px]">
          <Collections collections={collections} />
        </div>

        <div className="order-last min-h-screen w-full md:order-none">
          <>{children}</>
        </div>
      </div>
    </div>
  );
};

export default Layout;
