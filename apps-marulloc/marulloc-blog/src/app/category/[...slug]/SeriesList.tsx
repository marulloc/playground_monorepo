import ConsoleCompo from "@/components/ConsoleCompo";
import dirParser from "@/parsers/directoryParser";
import mdParser from "@/parsers/markdownParser";
import { getSeriesList } from "@/services/get";
import { getDirectoryContents } from "@/services/repository/getDirectoryContents";
import { getMarkdownContents } from "@/services/repository/getMarkdownContents";
import Image from "next/image";
import Link from "next/link";

const SeriesList = async ({ path }: { path: string }) => {
  const seriesList = await getSeriesList(path);

  return (
    <>
      {seriesList.length > 0 && (
        <div className="">
          <div className="mb-4">
            <span className=" text-xl border-b">Child Series</span>
          </div>
          <div className="flex gap-4 p-4  bg-gray-900 rounded-lg ">
            {seriesList.map((node) => (
              <Link key={node.path} href={`/category/${node.path}`}>
                <div className="relative h-24 w-48">
                  <Image src={node.firstImgUrl} fill alt={""} />
                </div>
                <div>{node.name}</div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default SeriesList;
