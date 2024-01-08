'use client';

import { Drawer } from '@/components/@marulloc-compound-components/Drawer';
import { classNames } from '@/styles/utils';
import { Bars3Icon, MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/outline';

const ShopfiyMobileNavigation = () => {
  return (
    <Drawer anchor={'bottom'}>
      <Drawer.Overlay />

      <Drawer.Trigger>
        {({ open }) => (
          <button
            onClick={() => open()}
            className={classNames(
              'group',
              'h-10',
              'rounded-lg bg-zinc-800 border border-zinc-600',
              'p-2.5',
              'hover:ring-1 ring-zinc-400 ring-inse hover:text-zinc-100 text-zinc-300',
            )}
          >
            <Bars3Icon className={classNames('h-full w-auto', 'group-hover:scale-110')} />
          </button>
        )}
      </Drawer.Trigger>

      <Drawer.Contents>
        {({ close }) => (
          <div
            className={classNames(
              'bg-gray-900 bg-opacity-50 backdrop-blur-sm ',
              'h-screen w-screen',
              'p-6',
              'dark:text-white  ',
              'space-y-6',
            )}
          >
            <button
              onClick={() => close()}
              className={classNames(
                'group',
                'h-10',
                'rounded-lg bg-zinc-800 border border-zinc-600',
                'p-2.5',
                'hover:ring-1 ring-zinc-400 ring-inse hover:text-zinc-100 text-zinc-300',
              )}
            >
              <XMarkIcon className={classNames('h-full w-auto', 'group-hover:scale-110')} />
            </button>

            <div className={classNames('relative group ')}>
              <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                <MagnifyingGlassIcon
                  className={classNames('h-5 w-5', 'text-zinc-300 group-hover:text-zinc-100 group-hover:scale-110')}
                  aria-hidden="true"
                />
              </div>
              <input
                id="desktop-search"
                name="desktop-search"
                placeholder="Search ..."
                type="search"
                className={classNames(
                  'h-14 block w-full',
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

            <nav>
              <ul className="  space-y-3">
                <li
                  className={classNames(
                    'hover:text-zinc-100 text-zinc-300',
                    'cursor-pointer',
                    'text-base',
                    'p-2 group',
                  )}
                >
                  <span className=" ">All</span>
                </li>
                <li
                  className={classNames('hover:text-zinc-50 text-zinc-300', 'cursor-pointer', 'text-base', 'p-2 group')}
                >
                  <span className=" ">Abstract</span>
                </li>

                <li
                  className={classNames(
                    'hover:text-zinc-100 text-zinc-300',
                    'cursor-pointer',
                    'text-base',
                    'p-2 group',
                  )}
                >
                  <span className=" ">Landscape</span>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </Drawer.Contents>
    </Drawer>
  );
};

export default ShopfiyMobileNavigation;
