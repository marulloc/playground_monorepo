import ConsoleCompo from "@/components/ConsoleCompo";
import MarkdownContents from "@/components/MarkdownContents";
import { getParsedMarkdown } from "@/services/getParsedMarkdown";
import Link from "next/link";

const Page = async ({ params }: any) => {
  const modifiedMarkdown = await getParsedMarkdown(params.slug.join("/"));

  function extractHeadings(markdownString: string) {
    // 정규 표현식을 사용하여 해시(#)로 시작하는 라인을 찾아냄
    const headingRegex = /^(#{1,3})\s+(.*)$/gm;
    const matches = markdownString.matchAll(headingRegex);

    const headings = [];

    for (const match of matches) {
      const level = match[1].length; // 해시(#)의 개수로 제목 레벨을 결정
      const text = match[2].trim(); // 제목 텍스트, 좌우 공백 제거

      headings.push({ level, text });
    }

    return headings;
  }
  const headings = extractHeadings(modifiedMarkdown);
  return (
    <main className="  ">
      {/* <ConsoleCompo data={extractHeadings(modifiedMarkdown)} /> */}
      <div className=" fixed right-0">
        {headings.map(({ level, text }) => (
          <div>
            <Link href={`#level-${level}-${text}`}>{text}</Link>
          </div>
        ))}
      </div>
      <div>
        <MarkdownContents markdown={modifiedMarkdown || ""} />{" "}
      </div>
    </main>
  );
};

export default Page;
