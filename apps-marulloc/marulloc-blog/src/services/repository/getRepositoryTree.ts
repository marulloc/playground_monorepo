import GITHUB_SERVICE_CONFIG from "../config";

export type TGetRepositoryTreeResp = {};

/**
 * @description response repository tree data (in flatMap form)
 * @usage1 nodes'path property used by generateStaticPath (required data processing)
 * @usage2 save public assets url for change image url in markdown string
 * @returns
 */
export const getRepositoryTree = async () => {
  const headers = { Authorization: GITHUB_SERVICE_CONFIG.BEARER };
  const response = await (
    await fetch(GITHUB_SERVICE_CONFIG.STRUCTURE_URL, {
      headers,
      next: { revalidate: 30000 },
    })
  ).json();

  return response;
};
