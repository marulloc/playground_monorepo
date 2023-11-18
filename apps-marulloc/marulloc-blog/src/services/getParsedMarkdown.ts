import { markdownParser } from "@/services/parsers/markdownParser";
import { githubApi } from "@/services/api/github-api";

/**
 *
 * @param markdownPath
 * @returns
 */
export const getParsedMarkdown = async (markdownPath: string) => {
  const { content } = await githubApi.get.markdown(markdownPath);

  const markdown = markdownParser.decodeUnicode(content);
  const modifiedMarkdown = markdownParser.convertAllImgString(markdown);

  return modifiedMarkdown;
};
