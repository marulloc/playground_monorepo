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
    <>
      <div className="relative  ">
        <div className="mb-4 border-b dark:border-zinc-700">
          <ul className="flex flex-wrap text-lg   text-center text-zinc-200">
            <li className={classNames(hasArticle ? "block" : "hidden")}>
              <Link
                href={{ query: { tab: "article" } }}
                className={classNames(
                  " inline-block px-2  py-1 -mb-px me-2 hover:text-zinc-200 border-zinc-400",
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
                  " inline-block  px-2  py-1   -mb-px me-2 hover:text-zinc-200 border-zinc-400",
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

        <div>
          {curTabQuery === "article" && (
            <section className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 mt-12   gap-y-16">
              {articleList.map((node) => (
                <ArticleCard key={node.path} node={node} />
              ))}
            </section>
          )}
          {curTabQuery === "series" && (
            <section className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 mt-12   gap-y-16">
              {seriesList?.map((node, idx) => <SeriesCard node={node} key={`${node.path}-${idx}`} />)}
            </section>
          )}
          {!curTabQuery && <h1 className=" text-7xl">404</h1>}
        </div>
      </div>
    </>
  );
};

export default Page;

const ArticleCard = ({ node }: { node: AsyncFunctionValueType<ReturnType<typeof getArticleList>>[number] }) => {
  return (
    <Link
      href={`/article/${node.path}`}
      className=" relative group   hover:bg-zinc-400 hover:bg-opacity-10   border border-transparent hover:border-zinc-800 rounded-md p-6 -m-6 "
    >
      <div className="flex  items-start justify-between">
        <div className={classNames(" h-40 w-full relative   bg-zinc-700 rounded-lg overflow-hidden   ")}>
          {node.contentImageUrl && (
            <Image
              src={node.contentImageUrl}
              fill
              alt={""}
              className=" object-cover object-center   shadow-lg   rounded-lg"
            />
          )}
        </div>
      </div>

      {/*  */}
      <div className=" mt-4 ">
        <h2 className=" text-xl font-semibold   text-zinc-200 tracking-wide ">{node.name}</h2>

        <div className="  line-clamp-3 text-sm leading-6 text-zinc-400 min-h-[20px] -my-2">
          <MarkdownContents markdown={node.contentDescription} />
        </div>
        <div className="text-zinc-400 group-hover:text-pink-400 text-xs    ">
          {/* {`view ${node.childDir.filter(({ name }) => name.toLowerCase() !== "readme.md").length} articles`} */}
        </div>

        <div className="text-zinc-200 group-hover:text-pink-400 text-xs  absolute bottom-4    ">read more</div>
      </div>
    </Link>
  );
};

const SeriesCard = ({ node }: { node: AsyncFunctionValueType<ReturnType<typeof getSeriesList>>[number] }) => {
  return (
    <Link
      href={`/category/${node.path}`}
      className=" relative group  hover:bg-zinc-400 hover:bg-opacity-10  border border-transparent hover:border-zinc-800 rounded-md p-6 -m-6 "
    >
      <div className="flex  items-start justify-between">
        <div className={classNames(" h-12 w-12 relative p-2 bg-zinc-700 rounded-full overflow-hidden   ")}>
          {node.firstImgUrl && (
            <Image
              src={node.firstImgUrl}
              fill
              alt={""}
              className=" object-cover object-center   shadow-lg p-1 rounded-full"
            />
          )}
        </div>
      </div>

      {/*  */}
      <div className=" mt-4 ">
        <h2 className=" text-xl font-semibold   text-zinc-200 tracking-wide ">{node.name}</h2>

        <div className="  line-clamp-3 text-sm leading-6 text-zinc-400 min-h-[20px] -my-2">
          <MarkdownContents markdown={node.readmeWithoutFirstImg} />
        </div>
        <div className="text-zinc-200 group-hover:text-pink-400 text-xs    ">
          {`view ${node.childDir.filter(({ name }) => name.toLowerCase() !== "readme.md").length} articles`}
        </div>
      </div>
    </Link>
  );
};
