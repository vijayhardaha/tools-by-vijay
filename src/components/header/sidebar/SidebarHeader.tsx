import type { JSX } from 'react';

import { Logo } from '@/components/header/parts/Logo';
import { SheetHeader } from '@/components/ui/sheet';

/**
 * SidebarHeader component
 *
 * This component renders the header for the sidebar, which includes a logo.
 *
 * @returns {JSX.Element} The rendered SidebarHeader component.
 */
export function SidebarHeader(): JSX.Element {
  return (
    <SheetHeader className="border-border border-b p-4">
      <div className="flex">
        <Logo />
      </div>
    </SheetHeader>
  );
}
