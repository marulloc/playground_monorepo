import ConsoleCompo from "@/components/ConsoleCompo";
import MarkdownContents from "@/components/MarkdownContents";
import { getDirectoryContents } from "@/services/repository/getDirectoryContents";
import { getMarkdownContents } from "@/services/repository/getMarkdownContents";
import Image from "next/image";
import Link from "next/link";

const Page = async ({ params, children }: any) => {
  const directoryData = await getDirectoryContents(params.slug.join("/"));

  // Current page's readme parsing - get first image & contents in markdown - for making hero section
  const [readmeFile] = directoryData.filter((item) => item.type === "file" && item.name.toLowerCase() === "readme.md");
  const { content: readme } = await getMarkdownContents(readmeFile.path);
  const imgPattern = /!\[\[(.*?)\]\]/;
  const match = readme.match(imgPattern);
  const readmeImgUrl = match ? `https://raw.githubusercontent.com/marulloc/obsidian-git/master/${match[1]}` : "";
  const readmeExceptImg = match ? readme.replace(`![[${match[1]}]]`, "") : readme; //=====> 여기 Image link parser 들어가야함

  // Children series's readme parsing - get first image & contents in markdown - for making card
  const series = directoryData.filter((item) => item.type === "dir");
  const seriesDirectoryData = await Promise.all(
    series.map(async (seriesChild) => {
      const childDir = await getDirectoryContents(seriesChild.path);

      const readmeFile = childDir.find((file) => file.name.toLowerCase() === "readme.md");

      if (readmeFile) {
        const { content: readme } = await getMarkdownContents(readmeFile.path);

        // extract image in string
        const imgPattern = /!\[\[(.*?)\]\]/;
        const match = readme.match(imgPattern);

        if (match) {
          const readmeImgName = match[1];

          return {
            ...seriesChild,
            readme,
            readmeImgUrl: `https://raw.githubusercontent.com/marulloc/obsidian-git/master/${readmeImgName}`,
            reameExceptImg: readme.replace(`![[${readmeImgName}]]`, ""), //=====> 여기 Image link parser 들어가야함
          };
        } else {
          return {
            ...seriesChild,
            readme,
            readmeImgUrl: "",
            reameExceptImg: readme,
          };
        }
      } else {
        return { ...seriesChild, readme: "", readmeImgUrl: "", reameExceptImg: "" };
      }
    }),
  );

  // Children(without readme) content file reading - for making summary card
  const contents = directoryData.filter(
    (item) => item.type === "file" && item.name.endsWith(".md") && item.name.toLowerCase() !== "readme.md",
  );
  const contentsMarkdownData = await Promise.all([]);

  return (
    <div className="relative">
      <Image height={50} width={300} alt="" src={readmeImgUrl} />
      {/* <ConsoleCompo data={series} /> */}
      <ConsoleCompo data={readme} />
      <div className="space-y-8   my-8  ">
        {seriesDirectoryData.length > 0 && (
          <div className="">
            <div className="mb-4">
              <span className=" text-xl border-b">Series</span>
            </div>
            <div className="flex gap-4 p-4  bg-gray-900 rounded-lg ">
              {seriesDirectoryData.map((node) => (
                <Link key={node.path} href={`/category/${node.path}`}>
                  <div className="relative h-24 w-48">
                    <Image src={node.readmeImgUrl} fill alt={""} />
                  </div>
                  <div>{node.name}</div>
                </Link>
              ))}
            </div>
          </div>
        )}
        {contents.length > 0 && (
          <div>
            <div className="mb-4">
              <span className=" text-xl border-b">Contents</span>
            </div>
            <div className="p-4  bg-gray-900 rounded-lg ">
              {contents.map((node) => (
                <Link key={node.path} href={`/article/${node.path}`}>
                  <div key={node.path}>
                    {node.name} {node.path}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
      <MarkdownContents
        //  markdown={readme}
        markdown={readmeExceptImg}
      />
    </div>
  );
};

export default Page;
