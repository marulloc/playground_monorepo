import MarkdownContents from "@/components/MarkdownContents";
import { getDirectoryContents } from "@/services/repository/getDirectoryContents";
import { getMarkdownContents } from "@/services/repository/getMarkdownContents";
import Link from "next/link";

const Page = async ({ params }: any) => {
  const parentDirData = await getDirectoryContents(params.slug.slice(0, params.slug.length - 1).join("/"));
  // 나빼고 같은 부모를 둔 file 타입들
  const siblings = parentDirData.filter(
    (item) => item.type === "file" && item.path !== decodeURIComponent(params.slug.join("/")),
  );
  const { content: markdown } = await getMarkdownContents(params.slug.join("/"));
  const imgPattern = /!\[\[([^\[\]\n]+)\.(.*?)\]\]/g;
  const modifiedMarkdown = markdown.replaceAll(imgPattern, (match, fileName, fileExtension) => {
    const file = encodeURIComponent(`${fileName}.${fileExtension}`);
    return `![](https://raw.githubusercontent.com/marulloc/obsidian-git/master/${file})`;
  });

  return (
    <div className="  ">
      {siblings.length > 0 && (
        <div>
          <div className="mb-4">
            <span className=" text-xl border-b">관련있는글</span>
          </div>
          <div>
            {siblings.map((node) => (
              <Link key={node.path} href={`/article/${node.path}`}>
                <div key={node.path}>
                  {node.name} {node.path}
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      <div>
        <MarkdownContents markdown={modifiedMarkdown || ""} />{" "}
      </div>
    </div>
  );
};

export default Page;
