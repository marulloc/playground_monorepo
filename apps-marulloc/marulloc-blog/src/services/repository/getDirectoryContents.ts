import GITHUB_SERVICE_CONFIG from "../config";

export const getDirectoryContents = async (path?: string): Promise<TGitRepoContents> => {
  const headers = { Authorization: GITHUB_SERVICE_CONFIG.BEARER };
  const response = await (
    await fetch(`${GITHUB_SERVICE_CONFIG.BASE_URL}${path ? `${path}` : ""}`, { headers, next: { revalidate: 30000 } })
  ).json();

  return response as Promise<TGitRepoContents>;
};
