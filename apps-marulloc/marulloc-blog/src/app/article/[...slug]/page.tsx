import HeaderLinks from "./HeaderLinks";
import Article from "./Article";
import SiblingArticles from "./SiblingArticles";

const Page = async ({ params }: any) => {
  const parentDirPathSegments = [...params.slug].slice(0, params.slug.length - 1);
  const currentFilePathSegments = [...params.slug];

  return (
    <main className="  ">
      <div className="max-w-2xl mx-auto w-screen   ">
        <SiblingArticles currentPathSegments={currentFilePathSegments} parentPathSegments={parentDirPathSegments} />
        <Article pathSegments={currentFilePathSegments} />
      </div>

      <aside className="fixed right-0 top-0  hidden xl:block lg:w-72   h-full">
        <div className="h-full  pt-80">
          <HeaderLinks pathSegments={currentFilePathSegments} />
        </div>
      </aside>
    </main>
  );
};

export default Page;
