import type { JSX } from 'react';

/**
 * Props for the CategoryAbout component.
 *
 * @type {CategoryAboutProps}
 * @property {string} slug - The category slug to render about text for
 */
interface CategoryAboutProps {
  slug: string;
}

/**
 * About content for the Writing & Editing category.
 *
 * @returns {JSX.Element} The rendered about text.
 */
function WritingEditingAbout(): JSX.Element {
  return (
    <p>
      Writing and editing tools are essential for anyone who works with text — whether you are a blogger, content
      creator, SEO specialist, or developer. This collection of utilities helps you clean up, format, and optimize your
      text for various platforms and use cases.
    </p>
  );
}

/**
 * About content for the Developer Suite category.
 *
 * @returns {JSX.Element} The rendered about text.
 */
function DeveloperSuiteAbout(): JSX.Element {
  return (
    <p>
      The Developer Suite provides a comprehensive set of tools for optimizing and transforming code. From minifying
      HTML, CSS, and JavaScript to converting data formats and sorting JSON, these utilities help streamline your
      development workflow and improve application performance.
    </p>
  );
}

/**
 * About content for the Web & URL Tools category.
 *
 * @returns {JSX.Element} The rendered about text.
 */
function WebUrlToolsAbout(): JSX.Element {
  return (
    <p>
      Web and URL tools simplify how you manage links, encode data, and handle web addresses. Whether you need to
      shorten long URLs for social media, encode special characters for safe transmission, or convert data to Base64
      format, these utilities make web management effortless.
    </p>
  );
}

/**
 * About content for the Security & Privacy category.
 *
 * @returns {JSX.Element} The rendered about text.
 */
function SecurityPrivacyAbout(): JSX.Element {
  return (
    <p>
      Security and privacy tools help you protect your digital identity and accounts. Generate strong, high-entropy
      passwords that resist brute-force attacks, and test the strength of your existing passwords to identify
      vulnerabilities before they are exploited.
    </p>
  );
}

/**
 * About content for the Creative Generators category.
 *
 * @returns {JSX.Element} The rendered about text.
 */
function CreativeGeneratorsAbout(): JSX.Element {
  return (
    <p>
      Creative generators spark inspiration and automate asset creation. Generate fictional country names for
      world-building, create unique usernames for online profiles, and produce professional QR codes and barcodes for
      marketing, inventory, and business applications.
    </p>
  );
}

/**
 * Mapping of category slugs to their about text components.
 */
const aboutComponents: Record<string, () => JSX.Element> = {
  'writing-editing': WritingEditingAbout,
  'developer-suite': DeveloperSuiteAbout,
  'web-url-tools': WebUrlToolsAbout,
  'security-privacy': SecurityPrivacyAbout,
  'creative-generators': CreativeGeneratorsAbout,
};

/**
 * CategoryAbout component renders the "About" text section for a given category.
 *
 * @param {CategoryAboutProps} props - Component props.
 *
 * @returns {JSX.Element | null} The rendered about section, or null if no content exists for the category.
 */
export function CategoryAbout({ slug }: CategoryAboutProps): JSX.Element | null {
  const AboutComponent = aboutComponents[slug];

  if (!AboutComponent) return null;

  return <AboutComponent />;
}
