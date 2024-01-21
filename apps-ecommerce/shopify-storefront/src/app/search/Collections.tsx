import Link from 'next/link';

const Collections = ({ collections }: { collections: Collection[] }) => {
  return (
    <>
      {/* <p className="text-xs text-gray-400">Collections</p> */}

      <nav className="md:mt-10">
        <ul>
          <li className="mt-2 flex text-black dark:text-white cursor-pointer">
            <Link href={'/search'}>
              <span className="w-full text-sm underline-offset-4 hover:underline dark:hover:text-neutral-100">All</span>
            </Link>
          </li>

          {collections.map(({ handle, title, handleRoute }) => (
            <li
              key={`search-collection-list-${handle}`}
              className="mt-2 flex text-black dark:text-white cursor-pointer"
            >
              <Link href={handleRoute}>
                <span className="w-full text-sm underline-offset-4 hover:underline dark:hover:text-neutral-100">
                  {title}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Collections;
