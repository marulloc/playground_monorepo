import { getSeriesList } from '@/services/getSeriesList';
import NavItem from './NavItem';

const Navigation = async () => {
  const mainSeries = await getSeriesList('');
  return (
    <nav className="flex flex-1 justify-end md:justify-center">
      <ul className="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
        {mainSeries.map((item: any) => {
          if (item.path === '.obsidian') return null;
          else if (item.type === 'file') return null;
          return (
            <NavItem key={item.path} href={item.path} type={item.type}>
              {item.name}
            </NavItem>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
