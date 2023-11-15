const OWNER = "marulloc";
// const REPOSITORY = "Web-Study";
const REPOSITORY = "obsidian-git";
const BRANCH = "master";
const GITHUB_SERVICE_CONFIG = {
  BASE_URL: `https://api.github.com/repos/${OWNER}/${REPOSITORY}/contents/`,
  BEARER: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_ACCESSTOKEN}`,
};

export default GITHUB_SERVICE_CONFIG;
