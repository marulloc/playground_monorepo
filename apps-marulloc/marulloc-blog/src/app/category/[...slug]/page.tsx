import ConsoleCompo from "@/components/ConsoleCompo";
import MarkdownContents from "@/components/MarkdownContents";
import { getDirectoryContents } from "@/services/repository/getDirectoryContents";
import { getMarkdownContents } from "@/services/repository/getMarkdownContents";
import Image from "next/image";
import Link from "next/link";
import SeriesList from "./SeriesList";
import ArticleList from "./ArticleList";

const Page = async ({ params, children }: any) => {
  return (
    <div className="relative">
      {/* <ConsoleCompo data={directoryData} /> */}
      <div className="space-y-8   my-8  ">
        <SeriesList path={params.slug.join("/")} />
        <ArticleList path={params.slug.join("/")} />
      </div>
    </div>
  );
};

export default Page;
