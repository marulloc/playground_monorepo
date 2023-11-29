import { getSiblingList } from '@/services/getSiblingList';
import { classNames } from '@/componentsV2/Marulloc-UI/utils/classNames';
import Link from 'next/link';

type TProps = {
  parentPathSegments: string[];
  currentPathSegments: string[];
};

const SiblingArticles = async ({ parentPathSegments, currentPathSegments }: TProps) => {
  const parentDirName = decodeURIComponent(parentPathSegments.at(-1) as string);
  const parentDirPath = parentPathSegments.join('/');

  const currentFileName = decodeURIComponent(currentPathSegments.at(-1) as string);
  const currentFilePath = currentPathSegments.join('/');

  const siblingList = await getSiblingList(parentDirPath);

  return (
    <section className="mt-8">
      {siblingList.length > 0 && (
        <div>
          {/* <div className="mb-4">
            <span className=" text-xl border-b">{parentDirName} 시리즈의 다른 글</span>
          </div> */}
          <h2 className="text-2xl font-bold mb-4 text-gray-800">{parentDirName}</h2>

          <ul className=" space-y-2 text-sm list-disc pl-6">
            {siblingList.map((node) => (
              <li key={node.path}>
                <Link
                  href={`/article/${node.path}`}
                  className={classNames(decodeURIComponent(currentFilePath) === node.path ? 'text-teal-400' : '')}
                >
                  <div>{node.name}</div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
};

export default SiblingArticles;
