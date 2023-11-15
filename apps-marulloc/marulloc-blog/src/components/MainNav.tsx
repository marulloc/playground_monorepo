"use client";

import { classNames } from "@/utils/classNames";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MainNav = ({ rootNav }: { rootNav: any[] }) => {
  const pathname = usePathname();

  return (
    <nav className="flex justify-center gap-4 m-4">
      {rootNav
        .filter((item: any) => item.type === "dir")
        .map((item: any) => (
          <div
            key={item.sha}
            className={classNames(
              "pointer-events-auto text-white px-4 py-2 rounded-lg text-sm",
              decodeURIComponent(pathname).startsWith(`/${item.path}`) ? "bg-indigo-400" : "bg-slate-400",
            )}
          >
            <Link href={`/${item.path}`}> {item.name} </Link>
          </div>
        ))}
    </nav>
  );
};

export default MainNav;
