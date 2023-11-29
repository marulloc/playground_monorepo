import Breadcrumbs from '@/components/Breadcrumbs';
import CategorySummary from '@/components/CategorySummary';
import Container from '@/components/Marulloc-UI/common/Container';
import { getReadmeData } from '@/services/getReadmeData';

const Layout = async ({ params, children }: any) => {
  const { readme, readmeWithoutFirstImg, readmeFirstImg } = await getReadmeData(params.slug.join('/'));

  return (
    <div className="">
      <Container py>
        <Breadcrumbs pathSegments={params.slug} />
        <CategorySummary url={readmeFirstImg} pathSegments={params.slug} readme={readmeWithoutFirstImg} />
        {children}
        {/* <div className=" ml-12  pt-4 text-zinc-400 text-xs"></div> */}

        {/* <div className="   rounded-lg p-12 pt-16   "></div> */}
        {/* <div className=" relative  p-12 pt-0 flex-1  rounded-lg mt-8 "></div> */}
      </Container>
    </div>
  );
};

export default Layout;
