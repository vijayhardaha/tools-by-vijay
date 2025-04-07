'use client';

import { GiGearStickPattern } from 'react-icons/gi';
import { RiCloseFill } from 'react-icons/ri';

const DrawerHeader = ({ onClose }: { onClose: () => void }) => (
  <div className="relative mb-4">
    <h5 className="inline-flex items-center text-base font-semibold text-gray-500 dark:text-gray-400">
      <GiGearStickPattern className="mr-2.5 h-4 w-4" />
      Tools by Vijay
    </h5>
    <button
      type="button"
      onClick={onClose}
      className="absolute top-0 right-0 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
    >
      <RiCloseFill />
      <span className="sr-only">Close menu</span>
    </button>
  </div>
);

export default DrawerHeader;
