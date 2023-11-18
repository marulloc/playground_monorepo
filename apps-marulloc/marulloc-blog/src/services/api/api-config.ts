export const GITHUB_API_CONFIG = {
  OWNER: process.env.GITHUB_OWNER,

  REPOSITORY: process.env.GITHUB_REPOSITORY,

  BRANCH: process.env.GITHUB_BRANCH,

  BEARER: `Bearer ${process.env.GITHUB_ACCESSTOKEN}`,

  // Repository 전체 파일과 폴더를 flatMap 형태로 반환하는 api
  TREE_API_URL: `https://api.github.com/repos/${process.env.GITHUB_OWNER}/${process.env.GITHUB_REPOSITORY}/git/trees/${process.env.GITHUB_BRANCH}?recursive=true`,

  // Repository의 파일이나 폴더의 내용물을 조회하는 api
  CONTENTS_API_URL: `https://api.github.com/repos/${process.env.GITHUB_OWNER}/${process.env.GITHUB_REPOSITORY}/contents`,
};
