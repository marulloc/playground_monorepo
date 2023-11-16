import Link from "next/link";

type TProps = {
  pathSegments: string[];
};

const BreadCrumbs = ({ pathSegments }: TProps) => {
  const parentDirSegment = [...pathSegments];
  const currentPath = parentDirSegment.pop() as string;

  return (
    <div className="flex">
      <Link href={"/"}>Home</Link>
      <>
        {parentDirSegment.map((path, index) => (
          <Link href={`/category/${pathSegments.slice(0, index + 1).join("/")}`} key={path} className="space-x-2 ml-2">
            <span> {">"}</span>
            <span>{decodeURIComponent(path)}</span>
          </Link>
        ))}

        <div className="cursor-pointer space-x-2 ml-2">
          <span> {">"}</span>
          <span className="text-white ">{decodeURIComponent(currentPath)}</span>
        </div>
      </>
    </div>
  );
};

export default BreadCrumbs;
