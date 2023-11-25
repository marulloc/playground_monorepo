import BreadCrumbs from "@/components/BreadCrumbs";
import Container from "@/components/Container";
import MarkdownContents from "@/components/MarkdownContents";
import { getReadmeData } from "@/services/getReadmeData";
import { classNames } from "@/utils/classNames";
import Image from "next/image";

const Layout = async ({ params, children }: any) => {
  const { readme, readmeWithoutFirstImg, readmeFirstImg } = await getReadmeData(params.slug.join("/"));

  return (
    <div className=" max-w-4xl mx-auto  ">
      {/* <BreadCrumbs pathSegments={params.slug} /> */}

      {/* <CategoryHero url={readmeFirstImg} pathSegments={params.slug} /> */}

      <CategoryHeroV2 url={readmeFirstImg} pathSegments={params.slug} />
      <div className=" relative">{children}</div>

      <CategoryReadme readme={readmeWithoutFirstImg} />
    </div>
  );
};

export default Layout;

const CategoryHero = async ({ url, pathSegments }: { url?: string; pathSegments: string[] }) => {
  return (
    <section className="relative">
      <div className="relative isolate overflow-hidden mt-24 ">
        <div className="relative h-full min-h-[300px]  ">
          {url && <Image alt="" src={url} fill className="absolute  -z-10   object-cover rounded-xl p-0.5" />}
          <div className=" inset-0  absolute   shadow-lg   border-black rounded-xl box-border ">
            <div className=" flex items-center justify-center  text-center h-full  ">
              <h1 className="text-4xl md:text-5xl font-bold tracking-wide text-zinc-50 spacing   ">
                {decodeURIComponent(pathSegments[pathSegments.length - 1])}
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden sm:flex sm:mb-8   sm:justify-center my-8  ">
        <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-400 ring-1 ring-white/10 hover:ring-white/20">
          Announcing our next round of funding.{" "}
          <a href="#" className="font-semibold text-white">
            <span className="absolute inset-0" aria-hidden="true" />
            Read more <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
    </section>
  );
};

const CategoryHeroV2 = async ({ url, pathSegments }: { url?: string; pathSegments: string[] }) => {
  return (
    <section className=" text-center my-16">
      <div className=" flex justify-center items-center">
        <div className="h-32 w-32 relative">
          {url && <Image alt="" src={url} fill className="absolute  -z-10   object-cover rounded-xl p-0.5" />}
        </div>
      </div>
      <h1 className="text-4xl my-4  font-bold tracking-wide text-zinc-50 spacing   ">
        {decodeURIComponent(pathSegments[pathSegments.length - 1])}
      </h1>
    </section>
  );
};

const CategoryReadme = async ({ readme }: { readme: string }) => {
  return (
    <section>
      <MarkdownContents markdown={readme} />
    </section>
  );
};
