import MarkdownContents from "@/components/MarkdownContents";
import { getArticleList } from "@/services/getArticleList";
import { AsyncFunctionValueType } from "@/utils/conditionalType";
import Image from "next/image";
import Link from "next/link";

const ArticleList = async ({ path }: { path: string }) => {
  const articleList = await getArticleList(path);

  return (
    <>
      <div className="  py-12 sm:py-32">
        <div className=" o max-w-7xl ">
          <div className=" max-w-2xl text-left">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-200 sm:text-4xl">Articles </h2>
            {/* <p className="mt-2 text-lg leading-8 text-gray-600">
            Learn how to grow your business with our expert advice.
          </p> */}
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {articleList.map((node) => (
              <ArticleCard key={node.path} node={node} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ArticleList;

const ArticleCard = ({ node }: { node: AsyncFunctionValueType<ReturnType<typeof getArticleList>>[number] }) => {
  return (
    <article className="bg-zinc-950 border border-zinc-800 p-4 rounded-lg group hover:bg-zinc-900 hover:scale-105  transition-all duration-75   ">
      <Link href={`/article/${node.path}`} className="flex flex-col items-start justify-between">
        <div className="relative w-full  h-48  bg-zinc-800 rounded-lg ">
          {node.contentImageUrl && (
            <Image src={node.contentImageUrl} alt="" fill className="  w-full rounded-lg   object-cover " />
          )}
          <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
        </div>
        <div className="max-w-xl">
          <div className="  relative">
            <h3 className="mt-3 text-lg font-semibold leading-6 text-zinc-300 group-hover:text-zinc-50">
              <span className="absolute inset-0" />
              {node.name}
            </h3>
            <div className="mt-5 line-clamp-3 text-sm leading-6 text-zinc-400">
              <MarkdownContents markdown={node.contentDescription} />
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
};
