import React, { JSX } from "react";

import ToolsListWidget from "@/components/page/ToolsListWidget";
import { getAllCategorySlugs } from "@/utils/categoryUtils";

/**
 * Props for the EntryWithSidebar component.
 */
interface EntryWithSidebarProps {
  tool: {
    category: string;
    slug: string;
  };
  children: React.ReactNode;
}

/**
 * A layout component that displays a page entry with a sidebar.
 *
 * @param {EntryWithSidebarProps} props - The component props.
 * @returns {JSX.Element} The rendered component.
 */
const EntryWithSidebar: React.FC<EntryWithSidebarProps> = ({
  tool,
  children,
}: EntryWithSidebarProps): JSX.Element => {
  const categories = getAllCategorySlugs().filter((category) => category !== tool.category);

  const getRandomCategories = (categories: string[], count: number): string[] => {
    const selected: string[] = [];
    while (selected.length < count) {
      const category = categories[Math.floor(Math.random() * categories.length)];
      if (!selected.includes(category)) {
        selected.push(category);
      }
    }
    return selected;
  };

  const [category1, category2] = getRandomCategories(categories, 2);

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-6">
      <main className="col-span-4 mb-8 lg:mb-0">{children}</main>

      <aside className="col-span-2 flex flex-col gap-6">
        <ToolsListWidget category={tool.category} hideTool={tool.slug}></ToolsListWidget>
        <ToolsListWidget category={category1} hideTool={tool.slug}></ToolsListWidget>
        <ToolsListWidget category={category2} hideTool={tool.slug}></ToolsListWidget>
      </aside>
    </div>
  );
};

export default EntryWithSidebar;
