import BreadCrumbs from '@/components/BreadCrumbs';
import Container from '@/components/Container';

const Layout = ({ children, params }: { children: React.ReactNode; params: any }) => {
  return (
    <div className="relative flex-1 flex flex-col px-8 ">
      <div className="ml-0 px-20 pt-4 pb-12 text-zinc-400 text-xs">
        <BreadCrumbs pathSegments={params.slug} />
      </div>

      <div className="flex flex-1 flex-col  h-full  ">{children}</div>
    </div>
  );
};

export default Layout;
