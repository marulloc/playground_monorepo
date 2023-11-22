import SeriesList from "./SeriesList";
import ArticleList from "./ArticleList";

const Page = async ({ params }: any) => {
  return (
    <div className="relative">
      <div className="space-y-8   my-8  ">
        <ArticleList path={params.slug.join("/")} />
        <SeriesList path={params.slug.join("/")} />
      </div>
    </div>
  );
};

export default Page;
