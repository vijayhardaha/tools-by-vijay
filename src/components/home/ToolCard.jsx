import Link from "next/link";

import clsx from "clsx";
import PropTypes from "prop-types";
import { CgArrowRight } from "react-icons/cg";

import { getToolBySlug } from "@/lib/getToolBySlug";
import { getToolIcon } from "@/lib/getToolIcon";
import { cn } from "@/lib/utils";

import { Button } from "../ui/button";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  CardTitle,
  CardDescription,
} from "../ui/card";
import { Tooltip } from "../ui/tooltip";

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
    [`p-0 h-10 w-10`]: iconButton,
    [`rounded-full`]: btnRounded,
  });

  const button = (
    <Button variant="default" size={size} className={btnClasses} asChild>
      <Link href={`/tools/${tool.slug}`}>
        <span className={`text-xs ${iconButton ? "sr-only" : ""}`}>
          Get Started
        </span>
        <CgArrowRight />
      </Link>
    </Button>
  );

  return (
    <Card className={cn("flex h-full flex-col gap-4", className)}>
      <CardContent>
        <div className="h-10 w-10 text-5xl">{getToolIcon(tool.slug)}</div>
      </CardContent>

      <CardHeader>
        <CardTitle className="text-primary-500 text-lg">{tool.name}</CardTitle>
        <CardDescription>{tool.pageDescription}</CardDescription>
      </CardHeader>

      <CardFooter className="mt-auto">
        {iconButton ? <Tooltip text="Get Started">{button}</Tooltip> : button}
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

export default ToolCard;
