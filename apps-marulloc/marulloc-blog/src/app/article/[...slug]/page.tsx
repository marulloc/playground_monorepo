import ConsoleCompo from "@/components/ConsoleCompo";
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
  const markdownData = await getMarkdownContents(params.slug.join("/"));

  return (
    <div className=" text-white">
      <ConsoleCompo data={markdownData} />
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
        <MarkdownContents markdown={markdownData.content || ""} />{" "}
      </div>
    </div>
  );
};

export default Page;
