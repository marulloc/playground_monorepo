import { classNames } from '@/styles/utils';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

import SearchDialog from './SearchDialog';

const SearchBtnFake = () => {
  return (
    <SearchDialog
      Trigger={
        <div className="relative w-full">
          <div className={classNames('relative group')}>
            <div className="absolute inset-y-0 left-0 flex items-center pl-3">
              <MagnifyingGlassIcon
                className={classNames('h-5 w-5', 'text-zinc-300 group-hover:text-zinc-100 group-hover:scale-110')}
                aria-hidden="true"
              />
            </div>
            <input
              id="search"
              name="search"
              placeholder="Search ..."
              type="search"
              className={classNames(
                'h-10 block w-full',
                'rounded-lg',
                'bg-transparent',
                'border border-zinc-700',
                'text-xs text-zinc-50',
                'outline-none',
                'pl-10 pr-3 py-2',
                'focus-within:ring-1 ring-zinc-400 ring-inset',
              )}
            />
          </div>

          <div className=" cursor-text absolute inset-0 z-10"></div>
        </div>
      }
    />
  );
};

export default SearchBtnFake;
