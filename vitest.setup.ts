import React from 'react';

import '@testing-library/jest-dom/vitest';
import { cleanup } from '@testing-library/react';
import { afterEach, vi } from 'vitest';

// Auto-cleanup rendered DOM between tests
afterEach(() => {
  cleanup();
});

// Radix UI (e.g. Tooltip) relies on ResizeObserver for measuring content.
// jsdom does not implement it, so provide a no-op polyfill.
class ResizeObserverMock {
  observe(): void {}
  unobserve(): void {}
  disconnect(): void {}
}

if (typeof globalThis.ResizeObserver === 'undefined') {
  globalThis.ResizeObserver = ResizeObserverMock as unknown as typeof ResizeObserver;
}

// Mock the global console to reduce test noise.
// Error paths can still assert on these via vi.mocked(console.error).
global.console = { ...console, log: vi.fn(), error: vi.fn(), warn: vi.fn(), info: vi.fn() };

// ----------------------------------------------------------------------------
// Testing Library render wrapper
// ----------------------------------------------------------------------------
// The app wraps the whole tree in a TooltipProvider at the root layout. Tool
// components using HelpTip/Tooltip require that ancestor, so wrap every render
// in a provider to mirror the production tree.
vi.mock('@testing-library/react', async (importOriginal) => {
  const actual = await importOriginal<typeof import('@testing-library/react')>();
  const React = (await import('react')).default;
  const { TooltipProvider } = await import('@/components/ui/tooltip');

  return {
    ...actual,
    render: (ui: React.ReactElement, options?: Parameters<typeof actual.render>[1]) =>
      actual.render(React.createElement(TooltipProvider, null, ui), options),
  };
});

// ----------------------------------------------------------------------------
// Next.js integration mocks
// ----------------------------------------------------------------------------
// next/navigation's useRouter requires the App Router context which is not
// available in unit tests, so provide a no-op router.
vi.mock('next/navigation', () => ({
  useRouter: () => ({
    push: vi.fn(),
    replace: vi.fn(),
    prefetch: vi.fn(),
    back: vi.fn(),
    forward: vi.fn(),
    refresh: vi.fn(),
  }),
  usePathname: () => '/',
  useSearchParams: () => new URLSearchParams(),
}));

// next/image requires the image optimizer / loader config; render a plain img
// in tests so Logo and other image users render without side effects.
vi.mock('next/image', () => ({
  __esModule: true,
  default: (props: Record<string, unknown>) => {
    const { src, alt, priority, sizes, fill, quality, ...rest } = props as {
      src: string;
      alt: string;
      priority?: boolean;
      sizes?: string;
      fill?: boolean;
      quality?: number;
      [key: string]: unknown;
    };
    void priority;
    void sizes;
    void fill;
    void quality;
    return React.createElement('img', { src, alt, ...rest });
  },
}));
