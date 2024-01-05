import Link from 'next/link';
import Image from 'next/image';

import SearchBar from '../SearchBar';
import Navbar from '../Navbar';

const Header = () => {
  return (
    <header>
      <div>
        <div className="flex justify-between items-center py-2 border-b">
          <Link href="/">
            <Image src={'/logo.png'} width={100} height={100} alt="marulloc-store" className="h-14 w-auto" />
          </Link>

          <SearchBar />

          <div>cart2</div>
        </div>

        <div className="py-2 flex justify-center">
          <Navbar />
        </div>
      </div>
    </header>
  );
};

export default Header;
