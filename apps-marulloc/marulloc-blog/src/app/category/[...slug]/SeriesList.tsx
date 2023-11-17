import ConsoleCompo from "@/components/ConsoleCompo";
import { eraseImgStringFromReadme, extractFirstImgFromReadme, findReadme } from "@/parsers/paresrs";
import { getDirectoryContents } from "@/services/repository/getDirectoryContents";
import { getMarkdownContents } from "@/services/repository/getMarkdownContents";
import Image from "next/image";
import Link from "next/link";

const SeriesList = async ({ path }: { path: string }) => {
  const currentDirData = await getDirectoryContents(path);

  // Children series's readme parsing - get first image & contents in markdown - for making card
  const seriesChildren = currentDirData.filter((item) => item.type === "dir");
  const series = await Promise.all(
    seriesChildren.map(async (seriesChild) => {
      const childDir = await getDirectoryContents(seriesChild.path);

      const readmeFile = findReadme(childDir);
      const { content: readme } = readmeFile ? await getMarkdownContents(readmeFile.path) : { content: "" };
      const { firstImgName, firstImgUrl } = extractFirstImgFromReadme(readme);

      return { ...seriesChild, firstImgName, firstImgUrl };
    }),
  );

  return (
    <>
      <ConsoleCompo data={series} />
      {series.length > 0 && (
        <div className="">
          <div className="mb-4">
            <span className=" text-xl border-b">Child Series</span>
          </div>
          <div className="flex gap-4 p-4  bg-gray-900 rounded-lg ">
            {series.map((node) => (
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
