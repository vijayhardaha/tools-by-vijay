"use client";

import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const DrawerFooter = () => (
  <div className="mt-auto">
    <div className="bg-dark2 text-primary-500 mt-6 flex justify-center space-x-4 p-4">
      <a href="https://example.com" aria-label="Facebook">
        <FaFacebook className="text-xl" />
      </a>
      <a href="https://example.com" aria-label="Twitter">
        <FaTwitter className="text-xl" />
      </a>
      <a href="https://example.com" aria-label="Instagram">
        <FaInstagram className="text-xl" />
      </a>
    </div>
  </div>
);

export default DrawerFooter;
