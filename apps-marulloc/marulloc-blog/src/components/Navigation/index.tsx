"use client";

import { classNames } from "@/utils/classNames";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavItem = ({ href, children }: { href: string; children: React.ReactNode }) => {
  const pathname = usePathname();
  const isActive =
    decodeURIComponent(pathname.replace("/article", "")).startsWith(href.replace("/category", "")) ||
    decodeURIComponent(pathname.replace("/category", "")).startsWith(href.replace("/article", "")) ||
    decodeURIComponent(pathname).startsWith(href);

  return (
    <li>
      <Link
        href={href}
        className={classNames(
          "relative block px-3 py-2 transition",
          isActive ? "text-teal-500 dark:text-teal-400" : "hover:text-teal-500 dark:hover:text-teal-400",
        )}
      >
        {children}
        {isActive && (
          <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0 dark:from-teal-400/0 dark:via-teal-400/40 dark:to-teal-400/0" />
        )}
      </Link>
    </li>
  );
};

const Navigation = ({ routes }: { routes: any[] }) => {
  return (
    <nav className="flex flex-1 justify-end md:justify-center">
      <ul className="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
        {routes.map((item: any) => {
          if (item.path === ".obsidian") return null;
          else if (item.type === "blob") return null;
          return (
            <NavItem
              key={item.pathname}
              href={item.type === "tree" ? `/category/${item.path}` : `/article/${item.path}`}
            >
              {item.name}
            </NavItem>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
