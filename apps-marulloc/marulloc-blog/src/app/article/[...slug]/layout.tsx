import BreadCrumbs from "@/components/BreadCrumbs";

const Layout = ({ children, params }: { children: React.ReactNode; params: any }) => {
  return (
    <>
      <BreadCrumbs pathSegments={params.slug} />
      {children}
    </>
  );
};

export default Layout;
