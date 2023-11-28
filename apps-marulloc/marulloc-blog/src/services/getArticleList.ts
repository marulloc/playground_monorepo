import { directoryParser } from '@/services/parsers/directoryParser';
import { markdownParser } from '@/services/parsers/markdownParser';
import { githubApi } from '@/services/api/github-api';
import { dictionaryOrderSort } from '@/utils/dictionaryOrderSort';

/**
 *
 * @param curPath
 * @returns
 */
export const getArticleList = async (curPath: string) => {
  const curDirContents = await githubApi.get.directory(curPath);

  const articleMarkdownArr = directoryParser.filterMD(curDirContents);

  const articleList = await Promise.all(
    articleMarkdownArr.map(async (articleFile) => {
      const { content } = await githubApi.get.markdown(articleFile.path);

      const markdown = markdownParser.decodeUnicode(content);
      const { firstImgUrl } = markdownParser.extractFirstImg(markdown);
      const summaryParagraph = markdownParser.extractFirstParagraph(markdown, 10);

      return {
        ...articleFile,
        content: markdown,
        contentImageUrl: firstImgUrl,
        contentDescription: summaryParagraph,
      };
    }),
  );

  return articleList.sort(dictionaryOrderSort);
};
