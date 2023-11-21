import HeaderLinks from "./HeaderLinks";
import Article from "./Article";
import SiblingArticles from "./SiblingArticles";
import Container from "@/components/Container";

const Page = async ({ params }: any) => {
  const parentDirPathSegments = [...params.slug].slice(0, params.slug.length - 1);
  const currentFilePathSegments = [...params.slug];

  return (
    <main className=" flex gap-24 p-4">
      <div className="flex-1 hidden lg:block"></div>

      <div className=" max-w-2xl w-full mx-auto  ">
        <Article pathSegments={currentFilePathSegments} />

        <SiblingArticles parentPathSegments={parentDirPathSegments} currentPathSegments={currentFilePathSegments} />
      </div>

      <div className="flex-1  hidden lg:block   ">
        <div className=" relative h-full w-full">
          <div className="sticky top-60">
            <HeaderLinks pathSegments={currentFilePathSegments} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Page;
