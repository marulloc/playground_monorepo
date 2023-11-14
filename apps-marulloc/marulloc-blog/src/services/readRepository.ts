import { decodeUnicode } from "@/utils/decode";

const OWNER = "marulloc";
const REPOSITORY = "obsidian-git";
const BASE_URL = `https://api.github.com/repos/${OWNER}/${REPOSITORY}/contents/`;
const BEARER = `Bearer ${"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"}`;

export const readRepoFile = async (path?: string) => {
  const headers = { Authorization: BEARER };
  const response = await (await fetch(`${BASE_URL}/${path || ""}`, { headers, next: { revalidate: 30000 } })).json();

  return response;
};

export const readRepoMarkdown = async (name: string) => {
  const headers = { Authorization: BEARER };
  const response = await (await fetch(`${BASE_URL}/${name}`, { headers, next: { revalidate: 30000 } })).json();

  return {
    ...response,
    content: decodeUnicode(response.content),
  };
};
