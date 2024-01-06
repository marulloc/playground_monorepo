import Link from 'next/link';
import Image from 'next/image';
import { classNames } from '@/styles/utils';
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import { ShoppingBagIcon, UserIcon } from '@heroicons/react/24/outline';

const Header = () => {
  return (
    <header className="w-full">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between py-2   ">
          <div>
            <Menu />
          </div>

          <div>
            <Tools />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

const Menu = () => {
  return (
    <div className="   flex space-x-2 items-center ">
      {/* Home Logo */}
      <Link href="/">
        <Image src={'/logo.png'} width={100} height={100} alt="marulloc-store" className="h-14 w-auto" />
      </Link>

      <nav>
        <ul className="flex space-x-2">
          <li className={classNames('hover:text-zinc-100 text-zinc-300', 'cursor-pointer', 'text-sm', 'p-2 group')}>
            <span className=" ">All</span>
          </li>
          <li className={classNames('hover:text-zinc-50 text-zinc-300', 'cursor-pointer', 'text-sm', 'p-2 group')}>
            <span className=" ">Abstract</span>
          </li>

          <li className={classNames('hover:text-zinc-100 text-zinc-300', 'cursor-pointer', 'text-sm', 'p-2 group')}>
            <span className=" ">Landscape</span>
          </li>
        </ul>
      </nav>
    </div>
  );
};

const Tools = () => {
  return (
    <div className="flex justify-end items-center space-x-2 ">
      {/* Search */}
      <div className="relative  w-80 group ">
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
            'h-10 w-full max-w-md',
            'rounded-lg',
            // ' bg-zinc-800',
            'bg-transparent',
            ' border border-zinc-700',
            'text-xs text-zinc-50',
            'outline-none',
            'pl-10 pr-3 py-2',
            'focus-within:ring-1 ring-zinc-400 ring-inset',
          )}
        />
      </div>

      {/* User */}
      <button
        className={classNames(
          'group',
          'h-10',
          'rounded-lg bg-zinc-800 border border-zinc-600',
          'p-2.5',
          'hover:ring-1 ring-zinc-400 ring-inse hover:text-zinc-100 text-zinc-300',
        )}
      >
        <UserIcon className={classNames('h-full w-auto', 'group-hover:scale-110')} />
      </button>

      {/* Shoping */}
      <button
        className={classNames(
          'group',
          'h-10',
          'rounded-lg bg-zinc-800 border border-zinc-600',
          'p-2.5',
          'hover:ring-1 ring-zinc-400 ring-inse hover:text-zinc-100 text-zinc-300',
        )}
      >
        <ShoppingBagIcon className={classNames('h-full w-auto', 'group-hover:scale-110')} />
      </button>
    </div>
  );
};
