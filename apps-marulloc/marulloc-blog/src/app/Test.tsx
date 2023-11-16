"use client";

import Container from "@/components/Container";
import Link from "next/link";

const Test = ({ tree }: { tree: any[] }) => {
  return (
    <Container className=" max-w-xl">
      <div className="space-y-2">
        {tree.map((node) => (
          <div key={node.path} className="group p-2 border border-gray-600 rounded-lg text-gray-400 text-sm">
            <Link href={node.pathname}>
              <div className="grid grid-cols-2">
                <div className="space-x-4 col-span-1">
                  <span className="">{node.type === "tree" ? "T" : "F"}</span>
                  <span className=" text-gray-100 text-lg font-semibold">{node.name}</span>
                </div>
                <div className=" col-span-1">
                  {node.subTree?.map((node: any) => (
                    <div key={node.pathname}>
                      <span>{node.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Test;
