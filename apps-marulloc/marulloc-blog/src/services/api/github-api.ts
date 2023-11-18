import { GITHUB_API_CONFIG } from "@/services/api/api-config";

export const githubApi = {
  get: {
    /**
     * @description response repository tree data (in flatMap form)
     * @usage nodes'path property used by generateStaticPath (required data processing)
     * @returns
     */
    repository: async (): Promise<TGitRepoConfigTree> => {
      const headers = { Authorization: GITHUB_API_CONFIG.BEARER };
      const response = await (
        await fetch(GITHUB_API_CONFIG.TREE_API_URL, {
          headers,
          next: { revalidate: 300 },
        })
      ).json();

      return response as Promise<TGitRepoConfigTree>;
    },

    /**
     *
     * @param path
     * @returns
     */
    directory: async (path?: string): Promise<TGitRepoContents> => {
      const headers = { Authorization: GITHUB_API_CONFIG.BEARER };
      const response = await (
        await fetch(`${GITHUB_API_CONFIG.CONTENTS_API_URL}${path ? `${path}` : ""}`, {
          headers,
          next: { revalidate: 300 },
        })
      ).json();

      return response as Promise<TGitRepoContents>;
    },

    /**
     * @param path
     * @returns
     */
    markdown: async (path: string): Promise<TGitRepoFileNode> => {
      const headers = { Authorization: GITHUB_API_CONFIG.BEARER };
      const response = await (
        await fetch(`${GITHUB_API_CONFIG.CONTENTS_API_URL}/${path}`, { headers, next: { revalidate: 300 } })
      ).json();

      return response as Promise<TGitRepoFileNode>;
    },
  },

  post: {},
  put: {},
  delete: {},
};
