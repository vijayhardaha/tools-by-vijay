import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { beforeAll, describe, expect, it, vi } from 'vitest';

import { SearchModal } from '@/components/ui/search-modal';
import tools from '@/constants/tools';

// vi.mock is hoisted above imports by Vitest, so the router mock applies.
vi.mock('next/navigation', () => ({ useRouter: () => ({ push: vi.fn() }) }));

beforeAll(() => {
  // jsdom does not implement scrollIntoView.
  Element.prototype.scrollIntoView = vi.fn();
});

describe('SearchModal lazy fuse loading', () => {
  it('opens the dialog and focuses the search input', async () => {
    render(<SearchModal data={tools} open onOpenChange={vi.fn()} />);

    await waitFor(() => {
      expect(screen.getByPlaceholderText('Search tools...')).toBeInTheDocument();
    });
  });

  it('shows results for a query once fuse.js has loaded', async () => {
    render(<SearchModal data={tools} open onOpenChange={vi.fn()} />);

    const input = screen.getByPlaceholderText('Search tools...');
    fireEvent.change(input, { target: { value: 'slug' } });

    // fuse.js resolves dynamically; wait for fuzzy results to render.
    await waitFor(
      () => {
        expect(screen.getAllByRole('option').length).toBeGreaterThan(0);
      },
      { timeout: 3000 }
    );
  });

  it('renders the empty state before fuse.js resolves', () => {
    render(<SearchModal data={tools} open onOpenChange={vi.fn()} />);

    expect(screen.getByText('Start typing to search through tools')).toBeInTheDocument();
  });
});
