'use client';

import DrawerHeader from './DrawerHeader';
import DrawerBody from './DrawerBody';
import DrawerFooter from './DrawerFooter';

const Drawer = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => (
  <div
    id="drawer-right-example"
    className={`fixed top-0 right-0 z-40 h-screen overflow-y-auto p-4 transition-transform ${
      isOpen ? 'translate-x-0' : 'translate-x-full'
    } w-80 bg-white dark:bg-gray-800`}
    tabIndex={-1}
  >
    <DrawerHeader onClose={onClose} />
    <DrawerBody />
    <DrawerFooter />
  </div>
);

export default Drawer;
