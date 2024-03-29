import { classNames } from '@/styles/utils';
import { theme } from '@/styles/theme';
import DesktopMenu from '@/components/menu/DesktopMenu';
import Logo from '../Logo';
import SearchTriggerIcon from '@/components/search/SearchTriggerIcon';
import CartTriggerIcon from '@/components/cart/CartTriggerIcon';
import MobileMenuTriggerIcon from '@/components/menu/MobileMenuTriggerIcon';

const Header = () => {
  return (
    <header className={classNames('sticky top-0 left-0 w-full z-10', 'bg-black bg-opacity-80')}>
      {/* Desktop */}
      <div className="hidden md:block">
        <div className={classNames(theme.maxSize, theme.layoutPadding, 'flex items-center justify-between', 'py-6')}>
          <div className={classNames('flex space-x-4 items-center')}>
            <Logo />
            <DesktopMenu />
          </div>

          <div className={classNames('flex space-x-4 items-center')}>
            <div>
              <SearchTriggerIcon />
            </div>
            <div>
              <CartTriggerIcon />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="block md:hidden">
        <div className={classNames(theme.maxSize, theme.layoutPadding, 'flex items-center justify-between', 'py-4')}>
          <div className={classNames(' ')}>
            <MobileMenuTriggerIcon />
          </div>

          <div className={classNames(' ')}>
            <Logo />
          </div>

          <div className={classNames(' ')}>
            <CartTriggerIcon />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
