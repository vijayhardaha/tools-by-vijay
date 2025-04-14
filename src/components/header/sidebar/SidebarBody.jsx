"use client";

import { useRef, useEffect } from "react";

import Link from "next/link";

import PropTypes from "prop-types";
import { Scrollbars } from "react-custom-scrollbars-4";

import tools from "@/constants/tools";
import categories from "@/constants/tools-categories";
import { groupToolsByCategory } from "@/utils/categoryUtils";

/**
 * NavLink component for consistent link styling in the sidebar using Shadcn classes
 * @param {Object} props - Component props
 * @param {string} props.href - Link destination
 * @param {ReactNode} props.children - Link content
 * @param {string} [props.className] - Additional CSS classes
 * @returns {JSX.Element} Styled navigation link
 */
const NavLink = ({ href, children, className = "" }) => (
  <Link
    href={href}
    className={`text-muted-foreground hover:text-primary transition-colors hover:underline ${className}`}
  >
    {children}
  </Link>
);

NavLink.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

/**
 * CategorySection component to display a group of tool links
 * @param {Object} props - Component props
 * @param {string} props.title - Category title
 * @param {Array} props.tools - Tools in this category
 * @returns {JSX.Element} Category section with tool links
 */
const CategorySection = ({ title, tools }) => (
  <div className="mb-6">
    <h3 className="text-foreground mb-3 text-sm font-bold uppercase">
      {title}
    </h3>
    <ul className="space-y-3">
      {tools.map((tool) => (
        <li key={tool.slug}>
          <NavLink href={`/tools/${tool.slug}`}>{tool.name}</NavLink>
        </li>
      ))}
    </ul>
  </div>
);

CategorySection.propTypes = {
  title: PropTypes.string.isRequired,
  tools: PropTypes.arrayOf(
    PropTypes.shape({
      slug: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};

/**
 * SidebarBody component containing navigation links and tool categories
 * @returns {JSX.Element} The sidebar body content
 */
const SidebarBody = () => {
  // Group tools by category
  const categorizedTools = groupToolsByCategory(tools);
  const scrollbarsRef = useRef(null);

  useEffect(() => {
    // Initialize scrollbar or perform additional setup if needed
    if (scrollbarsRef.current) {
      // Example: scroll to top on component mount
      scrollbarsRef.current.scrollToTop();
    }
  }, []);

  return (
    <Scrollbars
      ref={scrollbarsRef}
      autoHide
      autoHideTimeout={500}
      autoHideDuration={100}
      universal={true}
      className="h-full w-full"
    >
      <div className="px-4">
        <nav className="text-muted-foreground text-sm">
          {categories.map((category) => {
            const categoryTools = categorizedTools[category.slug] || [];
            if (categoryTools.length === 0) return null;

            return (
              <CategorySection
                key={category.slug}
                title={category.label}
                tools={categoryTools}
              />
            );
          })}

          {/* Handle any uncategorized tools */}
          {categorizedTools["uncategorized"] &&
            categorizedTools["uncategorized"].length > 0 && (
              <CategorySection
                title="Other Tools"
                tools={categorizedTools["uncategorized"]}
              />
            )}

          <div className="border-border border-t pt-4">
            <ul className="space-y-3">
              <li>
                <NavLink href="/about">About</NavLink>
              </li>
              <li>
                <NavLink href="/contact">Contact</NavLink>
              </li>
              <li>
                <NavLink href="/text-story-maker">Text Story Maker</NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </Scrollbars>
  );
};

export default SidebarBody;
