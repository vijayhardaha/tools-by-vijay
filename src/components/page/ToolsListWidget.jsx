import React from "react";

import Link from "next/link";
import PropTypes from "prop-types";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getCategoryBySlug } from "@/utils/categoryUtils";
import { cn } from "@/utils/classNameUtils";
import { getToolsByCategory } from "@/utils/toolUtils";

/**
 * A reusable widget component for displaying content in a sidebar card.
 *
 * @param {Object} props - The component props.
 * @param {string} props.category - The category slug to filter tools.
 * @param {string} props.hideTool - The tool slug to exclude from the list.
 * @returns {JSX.Element} The rendered component.
 */
const ToolsListWidget = ({ category, hideTool }) => {
  const toolsInCategory = getToolsByCategory(category).filter(
    (categoryTool) => categoryTool.slug !== hideTool
  );

  const categoryData = getCategoryBySlug(category);

  return (
    <Card className="md:gap-4 md:py-4">
      <CardHeader className="border-secondary border-b border-dashed md:px-4 md:[.border-b]:pb-4">
        <CardTitle component="h4">{`${categoryData?.label} Tool`}</CardTitle>
      </CardHeader>
      <CardContent className="md:px-4">
        <ul className="flex flex-col gap-2">
          {toolsInCategory.map((categoryTool) => (
            <li key={categoryTool.slug}>
              <Link
                href={`/tools/${categoryTool.slug}`}
                className={cn(
                  "group",
                  "flex flex-col gap-0.5",
                  "transition-colors duration-200 ease-in-out",
                  "text-foreground bg-muted",
                  "border border-transparent",
                  "hover:bg-accent",
                  "hover:border-accent-foreground",
                  "rounded-xl px-4 py-2"
                )}
              >
                <span className="text-sm font-semibold transition-colors">{categoryTool.name}</span>
                <span className="text-muted-foreground text-xs">
                  {categoryTool.shortDescription}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

ToolsListWidget.propTypes = {
  category: PropTypes.string.isRequired,
  hideTool: PropTypes.string,
};

export default ToolsListWidget;
