import MarkdownContents from "@/components/MarkdownContents";
import { getParsedMarkdown } from "@/services/getParsedMarkdown";

const Page = async ({ params }: any) => {
  const modifiedMarkdown = await getParsedMarkdown(params.slug.join("/"));

  return (
    <main className="  ">
      <div>
        <MarkdownContents markdown={modifiedMarkdown || ""} />{" "}
      </div>
    </main>
  );
};

export default Page;
