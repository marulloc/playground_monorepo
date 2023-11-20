import ConsoleCompo from "@/components/ConsoleCompo";
import Container from "@/components/Container";
import MarkdownContents from "@/components/MarkdownContents";
import { getParsedMarkdown } from "@/services/getParsedMarkdown";
import { getSiblingList } from "@/services/getSiblingList";
import { classNames } from "@/utils/classNames";
import Link from "next/link";

const Page = async ({ params }: any) => {
  const parentDirPathSegments = [...params.slug].slice(0, params.slug.length - 1);
  const currentFilePathSegments = [...params.slug];

  return (
    <main className=" flex justify-center  ">
      <div className="relative  flex-1 flex justify-end">
        <div className="pr-20 mt-24">
          <SiblingArticles currentPathSegments={currentFilePathSegments} parentPathSegments={parentDirPathSegments} />
        </div>
      </div>

      <Container className="max-w-3xl bg-zinc-900 mx-8 ">
        <div className="   px-24 py-24">
          <Article pathSegments={currentFilePathSegments} />
        </div>
      </Container>

      <div className="relative  flex-1 flex justify-start">
        <div className="fixed">
          <div className="pl-4 mt-24">
            <HeaderLinks pathSegments={currentFilePathSegments} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Page;

/**
 *
 * @param param0
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * @returns
 */
const Article = async ({ pathSegments }: { pathSegments: string[] }) => {
  const modifiedMarkdown = await getParsedMarkdown(pathSegments.join("/"));
  const currentFileName = decodeURIComponent(pathSegments.at(-1) as string);
  return (
    <article>
      <div className=" mb-12">
        <h1 className="text-4xl font-bold leading-normal ">{currentFileName}</h1>
      </div>
      <div>
        <MarkdownContents markdown={modifiedMarkdown || ""} />{" "}
      </div>
    </article>
  );
};

const HeaderLinks = async ({ pathSegments }: { pathSegments: string[] }) => {
  const modifiedMarkdown = await getParsedMarkdown(pathSegments.join("/"));
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
  const linkBaseStyle = ["px-0", "px-6", "px-12"];

  return (
    <div className=" space-y-2 text-xs">
      {headings.map(({ level, text }) => (
        <div className={classNames(linkBaseStyle[level - 1], " ")}>
          <Link href={`#level-${level}-${text}`} className="  hover:text-indigo-400">
            {text}
          </Link>
        </div>
      ))}
    </div>
  );
};

const SiblingArticles = async ({
  parentPathSegments,
  currentPathSegments,
}: {
  parentPathSegments: string[];
  currentPathSegments: string[];
}) => {
  const parentDirName = decodeURIComponent(parentPathSegments.at(-1) as string);
  const parentDirPath = parentPathSegments.join("/");

  const currentFileName = decodeURIComponent(currentPathSegments.at(-1) as string);
  const currentFilePath = currentPathSegments.join("/");

  const siblingList = await getSiblingList(parentDirPath);

  return (
    <section className=" ">
      {siblingList.length > 0 && (
        <div>
          <div className="mb-4">
            <span className=" text-xl border-b">{parentDirName} 시리즈의 다른 글</span>
          </div>
          <div className=" space-y-2 text-sm">
            {siblingList.map((node) => (
              <div key={node.path}>
                <Link
                  href={`/article/${node.path}`}
                  className={classNames(decodeURIComponent(currentFilePath) === node.path ? "text-teal-400" : "")}
                >
                  <div>{node.name}</div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};
