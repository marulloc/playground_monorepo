import SeriesList from "./SeriesList";
import ArticleList from "./ArticleList";
import Link from "next/link";
import { classNames } from "@/utils/classNames";
import { getSeriesList } from "@/services/getSeriesList";
import { getArticleList } from "@/services/getArticleList";
import { redirect } from "next/navigation";
import ConsoleCompo from "@/components/ConsoleCompo";

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
      <div className="  ">
        {curTabQuery === "article" && <ArticleList path={params.slug.join("/")} />}
        {curTabQuery === "series" && <SeriesList path={params.slug.join("/")} />}
        {!curTabQuery && <h1 className=" text-7xl">404</h1>}
      </div>
    </div>
  );
};

export default Page;
