import { decodeUnicode } from "@/utils/decode";
import GITHUB_SERVICE_CONFIG from "./config";

/**
 *
 * @param path
 * @returns
 */
export const readRepoFile = async (path?: string) => {
  const headers = { Authorization: GITHUB_SERVICE_CONFIG.BEARER };
  const response = await (
    await fetch(`${GITHUB_SERVICE_CONFIG.BASE_URL}${path ? `${path}` : ""}`, { headers, next: { revalidate: 30000 } })
  ).json();

  return response;
};

/**
 *
 * @param name
 * @returns
 */
export const readRepoMarkdown = async (name: string) => {
  const headers = { Authorization: GITHUB_SERVICE_CONFIG.BEARER };
  const response = await (
    await fetch(`${GITHUB_SERVICE_CONFIG.BASE_URL}/${name}`, { headers, next: { revalidate: 30000 } })
  ).json();

  return {
    ...response,
    content: decodeUnicode(response.content),
  };
};

export const readAll = async () => {
  const headers = { Authorization: GITHUB_SERVICE_CONFIG.BEARER };
  const response = await (
    await fetch(`https://api.github.com/repos/marulloc/Web-Study/git/trees/master?recursive=true`, {
      headers,
      next: { revalidate: 30000 },
    })
  ).json();

  return {
    ...response,
    // content: decodeUnicode(response.content),
  };
};

// /**
//  *
//  * @param path
//  * @param type
//  * @returns
//  */
// export const getRepoStructure = async (path = "", type = "dir") => {
//   const rootDir = await readRepoFile();

//   const recursive = async (nowDir: any, nowResult: any[], depth: number) => {
//     for (const { type, name, path, download_url, ...rest } of nowDir) {
//       switch (type) {
//         case "file":
//           // if (name.includes(".md"))
//           nowResult.push({ path, type, name, download_url, ...rest, depth });
//           break;

//         case "dir":
//           if (name === ".obsidian") continue;
//           const nextResult = { path, type, name, ...rest, subDir: [], depth };
//           const nextDir = await readRepoFile(path);

//           await recursive(nextDir, nextResult.subDir, depth + 1);
//           nowResult.push(nextResult);
//           break;
//       }
//     }
//   };

//   const result: any[] = [];
//   // await recursive([{ path: "", type: "dir" }], result, 0);
//   await recursive(rootDir, result, 0);
//   return result;
// };
