import type { JSX } from 'react';

import { FooterBottom } from '@/components/footer/FooterBottom';
import { FooterTop } from '@/components/footer/FooterTop';
import { Container } from '@/components/ui/container';

/**
 * Footer component that provides a consistent footer structure
 * with top section for navigation and bottom section for copyright.
 *
 * @returns {JSX.Element} The rendered footer component.
 */
export function Footer(): JSX.Element {
  return (
    <footer className="bg-amber-200 bg-[radial-gradient(var(--color-amber-500)_0.75px,var(--color-amber-200)_0.75px)] bg-size-[10px_10px] pt-10 pb-4">
      <Container>
        <FooterTop />
        <FooterBottom />
      </Container>
    </footer>
  );
}
