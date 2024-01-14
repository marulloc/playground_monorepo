'use client';

import { theme } from '@/styles/theme';
import { classNames } from '@/styles/utils';
import { ArrowRightIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useEffect, useRef, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

const SearchDialog = () => {
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
      <button className={classNames('rounded-lg text-zinc-400 p-1.5')} onClick={() => setActive(true)}>
        <MagnifyingGlassIcon className="w-6 h-6" />
      </button>

      {/* Style Overlay */}
      <div
        id="backdrop-for-style"
        className={classNames(
          'fixed top-0 left-0 w-screen h-screen',
          'transition-all',

          'z-40 ',
          active ? ' visible opacity-100  ' : ' invisible opacity-0  ',

          // Overlay classes
          active ? ' duration-200  opacity-100' : ' duration-300 opacity-0 - ',
          'bg-zinc-700 bg-opacity-30 backdrop-blur-sm backdrop',
        )}
        onClick={() => {
          setActive(false);
        }}
      />

      <div
        id="dialog-wrapper"
        className={classNames(
          'fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2',
          'w-full h-full flex justify-center items-center  ',
          'overflow-hidden',

          // 필수 애니메이션
          'z-50 ',
          'transition-all ease-in-out',
          active ? ' visible opacity-100  ' : ' invisible opacity-0  ',

          // 유저 수정 가능
          active ? '  delay-200 duration-1000 opacity-100      ' : '   delay-0  duration-1000     ',
        )}
        onClick={(e: any) => {
          if (e.target?.id === 'dialog-wrapper') setActive(false);
        }}
      >
        {/* Developer Input */}

        <div className={classNames('w-full   max-w-3xl  ', ' bg-zinc-950 shadow-lg border rounded-lg border-zinc-800')}>
          <button onClick={() => setActive(false)} className="bg-white">
            닫기
          </button>
          <form onSubmit={handleSubmit}>
            <div className={classNames('relative group ')}>
              <div className="absolute inset-y-0 left-0 flex items-center pl-5">
                <MagnifyingGlassIcon
                  className={classNames('h-6 w-6', 'text-zinc-300 group-hover:text-zinc-100 ')}
                  aria-hidden="true"
                />
              </div>
              <input
                ref={inputRef}
                id="search"
                name="search-2"
                placeholder="Search ..."
                type="search"
                className={classNames(
                  'h-14 block w-full',
                  'bg-transparent',
                  'border-b border-zinc-700',
                  'text-sm text-zinc-50',
                  'outline-none',
                  'pl-14 pr-3 py-2',
                )}
              />
            </div>
          </form>
          {/* Recent */}
          <div className="text-zinc-100 p-6">
            <p className="text-xs text-zinc-400">Recent Searches</p>

            <div className="py-4">Black Shirts</div>
          </div>

          {/* Result */}
          <div className="text-zinc-300 p-6">
            <p className="text-xs text-zinc-400">Results</p>

            {/* Row */}
            <div className="flex items-center py-4 space-x-6">
              <div
                className={classNames(
                  'py-4 aspect-square h-16 bg-black',
                  'rounded-lg flex justify-center items-center',
                )}
              ></div>

              <div className="space-y-2">
                <div>Black Shirts</div>
                <div className="text-sm text-zinc-400">blah blah about Black Shirts</div>
              </div>
            </div>
            {/* eof */}
          </div>

          <div className="border-t border-zinc-700 h-14 text-right  text-teal-600 flex space-x-2 items-center justify-end px-6 text-xs">
            <span>Search with filters</span>
            <ArrowRightIcon className="w-3 h-3 " />
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchDialog;
