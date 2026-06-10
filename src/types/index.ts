import React from 'react';

/**
 * Interface representing a tool.
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
 */
export interface Category {
  label: string;
  slug: string;
  description: string;
  seoTitle: string;
  seoDescription: string;
}

/**
 * Interface representing a tool icon.
 */
export interface SocialMediaLink {
  name: string;
  key: string;
  url: string;
  color: string;
  icon: React.ComponentType;
}
