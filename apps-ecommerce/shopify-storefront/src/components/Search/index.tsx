'use client';

import { theme } from '@/styles/theme';
import { classNames } from '@/styles/utils';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useEffect, useRef, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

const Search = () => {
  const [active, setActive] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!active || !inputRef.current) return;

    inputRef.current.focus();
    //=> animation 끝나고 하는거랑 비교
    // 여기에 코드 추가
  }, [active]);

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

    setActive(false);
  };

  return (
    <>
      <button className="text-white" onClick={() => setActive(true)}>
        Search
      </button>

      <div
        id="backdrop-for-style"
        className={classNames(
          'isolate  fixed z-30  top-0 left-0 w-screen h-screen',
          'bg-zinc-700 bg-opacity-30 backdrop-blur-sm backdrop',
          active ? 'block' : 'hidden',
        )}
      />

      <div
        id="wrapper"
        className={classNames(
          'fixed z-30 top-0 left-0 w-screen h-screen  ',
          'flex justify-center items-center',
          active ? 'block' : 'hidden',
          theme.layoutPadding,
        )}
        onClick={() => setActive(false)}
      >
        <div
          id="dialog"
          className={classNames(
            'w-full max-w-xl h-80',
            ' bg-zinc-900 shadow-lg border rounded-md border-zinc-800',

            'p-6',
          )}
        >
          <form onSubmit={handleSubmit}>
            <div className={classNames('relative group ')}>
              <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                <MagnifyingGlassIcon
                  className={classNames('h-5 w-5', 'text-zinc-300 group-hover:text-zinc-100 group-hover:scale-110')}
                  aria-hidden="true"
                />
              </div>
              <input
                ref={inputRef}
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
        </div>
      </div>
    </>
  );
};

export default Search;
