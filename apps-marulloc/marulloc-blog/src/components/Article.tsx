import MarkdownContents from '@/components/MarkdownContents';
import { getParsedMarkdown } from '@/services/getParsedMarkdown';

type TProps = {
  pathSegments: string[];
};

const Article = async ({ pathSegments }: TProps) => {
  const modifiedMarkdown = await getParsedMarkdown(pathSegments.join('/'));
  return (
    <article className="  ">
      <MarkdownContents markdown={modifiedMarkdown || '> !! empty'} />{' '}
    </article>
  );
};

export default Article;
