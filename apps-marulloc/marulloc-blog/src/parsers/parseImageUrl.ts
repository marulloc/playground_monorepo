export const parseImageUrl = (markdown: string, combinedBlobFileUrl: { [key: string]: string }) => {
  const regexPattern = /!\[\[([^\[\]\n]+)\.(.*?)\]\]/g;
  const modifiedString = markdown.replace(regexPattern, (match, fileName, fileExtension) => {
    return `![](${combinedBlobFileUrl[`${fileName}.${fileExtension}`]})`;
  });
  return modifiedString;
};
