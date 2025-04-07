"use client";

import { SheetDescription } from "@/components/ui/sheet";
import Link from "next/link";
import tools from "@/constants/tools";

const SidebarBody = () => {
  // Group tools by category
  const categorizedTools = tools.reduce((acc, tool) => {
    const category = tool.category || "Uncategorized";
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(tool);
    return acc;
  }, {});

  return (
    <div className="p-4">
      <SheetDescription asChild>
        <nav>
          <div className="mb-6">
            <Link
              href="/"
              className="hover:text-gray-900 dark:hover:text-white"
            >
              Home
            </Link>
          </div>

          {Object.entries(categorizedTools).map(([category, categoryTools]) => (
            <div key={category} className="mb-6">
              <h3 className="mb-3 text-sm font-semibold tracking-wider text-gray-500 uppercase dark:text-gray-400">
                {category}
              </h3>
              <ul className="space-y-3">
                {categoryTools.map((tool) => (
                  <li
                    key={tool.slug}
                    className="text-gray-700 dark:text-gray-300"
                  >
                    <Link
                      href={`/tools/${tool.slug}`}
                      className="transition-colors duration-200 hover:text-gray-900 dark:hover:text-white"
                    >
                      {tool.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="border-t border-gray-200 pt-4 dark:border-gray-700">
            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              <li className="hover:text-gray-900 dark:hover:text-white">
                <Link href="/about">About</Link>
              </li>
              <li className="hover:text-gray-900 dark:hover:text-white">
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </nav>
      </SheetDescription>
    </div>
  );
};

export default SidebarBody;
