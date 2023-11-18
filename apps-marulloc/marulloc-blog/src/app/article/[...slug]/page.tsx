import MarkdownContents from "@/components/MarkdownContents";
import { getParsedMarkdown } from "@/services/getParsedMarkdown";
import { getSiblingList } from "@/services/getSiblingList";
import Link from "next/link";

const Page = async ({ params }: any) => {
  const modifiedMarkdown = await getParsedMarkdown(params.slug.join("/"));
  const siblingList = await getSiblingList(params.slug.slice(0, params.slug.length - 1).join("/"));

  return (
    <div className="  ">
      {siblingList.length > 0 && (
        <div>
          <div className="mb-4">
            <span className=" text-xl border-b">관련있는글</span>
          </div>
          <div>
            {siblingList.map((node) => (
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
