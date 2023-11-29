import MarkdownContents from '@/componentsV2/MarkdownContents';
import { getParsedMarkdown } from '@/services/getParsedMarkdown';

type TProps = {
  pathSegments: string[];
};

const Article = async ({ pathSegments }: TProps) => {
  const modifiedMarkdown = await getParsedMarkdown(pathSegments.join('/'));
  const currentFileName = decodeURIComponent(pathSegments.at(-1) as string);
  return (
    <article className="  ">
      <div className="  ">
        <h1 className="text-4xl font-bold leading-normal ">{currentFileName}</h1>
      </div>
      <div>
        <MarkdownContents markdown={modifiedMarkdown || '> !! empty'} />{' '}
      </div>
    </article>
  );
};

export default Article;
