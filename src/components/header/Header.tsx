'use client';

import React, { useState } from 'react';

import Link from 'next/link';
import { PiTextAa as AaIcon } from 'react-icons/pi';

import Logo from '@/components/header/parts/Logo';
import MenuButton from '@/components/header/parts/MenuButton';
import Sidebar from '@/components/header/sidebar/Sidebar';
import { Button } from '@/components/ui/button';
import { cn } from '@/utils/classNameUtils';

/**
 * Header component that displays the app logo and menu button
 * Controls the sidebar visibility
 *
 * @returns {React.JSX.Element} Header component with logo, menu button and sidebar
 */
const Header: React.FC = (): React.JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => setIsOpen(!isOpen);
  const closeDrawer = () => setIsOpen(false);

  return (
    <>
      <header className="border-border sticky top-0 z-50 border-b bg-white">
        <div className="relative z-20 mx-auto max-w-6xl px-4">
          <div className="flex items-center justify-between gap-4 py-4">
            <Logo />
            <div className="flex items-center gap-2">
              <MenuButton onClick={toggleDrawer} />
            </div>
          </div>
        </div>
      </header>
      <Sidebar isOpen={isOpen} onClose={closeDrawer} />
    </>
  );
};

export default Header;
