import Link from 'next/link';
import { classNames } from '@/components/Marulloc-UI/utils/classNames';
import { getArticleList } from '@/services/getArticleList';
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
      className={classNames(
        'px-4 md:px-6 lg:px-8',
        'py-4 md:py-6 lg:py-8',
        'rounded-md',
        'relative group   hover:border-zinc-800 ',
      )}
      theme={{ hoverColor: 'muted' }}
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
            <Typography theme={{ color: 'base', hoverColor: 'base' }} variants={{ size: 'h6', responsive: true }}>
              {node.name}
            </Typography>
          </div>

          <div className={classNames('  line-clamp-3   min-h-[20px]  mb-2')}>
            <MarkdownContents markdown={node.contentDescription} />
          </div>

          <div className="text-xs absolute bottom-4  mt-4">
            <Typography variants={{ size: 'caption' }} theme={{ color: 'base', hoverColor: 'primary' }}>
              read more
            </Typography>
          </div>
        </div>
      </Link>
    </Paper>
  );
};

export default ArticleCard;
