import { AsyncFunctionValueType } from '@/utils/conditionalType';
import { githubApi } from '@/services/api/github-api';

export const directoryParser = {
  /**
   *
   * @param directories
   * @returns
   */
  findReadme: (directories: AsyncFunctionValueType<ReturnType<typeof githubApi.get.directory>>) => {
    return directories.find((file) => file.name.toLowerCase() === 'readme.md') || (null as TGitRepoFileNode | null);
  },

  /**
   *
   * @param directories
   * @returns
   */
  filterMD: (directories: AsyncFunctionValueType<ReturnType<typeof githubApi.get.directory>>) => {
    return directories.filter(
      (item) => item.type === 'file' && item.name.endsWith('.md') && item.name.toLowerCase() !== 'readme.md',
    ) as TGitRepoFileNode[];
  },

  /**
   *
   * @param directories
   * @returns
   */
  filterDir: (directories: AsyncFunctionValueType<ReturnType<typeof githubApi.get.directory>>) => {
    return directories.filter((item) => item.type === 'dir') as TGitRepoDirNode[];
  },
};
