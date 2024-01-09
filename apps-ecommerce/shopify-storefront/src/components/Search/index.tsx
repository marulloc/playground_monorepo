'use client';

import { classNames } from '@/styles/utils';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useRouter, useSearchParams } from 'next/navigation';

const Search = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const search = form.search as HTMLInputElement;

    const newParams = new URLSearchParams(searchParams.toString());
    if (search.value) {
      newParams.set('query', search.value);
    } else {
      newParams.delete('query');
    }

    const paramsString = newParams.toString();
    const queryString = `${paramsString.length ? '?' : ''}${paramsString}`;
    router.push('/search' + queryString);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={classNames('relative group ')}>
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
    </form>
  );
};

export default Search;
