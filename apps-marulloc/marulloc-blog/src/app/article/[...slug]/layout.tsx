import BreadCrumbs from "@/components/BreadCrumbs";
import Container from "@/components/Container";

const Layout = ({ children, params }: { children: React.ReactNode; params: any }) => {
  return (
    <div className="relative">
      <Container>
        <BreadCrumbs pathSegments={params.slug} />
      </Container>

      {children}
    </div>
  );
};

export default Layout;
