/**
 * Type declarations for CSS module imports.
 * Next.js handles CSS imports natively at build time; these declarations
 * are for TypeScript's verbatimModuleSyntax check.
 */
declare module '*.css' {
  const content: Record<string, string>;
  export default content;
}

declare module 'keen-slider/keen-slider.min.css' {
  const content: Record<string, string>;
  export default content;
}

declare module 'react-tooltip/dist/react-tooltip.css' {
  const content: Record<string, string>;
  export default content;
}
