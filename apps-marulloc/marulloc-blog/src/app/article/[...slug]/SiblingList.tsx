import Container from "@/components/Container";
import { getSiblingList } from "@/services/getSiblingList";
import { classNames } from "@/utils/classNames";
import Link from "next/link";

const SiblingList = async ({ path, pathSegments }: { path: string; pathSegments: string[] }) => {
  const parentDirPathSegments = pathSegments.slice(0, pathSegments.length - 1);
  const parentDirName = decodeURIComponent(parentDirPathSegments.at(-1) as string);
  const parentDirPath = parentDirPathSegments.join("/");

  const currentFilePathSegments = pathSegments;
  const currentFileName = decodeURIComponent(currentFilePathSegments.at(-1) as string);
  const currentFilePath = currentFilePathSegments.join("/");

  const siblingList = await getSiblingList(parentDirPath);

  return (
    <section className="mt-12   p-8 static xl:absolute">
      {siblingList.length > 0 && (
        <div>
          <div className="mb-4">
            <span className=" text-xl border-b">{parentDirName} 시리즈의 다른 글</span>
          </div>
          <div>
            {siblingList.map((node) => (
              <Link
                key={node.path}
                href={`/article/${node.path}`}
                className={classNames(
                  decodeURIComponent(currentFilePath) === node.path ? "text-teal-400" : "",
                  "text-sm",
                )}
              >
                <div>{node.name}</div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default SiblingList;
