import { baseMetadata, SEO } from "@/constants/seo";

export type MetadataParams = {
  title?: string;
  description?: string;
  slug?: string;
};

export interface Metadata {
  title: string;
  description: string;
  alternates: {
    canonical: string;
  };
  openGraph: {
    title: string;
    description: string;
    url: string;
  };
  twitter: {
    title: string;
    description: string;
  };
}

/**
 * Retrieves the base URL based on the environment variables.
 *
 * @returns {string} The base URL.
 */
export const getBaseUrl = (): string => {
  const url =
    process.env.VERCEL_PROJECT_PRODUCTION_URL ||
    process.env.VERCEL_BRANCH_URL ||
    process.env.VERCEL_URL ||
    `http://localhost:${process.env.PORT || 3000}`;

  return url.startsWith("http://") || url.startsWith("https://")
    ? url.replace(/\/$/, "")
    : `https://${url.replace(/\/$/, "")}`;
};

/**
 * Computes the canonical URL based on the environment variables.
 *
 * @param {string} slug - The slug for generating the canonical URL.
 * @returns {string} The canonical URL.
 */
export const getCanonicalUrl = (slug: string = ""): string => {
  return `${getBaseUrl()}/${slug.replace(/^\//, "")}`;
};

/**
 * Generates an SEO-friendly title by appending a fixed suffix to the given title.
 *
 * @param {string} title - The main title to be included in the SEO title.
 * @returns {string} The SEO-friendly title in the format: "{title} - Tools by Vijay".
 */
export const generateSeoTitle = (title: string = ""): string => {
  if (!title) {
    return SEO.title;
  }

  return [title, SEO.separator, SEO.titlePostfix].join(" ");
};

/**
 * Generates a complete metadata object for SEO, Open Graph, and Twitter cards.
 *
 * @param {MetadataParams} params - The parameters object
 * @returns {Metadata} A metadata object with title, description, canonical URL, and social media metadata.
 */
export const generateMetadata = ({
  title = "",
  description = "",
  slug = "",
}: MetadataParams): Metadata => {
  return {
    ...baseMetadata,
    title: generateSeoTitle(title),
    description: description,
    alternates: {
      canonical: getCanonicalUrl(slug),
    },
    openGraph: {
      ...baseMetadata.openGraph,
      title: generateSeoTitle(title),
      description: description,
      url: getCanonicalUrl(slug),
    },
    twitter: {
      ...baseMetadata.twitter,
      title: generateSeoTitle(title),
      description: description,
    },
  };
};
