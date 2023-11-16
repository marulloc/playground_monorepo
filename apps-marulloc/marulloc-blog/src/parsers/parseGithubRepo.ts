export const modifiyFlatRepo = (flatRepo: any[]) => {
  return flatRepo.map((node) => ({
    ...node,
    pathname: node.type === "tree" ? `/category/${node.path}` : `/article/${node.path}`,
    pathSegments: node.path.split("/") as string[],
    name: node.path.split("/").at(-1) as string,
    type: node.type as "blob" | "tree",
    subTree: node.type === "blob" ? null : [],
    url: node.url as string,
  }));
};

export const parseRepoStructure = (flatRepo: any[]) => {
  const tree: any[] = [];
  const routeMap: any = {};

  flatRepo.forEach((node) => {
    let currentLevel = tree;

    node.pathSegments.forEach((segment, index) => {
      const existingNode = currentLevel.find((node) => node.path === segment);

      if (existingNode) {
        // Node already exists, move to its subTree
        currentLevel = existingNode.subTree || (existingNode.subTree = node.type === "tree" ? [] : null);
      } else {
        // Create a new node
        const newNode = {
          ...node,
          path: segment,
          // type: index === pathSegments.length - 1 ? node.type : "tree",
          subTree: node.type === "tree" ? [] : null,
        };
        currentLevel.push(newNode);
        routeMap[`${node.type === "tree" ? "/category" : "/article"}/${node.pathSegments.join("/")}`] = newNode;
        currentLevel = newNode.subTree as [];
      }
    });
  });

  return { tree, routeMap };
};
