"use client";

import { classNames } from "@/utils/classNames";
import Link from "next/link";
import { usePathname } from "next/navigation";

// const NavItem = ({ href, children }: { href: string; children: React.ReactNode }) => {
//   const pathname = usePathname();
//   const isActive =
//     decodeURIComponent(pathname.replace("/article", "")).startsWith(href.replace("/category", "")) ||
//     decodeURIComponent(pathname.replace("/category", "")).startsWith(href.replace("/article", "")) ||
//     decodeURIComponent(pathname).startsWith(href);

//   return (
//     <li>
//       <Link
//         href={href}
//         className={classNames(
//           "relative block px-3 py-2 transition",
//           isActive ? "text-teal-500 dark:text-teal-400" : "hover:text-teal-500 dark:hover:text-teal-400",
//         )}
//       >
//         {children}
//         {isActive && (
//           <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0 dark:from-teal-400/0 dark:via-teal-400/40 dark:to-teal-400/0" />
//         )}
//       </Link>
//     </li>
//   );
// };

const NavItem = ({
  href,
  type,
  children,
  highlight = false,
}: {
  href: string;
  type: "dir" | "file";
  children: React.ReactNode;
  highlight?: boolean;
}) => {
  const isActive = false;
  return (
    <li>
      <Link
        href={type === "dir" ? `/category/${href}` : `/article/${href}`}
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
export default NavItem;
