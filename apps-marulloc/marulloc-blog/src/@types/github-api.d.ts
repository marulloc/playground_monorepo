type TGitRepoConfigNode = {
  path: string;
  mode: string;
  type: 'blob' | 'tree';
  sha: string;
  url: string;
};

type TGitRepoConfigTree = {
  sha: string;
  url: string;
  tree: TGitRepoNode[];
  truncated: boolean;
};

type TGitRepoFileNode = {
  name: string;
  path: string;
  sha: string;
  size: number;
  url: string;
  html_url: string;
  git_url: string;
  download_url: string;
  type: 'file';
  content: string;
  _links: {
    self: string;
    git: string;
    html: string;
  };
};

type TGitRepoDirNode = {
  name: string;
  path: string;
  sha: string;
  size: number;
  url: string;
  html_url: string;
  git_url: string;
  download_url: string;
  type: 'dir';
  _links: {
    self: string;
    git: string;
    html: string;
  };
};

type TGitRepoContents = (TGitRepoFileNode | TGitRepoDirNode)[];
