import Link from 'next/link';
import Image from 'next/image';
import { classNames } from '@/styles/utils';
import ShopifyCart from '../@shopify-headless-components/ShopifyCart';
import ShopfiyMobileNavigation from '../@shopify-headless-components/ShopifyNavigation/Mobile';
import SearchBar from '../Search';
import Search from '../Search';

const Header = () => {
  return (
    <header className="w-full">
      <div className={classNames('max-w-7xl mx-auto px-2 md:px-4 xl:px-8  py-2 ', 'hidden md:block')}>
        {/* Desktop */}
        <div className="flex items-center justify-between   ">
          <div>
            <Menu />
          </div>

          <div>
            <Tools />
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="px-2  py-2  md:hidden ">
        <div className="flex justify-between items-center ">
          <ShopfiyMobileNavigation />

          <Link href="/">
            <div className="flex space-x-1 items-center ">
              <Image src={'/logo.png'} width={100} height={100} alt="marulloc-store" className="h-10 w-auto" />

              <span className="text-gray-300 text-lg font-extrabold">STORE</span>
            </div>
          </Link>

          <ShopifyCart />
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
      <Search />

      <ShopifyCart />
    </div>
  );
};
