import { getDirectoryContents } from "@/services/repository/getDirectoryContents";
import { AsyncFunctionValueType } from "@/utils/conditionalType";

const dirParser = {
  findReadme: (directories: AsyncFunctionValueType<ReturnType<typeof getDirectoryContents>>) => {
    return directories.find((file) => file.name.toLowerCase() === "readme.md") || (null as TGitRepoFileNode | null);
  },

  filterMD: (directories: AsyncFunctionValueType<ReturnType<typeof getDirectoryContents>>) => {
    return directories.filter(
      (item) => item.type === "file" && item.name.endsWith(".md") && item.name.toLowerCase() !== "readme.md",
    ) as TGitRepoFileNode[];
  },

  filterDir: (directories: AsyncFunctionValueType<ReturnType<typeof getDirectoryContents>>) => {
    return directories.filter((item) => item.type === "dir") as TGitRepoDirNode[];
  },
};

export default dirParser;
