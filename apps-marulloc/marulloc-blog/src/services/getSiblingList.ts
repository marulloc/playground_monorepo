import { directoryParser } from "@/services/parsers/directoryParser";
import { githubApi } from "@/services/api/github-api";
import { dictionaryOrderSort } from "@/utils/dictionaryOrderSort";

/**
 *
 * @param parentPath
 * @returns
 */
export const getSiblingList = async (parentPath: string) => {
  const parentDirContents = await githubApi.get.directory(parentPath);

  const siblingList = directoryParser.filterMD(parentDirContents);
  // .filter((item) => item.path !== decodeURIComponent(params.slug.join("/")));
  return siblingList.sort(dictionaryOrderSort);
};
