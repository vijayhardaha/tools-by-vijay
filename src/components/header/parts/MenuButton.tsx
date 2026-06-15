'use client';

import type { JSX } from 'react';

import { RiMenu3Fill } from 'react-icons/ri';

import { Button } from '@/components/ui/button';

/**
 * Props for the MenuButton component.
 *
 * @type {MenuButtonProps}
 * @property {() => void} onClick - Callback when the menu button is clicked
 */
interface MenuButtonProps {
  onClick: () => void;
}

/**
 * MenuButton component renders a button that toggles the sidebar menu.
 *
 * @param {MenuButtonProps} props - The component props.
 *
 * @returns {JSX.Element} A button component with "Menu" text and hamburger icon.
 */
export function MenuButton({ onClick }: MenuButtonProps): JSX.Element {
  return (
    <Button onClick={onClick} variant="primary" size="sm" className="w-9 md:w-auto" aria-label="Menu">
      <span className="hidden md:inline-flex">Menu</span>
      <span className="sr-only">Menu</span>
      <RiMenu3Fill />
    </Button>
  );
}
