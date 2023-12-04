import Breadcrumbs from '@/components/Breadcrumbs';
import CategorySummary from '@/components/CategorySummary';
import Container from '@/components/Marulloc-UI/common/Container';
import Paper from '@/components/Marulloc-UI/common/Paper';
import { classNames } from '@/components/Marulloc-UI/utils/classNames';
import { getReadmeData } from '@/services/getReadmeData';

const Layout = async ({ params, children }: any) => {
  const { readme, readmeWithoutFirstImg, readmeFirstImg } = await getReadmeData(params.slug.join('/'));

  return (
    <div className="  ">
      <Container>
        <Breadcrumbs pathSegments={params.slug} />
      </Container>

      <Container className="">
        <Paper theme={{ color: 'base' }} className={classNames('px-4 md:px-6 lg:px-8', 'py-4 md:py-6 lg:py-8')}>
          <CategorySummary url={readmeFirstImg} pathSegments={params.slug} readme={readmeWithoutFirstImg} />
        </Paper>
      </Container>

      <div className="flex-1 flex flex-col w-full ">{children}</div>
    </div>
  );
};

export default Layout;
