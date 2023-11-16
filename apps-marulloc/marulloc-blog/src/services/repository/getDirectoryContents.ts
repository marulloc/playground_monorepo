import GITHUB_SERVICE_CONFIG from "../config";

export type TGetDirectoryContentsResp = {};

export const getDirectoryContents = async (path?: string) => {
  const headers = { Authorization: GITHUB_SERVICE_CONFIG.BEARER };
  const response = await (
    await fetch(`${GITHUB_SERVICE_CONFIG.BASE_URL}${path ? `${path}` : ""}`, { headers, next: { revalidate: 30000 } })
  ).json();

  return response;
};
