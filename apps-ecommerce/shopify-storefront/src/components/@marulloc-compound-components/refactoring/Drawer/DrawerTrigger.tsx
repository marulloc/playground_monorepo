'use client';

import { useState } from 'react';
import Drawer from './DrawerRoot';

const DrawerTrigger = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setDrawerOpen(true)}
        className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700"
      >
        Open Drawer
      </button>
      {drawerOpen && (
        <Drawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)}>
          <Drawer.Content>
            <h2>Drawer Title</h2>
            <p>Drawer content goes here.</p>
          </Drawer.Content>
        </Drawer>
      )}
    </div>
  );
};

export default DrawerTrigger;
