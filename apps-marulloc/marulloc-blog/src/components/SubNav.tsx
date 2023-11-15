"use client";

import { classNames } from "@/utils/classNames";
import Link from "next/link";

const SubNav = ({ subNav }: { subNav: any[] }) => {
  return (
    <nav className=" space-y-2 mx-48">
      {subNav.map((item: any) => (
        <Link
          key={item.sha}
          className={classNames("bg-red-900 pointer-events-auto  text-white py-3 px-6 block rounded-lg")}
          href={item.type === "dir" ? `/${item.path}` : `/articles/${item.path}`}
        >{`${item.type} - ${item.name} -> ${item.path}`}</Link>
      ))}
    </nav>
  );
};

export default SubNav;
