import { directoryParser } from '@/services/parsers/directoryParser';
import { markdownParser } from '@/services/parsers/markdownParser';
import { githubApi } from '@/services/api/github-api';

/**
 *
 * @param curPath
 * @returns
 */
export const getReadmeData = async (curPath: string) => {
  const curDirContents = await githubApi.get.directory(curPath);
  const readmeFile = directoryParser.findReadme(curDirContents);

  const { content } = readmeFile ? await githubApi.get.markdown(readmeFile.path) : { content: '' };

  const readme = markdownParser.decodeUnicode(content);
  const { firstImgName, firstImgUrl } = markdownParser.extractFirstImg(readme);
  const readmeWithoutFirstImg = markdownParser.eraceFirstImgString(readme, firstImgName);

  return { readmeFirstImg: firstImgUrl, readmeWithoutFirstImg, readme };
};
