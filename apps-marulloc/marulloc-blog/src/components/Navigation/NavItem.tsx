"use client";

import { classNames } from "@/utils/classNames";
import Link from "next/link";
import { usePathname } from "next/navigation";

type TProps = {
  href: string;
  type: "dir" | "file";
  children: React.ReactNode;
};

const NavItem = ({ href, type, children }: TProps) => {
  const pathname = usePathname();
  const isActive = decodeURIComponent(pathname)
    .replace(/^\/(article|category)\//, "")
    .startsWith(href);
  return (
    <li>
      <Link
        href={type === "dir" ? `/category/${href}` : `/article/${href}`}
        className={classNames(
          "relative block px-3 py-2 transition",
          isActive ? "text-pink-500 dark:text-pink-400" : "hover:text-pink-500 dark:hover:text-pink-400",
        )}
      >
        {children}
        {isActive && (
          <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-pink-500/0 via-pink-500/40 to-pink-500/0 dark:from-pink-400/0 dark:via-pink-400/40 dark:to-pink-400/0" />
        )}
      </Link>
    </li>
  );
};
export default NavItem;
