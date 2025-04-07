import clsx from "clsx";
import PropTypes from "prop-types";
import { CgArrowRight } from "react-icons/cg";

import PageLayout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { getToolBySlug } from "@/lib/utils/getToolBySlug";
import { getToolIcon } from "@/lib/utils/getToolIcon";

/**
 * ToolCard component that renders a card for a specific tool.
 * @param {Object} props - The component props.
 * @param {string} props.slug - The slug of the tool to display.
 * @returns {JSX.Element} The rendered ToolCard component.
 */
const ToolCard = ({
  slug,
  iconButton = false,
  size = "sm",
  className = "",
  btnClassName = "",
  btnRounded = false,
}) => {
  const tool = getToolBySlug(slug);

  if (!tool) return null;

  const btnClasses = clsx(btnClassName, {
    [`rounded-full transform -rotate-25`]: btnRounded,
  });

  const button = (
    <Button
      variant="default"
      size={size}
      href={`/tools/${tool.slug}`}
      className={btnClasses}
    >
      <span className={`text-xs font-medium ${iconButton ? "sr-only" : ""}`}>
        Get Started
      </span>
      <CgArrowRight />
    </Button>
  );

  return (
    <Card className={cn("flex h-full flex-col gap-4 shadow-none", className)}>
      <CardContent>
        <div className="h10 w-10 text-5xl">{getToolIcon(tool.slug)}</div>
      </CardContent>

      <CardHeader>
        <CardTitle className="text-primary-400 text-lg">{tool.name}</CardTitle>
        <CardDescription>{tool.pageDescription}</CardDescription>
      </CardHeader>

      <CardFooter className="mt-auto">
        {iconButton ? (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>{button}</TooltipTrigger>
              <TooltipContent>
                <p>Get Started</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ) : (
          button
        )}
      </CardFooter>
    </Card>
  );
};

ToolCard.propTypes = {
  slug: PropTypes.string.isRequired,
  iconButton: PropTypes.bool,
  size: PropTypes.string,
  className: PropTypes.string,
  btnClassName: PropTypes.string,
  btnRounded: PropTypes.bool,
};

/**
 * Home component that renders a grid of tools.
 * @returns {JSX.Element} The rendered Home component.
 */
const Home = () => {
  return (
    <PageLayout>
      <div className="grid grid-cols-6 grid-rows-7 gap-4">
        {/* Position 1 */}
        <ToolCard
          slug="slugify"
          className="col-span-2 row-span-2"
          iconButton={true}
          size="default"
        />

        {/* Position 2 */}
        <ToolCard
          slug="bulk-slugify"
          className="col-span-2 col-start-3 row-span-2"
          iconButton={true}
          size="default"
          btnRounded={true}
        />

        {/* Position 3 */}
        <ToolCard
          slug="password-generator"
          className="col-span-2 col-start-5 row-span-3"
        />

        {/* Position 6 */}
        <ToolCard
          slug="password-strength-checker"
          className="col-span-2 row-span-3 row-start-3"
        />

        {/* Position 7 */}
        <ToolCard
          slug="html-minifier"
          className="col-span-2 col-start-3 row-span-2 row-start-3"
        />

        {/* Position 8 */}
        <ToolCard
          slug="css-minifier"
          className="col-span-2 col-start-5 row-span-2 row-start-4"
          iconButton={true}
          size="default"
          btnRounded={true}
        />

        {/* Position 9 */}
        <ToolCard
          slug="js-minifier"
          className="col-span-2 col-start-3 row-span-3 row-start-5"
        />

        {/* Position 10 */}
        <ToolCard
          slug="url-shortener"
          className="col-span-2 row-span-2 row-start-6"
          iconButton={true}
          size="default"
        />

        {/* Position 11 */}
        <ToolCard
          slug="dropdown-to-array"
          className="col-span-2 col-start-5 row-span-2 row-start-6"
        />
      </div>
    </PageLayout>
  );
};

export default Home;
