import Breadcrumbs from '@/components/Breadcrumbs';
import CategorySummary from '@/components/CategorySummary';
import Container from '@/components/Marulloc-UI/common/Container';
import Paper from '@/components/Marulloc-UI/common/Paper';
import { classNames } from '@/components/Marulloc-UI/utils/classNames';
import { getReadmeData } from '@/services/getReadmeData';

const Layout = async ({ params, children }: any) => {
  const { readme, readmeWithoutFirstImg, readmeFirstImg } = await getReadmeData(params.slug.join('/'));

  return (
    <div className="space-y-4 flex-1 flex flex-col w-full  ">
      <Container>
        <Breadcrumbs pathSegments={params.slug} />
      </Container>

      <Container className="">
        <Paper bgGlassy bgColor="base" className="  w-full">
          <div className="  py-4">
            <CategorySummary url={readmeFirstImg} pathSegments={params.slug} readme={readmeWithoutFirstImg} />
          </div>
        </Paper>
      </Container>

      <div className="flex-1 flex flex-col w-full ">{children}</div>
    </div>
  );
};

export default Layout;
