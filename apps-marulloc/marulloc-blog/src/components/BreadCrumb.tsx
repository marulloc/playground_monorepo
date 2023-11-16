"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "./Container";

const BreadCrumb = () => {
  const pathname = usePathname();
  if (pathname === "/") return null;

  const modifiendPath = pathname.startsWith("/articles")
    ? pathname.replace("/articles/", "")
    : pathname.replace("/", "");
  const pathArray = modifiendPath.split("/").map((path) => decodeURIComponent(path));
  const nowPath = pathArray.pop();

  return (
    <Container className=" text-gray-400">
      <div className="py-2 flex space-x-2">
        <Link href="/">Home</Link>
        <span>{">"}</span>
        <>
          {pathArray.map((path, index) => (
            <span key={`breadcrumb-key-${path}`} className="py-2  space-x-2">
              <Link href={`/${pathArray.slice(0, index + 1).join("/")}`}>{path}</Link>
              <span className=" ">{">"}</span>
            </span>
          ))}
        </>
        <span className="ml-2 font-semibold">{nowPath}</span>
      </div>
    </Container>
  );
};

export default BreadCrumb;
