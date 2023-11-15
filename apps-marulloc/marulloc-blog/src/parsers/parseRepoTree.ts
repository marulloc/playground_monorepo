export const parseRepoTree = (flatTree: any[]) => {
  const parsedFlatTree = flatTree.map((item) => ({
    type: item.type as "blob" | "tree",
    path: item.path,
    arrPath: item.path.split("/") as string[],
    url: item.url as string,
    name: item.path.split("/").at(-1) as string,
    subTree: item.type === "blob" ? null : [],
  }));

  const tree: any[] = [];

  parsedFlatTree.forEach((item) => {
    const pathSegments = item.path.split("/") as string[];
    let currentLevel = tree;

    pathSegments.forEach((segment, index) => {
      const existingNode = currentLevel.find((node) => node.path === segment);

      if (existingNode) {
        // Node already exists, move to its subTree
        currentLevel = existingNode.subTree || (existingNode.subTree = item.type === "tree" ? [] : null);
      } else {
        // Create a new node
        const newNode = {
          ...item,
          path: segment,
          type: index === pathSegments.length - 1 ? item.type : "tree",
          subTree: item.type === "tree" ? [] : null,
        };
        currentLevel.push(newNode);
        currentLevel = newNode.subTree as [];
      }
    });
  });

  return tree;
};

export const extractStaticRoutes = () => {};

export const extractRootBlobFiles = () => {};
