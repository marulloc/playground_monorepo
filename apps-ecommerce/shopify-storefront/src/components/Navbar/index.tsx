import { getMenu } from '@/services/common/service';
import Link from 'next/link';

const Navbar = async () => {
  const menu = await getMenu('custom-storefront-menu');

  return (
    <nav className="">
      <ul className="flex space-x-2">
        {menu.map(({ title, url }) => (
          <li key={`menu-${title}`}>
            <Link href={url}>{title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
