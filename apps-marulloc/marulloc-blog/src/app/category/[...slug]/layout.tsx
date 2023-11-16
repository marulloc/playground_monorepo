import BreadCrumbs from "@/components/BreadCrumbs";

const Layout = async ({ params, children }: any) => {
  return (
    <>
      <BreadCrumbs pathSegments={params.slug} />
      {children}
    </>
  );
};

export default Layout;