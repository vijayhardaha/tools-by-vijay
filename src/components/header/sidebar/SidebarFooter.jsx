"use client";

import { SheetFooter } from "@/components/ui/sheet";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const SidebarFooter = () => (
  <SheetFooter className="border-t border-gray-200 p-4 dark:border-gray-700">
    <div className="flex justify-center space-x-4">
      <a
        href="https://example.com"
        aria-label="Facebook"
        className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
      >
        <FaFacebook className="h-5 w-5" />
      </a>
      <a
        href="https://example.com"
        aria-label="Twitter"
        className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
      >
        <FaTwitter className="h-5 w-5" />
      </a>
      <a
        href="https://example.com"
        aria-label="Instagram"
        className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
      >
        <FaInstagram className="h-5 w-5" />
      </a>
    </div>
  </SheetFooter>
);

export default SidebarFooter;
