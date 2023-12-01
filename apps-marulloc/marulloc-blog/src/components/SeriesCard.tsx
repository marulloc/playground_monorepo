import Link from 'next/link';
import { classNames } from '@/components/Marulloc-UI/utils/classNames';
import { getSeriesList } from '@/services/getSeriesList';
import { getArticleList } from '@/services/getArticleList';
import { redirect } from 'next/navigation';
import ConsoleCompo from '@/components/ConsoleCompo';
import { AsyncFunctionValueType } from '@/utils/conditionalType';
import Image from 'next/image';
import MarkdownContents from '@/components/MarkdownContents';
import Typography from './Marulloc-UI/common/Typography';
// import { SCALE_SET } from './Marulloc-UI/theme-config';
import Paper from './Marulloc-UI/common/Paper';

const SeriesCard = ({ node }: { node: AsyncFunctionValueType<ReturnType<typeof getSeriesList>>[number] }) => {
  return (
    <Paper
      as="article"
      className=" relative group  hover:bg-zinc-400 hover:bg-opacity-10  border border-transparent hover:border-zinc-800 rounded-md"
    >
      <Link href={`/category/${node.path}`} className="   ">
        <div className="flex  items-start justify-between">
          <div className={classNames(' h-12 w-12 relative p-2 bg-zinc-700 rounded-full overflow-hidden   ')}>
            {node.firstImgUrl && (
              <Image
                src={node.firstImgUrl}
                fill
                alt={''}
                className=" object-cover object-center   shadow-lg p-1 rounded-full"
              />
            )}
          </div>
        </div>

        {/*  */}
        <div className=" mt-4 ">
          <div className="tracking-wide ">
            <Typography scale="h6" color="base" hover="base">
              {node.name}
            </Typography>
          </div>

          <div
            className={classNames(
              '  line-clamp-3   min-h-[20px] -my-2',
              // SCALE_SET.text.caption
            )}
          >
            <MarkdownContents markdown={node.readmeWithoutFirstImg} />
          </div>

          <div className=" text-xs    ">
            <Typography scale="caption" color="base" hover="accent">
              {`view ${node.childDir.filter(({ name }) => name.toLowerCase() !== 'readme.md').length} articles`}{' '}
              {/* xs */}
            </Typography>
          </div>
        </div>
      </Link>
    </Paper>
  );
};

export default SeriesCard;
