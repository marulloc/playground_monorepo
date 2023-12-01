import Image from 'next/image';
import MarkdownContents from './MarkdownContents';
import { classNames } from '@/components/Marulloc-UI/utils/classNames';
import Typography from './Marulloc-UI/common/Typography';

const CategorySummary = ({ url, pathSegments, readme }: { url?: string; pathSegments: string[]; readme: string }) => {
  return (
    <section className="flex isolate">
      <div className={classNames('h-20 w-20 relative', url ? 'block mr-8' : 'hidden')}>
        {url && <Image alt="" src={url} fill className="absolute  -z-10   object-cover rounded-xl p-0.5" />}
      </div>

      <div>
        <Typography size="h3" color="base">
          {decodeURIComponent(pathSegments[pathSegments.length - 1])}
        </Typography>

        <div className=" text-zinc-400">
          <MarkdownContents markdown={readme} />
        </div>
      </div>
    </section>
  );
};

export default CategorySummary;
