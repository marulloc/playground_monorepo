import MarkdownContents from "@/components/MarkdownContents";
import { extractFirstImgFromReadme, extractFirstParagrahFromReadme } from "@/parsers/paresrs";
import { getDirectoryContents } from "@/services/repository/getDirectoryContents";
import { getMarkdownContents } from "@/services/repository/getMarkdownContents";
import Image from "next/image";
import Link from "next/link";

const ArticleList = async ({ path }: { path: string }) => {
  const directoryData = await getDirectoryContents(path);

  const contents = directoryData.filter(
    (item) => item.type === "file" && item.name.endsWith(".md") && item.name.toLowerCase() !== "readme.md",
  );
  const contentsMarkdownData = await Promise.all(
    contents.map(async (contentsChild) => {
      const { content: markdown } = await getMarkdownContents(contentsChild.path);
      const { firstImgName, firstImgUrl } = extractFirstImgFromReadme(markdown);
      const summaryParagraph = extractFirstParagrahFromReadme(markdown, 10);

      return {
        ...contentsChild,
        content: markdown,
        contentImageUrl: firstImgUrl,
        contentDescription: summaryParagraph,
      };
    }),
  );

  return (
    <>
      {" "}
      {contentsMarkdownData.length > 0 && (
        <div>
          <div className="mb-4">
            <span className=" text-xl border-b">Contents in this Series</span>
          </div>
          <div className="   rounded-lg space-y-4 ">
            {contentsMarkdownData.map((node) => (
              <div key={node.path} className="p-4 bg-gray-900 ">
                <Link href={`/article/${node.path}`} className="  ">
                  <div className="relative h-24 w-48">
                    <Image src={node.contentImageUrl} fill alt={""} />
                  </div>
                  <div>{node.name}</div>
                  <div className=" text">
                    {/* <p className="h-24 text-ellipsis">{node.readmeDescription}</p> */}
                    <MarkdownContents markdown={node.contentDescription} />
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default ArticleList;
