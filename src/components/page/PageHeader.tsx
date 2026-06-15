import type { JSX, ReactNode } from 'react';

import PageBreadcrumb from '@/components/page/PageBreadcrumb';
import Container from '@/components/ui/container';
import { cn } from '@/utils/classnames';

/**
 * Props for the PageHeader component.
 *
 * @type {PageHeaderProps}
 * @property {string} title - The title of the page
 * @property {string} [description] - Optional description text for the page
 * @property {ReactNode | null} [icon] - Optional icon element to display next to the title
 * @property {string} [pageName] - The current page name for the breadcrumb navigation
 */
interface PageHeaderProps {
  title: string;
  description?: string;
  icon?: ReactNode | null;
  pageName?: string;
}

/**
 * PageHeader component for displaying page titles and descriptions.
 *
 * @param {PageHeaderProps} props - The props for the component.
 *
 * @returns {JSX.Element} The rendered component.
 */
export default function PageHeader({ title, description, icon = null, pageName }: PageHeaderProps): JSX.Element {
  const gradients = [
    // radial
    'radial-gradient(100% 225% at 100% 0%, #FAFF00 0%, #000000 100%)',
    // warm
    'linear-gradient(235deg, #FF7A00 0%, #000000 100%)',
    // cool
    'linear-gradient(20deg, #241E92 0%, #241E92 30%, #5432D3 calc(30% + 1px), #5432D3 35%, #7B6CF6 calc(35% + 1px), #7B6CF6 50%, #E5A5FF calc(50% + 1px), #E5A5FF 100%)',
    // green
    'linear-gradient(120deg, #110133 0%, #110133 40%, #00918E calc(40% + 1px), #00918E 60%, #4DD599 calc(60% + 1px), #4DD599 70%, #FFDC34 calc(70% + 1px), #FFDC34 100%)',
  ].join(', ');

  const blendModes = ['overlay', 'hard-light', 'overlay', 'normal'].join(', ');

  return (
    <div
      className={cn(
        // position
        'relative left-1/2 -translate-x-1/2',
        // layout
        'w-screen',
        // spacing
        '-mt-8 mb-8',
        // visual
        'overflow-hidden text-white'
      )}
      style={{ background: gradients, backgroundBlendMode: blendModes }}
    >
      <Container className="mb-4">
        <div
          className={cn(
            // layout
            'py-10'
          )}
        >
          {pageName && <PageBreadcrumb pageName={pageName} />}
          <h1 className={cn('inline-flex items-center space-x-2 text-2xl font-bold md:text-3xl')}>
            {icon && <span className="mr-2 inline-block">{icon}</span>}
            {title}
          </h1>
          {description && <p className={cn('mt-2')}>{description}</p>}
        </div>
      </Container>
    </div>
  );
}
