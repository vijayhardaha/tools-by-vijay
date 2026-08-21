import { render, waitFor } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Sheet, SheetContent } from '@/components/ui/sheet';

describe('Sheet', () => {
  it('hides closed content from the accessibility tree and tab order', async () => {
    render(
      <Sheet open={false}>
        <SheetContent>
          <a href="/nowhere">Hidden link</a>
        </SheetContent>
      </Sheet>
    );

    // SheetPortal defers mounting by a tick.
    await waitFor(() => {
      expect(document.body.querySelector('[data-slot="sheet-content"]')).not.toBeNull();
    });

    const content = document.body.querySelector('[data-slot="sheet-content"]');
    // visibility:hidden (via "invisible") takes the panel out of the tab
    // order and the a11y tree while still allowing the exit animation.
    expect(content).toHaveClass('invisible');
  });

  it('keeps open content visible and interactive', async () => {
    render(
      <Sheet open>
        <SheetContent>
          <a href="/somewhere">Visible link</a>
        </SheetContent>
      </Sheet>
    );

    await waitFor(() => {
      expect(document.body.querySelector('[data-slot="sheet-content"]')).not.toBeNull();
    });

    const content = document.body.querySelector('[data-slot="sheet-content"]');
    expect(content).toHaveClass('visible');
    expect(content).not.toHaveClass('invisible');
    expect(content).not.toHaveClass('pointer-events-none');
  });
});
