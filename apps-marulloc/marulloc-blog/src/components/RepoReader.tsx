"use client";

import { readRepoMarkdown, readRepoFile } from "@/services/readRepository";
import { readFile } from "fs";
import { useEffect, useState } from "react";
import MarkdownContents from "./MarkdownContents";

const RepoReader = () => {
  const [dir, setDir] = useState<any[]>([]);

  const [contents, setContents] = useState("");
  const eventConsole = async () => {
    const result = await readRepoFile();
    console.log(result);
    setDir(result);
  };
  useEffect(() => {
    eventConsole();
  }, []);

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
                  setContents(result.content);
                }

                console.log(result);
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
