import type { JSX } from 'react';

import Image from 'next/image';

import { cn } from '@/utils/classnames';

/**
 * Props for the NoiseOverlay component.
 *
 * @type {NoiseOverlayProps}
 * @property {string} [className] - Additional CSS classes
 * @property {number} [opacity] - Opacity of the noise texture (0-1), defaults to 0.05
 */
type NoiseOverlayProps = { className?: string; opacity?: number };

/**
 * NoiseOverlay component — renders a static noise texture overlay
 * using the Aceternity noise.webp image with mix-blend-mode.
 *
 * Can be layered on top of any background for a subtle grainy texture effect.
 *
 * @param {NoiseOverlayProps} props - Component props
 *
 * @returns {JSX.Element} The noise overlay element
 */
export default function NoiseOverlay({ className, opacity = 0.05 }: NoiseOverlayProps): JSX.Element {
  return (
    <div
      aria-hidden="true"
      className={cn('pointer-events-none absolute inset-0 overflow-hidden', className)}
      style={{ '--noise-opacity': opacity } as React.CSSProperties}
    >
      <Image
        src="https://assets.aceternity.com/noise.webp"
        alt=""
        fill
        className="object-fill opacity-(--noise-opacity) mix-blend-overlay"
        sizes="100vw"
        unoptimized
      />
    </div>
  );
}
