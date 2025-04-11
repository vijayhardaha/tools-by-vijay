/**
 * Generates an SEO-friendly title by appending a fixed suffix to the given title.
 *
 * @param {string} title - The main title to be included in the SEO title.
 * @returns {string} The SEO-friendly title in the format: "{title} - Tools by Vijay".
 */
export const generateSeoTitle = (title) => {
  return `${title} - Tools by Vijay Hardaha`;
};

/**
 * Generates a complete metadata object for SEO, Open Graph, and Twitter cards.
 *
 * @param {Object} params - The parameters object
 * @param {string} [params.title=""] - The SEO title to be used.
 * @param {string} [params.description=""] - The SEO description to be used.
 * @param {string} [params.slug=""] - The slug for generating canonical and social media URLs.
 * @returns {Object} A metadata object with title, description, canonical URL, and social media metadata.
 */
export const generateMetadata = ({
  title = "",
  description = "",
  slug = "",
}) => {
  return {
    title: generateSeoTitle(title),
    description: description,
    alternates: {
      canonical: `/${slug}`,
    },
    openGraph: {
      title: generateSeoTitle(title),
      description: description,
      url: `/${slug}`,
      type: "website",
    },
    twitter: {
      title: generateSeoTitle(title),
      description: description,
      card: "summary_large_image",
    },
  };
};
