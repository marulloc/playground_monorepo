import { getSiblingList } from "@/services/getSiblingList";
import { classNames } from "@/utils/classNames";
import Link from "next/link";

type TProps = {
  parentPathSegments: string[];
  currentPathSegments: string[];
};

const SiblingArticles = async ({ parentPathSegments, currentPathSegments }: TProps) => {
  const parentDirName = decodeURIComponent(parentPathSegments.at(-1) as string);
  const parentDirPath = parentPathSegments.join("/");

  const currentFileName = decodeURIComponent(currentPathSegments.at(-1) as string);
  const currentFilePath = currentPathSegments.join("/");

  const siblingList = await getSiblingList(parentDirPath);

  return (
    <section className=" ">
      {siblingList.length > 0 && (
        <div>
          <div className="mb-4">
            <span className=" text-xl border-b">{parentDirName} 시리즈의 다른 글</span>
          </div>
          <div className=" space-y-2 text-sm">
            {siblingList.map((node) => (
              <div key={node.path}>
                <Link
                  href={`/article/${node.path}`}
                  className={classNames(decodeURIComponent(currentFilePath) === node.path ? "text-teal-400" : "")}
                >
                  <div>{node.name}</div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default SiblingArticles;
