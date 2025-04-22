import React from "react";

import PropTypes from "prop-types";

import ToolsListWidget from "@/components/page/ToolsListWidget";

/**
 * A layout component that displays a page entry with a sidebar.
 *
 * @param {Object} props - The component props.
 * @param {Object} props.tool - The tool object containing name and category.
 * @param {React.ReactNode} props.children - The main content to display in the entry area.
 * @returns {JSX.Element} The rendered component.
 */
const EntryWithSidebar = ({ tool, children }) => {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-6">
      <main className="col-span-4 mb-12 lg:mb-0">{children}</main>

      <aside className="col-span-2">
        <ToolsListWidget category={tool.category} hideTool={tool.slug}></ToolsListWidget>
      </aside>
    </div>
  );
};

EntryWithSidebar.propTypes = {
  tool: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
};

export default EntryWithSidebar;
