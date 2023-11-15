import MarkdownContents from "@/components/MarkdownContents";
import { readRepoMarkdown } from "@/services/readRepository";

const Page = async ({ params }: any) => {
  const response = await readRepoMarkdown(params.slug.join("/"));

  return (
    <div className=" text-white">
      <div>
        <MarkdownContents markdown={response.content || ""} />{" "}
      </div>
    </div>
  );
};

export default Page;
