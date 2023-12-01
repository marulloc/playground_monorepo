import HeaderLinks from '../../../components/HeaderLinks';
import Article from '../../../components/Article';
import SiblingArticles from '../../../components/SiblingArticles';
import FallbackBtn from '../../../components/Fallbackbtn';
import Link from 'next/link';
import Container from '@/components/Marulloc-UI/common/Container';
import { classNames } from '@/components/Marulloc-UI/utils/classNames';
import Paper from '@/components/Marulloc-UI/common/Paper';
import Typography from '@/components/Marulloc-UI/common/Typography';

const Page = async ({ params }: any) => {
  const parentDirPathSegments = [...params.slug].slice(0, params.slug.length - 1);
  const currentFilePathSegments = [...params.slug];
  const currentFileName = decodeURIComponent(currentFilePathSegments.at(-1) as string);

  return (
    <div
      className={classNames(
        'relative',
        //  RESPONSIVE_THEME.px, RESPONSIVE_THEME.py,
        'pt-0 sm:pt-0 lg:pt-0',
      )}
    >
      <main className={classNames('flex gap-4 sm:gap-4 lg:gap-4 ')}>
        <div className="flex-1 self-stretch hidden lg:block  ">
          <div className="h-full  ">
            <div className="sticky top-72 flex flex-col gap-2 items-end  pl-4 pt-20 ">
              <FallbackBtn />
              <button className=" flex justify-center items-center bg-zinc-700 p-3  rounded-full h-12 w-12 border border-zinc-800 text-zinc-400 hover:text-zinc-200">
                =
              </button>
            </div>
          </div>
        </div>

        <div className="w-full md:max-w-3xl  xl:max-w-3xl mx-auto       ">
          <div className=" mb-12 lg:mb-16  ">
            <Typography size="h2" color="base">
              {currentFileName}
            </Typography>
          </div>
          <Article pathSegments={currentFilePathSegments} />
        </div>

        <div className="flex-1 self-stretch  hidden lg:block  ">
          <div className="h-full  ">
            <div className="sticky top-72  pt-20  ">
              <HeaderLinks pathSegments={currentFilePathSegments} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Page;
