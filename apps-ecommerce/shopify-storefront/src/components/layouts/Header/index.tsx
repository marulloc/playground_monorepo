import { classNames } from '@/styles/utils';
import Logo from '../Logo';
import { theme } from '@/styles/theme';
import Menu from '../Menu';
import { Bars3BottomLeftIcon, MagnifyingGlassIcon, ShoppingBagIcon } from '@heroicons/react/24/outline';

const Header = () => {
  return (
    <header
      className={classNames('sticky top-0 left-0 w-full z-30', 'mb-20', 'bg-black bg-opacity-50 backdrop-blur-sm')}
    >
      {/* Desktop */}
      <div className="hidden md:block">
        <div className={classNames(theme.maxSize, theme.layoutPadding, 'flex items-center justify-between', 'py-6')}>
          <div className={classNames('flex space-x-4 items-center')}>
            <Logo />
            <Menu />
          </div>

          <div className={classNames('flex space-x-4 items-center')}>
            <button className={classNames('rounded-lg text-zinc-400 p-1.5')}>
              <MagnifyingGlassIcon className="w-6 h-6" />
            </button>

            <button className={classNames('rounded-lg text-zinc-400 p-1.5')}>
              <ShoppingBagIcon className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="block md:hidden">
        <div className={classNames(theme.maxSize, theme.layoutPadding, 'flex items-center justify-between', 'py-4')}>
          <div className={classNames('flex space-x-4 items-center')}>
            <button className={classNames('rounded-lg text-zinc-400 p-1.5')}>
              <Bars3BottomLeftIcon className="w-6 h-6" />
            </button>
          </div>

          <div className={classNames('flex space-x-4 items-center')}>
            <Logo />
          </div>

          <div className={classNames('flex space-x-4 items-center')}>
            <button className={classNames('rounded-lg text-zinc-400 p-1.5')}>
              <ShoppingBagIcon className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
