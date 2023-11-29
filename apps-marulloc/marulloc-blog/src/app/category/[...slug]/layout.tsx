import CategorySummary from '@/componentsV2/CategorySummary';
import MarkdownContents from '@/componentsV2/MarkdownContents';
import { getReadmeData } from '@/services/getReadmeData';
import { classNames } from '@/componentsV2/Marulloc-UI/utils/classNames';
import Image from 'next/image';
import Breadcrumbs from '@/componentsV2/Breadcrumbs';

const Layout = async ({ params, children }: any) => {
  const { readme, readmeWithoutFirstImg, readmeFirstImg } = await getReadmeData(params.slug.join('/'));

  return (
    <div className="  mx-auto  flex flex-col h-full w-full px-16">
      <div className=" ml-12  pt-4 text-zinc-400 text-xs">
        <Breadcrumbs pathSegments={params.slug} />
      </div>

      <div className="   rounded-lg p-12 pt-16   ">
        <CategorySummary url={readmeFirstImg} pathSegments={params.slug} readme={readmeWithoutFirstImg} />
      </div>
      <div className=" relative  p-12 pt-0 flex-1  rounded-lg mt-8 ">{children}</div>
    </div>
  );
};

export default Layout;
