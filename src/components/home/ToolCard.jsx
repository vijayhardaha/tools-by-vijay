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
        <CardHeader>
          <div className="flex w-full flex-col gap-4 lg:relative lg:top-5 lg:-mt-4 lg:flex-row-reverse lg:items-start lg:justify-between">
            <div className="bg-accent-foreground text-primary inline-flex size-10 items-center justify-center rounded-2xl text-xl">
              {getIconForTool(tool.slug)}
            </div>
            <CardTitle component="h3">{tool.name}</CardTitle>
          </div>

          <CardDescription className="lg:pr-14">{tool.pageDescription}</CardDescription>
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
