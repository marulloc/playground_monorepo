const OWNER = "marulloc";
const REPOSITORY = "Web-Study";
// const REPOSITORY = "obsidian-git";
const BRANCH = "master";

const GITHUB_SERVICE_CONFIG = {
  BEARER: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_ACCESSTOKEN}`,

  STRUCTURE_URL: `https://api.github.com/repos/${OWNER}/${REPOSITORY}/git/trees/${BRANCH}?recursive=true`,
  BASE_URL: `https://api.github.com/repos/${OWNER}/${REPOSITORY}/contents`,
};

export default GITHUB_SERVICE_CONFIG;
