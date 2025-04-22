import React from "react";

import PropTypes from "prop-types";

import ToolsListWidget from "@/components/page/ToolsListWidget";
import { getAllCategorySlugs } from "@/utils/categoryUtils";

/**
 * A layout component that displays a page entry with a sidebar.
 *
 * @param {Object} props - The component props.
 * @param {Object} props.tool - The tool object containing name and category.
 * @param {React.ReactNode} props.children - The main content to display in the entry area.
 * @returns {JSX.Element} The rendered component.
 */
const EntryWithSidebar = ({ tool, children }) => {
  const categories = getAllCategorySlugs().filter((category) => category !== tool.category);

  const getRandomCategories = (categories, count) => {
    const selected = [];
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

EntryWithSidebar.propTypes = {
  tool: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
};

export default EntryWithSidebar;
