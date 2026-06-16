/**
 * ======================================================================
 * Next Configuration
 * ======================================================================
 * Purpose: Centralized runtime and build-time configuration for Next.js.
 * Docs:    https://nextjs.org/docs/app/api-reference/config/next-config-js
 * ======================================================================
 */

import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // --- Core runtime settings ---
  // Enable React strict mode to surface unsafe lifecycles and other issues
  // during development
  reactStrictMode: true,

  // -----------------------------
  // BUILD OPTIMIZATIONS
  // -----------------------------
  // Example: Power-user features (uncomment as needed)
  /* compiler: {
		// Removes console logs in production (except errors)
		removeConsole: process.env.NODE_ENV === "production",
	},
	*/

  // --- Security & headers ---
  // Remove `X-Powered-By` header for a slightly improved security posture
  poweredByHeader: false,

  // --- Images ---
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'api.qrserver.com', pathname: '/**' },
      { protocol: 'https', hostname: 'barcode.tec-it.com', pathname: '/**' },
    ],
  },

  // --- Redirects ---
  async redirects() {
    return [
      // Tool pages moved from /tools/:slug to /:slug
      { source: '/tools/slugify', destination: '/slugify', permanent: true },
      { source: '/tools/bulk-slugify', destination: '/bulk-slugify', permanent: true },
      { source: '/tools/password-generator', destination: '/password-generator', permanent: true },
      { source: '/tools/password-strength-checker', destination: '/password-strength-checker', permanent: true },
      { source: '/tools/html-minifier', destination: '/html-minifier', permanent: true },
      { source: '/tools/css-minifier', destination: '/css-minifier', permanent: true },
      { source: '/tools/js-minifier', destination: '/js-minifier', permanent: true },
      { source: '/tools/url-shortener', destination: '/url-shortener', permanent: true },
      { source: '/tools/dropdown-to-array', destination: '/dropdown-to-array', permanent: true },
      { source: '/tools/text-to-array', destination: '/text-to-array', permanent: true },
      { source: '/tools/json-sorter', destination: '/json-sorter', permanent: true },
      { source: '/tools/duplicate-line-removal', destination: '/duplicate-line-removal', permanent: true },
      { source: '/tools/alphabetical-line-sorter', destination: '/alphabetical-line-sorter', permanent: true },
      { source: '/tools/css-inliner', destination: '/css-inliner', permanent: true },
      { source: '/tools/replace-quotes', destination: '/replace-quotes', permanent: true },
      { source: '/tools/shuffle-text-lines', destination: '/shuffle-text-lines', permanent: true },
      { source: '/tools/character-count', destination: '/character-count', permanent: true },
      { source: '/tools/url-decoder-encoder', destination: '/url-decoder-encoder', permanent: true },
      { source: '/tools/base64-encode-decode', destination: '/base64-encode-decode', permanent: true },
      { source: '/tools/country-name-generator', destination: '/country-name-generator', permanent: true },
      { source: '/tools/random-username-generator', destination: '/random-username-generator', permanent: true },
      { source: '/tools/text-case-changer', destination: '/text-case-changer', permanent: true },
      { source: '/tools/text-to-php-variables', destination: '/text-to-php-variables', permanent: true },
      { source: '/tools/px-to-rem-converter', destination: '/px-to-rem-converter', permanent: true },
      { source: '/tools/unminify', destination: '/unminify', permanent: true },
      { source: '/tools/barcode-generator', destination: '/barcode-generator', permanent: true },
      { source: '/tools/qrcode-generator', destination: '/qrcode-generator', permanent: true },
    ];
  },

  // --- Output ---
  output: 'standalone',
};

export default nextConfig;
