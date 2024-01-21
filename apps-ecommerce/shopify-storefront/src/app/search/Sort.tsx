'use client';

import { Dropdown } from '@/components/@marulloc-compound-components/Dropdown';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';

const Sort = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  return (
    <Dropdown id="product-sorting">
      <Dropdown.Trigger>
        {() => (
          <p className=" text-xs flex space-x-2 px-3 py-1 -mt-1 -mr-3 justify-end items-center hover:bg-gray-600 cursor-pointer rounded-full">
            {/* <span className="  text-gray-400">{`Sort by : `}</span> */}

            <span className="font-bold"> {'Price:Low to High'} </span>
            <span>
              <ChevronDownIcon className="h-4 w-4" />
            </span>
          </p>
        )}
      </Dropdown.Trigger>

      <Dropdown.Contents>
        {() => (
          <div className="bg-black bg-opacity-90 backdrop-blur-md text-zinc-400 mt-2 border border-zinc-600 rounded-lg -ml-8 p-2 text-sm  ">
            <ul className="space-y-2  ">
              <li className="hover:text-zinc-50 ">
                <Link
                  shallow={false}
                  href={{ pathname: pathname, query: { sort: 'lth' } }}
                >{`Price: Low to High`}</Link>
              </li>
              <li className="hover:text-zinc-50 ">
                <Link href={{ pathname: pathname, query: { sort: 'htl' } }}>{`Price: High to Low`}</Link>
              </li>
              <li className="hover:text-zinc-50 ">
                <DropdownItem optionName={'sort'} title={`Price: Low to High`} value={'lth'} />
              </li>

              <li className="hover:text-zinc-50 ">
                <DropdownItem optionName={'sort'} title={`Price: High to Low`} value={'htl'} />
              </li>
            </ul>
          </div>
        )}
      </Dropdown.Contents>
    </Dropdown>
  );
};

export default Sort;

const DropdownItem = ({ optionName, title, value }: { optionName: string; title: string; value: string }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const isActive = searchParams.get(optionName) === value;

  new URLSearchParams({ [optionName]: value });
  const href = `${pathname}?${new URLSearchParams({ [optionName]: value })}`;

  return (
    <Link href={href}>
      <span>
        {title} {href}
      </span>
    </Link>
  );
};
