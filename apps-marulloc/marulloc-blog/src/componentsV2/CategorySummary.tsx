import Image from 'next/image';
import MarkdownContents from './MarkdownContents';
import { classNames } from '@/componentsV2/Marulloc-UI/utils/classNames';

const CategorySummary = ({ url, pathSegments, readme }: { url?: string; pathSegments: string[]; readme: string }) => {
  return (
    <section className="flex isolate">
      <div className={classNames('h-20 w-20 relative', url ? 'block mr-8' : 'hidden')}>
        {url && <Image alt="" src={url} fill className="absolute  -z-10   object-cover rounded-xl p-0.5" />}
      </div>

      <div>
        <h1 className="text-4xl mb-4  font-bold tracking-wide  text-zinc-200 spacing   ">
          {decodeURIComponent(pathSegments[pathSegments.length - 1])}
        </h1>

        <div className=" text-zinc-400">
          <MarkdownContents markdown={readme} />
        </div>
      </div>
    </section>
  );
};

export default CategorySummary;
