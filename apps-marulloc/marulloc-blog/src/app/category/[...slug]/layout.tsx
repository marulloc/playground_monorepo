import BreadCrumbs from "@/components/BreadCrumbs";
import Container from "@/components/Container";
import MarkdownContents from "@/components/MarkdownContents";
import { eraseImgStringFromReadme, extractFirstImgFromReadme, findReadme } from "@/parsers/paresrs";
import { getDirectoryContents } from "@/services/repository/getDirectoryContents";
import { getMarkdownContents } from "@/services/repository/getMarkdownContents";
import { classNames } from "@/utils/classNames";
import Image from "next/image";

const Layout = async ({ params, children }: any) => {
  const currentDirData = await getDirectoryContents(params.slug.join("/"));
  const readmeFile = findReadme(currentDirData);
  const { content: readme } = readmeFile ? await getMarkdownContents(readmeFile.path) : { content: "" };

  const { firstImgName, firstImgUrl } = extractFirstImgFromReadme(readme);
  const readmeWithoutFirstImg = eraseImgStringFromReadme(readme, firstImgName);

  return (
    <>
      <Container className="py-2   border-gray-800">
        <BreadCrumbs pathSegments={params.slug} />
      </Container>

      <Container>
        <CategoryHero url={firstImgUrl} />
      </Container>

      <Container className="">
        <h1 className=" text-4xl py-12 font-bold">{decodeURIComponent(params.slug[params.slug.length - 1])}</h1>
        {children}
        <CategoryReadme readme={readmeWithoutFirstImg} />
      </Container>
    </>
  );
};

export default Layout;

const CategoryHero = async ({ url }: { url: string }) => {
  return (
    <section>
      <div className={classNames("relative  h-80   w-full bg-gray-800", url ? "block" : "hidden")}>
        <Image alt="" src={url} fill />
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
