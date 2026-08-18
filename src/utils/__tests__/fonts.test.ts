import { describe, expect, it, vi } from 'vitest';

// next/font/google is not runnable outside the Next.js build pipeline
// (it tries to read font metadata and fetch CSS at build time), so mock the
// two font constructors to return the variable class names they would emit.
vi.mock('next/font/google', () => ({
  Funnel_Display: (opts: Record<string, unknown>) => {
    void opts;
    return { variable: '--font-app-sans', className: 'funnel-display' };
  },
  Cascadia_Mono: (opts: Record<string, unknown>) => {
    void opts;
    return { variable: '--font-app-mono', className: 'cascadia-mono' };
  },
}));

import { fontClassNames } from '@/utils/fonts';

describe('fontClassNames', () => {
  it('concatenates both font variable class names', () => {
    expect(fontClassNames).toBe('--font-app-sans --font-app-mono');
  });
});
