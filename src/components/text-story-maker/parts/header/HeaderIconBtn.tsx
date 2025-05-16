import React from "react";

import { IconButton } from "@/components/text-story-maker/ui";
import { cn } from "@/utils/classNameUtils";

interface HeaderIconBtnProps {
  icon: React.ElementType;
  className?: string;
  [key: string]: any;
}

/**
 * HeaderIconBtn is a wrapper around the IconButton component, styled specifically for the header.
 *
 * @param {HeaderIconBtnProps} props - The props for the component.
 * @returns {React.JSX.Element} The rendered HeaderIconBtn component.
 */
const HeaderIconBtn: React.FC<HeaderIconBtnProps> = ({
  icon,
  className,
  ...props
}: HeaderIconBtnProps): React.JSX.Element => (
  <IconButton
    icon={icon}
    className={cn("xs:size-12 size-11 rounded-full bg-neutral-900 text-white", className)}
    iconClassName="size-6"
    {...props}
  />
);

export default HeaderIconBtn;
