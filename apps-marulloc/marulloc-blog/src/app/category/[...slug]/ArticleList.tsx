import MarkdownContents from "@/components/MarkdownContents";
import { getArticleList } from "@/services/getArticleList";
import Image from "next/image";
import Link from "next/link";

const ArticleList = async ({ path }: { path: string }) => {
  const articleList = await getArticleList(path);

  return (
    <>
      {articleList.length > 0 && (
        <div>
          <div className="mb-4">
            <span className=" text-xl border-b">Contents in this Series</span>
          </div>
          <div className="   rounded-lg space-y-4 ">
            {articleList.map((node) => (
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
