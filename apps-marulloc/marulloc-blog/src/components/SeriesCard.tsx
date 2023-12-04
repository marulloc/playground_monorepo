import Link from 'next/link';
import { classNames } from '@/components/Marulloc-UI/utils/classNames';
import { getSeriesList } from '@/services/getSeriesList';
import { AsyncFunctionValueType } from '@/utils/conditionalType';
import Image from 'next/image';
import MarkdownContents from '@/components/MarkdownContents';
import Typography from './Marulloc-UI/common/Typography';
import Paper from './Marulloc-UI/common/Paper';

const SeriesCard = ({ node }: { node: AsyncFunctionValueType<ReturnType<typeof getSeriesList>>[number] }) => {
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
            <Typography theme={{ color: 'base', hoverColor: 'base' }} variants={{ size: 'h6', responsive: true }}>
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
            <Typography variants={{ size: 'caption' }} theme={{ color: 'base', hoverColor: 'primary' }}>
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
