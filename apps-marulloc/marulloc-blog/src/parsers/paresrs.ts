import { getDirectoryContents } from "@/services/repository/getDirectoryContents";
import { AsyncFunctionValueType } from "@/utils/conditionalType";

/**
 *
 * @param directories
 * @returns
 */
export const findReadme = (directories: AsyncFunctionValueType<ReturnType<typeof getDirectoryContents>>) => {
  return directories.find((file) => file.name.toLowerCase() === "readme.md") || null;
};

//  아래부터 마크다운 파서

/**
 *
 * @param readme
 * @returns
 */
export const extractFirstImgFromReadme = (readme: string) => {
  const regexPattern = /!\[\[(.*?)\]\]/;
  const matchedImgName = readme.match(regexPattern);

  return {
    matched: !!matchedImgName,
    firstImgName: matchedImgName ? matchedImgName[1] : null,
    firstImgUrl: matchedImgName
      ? `https://raw.githubusercontent.com/marulloc/obsidian-git/master/${matchedImgName[1]}`
      : "",
  };
};

/**
 *
 * @param readme
 * @param imgName
 * @returns
 */
export const eraseImgStringFromReadme = (readme: string, imgName: string | null) => {
  return imgName ? readme.replace(`![[${imgName}]]`, "") : readme;
};

export const extractFirstParagrahFromReadme = (readme: string, lineLimit?: number) => {
  const codeBlockRegexPatter = /```[\s\S]*?```/g;
  const markdownGrammerRegexPattern = /^([#-\<\|\>])|!\[/;

  const [targetParagraph] = readme
    .replaceAll(codeBlockRegexPatter, "")
    .split("\n\n")
    .slice(0, lineLimit || 10)
    .filter((paragraph) => !paragraph.trim().match(markdownGrammerRegexPattern));

  return targetParagraph || "";
};

export const convertImgUrlInMarkdown = (markdown: string) => {
  const regexPattern = /!\[\[([^\[\]\n]+)\.(.*?)\]\]/g;
  return markdown.replaceAll(regexPattern, (match, fileName, fileExtension) => {
    const file = encodeURIComponent(`${fileName}.${fileExtension}`);
    return `![](https://raw.githubusercontent.com/marulloc/obsidian-git/master/${file})`;
  });
};
