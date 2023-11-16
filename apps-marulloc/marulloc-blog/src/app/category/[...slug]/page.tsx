import { getDirectoryContents } from "@/services/repository/getDirectoryContents";
import Link from "next/link";

const Page = async ({ params, children }: any) => {
  const directoryData = await getDirectoryContents(params.slug.join("/"));

  const series = directoryData.filter((item) => item.type === "dir");
  const contents = directoryData.filter((item) => item.type === "file" && item.name.endsWith(".md"));

  return (
    <>
      <div className="space-y-8">
        {series.length > 0 && (
          <div>
            <div className="mb-4">
              <span className=" text-xl border-b">Series</span>
            </div>
            <div>
              {series.map((node) => (
                <Link key={node.path} href={`/category/${node.path}`}>
                  <div key={node.path}>
                    {node.name} {node.path}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
        {contents.length > 0 && (
          <div>
            <div className="mb-4">
              <span className=" text-xl border-b">Contents</span>
            </div>
            <div>
              {contents.map((node) => (
                <Link key={node.path} href={`/article/${node.path}`}>
                  <div key={node.path}>
                    {node.name} {node.path}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Page;
