import Link from "next/link";
import PropTypes from "prop-types";

import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { cn } from "@/utils/classNameUtils";
import { findToolBySlug, getIconForTool } from "@/utils/toolUtils";

/**
 * ToolCard component that renders a card for a specific tool.
 * @param {Object} props - The component props.
 * @param {string} props.slug - The slug of the tool to display.
 * @returns {JSX.Element} The rendered ToolCard component.
 */
const ToolCard = ({ slug, className = "" }) => {
  const tool = findToolBySlug(slug);

  if (!tool) return null;

  return (
    <Link href={`/tools/${tool.slug}`}>
      <Card
        className={cn(
          "relative top-0 flex h-full flex-col gap-4 transition-all duration-200 ease-in-out hover:-top-0.5 hover:shadow-md",
          className
        )}
      >
        <CardHeader className="flex gap-4">
          <div className="absolute -top-0 left-0 h-full">
            <div className="text-foreground bg-accent-foreground ml-auto flex h-full min-w-22 shrink-0 items-center justify-center rounded-tl-lg rounded-bl-lg text-4xl">
              {getIconForTool(tool.slug)}
            </div>
          </div>
          <div className="pl-22">
            <CardTitle component="h3" className="mb-2 pr-10">
              {tool.name}
            </CardTitle>
            <CardDescription>{tool.shortDescription}</CardDescription>
          </div>
        </CardHeader>
      </Card>
    </Link>
  );
};

ToolCard.propTypes = {
  slug: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default ToolCard;
