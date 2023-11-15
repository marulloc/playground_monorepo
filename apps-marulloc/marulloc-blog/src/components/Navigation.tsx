"use client";
import { readRepoFile } from "@/services/readRepository";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Navigation = ({ route }: any) => {
  // console.log(">>origin>", route);
  const pathname = usePathname();

  const [dir, setDir] = useState<any>([]);

  useEffect(() => {
    (async () => {
      console.log("pathname!!!!", pathname);
      const response = await readRepoFile(pathname);
      console.log("response->", response);
      setDir(response);
    })();
  }, [pathname]);

  return (
    <div className="mt-48 px-4">
      {pathname}

      <div className=" space-y-4 ">
        {dir.map((item: any) => (
          <div key={item.sha} className="bg-slate-400 pointer-events-auto text-white px-6 py-3 rounded-lg">
            <Link href={`/${item.path}`}>{`${item.type} - ${item.name} -> ${item.path}`}</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navigation;
