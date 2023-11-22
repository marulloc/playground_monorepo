import BreadCrumbs from "@/components/BreadCrumbs";
import Container from "@/components/Container";
import MarkdownContents from "@/components/MarkdownContents";
import { getReadmeData } from "@/services/getReadmeData";
import { classNames } from "@/utils/classNames";
import Image from "next/image";

const Layout = async ({ params, children }: any) => {
  const { readme, readmeWithoutFirstImg, readmeFirstImg } = await getReadmeData(params.slug.join("/"));

  return (
    <>
      <Container className="py-2   border-gray-800">
        <BreadCrumbs pathSegments={params.slug} />
      </Container>

      <div className=" max-w-4xl mx-auto  ">
        <CategoryHero url={readmeFirstImg} pathSegments={params.slug} />
      </div>

      <Container className="">
        {children}
        <CategoryReadme readme={readmeWithoutFirstImg} />
      </Container>
    </>
  );
};

export default Layout;

const CategoryHero = async ({ url, pathSegments }: { url?: string; pathSegments: string[] }) => {
  return (
    <section className="relative">
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>

      <div className="relative isolate overflow-hidden pt-14">
        <div className="hidden sm:flex sm:mb-8   sm:justify-center  ">
          <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-400 ring-1 ring-white/10 hover:ring-white/20">
            Announcing our next round of funding.{" "}
            <a href="#" className="font-semibold text-white">
              <span className="absolute inset-0" aria-hidden="true" />
              Read more <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>

        <div className="relative h-full min-h-[300px] mt-12">
          {url && <Image alt="" src={url} fill className="absolute  -z-10   object-cover rounded-xl p-1 " />}
          <div className=" inset-0 bg-zinc-900 absolute bg-opacity-40 z-0 backdrop-blur-sm  shadow-lg   border-zinc-800 rounded-xl box-border ">
            <div className=" flex items-center justify-center  text-center h-full  ">
              <h1 className="text-4xl md:text-5xl font-bold tracking-wide text-zinc-50 spacing   ">
                {decodeURIComponent(pathSegments[pathSegments.length - 1])}
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
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
