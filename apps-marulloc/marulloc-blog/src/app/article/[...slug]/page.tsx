import HeaderLinks from '../../../components/HeaderLinks';
import Article from '../../../components/Article';
import SiblingArticles from '../../../components/SiblingArticles';
import FallbackBtn from '../../../components/Fallbackbtn';
import Link from 'next/link';
import Container from '@/components/Marulloc-UI/common/Container';
import { classNames } from '@/components/Marulloc-UI/utils/classNames';
import { RESPONSIVE_THEME } from '@/components/Marulloc-UI/config';
import Paper from '@/components/Marulloc-UI/common/Paper';

const Page = async ({ params }: any) => {
  const parentDirPathSegments = [...params.slug].slice(0, params.slug.length - 1);
  const currentFilePathSegments = [...params.slug];

  return (
    <main className="  ">
      <Container
        as="section"
        py
        defaultProps={{ className: classNames('relative  flex flex-col xl:flex-row space-y-4') }}
      >
        <div className="static xl:absolute left-0 lg:left-16 h-full  z-30 ">
          <div className="sticky top-96  flex justify-between flex-row xl:flex-col  gap-4">
            <FallbackBtn />
            <button className=" flex justify-center items-center bg-zinc-700 p-3  rounded-full h-12 w-12 border border-zinc-800 text-zinc-400 hover:text-zinc-200">
              =
            </button>
          </div>
        </div>
        <div className="w-full md:max-w-3xl  xl:max-w-2xl mx-auto relative  ">
          <Article pathSegments={currentFilePathSegments} />
        </div>
        <div className="absolute right-0 h-full hidden xl:block">
          <div className="sticky top-80  flex justify-center overflow-x-hidden">
            <HeaderLinks pathSegments={currentFilePathSegments} />
          </div>
        </div>
      </Container>

      <h1 id="">Siblings 여기 카드로 대체하자</h1>
    </main>
  );
};

export default Page;
