import { getBaseUrl } from "@/utils/seoUtils";

/**
 * Interface for SEO-related constants.
 */
export interface ISEO {
  title: string;
  description: string;
  titlePostfix: string;
  separator: string;
}

/**
 * Interface for base metadata used in the application.
 */
export interface IBaseMetadata {
  title: string;
  description: string;
  metadataBase: URL;
  manifest: string;
  appleTouchIcon: string;
  alternates: {
    canonical: string;
  };
  keywords: string[];
  verification: {
    google: string;
  };
  author: string;
  robots: string;
  icons: {
    icon: string;
    apple: string;
  };
  openGraph: {
    title: string;
    description: string;
    images: {
      url: string;
      width: number;
      height: number;
    }[];
    type: string;
    siteName: string;
    locale: string;
    url: string;
  };
  twitter: {
    card: string;
    title: string;
    description: string;
    images: string[];
    creator: string;
  };
}

/**
 * An object containing SEO-related constants for the application.
 */
export const SEO: ISEO = {
  title: "Developer Tools to Boost Productivity by Vijay Hardaha",
  description:
    "Online tools to help developers and users work faster and smarter. Boost your productivity with free, browser-based utilities.",
  titlePostfix: "Tools by Vijay Hardaha",
  separator: "-",
};

/**
 * Base metadata for the application, including SEO and Open Graph properties.
 */
export const baseMetadata: IBaseMetadata = {
  title: SEO.title,
  description: SEO.description,
  metadataBase: new URL(getBaseUrl()),
  manifest: "/site.webmanifest",
  appleTouchIcon: "/apple-touch-icon.png",
  alternates: {
    canonical: getBaseUrl(),
  },
  keywords: ["tools", "utilities", "web tools", "online tools", "developer tools"],
  author: "Vijay",
  robots: "index, follow",
  verification: {
    google: "4CyrCxZi9TWgvS-GzB1QUhgEl0bKoIzT36368e_vlx0",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: SEO.title,
    description: SEO.description,
    images: [
      {
        url: "/images/thumbnail.png",
        width: 512,
        height: 512,
      },
    ],
    type: "website",
    siteName: "Tools by Vijay Hardaha",
    locale: "en_US",
    url: "https://toolsbyvijay.vercel.app",
  },
  twitter: {
    card: "summary_large_image",
    title: SEO.title,
    description: SEO.description,
    images: ["/images/thumbnail.png"],
    creator: "@vijayhardaha",
  },
};
