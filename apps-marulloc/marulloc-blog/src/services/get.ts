import dirParser from "@/parsers/directoryParser";
import { getDirectoryContents } from "./repository/getDirectoryContents";
import { getMarkdownContents } from "./repository/getMarkdownContents";
import mdParser from "@/parsers/markdownParser";

export const getSeriesList = async (curPath: string) => {
  const curDirContents = await getDirectoryContents(curPath);

  const seriesDirArr = dirParser.filterDir(curDirContents);

  const seriesList = await Promise.all(
    seriesDirArr.map(async (seriesDir) => {
      const childDir = await getDirectoryContents(seriesDir.path);

      const readmeFile = dirParser.findReadme(childDir);
      const { content: readme } = readmeFile ? await getMarkdownContents(readmeFile.path) : { content: "" };
      const { firstImgName, firstImgUrl } = mdParser.extractFirstImg(readme);

      return { ...seriesDir, firstImgName, firstImgUrl };
    }),
  );

  return seriesList;
};

export const getArticleList = async (curPath: string) => {
  const curDirContents = await getDirectoryContents(curPath);

  const articleMarkdownArr = dirParser.filterMD(curDirContents);

  const articleList = await Promise.all(
    articleMarkdownArr.map(async (articleFile) => {
      const { content: markdown } = await getMarkdownContents(articleFile.path);
      const { firstImgName, firstImgUrl } = mdParser.extractFirstImg(markdown);
      const summaryParagraph = mdParser.extractFirstParagraph(markdown, 10);

      return {
        ...articleFile,
        content: markdown,
        contentImageUrl: firstImgUrl,
        contentDescription: summaryParagraph,
      };
    }),
  );

  return articleList;
};

export const getReadmeData = async (curPath: string) => {
  const curDirContents = await getDirectoryContents(curPath);

  const readmeFile = dirParser.findReadme(curDirContents);

  const { content: readme } = readmeFile ? await getMarkdownContents(readmeFile.path) : { content: "" };

  const { firstImgName, firstImgUrl } = mdParser.extractFirstImg(readme);
  const readmeWithoutFirstImg = mdParser.eraceFirstImgString(readme, firstImgName);

  return { readmeFirstImg: firstImgUrl, readmeWithoutFirstImg, readme };
};

export const getSiblingList = async (parentPath: string) => {
  const parentDirContents = await getDirectoryContents(parentPath);

  const siblingList = dirParser.filterMD(parentDirContents);
  // .filter((item) => item.path !== decodeURIComponent(params.slug.join("/")));
  return siblingList;
};

export const getParsedMarkdown = async (markdownPath: string) => {
  const { content: markdown } = await getMarkdownContents(markdownPath);
  const modifiedMarkdown = mdParser.convertAllImgString(markdown);

  return modifiedMarkdown;
};
