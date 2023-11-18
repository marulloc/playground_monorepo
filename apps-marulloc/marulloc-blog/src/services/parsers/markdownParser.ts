export const markdownParser = {
  /**
   *
   * @param string
   * @returns
   */
  decodeUnicode: (string: string) => {
    return decodeURIComponent(
      atob(string)
        .split("")
        .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
        .join(""),
    );
  },

  /**
   *
   * @param readme
   * @returns
   */
  extractFirstImg: (readme: string) => {
    const regexPattern = /!\[\[(.*?)\]\]/;
    const matchedImgName = readme.match(regexPattern);

    return {
      matched: !!matchedImgName,
      firstImgName: matchedImgName ? matchedImgName[1] : null,
      firstImgUrl: matchedImgName
        ? `https://raw.githubusercontent.com/marulloc/obsidian-git/master/${matchedImgName[1]}`
        : "",
    };
  },

  /**
   *
   * @param readme
   * @param imgName
   * @returns
   */
  eraceFirstImgString: (readme: string, imgName: string | null) => {
    return imgName ? readme.replace(`![[${imgName}]]`, "") : readme;
  },

  /**
   *
   * @param markdown
   * @returns
   */
  convertAllImgString: (markdown: string) => {
    const regexPattern = /!\[\[([^\[\]\n]+)\.(.*?)\]\]/g;
    return markdown.replaceAll(regexPattern, (match, fileName, fileExtension) => {
      const file = encodeURIComponent(`${fileName}.${fileExtension}`);
      return `![](https://raw.githubusercontent.com/marulloc/obsidian-git/master/${file})`;
    });
  },

  /**
   *
   * @param readme
   * @param lineLimit
   * @returns
   */
  extractFirstParagraph: (readme: string, lineLimit?: number) => {
    const codeBlockRegexPatter = /```[\s\S]*?```/g;
    const markdownGrammerRegexPattern = /^([#-\<\|\>])|!\[/;

    const [targetParagraph] = readme
      .replaceAll(codeBlockRegexPatter, "")
      .split("\n\n")
      .slice(0, lineLimit || 10)
      .filter((paragraph) => !paragraph.trim().match(markdownGrammerRegexPattern));

    return targetParagraph || "";
  },
};
