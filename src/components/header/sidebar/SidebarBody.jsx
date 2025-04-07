"use client";

import { SheetDescription } from "@/components/ui/sheet";

const SidebarBody = () => (
  <div className="p-4">
    <SheetDescription asChild>
      <nav>
        <ul className="space-y-4 text-gray-700 dark:text-gray-300">
          <li className="hover:text-gray-900 dark:hover:text-white">Home</li>
          <li className="hover:text-gray-900 dark:hover:text-white">About</li>
          <li className="hover:text-gray-900 dark:hover:text-white">Contact</li>
        </ul>
      </nav>
    </SheetDescription>
  </div>
);

export default SidebarBody;
