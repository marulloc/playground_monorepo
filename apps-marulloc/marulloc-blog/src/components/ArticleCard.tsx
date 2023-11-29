import Link from 'next/link';
import { classNames } from '@/components/Marulloc-UI/utils/classNames';
import { getSeriesList } from '@/services/getSeriesList';
import { getArticleList } from '@/services/getArticleList';
import { redirect } from 'next/navigation';
import ConsoleCompo from '@/components/ConsoleCompo';
import { AsyncFunctionValueType } from '@/utils/conditionalType';
import Image from 'next/image';
import MarkdownContents from '@/components/MarkdownContents';

const ArticleCard = ({ node }: { node: AsyncFunctionValueType<ReturnType<typeof getArticleList>>[number] }) => {
  return (
    <Link
      href={`/article/${node.path}`}
      className=" relative group   hover:bg-zinc-400 hover:bg-opacity-10   border border-transparent hover:border-zinc-800 rounded-md p-6 -m-6 "
    >
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
        <h2 className=" text-xl font-semibold   text-zinc-200 tracking-wide ">{node.name}</h2>

        <div className="  line-clamp-3 text-sm leading-6 text-zinc-400 min-h-[20px]  mb-2">
          <MarkdownContents markdown={node.contentDescription} />
        </div>

        <div className="text-zinc-200 group-hover:text-pink-400 text-xs absolute bottom-2    mt-4  ">read more</div>
      </div>
    </Link>
  );
};

export default ArticleCard;
