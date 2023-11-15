"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const BreadCrumb = () => {
  const pathname = usePathname();
  if (pathname === "/") return null;

  const modifiendPath = pathname.startsWith("/articles")
    ? pathname.replace("/articles/", "")
    : pathname.replace("/", "");
  const pathArray = modifiendPath.split("/").map((path) => decodeURIComponent(path));
  const nowPath = pathArray.pop();

  return (
    <div className=" bg-slate-300 px-4 py-2 flex">
      <Link href="/">Home</Link>
      {"->"}
      <>
        {pathArray.map((path, index) => (
          <span key={`breadcrumb-key-${path}`}>
            <Link href={`/${pathArray.slice(0, index + 1).join("/")}`}>{path}</Link>
            {"->"}
          </span>
        ))}
      </>
      <span>{nowPath}</span>
    </div>
  );
};

export default BreadCrumb;
