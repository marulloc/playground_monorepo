import { directoryParser } from "@/services/parsers/directoryParser";
import { markdownParser } from "@/services/parsers/markdownParser";
import { githubApi } from "@/services/api/github-api";
import { dictionaryOrderSort } from "@/utils/dictionaryOrderSort";

/**
 *
 * @param curPath
 * @returns
 */
export const getSeriesList = async (curPath: string) => {
  const curDirContents = await githubApi.get.directory(curPath);
  const seriesDirArr = directoryParser.filterDir(curDirContents);

  const seriesList = await Promise.all(
    seriesDirArr.map(async (seriesDir) => {
      const childDir = await githubApi.get.directory(seriesDir.path);

      const readmeFile = directoryParser.findReadme(childDir);
      const { content } = readmeFile ? await githubApi.get.markdown(readmeFile.path) : { content: "" };

      const readme = markdownParser.decodeUnicode(content);
      const { firstImgName, firstImgUrl } = markdownParser.extractFirstImg(readme);
      const readmeWithoutFirstImg = markdownParser.eraceFirstImgString(readme, firstImgName);

      return { ...seriesDir, firstImgName, firstImgUrl, childDir, readme, readmeWithoutFirstImg };
    }),
  );

  return seriesList.sort(dictionaryOrderSort);
};
