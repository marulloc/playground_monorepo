import { getParsedMarkdown } from "@/services/getParsedMarkdown";
import { classNames } from "@/utils/classNames";
import Link from "next/link";

type TProps = {
  pathSegments: string[];
};

const HeaderLinks = async ({ pathSegments }: TProps) => {
  const modifiedMarkdown = await getParsedMarkdown(pathSegments.join("/"));

  const headings = extractHeadings(modifiedMarkdown);
  const linkBaseStyle = ["pl-0", "pl-4", "pl-8"];

  return (
    <div className=" space-y-2 text-xs text-zinc-400 ">
      {headings.map(({ level, text }) => (
        <div className={classNames(linkBaseStyle[level - 1], " ")} key={`header-inner-link-level-${level}-${text}`}>
          <Link
            href={`#level-${level}-${text}`}
            replace
            className="  hover:text-zinc-200 hover:font-semibold   transition-all duration-100  whitespace-nowrap "
          >
            {text}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default HeaderLinks;

function extractHeadings(markdownString: string) {
  // 정규 표현식을 사용하여 해시(#)로 시작하는 라인을 찾아냄
  const headingRegex = /^(#{1,3})\s+(.*)$/gm;
  const matches = markdownString.matchAll(headingRegex) as any;

  const headings = [];

  for (const match of matches) {
    const level = match[1].length; // 해시(#)의 개수로 제목 레벨을 결정
    const text = match[2].trim(); // 제목 텍스트, 좌우 공백 제거

    headings.push({ level, text });
  }

  return headings;
}
