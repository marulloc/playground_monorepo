import BreadCrumbs from "@/components/BreadCrumbs";
import CategorySummary from "@/components/CategorySummary";
import Container from "@/components/Container";
import MarkdownContents from "@/components/MarkdownContents";
import { getReadmeData } from "@/services/getReadmeData";
import { classNames } from "@/utils/classNames";
import Image from "next/image";

const Layout = async ({ params, children }: any) => {
  const { readme, readmeWithoutFirstImg, readmeFirstImg } = await getReadmeData(params.slug.join("/"));

  return (
    <div className="  mx-auto  flex flex-col h-full ">
      {/* <BreadCrumbs pathSegments={params.slug} /> */}

      <div className="   rounded-lg p-12   ">
        <CategorySummary url={readmeFirstImg} pathSegments={params.slug} readme={readmeWithoutFirstImg} />
      </div>
      <div className=" relative  p-12 pt-0 flex-1  rounded-lg mt-8">{children}</div>
    </div>
  );
};

export default Layout;
