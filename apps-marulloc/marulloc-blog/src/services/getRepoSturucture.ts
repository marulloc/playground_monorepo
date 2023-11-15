import GITHUB_SERVICE_CONFIG from "./config";

export const getRepoStructure = async () => {
  const headers = { Authorization: GITHUB_SERVICE_CONFIG.BEARER };
  const response = await (
    await fetch(GITHUB_SERVICE_CONFIG.STRUCTURE_URL, {
      headers,
      next: { revalidate: 30000 },
    })
  ).json();

  return response;
};
