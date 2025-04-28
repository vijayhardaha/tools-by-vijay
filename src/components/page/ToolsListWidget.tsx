import Link from "next/link";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Category, Tool } from "@/types";
import { getCategoryBySlug } from "@/utils/categoryUtils";
import { cn } from "@/utils/classNameUtils";
import { getToolsByCategory } from "@/utils/toolUtils";

/**
 * Props for the ToolsListWidget component.
 * @property {string} category - The category slug to filter tools.
 * @property {string} [hideTool] - The tool slug to exclude from the list.
 */
interface ToolsListWidgetProps {
  category: string;
  hideTool?: string;
}

/**
 * A reusable widget component for displaying a list of tools in a sidebar card.
 *
 * @param {ToolsListWidgetProps} props - The props for the component.
 * @returns {JSX.Element} The rendered component.
 */
const ToolsListWidget: React.FC<ToolsListWidgetProps> = ({
  category,
  hideTool = "",
}: ToolsListWidgetProps): React.JSX.Element => {
  const toolsInCategory: Tool[] = getToolsByCategory(category).filter(
    (categoryTool) => categoryTool.slug !== hideTool
  );

  const categoryData: Category = getCategoryBySlug(category);

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

export default ToolsListWidget;
