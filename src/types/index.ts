export interface Tool {
  name: string;
  slug: string;
  shortDescription: string;
  pageDescription: string;
  seoTitle: string;
  seoDescription: string;
  category: string;
}

export interface Category {
  label: string;
  slug: string;
  description: string;
  seoTitle: string;
  seoDescription: string;
}
