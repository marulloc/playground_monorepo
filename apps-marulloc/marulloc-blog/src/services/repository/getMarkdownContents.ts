import { decodeUnicode } from "@/utils/decode";
import GITHUB_SERVICE_CONFIG from "../config";

export const getMarkdownContents = async (path: string): Promise<TGitRepoFileNode> => {
  const headers = { Authorization: GITHUB_SERVICE_CONFIG.BEARER };
  const response = await (
    await fetch(`${GITHUB_SERVICE_CONFIG.BASE_URL}/${path}`, { headers, next: { revalidate: 30000 } })
  ).json();

  return {
    ...response,
    content: decodeUnicode(response.content),
  } as Promise<TGitRepoFileNode>;
};
