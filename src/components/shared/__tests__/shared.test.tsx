import { render } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';

import { OSDetectionScript } from '@/components/shared/OSDetectionScript';
import { VercelAnalytics } from '@/components/shared/VercelAnalytics';

describe('VercelAnalytics', () => {
  it('renders without crashing', () => {
    render(<VercelAnalytics />);
    expect(document.body).toBeInTheDocument();
  });
});

describe('OSDetectionScript', () => {
  afterEach(() => {
    document.documentElement.classList.remove('os-macos');
    vi.unstubAllGlobals();
  });

  it('renders null', () => {
    const { container } = render(<OSDetectionScript />);
    expect(container.firstChild).toBeNull();
  });

  it('adds the os-macos class on macOS user agents', () => {
    vi.stubGlobal('navigator', { userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)', platform: 'MacIntel' });

    render(<OSDetectionScript />);
    expect(document.documentElement.classList.contains('os-macos')).toBe(true);
  });

  it('does not add the os-macos class on non-macOS platforms', () => {
    vi.stubGlobal('navigator', { userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)', platform: 'Win32' });

    render(<OSDetectionScript />);
    expect(document.documentElement.classList.contains('os-macos')).toBe(false);
  });
});
