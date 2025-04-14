import Link from "next/link";

import PropTypes from "prop-types";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
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
        <div className="absolute -top-[1px] -right-[1px] z-10">
          <div className="text-foreground bg-accent-foreground ml-auto flex size-10 shrink-0 items-center justify-center rounded-tr-xl rounded-bl-xl text-xl">
            {getIconForTool(tool.slug)}
          </div>
        </div>
        <CardHeader>
          <CardTitle component="h3" className="pr-10">
            {tool.name}
          </CardTitle>
          <CardDescription>{tool.pageDescription}</CardDescription>
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
