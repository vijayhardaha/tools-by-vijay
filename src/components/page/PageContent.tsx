interface PageContentProps {
  children: React.ReactNode;
}

/**
 * PageContent component
 *
 * A container component that wraps page content with consistent styling.
 * Provides a white background with rounded corners and shadow.
 *
 * @param {PageContentProps} props - Component props
 * @returns {JSX.Element} The rendered component
 */
const PageContent: React.FC<PageContentProps> = ({
  children,
}: PageContentProps): React.JSX.Element => {
  return <div className="relative">{children}</div>;
};

export default PageContent;
