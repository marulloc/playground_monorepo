"use client";

import { classNames } from "@/utils/classNames";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MainNav = ({ routes }: { routes: any[] }) => {
  const pathname = usePathname();

  const activateClass = (pathname: string, type: "dir" | "file", path: string) => {
    return decodeURIComponent(pathname).startsWith(`/${path}`) ||
      decodeURIComponent(pathname).startsWith(`/articles/${path}`)
      ? "bg-indigo-400"
      : "bg-slate-400";
  };

  console.log("???", routes);

  return (
    <nav className="flex justify-center gap-4 m-4">
      {routes.map((item: any) => (
        <div
          key={item.path}
          className={classNames(
            "pointer-events-auto text-white px-4 py-2 rounded-lg text-sm",
            activateClass(pathname, item.type, item.path),
          )}
        >
          <Link href={item.type === "tree" ? `/${item.path}` : `/articles/${item.path}`}>{item.name}</Link>
        </div>
      ))}
    </nav>
  );
};

export default MainNav;
