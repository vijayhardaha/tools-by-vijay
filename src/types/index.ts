import type { ComponentType } from 'react';

/**
 * Interface representing a tool.
 *
 * @type {Tool}
 * @property {string} name - The display name of the tool
 * @property {string} slug - The unique URL slug for the tool
 * @property {string} description - A brief description of the tool's functionality
 * @property {string} seoTitle - The SEO-optimized title for the tool page
 * @property {string} seoDescription - The SEO-optimized description for the tool page
 * @property {string} category - The category slug the tool belongs to
 */
export interface Tool {
  name: string;
  slug: string;
  description: string;
  seoTitle: string;
  seoDescription: string;
  category: string;
}

/**
 * Interface representing a tool category.
 *
 * @type {Category}
 * @property {string} label - The display label of the category
 * @property {string} slug - The unique URL slug for the category
 * @property {string} description - A brief description of the category's purpose
 * @property {string} seoTitle - The SEO-optimized title for the category page
 * @property {string} seoDescription - The SEO-optimized description for the category page
 */
export interface Category {
  label: string;
  slug: string;
  description: string;
  seoTitle: string;
  seoDescription: string;
}

/**
 * Interface representing a social media link with metadata and icon.
 *
 * @type {SocialMediaLink}
 * @property {string} name - The display name of the social media profile
 * @property {string} key - The unique key identifier for the link
 * @property {string} url - The URL to the social media profile
 * @property {string} color - The hover color class for the social media button
 * @property {ComponentType} icon - The icon component for the social media platform
 */
export interface SocialMediaLink {
  name: string;
  key: string;
  url: string;
  color: string;
  icon: ComponentType;
}
