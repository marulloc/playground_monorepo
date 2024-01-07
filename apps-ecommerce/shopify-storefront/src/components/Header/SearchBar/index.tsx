'use client';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const SearchBar = () => {
  return (
    <div className=" flex flex-1 items-center justify-center px-2  max-w-xl ">
      <div className="w-full  ">
        <label htmlFor="search" className="sr-only">
          Search
        </label>

        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <MagnifyingGlassIcon className="h-5 w-5 text-slate-400" aria-hidden="true" />
          </div>

          <input
            id="search"
            name="search"
            className="block w-full rounded-md border-0 bg-slate-800 py-1.5 pl-10 pr-3 text-gray-900 ring-1 ring-inset ring-slate-600 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-transparent sm:text-sm sm:leading-6"
            placeholder="Search"
            type="search"
          />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
