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

const ArticleCard = ({ node }: { node: AsyncFunctionValueType<ReturnType<typeof getArticleList>>[number] }) => {
  return (
    <Paper
      as="article"
      className="  relative group   hover:bg-zinc-400 hover:bg-opacity-10   border border-transparent hover:border-zinc-800 rounded-md "
    >
      <Link href={`/article/${node.path}`} className="   ">
        <div className="flex  items-start justify-between">
          <div className={classNames(' h-40 w-full relative   bg-zinc-700 rounded-lg overflow-hidden   ')}>
            {node.contentImageUrl && (
              <Image
                src={node.contentImageUrl}
                fill
                alt={''}
                className=" object-cover object-center   shadow-lg   rounded-lg"
              />
            )}
          </div>
        </div>

        {/*  */}
        <div className=" mt-4  ">
          <div className="tracking-wide ">
            <Typography size="h6" color="base" hover="base">
              {node.name}
            </Typography>
          </div>

          <div
            className={classNames(
              '  line-clamp-3   min-h-[20px]  mb-2',
              //  SCALE_SET.text.caption
            )}
          >
            <MarkdownContents markdown={node.contentDescription} />
          </div>

          <div className="text-xs absolute bottom-2  mt-4">
            <Typography size="caption" color="base" hover="primary" responsive={false}>
              read more {/* xs */}
            </Typography>
          </div>
        </div>
      </Link>
    </Paper>
  );
};

export default ArticleCard;
