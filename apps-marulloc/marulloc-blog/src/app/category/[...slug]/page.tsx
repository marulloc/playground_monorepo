import Link from "next/link";
import { classNames } from "@/utils/classNames";
import { getSeriesList } from "@/services/getSeriesList";
import { getArticleList } from "@/services/getArticleList";
import { redirect } from "next/navigation";
import ConsoleCompo from "@/components/ConsoleCompo";
import { AsyncFunctionValueType } from "@/utils/conditionalType";
import Image from "next/image";
import MarkdownContents from "@/components/MarkdownContents";

type TPageProps = {
  params: { slug: string[] };
  searchParams: { tab: "article" | "series" | undefined };
};

const Page = async ({ params, searchParams }: TPageProps) => {
  const curPath = params.slug.join("/");
  const curTabQuery = searchParams.tab;

  const articleList = await getArticleList(curPath);
  const seriesList = await getSeriesList(curPath);

  const hasArticle = !!articleList.length;
  const hasSeries = !!seriesList.length;

  if (!curTabQuery) {
    if (hasArticle) redirect(`/category/${curPath}?tab=article`);
    else if (hasSeries) redirect(`/category/${curPath}?tab=series`);
  }

  return (
    <div className="relative">
      <div className="mb-4 border-b dark:border-zinc-700">
        <ul className="flex flex-wrap text-2xl font-bold text-center">
          <li className={classNames(hasArticle ? "block" : "hidden")}>
            <Link
              href={{ query: { tab: "article" } }}
              className={classNames(
                " inline-block p-3  -mb-px me-2 hover:text-zinc-400",
                searchParams?.tab === "article" ? " border-b-2 " : "border-0",
              )}
              role="tab"
              aria-controls="article"
            >
              Article
            </Link>
          </li>
          <li className={classNames(hasSeries ? "block" : "hidden")}>
            <Link
              href={{ query: { tab: "series" } }}
              className={classNames(
                " inline-block p-3   -mb-px me-2 hover:text-zinc-400",
                searchParams?.tab === "series" ? " border-b-2 " : "border-0",
              )}
              role="tab"
              aria-controls="series"
            >
              Series
            </Link>
          </li>
        </ul>
      </div>

      <ConsoleCompo data={articleList} />
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {curTabQuery === "article" && (
          <>
            {articleList.map((node) => (
              <ArticleCard key={node.path} node={node} />
            ))}
          </>
        )}
        {curTabQuery === "series" && (
          <>
            {seriesList.map((node) => (
              <SeriesCard key={node.path} node={node} />
            ))}
          </>
        )}
        {!curTabQuery && <h1 className=" text-7xl">404</h1>}
      </div>
    </div>
  );
};

export default Page;

const SeriesCard = ({ node }: { node: AsyncFunctionValueType<ReturnType<typeof getSeriesList>>[number] }) => {
  return (
    <article className="relative    rounded-2xl">
      <Link key={node.path} href={`/category/${node.path}`}>
        <div className="h-48 relative ">
          <Image
            src={node.firstImgUrl}
            fill
            alt={""}
            className=" object-cover object-center rounded-2xl p-1 shadow-lg"
          />
        </div>
        <div>
          <h2 className="text-center text-xl p-2 ">{node.name}</h2>
        </div>
      </Link>
    </article>
  );
  return (
    <article className="relative h-40    overflow-hidden  ">
      <Link key={node.path} href={`/category/${node.path}`}>
        <div className="absolute inset-0 w-full h-full  ">
          <Image src={node.firstImgUrl} fill alt={""} className=" object-cover object-center    rounded-lg p-0.5 " />
        </div>
      </Link>

      <div className="inset-0   bg-gradient-to-tl  from-black from-15%  to-pink-800  absolute   opacity-30    blur-lg  hover:opacity-0"></div>
    </article>
  );
};

const ArticleCard = ({ node }: { node: AsyncFunctionValueType<ReturnType<typeof getArticleList>>[number] }) => {
  return (
    <article className="   bg-white bg-opacity-20 backdrop-blur-sm border border-zinc-800 p-4 rounded-lg group hover:bg-zinc-900 hover:scale-105  transition-all duration-75   ">
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
