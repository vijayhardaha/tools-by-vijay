'use client';

import { useState } from 'react';
import Logo from './parts/Logo';
import MenuButton from './parts/MenuButton';
import Drawer from './drawer/Drawer';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mx-auto max-w-5xl">
      <header className="bg-dark2 text-primary-500 flex items-center justify-between p-4">
        <Logo />
        <MenuButton onClick={() => setIsOpen(true)} />
      </header>
      <Drawer isOpen={isOpen} onClose={() => setIsOpen(false)} />{' '}
      {/* Renamed */}
    </div>
  );
};

export default Header;
