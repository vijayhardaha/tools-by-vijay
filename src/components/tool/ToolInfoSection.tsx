import type { JSX, ReactNode } from 'react';

/**
 * Props for the ToolInfoSection component.
 *
 * @type {ToolInfoSectionProps}
 * @property {ReactNode} children - The section content
 */
interface ToolInfoSectionProps {
  children: ReactNode;
}

/**
 * Reusable section wrapper used across tool info blocks. Renders a semantic
 * section element around headings, lists, and content blocks.
 *
 * @param {ToolInfoSectionProps} props - The component props.
 *
 * @returns {JSX.Element} The rendered section.
 */
export function ToolInfoSection({ children }: ToolInfoSectionProps): JSX.Element {
  return <section>{children}</section>;
}

/**
 * Props for the ToolInfoSectionHeading component.
 *
 * @type {ToolInfoSectionHeadingProps}
 * @property {string} id - Anchor id for the heading
 * @property {ReactNode} children - The heading text
 */
interface ToolInfoSectionHeadingProps {
  id: string;
  children: ReactNode;
}

/**
 * Reusable section heading used inside tool info sections.
 *
 * @param {ToolInfoSectionHeadingProps} props - The component props.
 *
 * @returns {JSX.Element} The rendered heading.
 */
export function ToolInfoSectionHeading({ id, children }: ToolInfoSectionHeadingProps): JSX.Element {
  return (
    <h2 className="text-primary mb-4 text-2xl font-bold" id={id}>
      {children}
    </h2>
  );
}

/**
 * Props for the ToolInfoSectionContent component.
 *
 * @type {ToolInfoSectionContentProps}
 * @property {ReactNode} children - The content blocks
 */
interface ToolInfoSectionContentProps {
  children: ReactNode;
}

/**
 * Reusable content container for tool info sections.
 *
 * Applies `space-y-4` so sibling blocks (like paragraphs) are spaced evenly
 * without needing individual margin utilities.
 *
 * @param {ToolInfoSectionContentProps} props - The component props.
 *
 * @returns {JSX.Element} The rendered content container.
 */
export function ToolInfoSectionContent({ children }: ToolInfoSectionContentProps): JSX.Element {
  return <div className="space-y-4">{children}</div>;
}

/**
 * Props for the ToolInfoSectionList component.
 *
 * @type {ToolInfoSectionListProps}
 * @property {string} id - Anchor id for the section heading
 * @property {string} title - Section heading text (e.g. 'Key Features')
 * @property {string[]} items - Bulleted list items rendered under the heading
 */
interface ToolInfoSectionListProps {
  id: string;
  title: string;
  items: string[];
}

/**
 * Reusable heading plus bulleted list, like the Key Features, Why Use This
 * Tool, and Common Use Cases sections used across tool info blocks.
 *
 * Meant to be rendered inside a ToolInfoSection wrapper.
 *
 * @param {ToolInfoSectionListProps} props - The component props.
 *
 * @returns {JSX.Element} The rendered list section.
 */
export function ToolInfoSectionList({ id, title, items }: ToolInfoSectionListProps): JSX.Element {
  return (
    <>
      <ToolInfoSectionHeading id={id}>{title}</ToolInfoSectionHeading>
      <ul className="list-inside list-disc space-y-2 pl-4">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}
