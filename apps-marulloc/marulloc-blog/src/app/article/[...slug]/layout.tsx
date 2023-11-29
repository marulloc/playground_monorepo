import Breadcrumbs from '@/components/Breadcrumbs';
import Container from '@/components/Marulloc-UI/common/Container';
import { classNames } from '@/components/Marulloc-UI/utils/classNames';

const Layout = ({ children, params }: { children: React.ReactNode; params: any }) => {
  return (
    <div className="space-y-4">
      <Container py>
        <Breadcrumbs pathSegments={params.slug} />
      </Container>
      <>{children}</>
    </div>
  );
};

export default Layout;
