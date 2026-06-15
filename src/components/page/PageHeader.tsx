import type { JSX, ReactNode } from 'react';

import PageBreadcrumb from '@/components/page/PageBreadcrumb';
import Container from '@/components/ui/container';
import NoiseOverlay from '@/components/ui/noise-overlay';

/**
 * Props for the PageHeader component.
 *
 * @type {PageHeaderProps}
 * @property {string} title - The title of the page
 * @property {string} [description] - Optional description text for the page
 * @property {ReactNode | null} [icon] - Optional icon element to display next to the title
 * @property {string} [pageName] - The current page name for the breadcrumb navigation
 */
type PageHeaderProps = { title: string; description?: string; icon?: ReactNode | null; pageName?: string };

/**
 * PageHeader component for displaying page titles and descriptions.
 *
 * @param {PageHeaderProps} props - The props for the component.
 *
 * @returns {JSX.Element} The rendered component.
 */
export default function PageHeader({ title, description, icon = null, pageName }: PageHeaderProps): JSX.Element {
  return (
    <div
      className="relative left-1/2 -mt-8 mb-8 w-screen -translate-x-1/2 overflow-hidden text-white"
      style={{
        background:
          'radial-gradient(100% 225% at 100% 0%, #FAFF00 0%, #000000 100%), linear-gradient(235deg, #FF7A00 0%, #000000 100%), linear-gradient(20deg, #241E92 0%, #241E92 30%, #5432D3 calc(30% + 1px), #5432D3 35%, #7B6CF6 calc(35% + 1px), #7B6CF6 50%, #E5A5FF calc(50% + 1px), #E5A5FF 100%), linear-gradient(120deg, #110133 0%, #110133 40%, #00918E calc(40% + 1px), #00918E 60%, #4DD599 calc(60% + 1px), #4DD599 70%, #FFDC34 calc(70% + 1px), #FFDC34 100%)',
        backgroundBlendMode: 'overlay, hard-light, overlay, normal',
      }}
    >
      {/* Noise texture overlay on top of the gradient background */}
      <NoiseOverlay opacity={0.06} />

      <Container className="mb-4">
        <div className="py-10">
          {pageName && <PageBreadcrumb pageName={pageName} />}
          <h1 className="inline-flex items-center space-x-2 text-2xl font-bold md:text-3xl">
            {icon && <span className="mr-2 inline-block">{icon}</span>}
            {title}
          </h1>
          {description && <p className="mt-2">{description}</p>}
        </div>
      </Container>
    </div>
  );
}
