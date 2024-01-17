'use client';

import Dropdown from './DropdownRoot';

const DropdownTrigger = () => {
  return (
    <div className="relative">
      <Dropdown
        trigger={<button className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700">Open Dropdown</button>}
      >
        <Dropdown.Content>
          <div>Dropdown Item 1</div>
          <div>Dropdown Item 2</div>
          <div>Dropdown Item 3</div>
        </Dropdown.Content>
      </Dropdown>
    </div>
  );
};

export default DropdownTrigger;
