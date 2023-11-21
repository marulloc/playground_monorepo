import MarkdownContents from "@/components/MarkdownContents";
import { getParsedMarkdown } from "@/services/getParsedMarkdown";

type TProps = {
  pathSegments: string[];
};

const Article = async ({ pathSegments }: TProps) => {
  const modifiedMarkdown = await getParsedMarkdown(pathSegments.join("/"));
  const currentFileName = decodeURIComponent(pathSegments.at(-1) as string);
  return (
    <article className="mt-12 ">
      <div className="  mb-12">
        <h1 className="text-4xl font-bold leading-normal ">{currentFileName}</h1>
      </div>
      <div>
        <MarkdownContents markdown={modifiedMarkdown || ""} />{" "}
      </div>
    </article>
  );
};

export default Article;
