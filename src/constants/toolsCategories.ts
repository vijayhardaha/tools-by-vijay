import { Category } from "@/types";

/**
 * Array of category objects, each containing information about a tool category.
 */
const categories: Category[] = [
  {
    label: "Text Transformation",
    slug: "text-transformation",
    description: "Tools for manipulating and transforming text content.",
    seoTitle: "Text Transformation Tools",
    seoDescription:
      "Transform text with our simple online tools. Convert, modify, and organize your text content efficiently.",
  },
  {
    label: "Security",
    slug: "security",
    description: "Tools for password management and security enhancement.",
    seoTitle: "Security Tools",
    seoDescription:
      "Enhance your online security with our free password tools. Generate strong passwords and test your existing ones.",
  },
  {
    label: "Code Optimization",
    slug: "code-optimization",
    description: "Tools for minifying and optimizing website code.",
    seoTitle: "Code Optimization Tools",
    seoDescription:
      "Optimize your website code with our free minification tools. Enhance loading speed and efficiency.",
  },
  {
    label: "Web Utilities",
    slug: "web-utilities",
    description: "Useful utilities for everyday web tasks.",
    seoTitle: "Web Utilities Tools",
    seoDescription:
      "Practical web utilities for daily tasks. Simplify your workflow with our easy-to-use online tools.",
  },
  {
    label: "Data Conversion",
    slug: "data-conversion",
    description: "Tools for converting data between different formats.",
    seoTitle: "Data Conversion Tools",
    seoDescription:
      "Convert data between different formats with our simple online converters. Transform text to arrays and more.",
  },
  {
    label: "Data Formatting",
    slug: "data-formatting",
    description: "Tools for formatting and organizing data.",
    seoTitle: "Data Formatting Tools",
    seoDescription:
      "Format and organize your data with our free online tools. Sort JSON and structure your information efficiently.",
  },
];

export default categories;
