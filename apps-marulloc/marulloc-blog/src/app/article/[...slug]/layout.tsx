import Breadcrumbs from '@/components/Breadcrumbs';

const Layout = ({ children, params }: { children: React.ReactNode; params: any }) => {
  return (
    <div className="relative flex-1 flex flex-col px-8 ">
      <div className="ml-0 px-20 pt-4 pb-12 text-zinc-400 text-xs">
        <Breadcrumbs pathSegments={params.slug} />
      </div>

      <div className="flex flex-1 flex-col  h-full  ">{children}</div>
    </div>
  );
};

export default Layout;
