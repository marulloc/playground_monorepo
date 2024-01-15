import { classNames } from '@/styles/utils';
import SearchDialog from './SearchDialog';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const SearchBtn = () => {
  return (
    <SearchDialog
      Trigger={
        <button className={classNames('rounded-lg text-zinc-400 p-1.5')}>
          <MagnifyingGlassIcon className="w-6 h-6" />
        </button>
      }
    />
  );
};

export default SearchBtn;
