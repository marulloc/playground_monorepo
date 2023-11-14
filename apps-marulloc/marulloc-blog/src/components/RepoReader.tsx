"use client";

import { readRepoMarkdown, readRepoFile } from "@/services/readRepository";
import { readFile } from "fs";
import { useEffect, useState } from "react";
import MarkdownContents from "./MarkdownContents";
import { parseImageUrl } from "@/parsers/parseImageUrl";

const RepoReader = () => {
  const [dir, setDir] = useState<any[]>([]);
  const [contents, setContents] = useState("");

  const [rootBlobFileUrl, setRootBlobFileUrl] = useState<{ [key: string]: string }>({});

  const eventConsole = async () => {
    const result = await readRepoFile();
    console.log(result);
    setDir(result);

    // Root file 찾기
    const combinedObject: any = {};
    result
      .filter((item: any) => item.type === "file" && !item.name.includes(".md"))
      .forEach((item: any) => (combinedObject[item.name] = item.download_url));
    setRootBlobFileUrl(combinedObject);
  };

  return (
    <div>
      <button className="bg-slate-400 pointer-events-auto text-white m-4 px-6 py-3 rounded-lg" onClick={eventConsole}>
        Repo
      </button>

      <div className=" space-y-2">
        {dir.map((item) => (
          <div key={item.sha}>
            <button
              className="bg-slate-400 pointer-events-auto text-white px-6 py-3 rounded-lg"
              onClick={async () => {
                let result;
                if (item.type === "dir") result = await readRepoFile(item.path as string);
                else if (item.type === "file") {
                  result = await readRepoMarkdown(item.name);
                  setContents(parseImageUrl(result.content as string, rootBlobFileUrl));
                }
              }}
            >
              {`${item.type} - ${item.name}`}
            </button>
          </div>
        ))}
      </div>

      <MarkdownContents markdown={contents} />
    </div>
  );
};

export default RepoReader;
